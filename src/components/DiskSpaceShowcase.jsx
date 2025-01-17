import React from 'react';
import {
  Storage,
  Speed,
  Visibility,
  Build,
  Memory,
  CloudQueue,
  Analytics,
  Settings,
  ArrowUpward,
  History,
  Folder,
  Block,
  CheckCircle,
} from '@mui/icons-material';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import { BaseShowcase } from './BaseShowcase';

const InterfacePreview = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Interface Preview
    </Typography>
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
  </Box>
);

const ProcessingPipeline = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Disk Analysis Pipeline
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Grid container spacing={3}>
        {/* Scanning Stage */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: 'primary.dark',
              color: 'white',
              mb: 3,
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              File System Scanning
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Chip label="Directory Traversal" size="small" />
              <Chip label="File Analysis" size="small" />
              <Chip label="Size Calculation" size="small" />
            </Box>
          </Paper>
        </Grid>

        {/* Processing Stage */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: 'success.main',
              color: 'white',
              height: '100%',
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Data Processing
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Size Aggregation</Box>
              <Box component="li" sx={{ mb: 1 }}>Pattern Detection</Box>
              <Box component="li" sx={{ mb: 1 }}>Cache Management</Box>
              <Box component="li" sx={{ mb: 1 }}>Data Indexing</Box>
            </Box>
          </Paper>
        </Grid>

        {/* Visualization Stage */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: 'info.main',
              color: 'white',
              height: '100%',
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Visualization
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Treemap Generation</Box>
              <Box component="li" sx={{ mb: 1 }}>Chart Rendering</Box>
              <Box component="li" sx={{ mb: 1 }}>Interactive Updates</Box>
              <Box component="li" sx={{ mb: 1 }}>Real-time Display</Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

const TechnicalFeatures = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Technical Features
    </Typography>
    <Grid container spacing={3}>
      {[
        {
          title: "File System",
          features: ["Async scanning", "Pattern matching", "Size tracking"],
          color: "success.main"
        },
        {
          title: "Data Management",
          features: ["Caching", "Indexing", "Real-time updates"],
          color: "warning.main"
        },
        {
          title: "Visualization",
          features: ["Interactive UI", "Dynamic updates", "Custom themes"],
          color: "info.main"
        }
      ].map(({ title, features, color }) => (
        <Grid item xs={12} md={4} key={title}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              height: '100%',
              backgroundColor: color,
              color: 'white',
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              {title}
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              {features.map((feature, index) => (
                <Box component="li" key={index} sx={{ mb: 1 }}>
                  {feature}
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const SystemVisuals = () => (
  <>
    <InterfacePreview />
    <ProcessingPipeline />
    <TechnicalFeatures />
  </>
);

const DiskSpaceShowcase = ({ media }) => {
  const technologies = [
    'Python',
    'PyQt5',
    'ThreadPoolExecutor',
    'pathlib',
    'concurrent.futures',
    'SQLite',
    'Qt Charts',
  ];

  const featureSections = [
    {
      title: 'Core Features',
      icon: Storage,
      features: [
        'Real-time disk monitoring',
        'Directory size analysis',
        'File system traversal',
        'Space usage visualization',
        'Custom filtering options',
      ],
    },
    {
      title: 'Performance',
      icon: Speed,
      features: [
        'Multi-threaded scanning',
        'Incremental updates',
        'LRU caching',
        'Batch processing',
        'Low resource usage',
      ],
    },
    {
      title: 'Visualization',
      icon: Visibility,
      features: [
        'Interactive treemap',
        'Size breakdown charts',
        'Directory hierarchy',
        'Custom color schemes',
        'Responsive design',
      ],
    },
    {
      title: 'Technical Features',
      icon: Build,
      features: [
        'Configurable ignore patterns',
        'Navigation history',
        'Error logging',
        'Progress tracking',
        'Cross-platform support',
      ],
    },
  ];

  return (
    <BaseShowcase
      title="Disk Space Analyzer"
      description="High-performance disk space analysis tool with real-time scanning, multi-threaded processing, and interactive visualizations."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "Multi-threaded file scanner",
          "LRU caching system",
          "Qt-based UI framework",
          "Visualization engine",
          "Error handling system"
        ],
        requirements: [
          { name: "Python", details: "3.8+ with threading support" },
          { name: "PyQt5", details: "For UI components" },
          { name: "Memory", details: "4GB+ RAM recommended" },
          { name: "Storage", details: "SSD for better performance" }
        ]
      }}
      pipelineComponent={<SystemVisuals />}
    />
  );
};

export default DiskSpaceShowcase;
