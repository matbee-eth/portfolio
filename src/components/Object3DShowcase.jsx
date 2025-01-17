import React from 'react';
import {
  Image,
  ThreeDRotation,
  Psychology,
  Memory,
  AutoFixHigh,
  ViewInAr,
} from '@mui/icons-material';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import { BaseShowcase } from './BaseShowcase';

const ModelingPipeline = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      3D Generation Pipeline
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Grid container spacing={3}>
        {/* Text to Image */}
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
              Text to Image Generation
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Chip label="Prompt Processing" size="small" />
              <Chip label="ComfyUI Workflow" size="small" />
              <Chip label="Stable Diffusion" size="small" />
              <Chip label="Image Output" size="small" />
            </Box>
          </Paper>
        </Grid>

        {/* Image Processing */}
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
              Image Segmentation
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>SAM2 Processing</Box>
              <Box component="li" sx={{ mb: 1 }}>Mask Generation</Box>
              <Box component="li" sx={{ mb: 1 }}>Object Isolation</Box>
              <Box component="li" sx={{ mb: 1 }}>Refinement</Box>
            </Box>
          </Paper>
        </Grid>

        {/* 3D Generation */}
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
              3D Model Generation
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Geometry Creation</Box>
              <Box component="li" sx={{ mb: 1 }}>Texture Mapping</Box>
              <Box component="li" sx={{ mb: 1 }}>Material Assignment</Box>
              <Box component="li" sx={{ mb: 1 }}>Model Export</Box>
            </Box>
          </Paper>
        </Grid>

        {/* Viewer */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: 'warning.main',
              color: 'white',
              mt: 3,
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Interactive Viewer
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Chip label="Three.js Rendering" size="small" />
              <Chip label="React Three Fiber" size="small" />
              <Chip label="Controls" size="small" />
              <Chip label="Real-time Updates" size="small" />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

const Object3DShowcase = ({ media }) => {
  const technologies = [
    'React',
    'TypeScript',
    'Three.js',
    'React Three Fiber',
    'PyTorch',
    'ComfyUI',
    'SAM2',
    'Flask',
    'Python',
    'Stable Diffusion',
  ];

  const featureSections = [
    {
      title: 'Image Generation',
      icon: Image,
      features: [
        'Text-to-image generation',
        'ComfyUI integration',
        'Real-time preview',
        'Custom prompt handling',
        'Error recovery',
      ],
    },
    {
      title: 'Segmentation',
      icon: AutoFixHigh,
      features: [
        'SAM2 integration',
        'Interactive segmentation',
        'Mask generation',
        'Multi-object support',
        'Real-time processing',
      ],
    },
    {
      title: '3D Model Generation',
      icon: ThreeDRotation,
      features: [
        '3D model creation',
        'Texture mapping',
        'Interactive controls',
        'Real-time updates',
        'Performance optimization',
      ],
    },
    {
      title: 'System Features',
      icon: Memory,
      features: [
        'Async processing',
        'State management',
        'Error handling',
        'API integration',
        'Performance monitoring',
      ],
    },
  ];

  return (
    <BaseShowcase
      title="3D Object Generation"
      description="Advanced system for generating 3D models from text descriptions using AI-powered image generation and segmentation."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "Multi-stage generation pipeline",
          "Distributed processing system",
          "Real-time preview engine",
          "Interactive 3D viewer",
          "API-driven architecture"
        ],
        requirements: [
          { name: "GPU", details: "CUDA-compatible for AI processing" },
          { name: "Python", details: "3.8+ with ML libraries" },
          { name: "Node.js", details: "16+ for frontend" },
          { name: "Memory", details: "16GB+ RAM recommended" }
        ]
      }}
      pipelineComponent={<ModelingPipeline />}
    />
  );
};

export default Object3DShowcase;
