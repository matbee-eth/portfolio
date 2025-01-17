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
  CloudUpload,
  Face,
  Dataset,
  GridView,
  Code,
  Speed,
  Security,
  Storage,
  AutoAwesome,
  Label,
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

const WorkflowVisualization = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      {/* Workflow Steps */}
      {[
        { icon: CloudUpload, label: 'Image Upload', description: 'Drag & Drop Interface' },
        { icon: Face, label: 'Face Detection', description: 'TensorFlow.js Processing' },
        { icon: GridView, label: 'Clustering', description: 'Visual Organization' },
        { icon: Label, label: 'Annotation', description: 'Text Labeling' },
        { icon: Dataset, label: 'Export', description: 'Dataset Generation' },
      ].map(({ icon: Icon, label, description }, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 1,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: 'primary.main',
              color: 'white',
            }}
          >
            <Icon fontSize="large" />
          </Paper>
          <Typography variant="subtitle1" fontWeight="bold">
            {label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          {index < 4 && (
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                width: '50px',
                height: '2px',
                backgroundColor: 'primary.main',
                transform: 'translateX(150px)',
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  </Paper>
);

const InterfacePreview = () => (
  <Paper sx={{ p: 4, mt: 4 }}>
    <Grid container spacing={3}>
      {/* Upload Area */}
      <Grid item xs={12} md={4}>
        <Paper
          sx={{
            p: 3,
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed',
            borderColor: 'primary.main',
          }}
        >
          <CloudUpload fontSize="large" color="primary" />
          <Typography variant="body1" mt={2}>
            Drag & Drop Images
          </Typography>
        </Paper>
      </Grid>

      {/* Image Grid */}
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            height: '200px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
          }}
        >
          {Array(8).fill(0).map((_, index) => (
            <Paper
              key={index}
              sx={{
                backgroundColor: 'grey.200',
                width: '100%',
                height: '100%',
              }}
            />
          ))}
        </Box>
      </Grid>
    </Grid>
  </Paper>
);

const ImageClusteringShowcase = () => {
  const technologies = [
    'Next.js',
    'TypeScript',
    'TensorFlow.js',
    'Material-UI',
    'Supabase',
    'SQLite',
    'D3.js',
    'Face-API.js',
    'Jest',
    'Tailwind CSS',
  ];

  const features = {
    core: [
      'Drag & drop image upload',
      'Face detection with TensorFlow.js',
      'Image grid visualization',
      'Dataset export functionality',
      'Text annotation system',
    ],
    technical: [
      'Real-time face detection',
      'Efficient SQLite storage',
      'Responsive Material-UI design',
      'TypeScript type safety',
      'Automated testing with Jest',
    ],
    dataManagement: [
      'Supabase authentication',
      'Local SQLite database',
      'Batch image processing',
      'ZIP export functionality',
      'Data persistence',
    ],
    userExperience: [
      'Intuitive drag & drop',
      'Real-time processing feedback',
      'Responsive grid layout',
      'Dark mode support',
      'Keyboard shortcuts',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Image Dataset Labelling Tool
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A modern web application for creating and managing image datasets with advanced face detection and annotation capabilities.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Workflow Visualization */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Workflow
        </Typography>
        <WorkflowVisualization />
      </Box>

      {/* Interface Preview */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Interface Preview
        </Typography>
        <InterfacePreview />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Core Features"
            icon={AutoAwesome}
            features={features.core}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Technical Capabilities"
            icon={Code}
            features={features.technical}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Data Management"
            icon={Storage}
            features={features.dataManagement}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="User Experience"
            icon={Speed}
            features={features.userExperience}
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
                <Face />
              </ListItemIcon>
              <ListItemText 
                primary="Advanced Face Detection" 
                secondary="Integrated TensorFlow.js and Face-API.js for real-time face detection and landmark recognition"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Security />
              </ListItemIcon>
              <ListItemText 
                primary="Secure Authentication" 
                secondary="Implemented Supabase authentication with role-based access control"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Storage />
              </ListItemIcon>
              <ListItemText 
                primary="Efficient Data Storage" 
                secondary="Local SQLite database for fast queries and data persistence"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Speed />
              </ListItemIcon>
              <ListItemText 
                primary="Optimized Performance" 
                secondary="Implemented lazy loading, image optimization, and efficient data structures"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default ImageClusteringShowcase;
