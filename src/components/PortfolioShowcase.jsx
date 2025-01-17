import React from 'react';
import {
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Search,
  Speed,
  Architecture,
  Devices,
  Layers,
  AutoGraph,
  Hub,
  Analytics,
} from '@mui/icons-material';
import { BaseShowcase } from './BaseShowcase';
import { useLocation } from 'react-router-dom';
import { getProjectByRoute } from '../data/projects';

const ArchitectureOverview = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Box sx={{ position: 'relative' }}>
      {/* Frontend */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.dark',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">React Frontend</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Typography variant="body2">Material-UI</Typography>
          <Typography variant="body2">React Router</Typography>
          <Typography variant="body2">Dynamic Components</Typography>
        </Box>
      </Paper>

      {/* Backend */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Express Backend</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Typography variant="body2">TensorFlow.js</Typography>
          <Typography variant="body2">Semantic Search</Typography>
          <Typography variant="body2">Project Analysis</Typography>
        </Box>
      </Paper>

      {/* Data Layer */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          backgroundColor: 'primary.light',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Data Layer</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Typography variant="body2">Project Embeddings</Typography>
          <Typography variant="body2">Metadata Storage</Typography>
          <Typography variant="body2">Dynamic Updates</Typography>
        </Box>
      </Paper>
    </Box>
  </Paper>
);

const SearchSystem = () => (
  <Paper sx={{ p: 4, mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      Semantic Search System
    </Typography>
    <Grid container spacing={2}>
      {[
        { label: 'Text Processing', color: 'success.light', content: ['Universal Sentence Encoder', 'Project metadata extraction', 'Content analysis'] },
        { label: 'Search Engine', color: 'warning.light', content: ['Vector embeddings', 'Similarity matching', 'Real-time results'] },
        { label: 'Result Ranking', color: 'info.light', content: ['Relevance scoring', 'Project categorization', 'Dynamic filtering'] },
      ].map(({ label, color, content }) => (
        <Grid item xs={12} md={4} key={label}>
          <Paper
            sx={{
              p: 2,
              height: '100%',
              backgroundColor: color,
              color: 'white',
            }}
          >
            <Typography variant="subtitle1" gutterBottom align="center">
              {label}
            </Typography>
            <List dense>
              {content.map((item) => (
                <ListItem key={item}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

const PortfolioShowcase = () => {
  const location = useLocation();
  const route = location.pathname.split('/').pop();
  const project = getProjectByRoute(route);

  const featureSections = [
    {
      title: "Frontend Features",
      icon: Devices,
      features: [
        'Responsive Material-UI design',
        'Dynamic project showcases',
        'Interactive visualizations',
        'Real-time search interface',
        'Project relationships',
      ],
    },
    {
      title: "Search Capabilities",
      icon: Search,
      features: [
        'Semantic search capabilities',
        'TensorFlow.js integration',
        'Project embeddings',
        'Relevance ranking',
        'Fast query processing',
      ],
    },
    {
      title: "Architecture",
      icon: Architecture,
      features: [
        'Component-based structure',
        'Server-side processing',
        'Modular project system',
        'Efficient data flow',
        'Scalable design',
      ],
    },
    {
      title: "Performance",
      icon: Speed,
      features: [
        'Optimized bundle size',
        'Fast page transitions',
        'Efficient data loading',
        'Responsive UI',
        'Search optimization',
      ],
    },
  ];

  const implementation = {
    architecture: [
      "Component Architecture: Modular React components with Material-UI for consistent, responsive design",
      "Semantic Search: TensorFlow.js with Universal Sentence Encoder for intelligent project discovery",
      "Project Integration: Dynamic project loading and relationship mapping system",
      "Performance Optimization: Efficient data loading, caching, and bundle optimization strategies"
    ]
  };

  return (
    <BaseShowcase
      title={project?.title}
      description={project?.description}
      technologies={project?.techStack}
      featureSections={featureSections}
      implementation={implementation}
      pipelineComponent={
        <>
          <Box mb={8}>
            <Typography variant="h4" gutterBottom>
              System Architecture
            </Typography>
            <ArchitectureOverview />
          </Box>
          <Box mb={8}>
            <Typography variant="h4" gutterBottom>
              Semantic Search System
            </Typography>
            <SearchSystem />
          </Box>
        </>
      }
    />
  );
};

export default PortfolioShowcase;
