import React from 'react';
import {
  CameraAlt,
  Memory,
  Analytics,
  Hub,
  Settings,
  Speed,
  Architecture,
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

const ProcessingPipeline = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Thermal Processing Pipeline
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Grid container spacing={3}>
        {/* Image Acquisition */}
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
              Image Acquisition
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Chip label="Camera Control" size="small" />
              <Chip label="Frame Capture" size="small" />
              <Chip label="Raw Data" size="small" />
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
              Processing Stage
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Noise Reduction</Box>
              <Box component="li" sx={{ mb: 1 }}>Calibration</Box>
              <Box component="li" sx={{ mb: 1 }}>Temperature Mapping</Box>
              <Box component="li" sx={{ mb: 1 }}>Feature Detection</Box>
            </Box>
          </Paper>
        </Grid>

        {/* Analysis Stage */}
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
              Analysis Stage
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Pattern Recognition</Box>
              <Box component="li" sx={{ mb: 1 }}>Anomaly Detection</Box>
              <Box component="li" sx={{ mb: 1 }}>Data Visualization</Box>
              <Box component="li" sx={{ mb: 1 }}>Report Generation</Box>
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
          title: "Hardware Integration",
          features: ["Camera control", "Data acquisition", "Real-time streaming"],
          color: "success.main"
        },
        {
          title: "Image Processing",
          features: ["Noise reduction", "Calibration", "Enhancement"],
          color: "warning.main"
        },
        {
          title: "Analysis Engine",
          features: ["Pattern detection", "Anomaly identification", "Reporting"],
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
    <ProcessingPipeline />
    <TechnicalFeatures />
  </>
);

const ThermalShowcase = ({ media }) => {
  const technologies = [
    'Python',
    'OpenCV',
    'NumPy',
    'PyQtGraph',
    'FLIR SDK',
    'Pandas',
    'Scikit-image',
    'Matplotlib',
  ];

  const featureSections = [
    {
      title: 'Image Acquisition',
      icon: CameraAlt,
      features: [
        'FLIR camera integration',
        'Real-time capture',
        'Raw data processing',
        'Multi-format support',
        'Calibration tools',
      ],
    },
    {
      title: 'Processing',
      icon: Memory,
      features: [
        'Noise reduction',
        'Temperature mapping',
        'Feature detection',
        'Pattern recognition',
        'Data filtering',
      ],
    },
    {
      title: 'Analysis',
      icon: Analytics,
      features: [
        'Anomaly detection',
        'Statistical analysis',
        'Pattern matching',
        'Trend analysis',
        'Report generation',
      ],
    },
    {
      title: 'System Features',
      icon: Build,
      features: [
        'Real-time processing',
        'Data persistence',
        'Multi-threading',
        'Error handling',
        'Performance optimization',
      ],
    },
  ];

  return (
    <BaseShowcase
      title="Thermal Imaging System"
      description="Advanced thermal imaging system with real-time processing and analysis capabilities for industrial applications."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "Multi-stage processing pipeline",
          "Real-time analysis system",
          "Hardware integration layer",
          "Data visualization engine",
          "Reporting framework"
        ],
        requirements: [
          { name: "Hardware", details: "FLIR thermal camera" },
          { name: "Python", details: "3.8+ with scientific packages" },
          { name: "GPU", details: "Optional for faster processing" },
          { name: "Memory", details: "16GB+ RAM recommended" }
        ]
      }}
      pipelineComponent={<SystemVisuals />}
    />
  );
};

export default ThermalShowcase;
