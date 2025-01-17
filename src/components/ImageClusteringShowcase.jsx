import React from 'react';
import {
  BubbleChart,
  Storage,
  Psychology,
  Speed,
  Architecture,
} from '@mui/icons-material';
import {
  Box,
  Paper,
  Typography,
  Grid,
} from '@mui/material';
import { BaseShowcase } from './BaseShowcase';

const ClusteringPipeline = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Clustering Pipeline
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Grid container spacing={4}>
        {[
          {
            phase: "Data Preprocessing",
            steps: [
              "Image loading and validation",
              "Resize and normalization",
              "Feature extraction",
              "Dimensionality reduction"
            ],
            color: "primary.dark"
          },
          {
            phase: "Clustering Process",
            steps: [
              "Distance calculation",
              "Cluster assignment",
              "Centroid updates",
              "Convergence check"
            ],
            color: "primary.main"
          },
          {
            phase: "Post-processing",
            steps: [
              "Cluster validation",
              "Outlier detection",
              "Visualization prep",
              "Result export"
            ],
            color: "primary.light"
          }
        ].map(({ phase, steps, color }) => (
          <Grid item xs={12} md={4} key={phase}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                backgroundColor: color,
                color: 'white',
              }}
            >
              <Typography variant="h6" gutterBottom align="center">
                {phase}
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {steps.map((step, index) => (
                  <Box component="li" key={index} sx={{ mb: 1 }}>
                    {step}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  </Box>
);

const ImageClusteringShowcase = ({ media }) => {
  const technologies = [
    'Python',
    'PyTorch',
    'scikit-learn',
    'FastAPI',
    'React',
    'D3.js',
    'Redis',
    'PostgreSQL'
  ];

  const featureSections = [
    {
      title: 'Clustering Features',
      icon: BubbleChart,
      features: [
        'Dynamic cluster sizing',
        'Multi-dimensional analysis',
        'Incremental clustering',
        'Outlier detection',
        'Similarity scoring'
      ],
    },
    {
      title: 'Data Management',
      icon: Storage,
      features: [
        'Efficient data storage',
        'Batch processing',
        'Caching system',
        'Result persistence',
        'Export capabilities'
      ],
    },
    {
      title: 'ML Pipeline',
      icon: Psychology,
      features: [
        'Feature extraction',
        'Dimensionality reduction',
        'Model selection',
        'Hyperparameter tuning',
        'Validation metrics'
      ],
    },
    {
      title: 'Performance',
      icon: Speed,
      features: [
        'GPU acceleration',
        'Parallel processing',
        'Memory optimization',
        'Real-time updates',
        'Scalable architecture'
      ],
    },
  ];

  return (
    <BaseShowcase
      title="Image Clustering Engine"
      description="Advanced image clustering system leveraging deep learning features and efficient algorithms for organizing large-scale image datasets."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "Modular pipeline architecture",
          "Distributed processing system",
          "Multi-stage clustering algorithm",
          "Real-time visualization engine",
          "Scalable storage backend"
        ],
        requirements: [
          { name: "Python", details: "3.8+ with ML libraries" },
          { name: "GPU", details: "CUDA-compatible for acceleration" },
          { name: "Storage", details: "SSD for fast data access" },
          { name: "Memory", details: "16GB+ RAM recommended" }
        ]
      }}
      pipelineComponent={<ClusteringPipeline />}
    />
  );
};

export default ImageClusteringShowcase;
