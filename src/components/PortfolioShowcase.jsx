import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Code,
  Search,
  Speed,
  Architecture,
  ViewModule,
  Hub,
  Analytics,
  Devices,
  Layers,
  AutoGraph,
} from '@mui/icons-material';

const FeatureSection = ({ title, icon: Icon, features }) => (
  <Paper sx={{ p: 3, height: '100%' }}>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon sx={{ mr: 1 }} />
      <Typography variant="h6">{title}</Typography>
    </Box>
    <List>
      {features.map((feature, index) => (
        <ListItem key={index}>
          <ListItemText primary={feature} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

const TechStack = ({ technologies }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" gutterBottom>
      Technology Stack
    </Typography>
    <Box display="flex" flexWrap="wrap" gap={1}>
      {technologies.map((tech, index) => (
        <Chip
          key={index}
          label={tech}
          variant="outlined"
          color="primary"
        />
      ))}
    </Box>
  </Box>
);

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
          <Chip label="Material-UI" size="small" />
          <Chip label="React Router" size="small" />
          <Chip label="Dynamic Components" size="small" />
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
          <Chip label="TensorFlow.js" size="small" />
          <Chip label="Semantic Search" size="small" />
          <Chip label="Project Analysis" size="small" />
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
          <Chip label="Project Embeddings" size="small" />
          <Chip label="Metadata Storage" size="small" />
          <Chip label="Dynamic Updates" size="small" />
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
  const technologies = [
    'React',
    'Material-UI',
    'TensorFlow.js',
    'Express',
    'Node.js',
    'Vite',
    'Universal Sentence Encoder',
  ];

  const features = {
    frontend: [
      'Responsive Material-UI design',
      'Dynamic project showcases',
      'Interactive visualizations',
      'Real-time search interface',
      'Project relationships',
    ],
    search: [
      'Semantic search capabilities',
      'TensorFlow.js integration',
      'Project embeddings',
      'Relevance ranking',
      'Fast query processing',
    ],
    architecture: [
      'Component-based structure',
      'Server-side processing',
      'Modular project system',
      'Efficient data flow',
      'Scalable design',
    ],
    performance: [
      'Optimized bundle size',
      'Fast page transitions',
      'Efficient data loading',
      'Responsive UI',
      'Search optimization',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Dynamic Project Portfolio
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A modern, interactive portfolio platform with semantic search capabilities and dynamic project showcases.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Architecture Overview */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          System Architecture
        </Typography>
        <ArchitectureOverview />
      </Box>

      {/* Search System */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Semantic Search System
        </Typography>
        <SearchSystem />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Frontend Features"
            icon={Devices}
            features={features.frontend}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Search Capabilities"
            icon={Search}
            features={features.search}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Architecture"
            icon={Architecture}
            features={features.architecture}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Performance"
            icon={Speed}
            features={features.performance}
          />
        </Grid>
      </Grid>

      {/* Technical Details */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Technical Implementation
        </Typography>
        <Paper sx={{ p: 4 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Layers />
              </ListItemIcon>
              <ListItemText 
                primary="Component Architecture" 
                secondary="Modular React components with Material-UI for consistent, responsive design"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AutoGraph />
              </ListItemIcon>
              <ListItemText 
                primary="Semantic Search" 
                secondary="TensorFlow.js with Universal Sentence Encoder for intelligent project discovery"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Hub />
              </ListItemIcon>
              <ListItemText 
                primary="Project Integration" 
                secondary="Dynamic project loading and relationship mapping system"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Analytics />
              </ListItemIcon>
              <ListItemText 
                primary="Performance Optimization" 
                secondary="Efficient data loading, caching, and bundle optimization strategies"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default PortfolioShowcase;
