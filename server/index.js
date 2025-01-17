import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises';
import { analyzeProject, getGitHubInfo } from '../src/utils/projectAnalyzer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.json());

// Endpoint to get local projects
app.get('/api/local-projects', async (req, res) => {
  try {
    const projectsDir = '/home/acidhax/dev/originals';
    const projects = [];

    // Get list of directories
    const items = await fs.readdir(projectsDir, { withFileTypes: true });
    const directories = items.filter(item => item.isDirectory());

    // Analyze each project
    for (const dir of directories) {
      const projectPath = path.join(projectsDir, dir.name);
      const projectInfo = await analyzeProject(projectPath);
      
      if (projectInfo) {
        // If it has a GitHub URL, fetch additional info
        if (projectInfo.gitUrl) {
          const githubInfo = await getGitHubInfo(projectInfo.gitUrl);
          if (githubInfo) {
            Object.assign(projectInfo, {
              stars: githubInfo.stargazers_count,
              forks: githubInfo.forks_count,
              description: githubInfo.description,
              homepage: githubInfo.homepage,
              topics: githubInfo.topics,
            });
          }
        }
        
        projects.push(projectInfo);
      }
    }

    res.json(projects);
  } catch (error) {
    console.error('Error fetching local projects:', error);
    res.status(500).json({ error: 'Failed to fetch local projects' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
