import * as tf from '@tensorflow/tfjs';
import { load } from '@tensorflow-models/universal-sentence-encoder';
import { projectEmbeddings } from './precomputedEmbeddings';
import { generateEmbedding } from './embeddings.server.js';

let model = null;
let modelLoading = false;
let modelLoadPromise = null;

const loadModel = async () => {
  if (model) return model;
  if (modelLoadPromise) return modelLoadPromise;

  modelLoading = true;
  modelLoadPromise = load().then(loadedModel => {
    model = loadedModel;
    modelLoading = false;
    return model;
  });

  return modelLoadPromise;
};

const getEmbedding = async (text) => {
  const model = await loadModel();
  const embeddings = await model.embed([text]);
  const embedding = await embeddings.array();
  embeddings.dispose();
  return embedding[0];
};

// Calculate cosine similarity between two vectors
const cosineSimilarity = (a, b) => {
  if (!a || !b || a.length !== b.length) return 0;
  
  const dotProduct = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
  
  return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
};

// Category definitions with their embeddings key names
const CATEGORIES = {
  'AI & Computer Vision': {
    key: 'AI & Computer Vision',
    threshold: 0.3
  },
  '3D & Interactive': {
    key: '3D & Interactive',
    threshold: 0.3
  },
  'Developer Tools': {
    key: 'Developer Tools',
    threshold: 0.3
  },
  'Research & Analysis': {
    key: 'Research & Analysis',
    threshold: 0.3
  }
};

// Find the best matching category for a project based on its embedding
const findBestCategory = (projectEmbedding) => {
  if (!projectEmbedding) return 'Other Projects';
  
  const categories = Object.keys(CATEGORIES);
  let bestScore = -1;
  let bestCategory = 'Other Projects';

  for (const category of categories) {
    const categoryData = projectEmbeddings[CATEGORIES[category].key];
    if (!categoryData?.embedding) continue;

    const similarity = cosineSimilarity(projectEmbedding, categoryData.embedding);
    if (similarity > bestScore) {
      bestScore = similarity;
      bestCategory = category;
    }
  }

  const threshold = CATEGORIES[bestCategory]?.threshold ?? 0.3;
  return bestScore > threshold ? bestCategory : 'Other Projects';
};

// Find best category for a project
const findBestCategoryForProject = async (project) => {
  if (!project?.route || !projectEmbeddings[project.route]?.embedding) {
    return 'Other Projects';
  }
  return findBestCategory(projectEmbeddings[project.route].embedding);
};

// Get projects for a category
export const getRelevantProjects = async (category, projects) => {
  if (!category || !projects?.length) return [];

  // First, find the best category for each project
  const projectCategories = await Promise.all(
    projects.map(async project => ({
      project,
      bestCategory: await findBestCategoryForProject(project)
    }))
  );

  // For Other Projects, return all projects that didn't fit elsewhere
  if (category === 'Other Projects') {
    return projectCategories
      .filter(({ bestCategory }) => bestCategory === 'Other Projects')
      .map(({ project }) => project);
  }

  // For specific categories, only return projects where this is their best category
  return projectCategories
    .filter(({ bestCategory }) => bestCategory === category)
    .map(({ project }) => project);
};

// Search for projects based on a query embedding
export const semanticSearch = async (query, projects, limit = 5) => {
  if (!query?.trim() || !Array.isArray(projects) || !projects.length) {
    console.error('Invalid input for semanticSearch');
    return [];
  }

  try {
    // Generate embedding for the search query
    const queryEmbedding = await generateEmbedding(query);
    if (!queryEmbedding) {
      console.error('Failed to generate query embedding');
      return [];
    }

    // Compare query embedding with all project embeddings
    const results = projects
      .map(project => {
        if (!project?.route) return null;
        const projectData = projectEmbeddings[project.route];
        if (!projectData?.embedding) return null;

        const similarity = cosineSimilarity(queryEmbedding, projectData.embedding);
        return { project, similarity };
      })
      .filter(Boolean)
      .filter(result => result.similarity > 0.2)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, limit);

    return results.map(({ project, similarity }) => ({
      ...project,
      relevanceScore: similarity
    }));
  } catch (error) {
    console.error('Error during semantic search:', error);
    return [];
  }
};
