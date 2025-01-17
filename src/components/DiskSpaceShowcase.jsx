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
  Storage,
  Speed,
  Settings,
  Folder,
  CheckCircle,
  ArrowUpward,
  History,
  Block,
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
          <ListItemIcon>
            <CheckCircle color="success" fontSize="small" />
          </ListItemIcon>
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

const InterfacePreview = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: 'background.paper',
        p: 3,
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      {/* Navigation Bar */}
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Chip icon={<ArrowUpward />} label="Up" size="small" />
        <Chip icon={<History />} label="Back" size="small" />
        <Chip icon={<Folder />} label="Home" size="small" />
        <Chip icon={<Block />} label="Ignore Settings" size="small" />
      </Box>

      {/* File Table Preview */}
      <Box sx={{ border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
        <Box sx={{ display: 'flex', p: 1, borderBottom: 1, borderColor: 'grey.300', bgcolor: 'grey.100' }}>
          <Typography sx={{ flex: 2 }}>Name</Typography>
          <Typography sx={{ flex: 1 }}>Type</Typography>
          <Typography sx={{ flex: 1 }}>Size</Typography>
        </Box>
        {[
          { name: 'Documents', type: 'Directory', size: '1.2 GB' },
          { name: 'Downloads', type: 'Directory', size: '3.5 GB' },
          { name: 'large_file.zip', type: 'File', size: '500 MB' },
        ].map((item, index) => (
          <Box key={index} sx={{ display: 'flex', p: 1, borderBottom: 1, borderColor: 'grey.300' }}>
            <Typography sx={{ flex: 2 }}>{item.name}</Typography>
            <Typography sx={{ flex: 1 }}>{item.type}</Typography>
            <Typography sx={{ flex: 1 }}>{item.size}</Typography>
          </Box>
        ))}
      </Box>

      {/* Status Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: 'grey.100', p: 1 }}>
        <Typography variant="body2">Current Path: /home/user/documents</Typography>
        <Box sx={{ width: 200, height: 10, bgcolor: 'primary.main', borderRadius: 5 }} />
      </Box>
    </Box>
  </Paper>
);

const DiskSpaceShowcase = () => {
  const technologies = [
    'Python 3',
    'PyQt5',
    'ThreadPoolExecutor',
    'pathlib',
    'concurrent.futures',
  ];

  const features = {
    core: [
      'Real-time directory scanning',
      'Multi-threaded file analysis',
      'Configurable ignore patterns',
      'Directory size calculation',
      'Interactive navigation',
    ],
    performance: [
      'Concurrent file scanning',
      'Efficient memory usage',
      'Cached directory sizes',
      'Batch processing',
      'Responsive UI updates',
    ],
    interface: [
      'Modern Qt-based interface',
      'Directory navigation history',
      'Progress tracking',
      'Size formatting',
      'Status updates',
    ],
    management: [
      'Configurable ignore patterns',
      'Persistent settings',
      'Error handling',
      'Logging system',
      'File operations',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Disk Space Analyzer
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A high-performance, user-friendly tool for analyzing disk space usage with real-time scanning and visualization.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

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
            icon={Storage}
            features={features.core}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Performance"
            icon={Speed}
            features={features.performance}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="User Interface"
            icon={Folder}
            features={features.interface}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Management"
            icon={Settings}
            features={features.management}
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
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Multi-threaded Architecture" 
                secondary="Utilizes ThreadPoolExecutor for concurrent file system operations"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Efficient Memory Management" 
                secondary="LRU cache for directory sizes and batch processing for large directories"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Configurable System" 
                secondary="JSON-based configuration with support for ignore patterns and batch sizes"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Error Handling" 
                secondary="Comprehensive error handling and logging system for debugging"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default DiskSpaceShowcase;
