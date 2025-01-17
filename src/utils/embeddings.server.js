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
      project.techStack?.join(' ') || '',
      project.category || ''
    ].filter(Boolean).join(' ');
    
    // Generate and store embedding by route
    embeddings[project.route] = {
      embedding: await generateEmbedding(searchText),
      searchText
    };
  }
  
  // Then generate embeddings for all categories
  const categoryDescriptions = {
    'AI & Computer Vision': 'Artificial intelligence, machine learning, computer vision, neural networks, deep learning, image processing, object detection, facial recognition',
    '3D & Interactive': '3D modeling, visualization, interactive graphics, rendering, real-time, WebGL, Three.js, animation, user interaction',
    'Developer Tools': 'Development tools, programming, coding, debugging, analysis, IDE, compiler, productivity, automation',
    'Research & Analysis': 'Research, analysis, data mining, information extraction, knowledge discovery, visualization, insights'
  };

  for (const [category, description] of Object.entries(categoryDescriptions)) {
    embeddings[category] = {
      embedding: await generateEmbedding(description),
      searchText: description
    };
  }
  
  return embeddings;
};
