import * as tf from '@tensorflow/tfjs';
import { load } from '@tensorflow-models/universal-sentence-encoder';

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

const cosineSimilarity = (a, b) => {
  const dotProduct = tf.sum(tf.mul(a, b));
  const normA = tf.norm(a);
  const normB = tf.norm(b);
  const similarity = tf.div(dotProduct, tf.mul(normA, normB));
  const value = similarity.dataSync()[0];
  tf.dispose([dotProduct, normA, normB, similarity]);
  return value;
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
  const categories = Object.keys(CATEGORIES);

  let bestScore = -1;
  let bestCategory = 'Other Projects';

  for (const category of categories) {
    const categoryData = CATEGORIES[category];
    if (!categoryData || !categoryData.key) continue;

    const similarity = cosineSimilarity(projectEmbedding, categoryData.key);
    if (similarity > bestScore) {
      bestScore = similarity;
      bestCategory = category;
    }
  }

  // Only assign a category if the similarity score is above a threshold
  return bestScore > CATEGORIES[bestCategory].threshold ? bestCategory : 'Other Projects';
};

// Find best category for a project
const findBestCategoryForProject = async (project) => {
  if (!project) return 'Other Projects';

  const projectText = `${project.title} ${project.description} ${project.tags.join(' ')} ${project.topics.join(' ')}`;
  const projectEmbedding = await getEmbedding(projectText);

  return findBestCategory(projectEmbedding);
};

// Get projects for a category
export const getRelevantProjects = async (category, projects) => {
  if (!category || !projects) return [];

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

export const semanticSearch = async (query, projects) => {
  const queryEmbedding = await getEmbedding(query);

  // Create embeddings for project texts
  const projectTexts = projects.map(project => 
    `${project.title} ${project.description} ${project.tags.join(' ')} ${project.topics.join(' ')}`
  );
  
  const projectEmbeddings = await Promise.all(
    projectTexts.map(text => getEmbedding(text))
  );

  // Calculate similarities
  const similarities = projectEmbeddings.map(embedding => 
    cosineSimilarity(tf.tensor1d(queryEmbedding), tf.tensor1d(embedding))
  );

  // Sort projects by similarity
  const projectsWithScores = projects.map((project, i) => ({
    ...project,
    score: similarities[i]
  }));

  return projectsWithScores
    .sort((a, b) => b.score - a.score)
    .filter(project => project.score > 0.3); // Only return reasonably relevant results
};
