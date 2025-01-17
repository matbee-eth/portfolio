import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getProjectByRoute, getRelatedProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function RelatedProjects({ projectRoute }) {
  const navigate = useNavigate();
  const currentProject = getProjectByRoute(projectRoute);
  const relatedProjects = currentProject ? getRelatedProjects(currentProject, 3) : [];

  if (!relatedProjects.length) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Related Projects
      </Typography>
      <Grid container spacing={3}>
        {relatedProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.route}>
            <ProjectCard
              title={project.title}
              description={project.description}
              icon={project.icon}
              onClick={() => navigate(`/projects/${project.route}`)}
              tags={project.tags}
              techStack={project.techStack}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
