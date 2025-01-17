import { generateProjectEmbeddings } from '../src/utils/embeddings.server.js';
import { projects } from '../src/data/projects.js';
import fs from 'fs/promises';
import path from 'path';

async function main() {
  console.log('Generating project embeddings...');

  try {
    // Create rich text representation for each project
    const enrichedProjects = projects.map(project => ({
      ...project,
      searchText: [
        project.title,
        project.description,
        project.tags?.join(' '),
        project.techStack?.join(' '),
        project.features?.join(' '),
        project.implementation,
        project.topics?.join(' '),
        project.category
      ].filter(Boolean).join(' ')
    }));

    // Generate embeddings
    const embeddings = await generateProjectEmbeddings(enrichedProjects);

    // Write to file
    const outputPath = path.join(process.cwd(), 'src', 'utils', 'precomputedEmbeddings.js');
    const fileContent = `// Auto-generated embeddings file. Do not edit manually.
export const projectEmbeddings = ${JSON.stringify(embeddings, null, 2)};
`;

    await fs.writeFile(outputPath, fileContent, 'utf-8');
    console.log('Successfully generated embeddings!');
  } catch (error) {
    console.error('Error generating embeddings:', error);
    process.exit(1);
  }
}

main();
