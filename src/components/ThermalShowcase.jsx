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
  CameraAlt,
  Architecture,
  Speed,
  Settings,
  Tune,
  ViewInAr,
  Timeline,
  Hub,
  FilterCenterFocus,
  Layers,
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

const CameraSystem = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Box sx={{ position: 'relative' }}>
      {/* RGB Camera */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.dark',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">RGB Camera (1080p)</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Color Data" size="small" />
          <Chip label="High Resolution" size="small" />
          <Chip label="Depth Data" size="small" />
        </Box>
      </Paper>

      {/* Thermal Camera */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Thermal Camera (256x192)</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Temperature Data" size="small" />
          <Chip label="Heat Mapping" size="small" />
          <Chip label="Thermal Overlay" size="small" />
        </Box>
      </Paper>

      {/* Alignment System */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          backgroundColor: 'primary.light',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Alignment System</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Warp Mesh" size="small" />
          <Chip label="Dynamic Calibration" size="small" />
          <Chip label="Real-time Fusion" size="small" />
        </Box>
      </Paper>
    </Box>
  </Paper>
);

const ProcessingPipeline = () => (
  <Paper sx={{ p: 4, mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      Processing Pipeline
    </Typography>
    <Grid container spacing={2}>
      {[
        { label: 'Input Processing', color: 'success.light', content: ['RGB frame capture', 'Thermal frame capture', 'Resolution matching'] },
        { label: 'Alignment & Calibration', color: 'warning.light', content: ['Warp mesh generation', 'Dynamic calibration', 'Spatial alignment'] },
        { label: 'Output Generation', color: 'info.light', content: ['Frame fusion', 'Thermal overlay', 'Real-time visualization'] },
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

const ThermalShowcase = () => {
  const technologies = [
    'Python',
    'OpenCV',
    'DepthAI',
    'NumPy',
    'JSON',
    'Computer Vision',
  ];

  const features = {
    camera: [
      'RGB-Thermal camera fusion',
      'Real-time frame synchronization',
      'Dynamic resolution matching',
      'Multi-camera calibration',
      'Depth integration',
    ],
    alignment: [
      'Warp mesh generation',
      'Physical object alignment',
      'Dynamic calibration',
      'Spatial transformation',
      'Grid-based calibration',
    ],
    processing: [
      'Real-time frame processing',
      'Temperature mapping',
      'Depth-thermal fusion',
      'Frame rate optimization',
      'Memory management',
    ],
    visualization: [
      'Thermal overlay visualization',
      'Heat map generation',
      'Interactive adjustments',
      'Multi-view display',
      'Custom color mapping',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Thermal Vision System
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Advanced thermal imaging system with RGB-D camera integration, real-time alignment, and multi-modal visualization capabilities.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Camera System */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Camera System Architecture
        </Typography>
        <CameraSystem />
      </Box>

      {/* Processing Pipeline */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Processing Pipeline
        </Typography>
        <ProcessingPipeline />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Camera Integration"
            icon={CameraAlt}
            features={features.camera}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Alignment System"
            icon={FilterCenterFocus}
            features={features.alignment}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Processing Pipeline"
            icon={Timeline}
            features={features.processing}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Visualization"
            icon={ViewInAr}
            features={features.visualization}
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
                <Hub />
              </ListItemIcon>
              <ListItemText 
                primary="Multi-Camera Integration" 
                secondary="Seamless integration of RGB, depth, and thermal cameras using DepthAI and OpenCV"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Tune />
              </ListItemIcon>
              <ListItemText 
                primary="Dynamic Calibration" 
                secondary="Real-time camera alignment using warp mesh and physical object detection"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Layers />
              </ListItemIcon>
              <ListItemText 
                primary="Frame Processing" 
                secondary="Advanced frame synchronization and fusion techniques for optimal visualization"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Speed />
              </ListItemIcon>
              <ListItemText 
                primary="Performance Optimization" 
                secondary="Efficient memory management and frame rate optimization for real-time processing"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default ThermalShowcase;
