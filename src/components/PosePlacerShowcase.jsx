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
  Camera,
  Architecture,
  Visibility,
  TouchApp,
  Animation,
  Hub,
  Layers,
  Tune,
  Analytics,
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

const PoseSystem = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Box sx={{ position: 'relative' }}>
      {/* Input Processing */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.dark',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Input Processing</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Depth Map" size="small" />
          <Chip label="Floor Detection" size="small" />
          <Chip label="Surface Analysis" size="small" />
        </Box>
      </Paper>

      {/* Pose Generation */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Pose Generation</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="3D Mesh Creation" size="small" />
          <Chip label="Scale Adjustment" size="small" />
          <Chip label="Position Mapping" size="small" />
        </Box>
      </Paper>

      {/* Interactive Placement */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          backgroundColor: 'primary.light',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Interactive Placement</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Real-time Updates" size="small" />
          <Chip label="Collision Detection" size="small" />
          <Chip label="Visual Feedback" size="small" />
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
        { label: 'Depth Processing', color: 'success.light', content: ['Depth map analysis', 'Floor segmentation', 'Surface normal calculation'] },
        { label: 'Pose Management', color: 'warning.light', content: ['3D mesh generation', 'Scale normalization', 'Position validation'] },
        { label: 'Interaction System', color: 'info.light', content: ['Real-time updates', 'Visibility checks', 'User feedback'] },
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

const PosePlacerShowcase = () => {
  const technologies = [
    'React',
    'TypeScript',
    'Three.js',
    'WebGL',
    'Hugging Face',
    'TailwindCSS',
  ];

  const features = {
    visualization: [
      '3D scene rendering',
      'Depth map visualization',
      'Real-time mesh updates',
      'Interactive camera controls',
      'Surface normal display',
    ],
    processing: [
      'Depth map analysis',
      'Floor segmentation',
      'Surface normal calculation',
      'Mesh generation',
      'Scale normalization',
    ],
    interaction: [
      'Drag-and-drop placement',
      'Real-time position updates',
      'Collision detection',
      'Visibility checking',
      'User feedback system',
    ],
    technical: [
      'WebGL optimization',
      'Memory management',
      'Performance monitoring',
      'Error handling',
      'State synchronization',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          3D Pose Placement System
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Advanced 3D pose placement system with depth map analysis, real-time interaction, and intelligent surface detection.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Pose System */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          System Architecture
        </Typography>
        <PoseSystem />
      </Box>

      {/* Technical Features */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Technical Features
        </Typography>
        <TechnicalFeatures />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="3D Visualization"
            icon={ThreeDRotation}
            features={features.visualization}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Depth Processing"
            icon={Layers}
            features={features.processing}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="User Interaction"
            icon={TouchApp}
            features={features.interaction}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Technical Features"
            icon={Tune}
            features={features.technical}
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
                <Camera />
              </ListItemIcon>
              <ListItemText 
                primary="Depth Analysis" 
                secondary="Advanced depth map processing with floor segmentation and surface normal calculation"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Animation />
              </ListItemIcon>
              <ListItemText 
                primary="Real-time Interaction" 
                secondary="Smooth pose manipulation with instant feedback and collision detection"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Hub />
              </ListItemIcon>
              <ListItemText 
                primary="System Integration" 
                secondary="Seamless integration of Three.js, React, and depth processing algorithms"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Analytics />
              </ListItemIcon>
              <ListItemText 
                primary="Performance" 
                secondary="Optimized rendering and efficient memory management for smooth operation"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default PosePlacerShowcase;
