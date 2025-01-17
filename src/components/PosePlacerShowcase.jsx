import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
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
import { BaseShowcase } from './BaseShowcase';

const PoseSystem = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Pose Placement System
    </Typography>
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
            <Chip label="User Controls" size="small" />
          </Box>
        </Paper>
      </Box>
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
          title: "Depth Analysis",
          features: ["Scene understanding", "Surface detection", "Spatial mapping"],
          color: "success.main"
        },
        {
          title: "Real-time Processing",
          features: ["Interactive updates", "Performance optimization", "Async operations"],
          color: "warning.main"
        },
        {
          title: "User Interaction",
          features: ["Intuitive controls", "Visual feedback", "Undo/Redo support"],
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
    <PoseSystem />
    <TechnicalFeatures />
  </>
);

const PosePlacerShowcase = ({ media }) => {
  const technologies = [
    'Three.js',
    'React Three Fiber',
    'TypeScript',
    'WebGL',
    'TensorFlow.js',
    'WebAssembly',
  ];

  const featureSections = [
    {
      title: '3D Features',
      icon: ThreeDRotation,
      features: [
        'Real-time 3D rendering',
        'Dynamic mesh manipulation',
        'Custom shader effects',
        'Lighting optimization',
        'Camera controls',
      ],
    },
    {
      title: 'Pose System',
      icon: Animation,
      features: [
        'Pose detection',
        'Position adjustment',
        'Scale manipulation',
        'Rotation control',
        'Animation support',
      ],
    },
    {
      title: 'Interaction',
      icon: TouchApp,
      features: [
        'Drag and drop placement',
        'Interactive controls',
        'Real-time feedback',
        'Multi-touch support',
        'Gesture recognition',
      ],
    },
    {
      title: 'Technical Features',
      icon: Tune,
      features: [
        'WebGL optimization',
        'Memory management',
        'Performance monitoring',
        'Error handling',
        'State persistence',
      ],
    },
  ];

  return (
    <BaseShowcase
      title="3D Pose Placer"
      description="Sophisticated 3D pose placement system with depth analysis and real-time interaction capabilities."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "WebGL-based rendering engine",
          "Real-time physics system",
          "Interactive control system",
          "Depth analysis pipeline",
          "State management framework"
        ],
        requirements: [
          { name: "GPU", details: "WebGL 2.0 compatible" },
          { name: "Browser", details: "Modern browser with WebGL support" },
          { name: "Memory", details: "4GB+ RAM recommended" },
          { name: "Input", details: "Mouse/Touch input device" }
        ]
      }}
      pipelineComponent={<SystemVisuals />}
    />
  );
};

export default PosePlacerShowcase;
