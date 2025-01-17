import { projectEmbeddings } from './precomputedEmbeddings';

// Calculate cosine similarity between two vectors
export const cosineSimilarity = (embedding1, embedding2) => {
  if (!embedding1 || !embedding2) return 0;
  
  const dotProduct = embedding1.reduce((sum, a, i) => sum + a * embedding2[i], 0);
  const norm1 = Math.sqrt(embedding1.reduce((sum, a) => sum + a * a, 0));
  const norm2 = Math.sqrt(embedding2.reduce((sum, a) => sum + a * a, 0));
  return dotProduct / (norm1 * norm2);
};

// Search projects using pre-generated embeddings
export const searchProjectsByEmbedding = async (query, projectsWithEmbeddings) => {
  if (!projectsWithEmbeddings[query]) {
    console.error(`No embedding found for query: ${query}`);
    return [];
  }

  return Object.keys(projectsWithEmbeddings)
    .map(route => {
      if (!projectsWithEmbeddings[route]) return null;
      return {
        route,
        ...projectsWithEmbeddings[route],
        similarity: cosineSimilarity(
          projectsWithEmbeddings[query].embedding,
          projectsWithEmbeddings[route].embedding
        )
      };
    })
    .filter(Boolean)
    .filter(project => project.similarity > 0.3)
    .sort((a, b) => b.similarity - a.similarity);
};
