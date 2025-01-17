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
  Brush,
  Architecture,
  ViewQuilt,
  Code,
  Speed,
  Settings,
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

const PipelineVisualization = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      {/* Pipeline Steps */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {[
          { icon: ThreeDRotation, label: 'STL Import' },
          { icon: Architecture, label: 'Part Separation' },
          { icon: Brush, label: 'Material Setup' },
          { icon: Camera, label: 'Multi-view Render' },
          { icon: ViewQuilt, label: 'Image Assembly' },
        ].map(({ icon: Icon, label }, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Paper
              sx={{
                p: 2,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                color: 'white',
              }}
            >
              <Icon />
            </Paper>
            <Typography variant="body2" align="center">
              {label}
            </Typography>
            {index < 4 && (
              <Box
                sx={{
                  position: 'absolute',
                  right: -30,
                  top: '50%',
                  width: 60,
                  height: 2,
                  backgroundColor: 'primary.main',
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Example Output */}
      <Paper sx={{ p: 2, mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                aspectRatio: '1',
                backgroundColor: 'grey.200',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Original STL Model
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                aspectRatio: '1',
                backgroundColor: 'grey.200',
                borderRadius: 1,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 1,
                p: 1,
              }}
            >
              {[1, 2, 3, 4].map((view) => (
                <Box
                  key={view}
                  sx={{
                    backgroundColor: 'grey.300',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="caption">View {view}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  </Paper>
);

const MultiViewShowcase = () => {
  const technologies = [
    'Python',
    'Blender',
    'PIL (Pillow)',
    'STL Processing',
    'Computer Graphics',
  ];

  const features = {
    modeling: [
      'STL file import and processing',
      'Automatic part separation',
      'Smart part arrangement',
      'Bounding box calculation',
      'Primary axis detection',
    ],
    rendering: [
      'Multi-view camera setup',
      'Professional lighting configuration',
      'Material application',
      'High-quality rendering',
      'View-specific adjustments',
    ],
    imageProcessing: [
      'Transparency handling',
      'Image cropping and resizing',
      'Multi-view composition',
      'Batch processing',
      'Output optimization',
    ],
    automation: [
      'Directory monitoring',
      'Parallel processing',
      'Error handling',
      'Progress tracking',
      'Configurable parameters',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Multi-view Image Generator
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A sophisticated tool for generating multi-view images from 3D models, designed for training diffusion models like FLUX.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Pipeline Visualization */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Processing Pipeline
        </Typography>
        <PipelineVisualization />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="3D Modeling"
            icon={ThreeDRotation}
            features={features.modeling}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Rendering"
            icon={Camera}
            features={features.rendering}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Image Processing"
            icon={ViewQuilt}
            features={features.imageProcessing}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Automation"
            icon={Speed}
            features={features.automation}
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
                <Code />
              </ListItemIcon>
              <ListItemText 
                primary="Blender Integration" 
                secondary="Seamless integration with Blender's Python API for 3D model processing and rendering"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Architecture />
              </ListItemIcon>
              <ListItemText 
                primary="Intelligent Part Processing" 
                secondary="Automatic separation and arrangement of model parts along the primary axis"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Camera />
              </ListItemIcon>
              <ListItemText 
                primary="Advanced Rendering Pipeline" 
                secondary="Professional-grade lighting setup and material configuration for optimal visualization"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText 
                primary="Configurable Workflow" 
                secondary="Flexible parameters for customizing the rendering process and output format"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default MultiViewShowcase;
