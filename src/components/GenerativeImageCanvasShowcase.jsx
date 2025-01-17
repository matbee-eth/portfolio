import React from 'react';
import {
  Brush,
  Image,
  AspectRatio,
  AddPhotoAlternate,
  Save,
  Delete,
  Psychology,
  Code,
  Speed,
  CloudUpload,
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
        {/* Control Panel */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
          <Chip icon={<AddPhotoAlternate />} label="Upload Image" size="small" />
          <Chip icon={<Psychology />} label="Generate with AI" size="small" />
          <Chip icon={<AspectRatio />} label="Adjust Layout" size="small" />
          <Chip icon={<Delete />} label="Remove" size="small" />
          <Chip icon={<Save />} label="Export" size="small" />
        </Box>

        {/* Canvas Area */}
        <Box
          sx={{
            width: '100%',
            aspectRatio: '16/9',
            backgroundColor: '#f5f5f5',
            border: '2px dashed #ccc',
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Typography variant="h6" color="text.secondary">Interactive Canvas</Typography>
            <Typography color="text.secondary" align="center">
              Drag & drop images, resize, reposition, and generate new content with AI
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  </Box>
);

const Features = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Key Features
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Brush sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6">Konva-Powered Canvas</Typography>
          </Box>
          <Typography>
            Built on KonvaJS for powerful canvas manipulation with support for multiple image layers,
            transformations, and responsive scaling.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Psychology sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6">AI Image Generation</Typography>
          </Box>
          <Typography>
            Integrated with advanced image generation AI to create and manipulate images through
            natural language prompts, with real-time preview and editing.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <AspectRatio sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6">Dynamic Layout System</Typography>
          </Box>
          <Typography>
            Smart dimension handling with support for different aspect ratios, automatic scaling,
            and responsive canvas resizing for optimal viewing across devices.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Speed sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6">Optimized Performance</Typography>
          </Box>
          <Typography>
            Built with React and TypeScript using Vite for lightning-fast development and optimal
            runtime performance.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const TechnicalDetails = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Technical Implementation
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Code sx={{ mr: 1 }} color="primary" />
            <Typography variant="h6">Architecture Highlights</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Chip label="React + TypeScript" />
            <Chip label="KonvaJS" />
            <Chip label="Context API" />
            <Chip label="Custom Hooks" />
            <Chip label="Generative AI" />
            <Chip label="Image Processing" />
            <Chip label="Drag & Drop" />
            <Chip label="Responsive Design" />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const GenerativeImageCanvasShowcase = ({ media, technologies, featureSections, implementation, ...props }) => {
  return (
    <BaseShowcase
      title="Generative Image Canvas"
      description="An advanced image editing canvas that combines the power of KonvaJS with AI-driven image generation. Features a responsive design, intuitive controls, and seamless integration with generative AI for creative image manipulation."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={implementation}
      {...props}
    >
      <InterfacePreview />
      <Features />
      <TechnicalDetails />
    </BaseShowcase>
  );
};

export default GenerativeImageCanvasShowcase;
