import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

// Initialize the model
let model = null;
let modelLoading = null;

const getModel = async () => {
  if (model) return model;
  if (modelLoading) return modelLoading;

  try {
    modelLoading = use.load();
    model = await modelLoading;
    modelLoading = null;
    return model;
  } catch (error) {
    console.error('Error loading USE model:', error);
    modelLoading = null;
    throw error;
  }
};

// Generate embeddings for a text
export const generateEmbedding = async (text) => {
  try {
    const model = await getModel();
    const embeddings = await model.embed([text]);
    const array = await embeddings.array();
    return array[0]; // Return the first (and only) embedding
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
};

// Pre-generate embeddings for all projects
export const generateProjectEmbeddings = async (projects) => {
  const embeddings = {};
  
  // First generate embeddings for all projects
  for (const project of projects) {
    // Create a rich text representation of the project
    const searchText = [
      project.title,
      project.description,
      project.tags?.join(' '),
      project.techStack?.join(' '),
      project.features?.join(' '),
      typeof project.implementation === 'string' 
        ? project.implementation 
        : project.implementation?.architecture?.join(' '),
      project.topics?.join(' '),
      project.category
    ].filter(Boolean).join(' ');

    try {
      const embedding = await generateEmbedding(searchText);
      embeddings[project.route] = {
        title: project.title,
        embedding: embedding
      };
    } catch (error) {
      console.error(`Error generating embedding for project ${project.title}:`, error);
    }
  }

  // Also generate embeddings for categories
  const categories = {
    'AI & Computer Vision': 'artificial intelligence machine learning computer vision neural networks deep learning',
    '3D & Interactive': '3d modeling visualization interactive graphics rendering real-time',
    'Developer Tools': 'development tools programming coding debugging analysis IDE compiler',
    'Research & Analysis': 'research analysis data mining information extraction knowledge discovery'
  };

  for (const [category, text] of Object.entries(categories)) {
    try {
      const embedding = await generateEmbedding(text);
      embeddings[category] = {
        title: category,
        embedding: embedding
      };
    } catch (error) {
      console.error(`Error generating embedding for category ${category}:`, error);
    }
  }

  return embeddings;
};
