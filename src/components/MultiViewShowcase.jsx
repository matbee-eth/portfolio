import React from 'react';
import {
  ViewInAr,
  CameraAlt,
  Architecture,
  Memory,
  Speed,
  Build,
} from '@mui/icons-material';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import { BaseShowcase } from './BaseShowcase';

const ReconstructionPipeline = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Reconstruction Pipeline
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Grid container spacing={3}>
        {/* Image Processing */}
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
              Image Processing
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Chip label="Feature Detection" size="small" />
              <Chip label="Camera Calibration" size="small" />
              <Chip label="Pose Estimation" size="small" />
            </Box>
          </Paper>
        </Grid>

        {/* Point Cloud Generation */}
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
              Point Cloud Generation
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Feature Matching</Box>
              <Box component="li" sx={{ mb: 1 }}>3D Point Triangulation</Box>
              <Box component="li" sx={{ mb: 1 }}>Point Cloud Filtering</Box>
              <Box component="li" sx={{ mb: 1 }}>Outlier Removal</Box>
            </Box>
          </Paper>
        </Grid>

        {/* Mesh Generation */}
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
              Mesh Generation
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Surface Reconstruction</Box>
              <Box component="li" sx={{ mb: 1 }}>Texture Mapping</Box>
              <Box component="li" sx={{ mb: 1 }}>Mesh Optimization</Box>
              <Box component="li" sx={{ mb: 1 }}>Model Export</Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

const MultiViewShowcase = ({ media }) => {
  const technologies = [
    'Python',
    'OpenCV',
    'PyTorch',
    'Open3D',
    'NumPy',
    'CUDA',
  ];

  const featureSections = [
    {
      title: 'Image Processing',
      icon: CameraAlt,
      features: [
        'Feature detection',
        'Camera calibration',
        'Pose estimation',
        'Image preprocessing',
        'Multi-view matching',
      ],
    },
    {
      title: '3D Reconstruction',
      icon: ViewInAr,
      features: [
        'Point cloud generation',
        'Surface reconstruction',
        'Texture mapping',
        'Mesh optimization',
        'Model export',
      ],
    },
    {
      title: 'Performance',
      icon: Speed,
      features: [
        'GPU acceleration',
        'Parallel processing',
        'Memory optimization',
        'Batch operations',
        'Progress tracking',
      ],
    },
    {
      title: 'Technical Features',
      icon: Build,
      features: [
        'Error handling',
        'Data validation',
        'Progress monitoring',
        'Format conversion',
        'Quality metrics',
      ],
    },
  ];

  return (
    <BaseShowcase
      title="Multi-View Reconstruction"
      description="Advanced 3D reconstruction system that generates detailed 3D models from multiple 2D images using computer vision techniques."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "Multi-stage reconstruction pipeline",
          "GPU-accelerated processing",
          "Parallel feature matching",
          "Progressive mesh generation",
          "Quality-driven optimization"
        ],
        requirements: [
          { name: "GPU", details: "CUDA-compatible for processing" },
          { name: "Python", details: "3.8+ with CV libraries" },
          { name: "Memory", details: "16GB+ RAM recommended" },
          { name: "Storage", details: "SSD for large datasets" }
        ]
      }}
      pipelineComponent={<ReconstructionPipeline />}
    />
  );
};

export default MultiViewShowcase;
