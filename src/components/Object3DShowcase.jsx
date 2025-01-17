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
  ThreeDRotation,
  Image,
  Code,
  Psychology,
  Architecture,
  ViewInAr,
  Brush,
  AutoFixHigh,
  Hub,
  Memory,
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

const ProcessFlow = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Box sx={{ position: 'relative' }}>
      {/* Image Generation */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.dark',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Image Generation</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Text Prompt" size="small" />
          <Chip label="ComfyUI" size="small" />
          <Chip label="AI Generation" size="small" />
        </Box>
      </Paper>

      {/* Segmentation */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Image Segmentation</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="SAM2" size="small" />
          <Chip label="Object Detection" size="small" />
          <Chip label="Mask Generation" size="small" />
        </Box>
      </Paper>

      {/* 3D Generation */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          backgroundColor: 'primary.light',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">3D Model Generation</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Three.js" size="small" />
          <Chip label="Model Creation" size="small" />
          <Chip label="Interactive View" size="small" />
        </Box>
      </Paper>
    </Box>
  </Paper>
);

const TechnicalFeatures = () => (
  <Paper sx={{ p: 4, mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      Technical Features
    </Typography>
    <Grid container spacing={2}>
      {[
        { label: 'AI Integration', color: 'success.light', content: ['ComfyUI integration', 'SAM2 segmentation', 'Model generation'] },
        { label: '3D Processing', color: 'warning.light', content: ['Three.js rendering', 'React Three Fiber', 'Interactive controls'] },
        { label: 'Backend Services', color: 'info.light', content: ['Flask API', 'Real-time processing', 'State management'] },
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

const Object3DShowcase = () => {
  const technologies = [
    'React',
    'TypeScript',
    'Three.js',
    'React Three Fiber',
    'ComfyUI',
    'SAM2',
    'Flask',
    'Python',
  ];

  const features = {
    imageGeneration: [
      'Text-to-image generation',
      'ComfyUI integration',
      'Real-time preview',
      'Custom prompt handling',
      'Error recovery',
    ],
    segmentation: [
      'SAM2 integration',
      'Interactive segmentation',
      'Mask generation',
      'Multi-object support',
      'Real-time processing',
    ],
    modelGeneration: [
      '3D model creation',
      'Texture mapping',
      'Interactive controls',
      'Real-time updates',
      'Performance optimization',
    ],
    technical: [
      'Async processing',
      'State management',
      'Error handling',
      'API integration',
      'Performance monitoring',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          3D Object Generation from Images
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          AI-powered system that transforms text prompts into segmented images and generates interactive 3D models.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Process Flow */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Process Flow
        </Typography>
        <ProcessFlow />
      </Box>

      {/* Technical Features */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Technical Implementation
        </Typography>
        <TechnicalFeatures />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Image Generation"
            icon={AutoFixHigh}
            features={features.imageGeneration}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Segmentation"
            icon={ViewInAr}
            features={features.segmentation}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="3D Model Generation"
            icon={ThreeDRotation}
            features={features.modelGeneration}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Technical Features"
            icon={Memory}
            features={features.technical}
          />
        </Grid>
      </Grid>

      {/* Technical Details */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          System Architecture
        </Typography>
        <Paper sx={{ p: 4 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Brush />
              </ListItemIcon>
              <ListItemText 
                primary="Image Generation" 
                secondary="Text-to-image generation using ComfyUI with custom prompt handling and real-time preview"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Psychology />
              </ListItemIcon>
              <ListItemText 
                primary="AI Segmentation" 
                secondary="Advanced image segmentation using SAM2 with interactive selection and mask generation"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Hub />
              </ListItemIcon>
              <ListItemText 
                primary="Service Integration" 
                secondary="Seamless integration of React, Flask, ComfyUI, and SAM2 services"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Architecture />
              </ListItemIcon>
              <ListItemText 
                primary="3D Visualization" 
                secondary="Interactive 3D model generation and visualization using Three.js and React Three Fiber"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default Object3DShowcase;
