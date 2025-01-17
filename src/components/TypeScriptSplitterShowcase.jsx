import React from 'react';
import {
  Code,
  Storage,
  Architecture,
  Build,
  Speed,
  Analytics,
  Hub,
  Settings,
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
      TypeScript Processing Pipeline
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Grid container spacing={3}>
        {/* Input Stage */}
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
              Input Processing
            </Typography>
            <Box display="flex" justifyContent="center" gap={2} flexWrap="wrap">
              <Chip label="File Loading" size="small" />
              <Chip label="AST Generation" size="small" />
              <Chip label="Type Analysis" size="small" />
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
              Code Analysis
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Dependency Graph</Box>
              <Box component="li" sx={{ mb: 1 }}>Type Resolution</Box>
              <Box component="li" sx={{ mb: 1 }}>Module Analysis</Box>
              <Box component="li" sx={{ mb: 1 }}>Import/Export Tracking</Box>
            </Box>
          </Paper>
        </Grid>

        {/* Output Stage */}
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
              Code Generation
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Module Splitting</Box>
              <Box component="li" sx={{ mb: 1 }}>Code Transformation</Box>
              <Box component="li" sx={{ mb: 1 }}>Type Preservation</Box>
              <Box component="li" sx={{ mb: 1 }}>File Generation</Box>
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
          title: "AST Processing",
          features: ["Parser integration", "Tree traversal", "Node analysis"],
          color: "success.main"
        },
        {
          title: "Type System",
          features: ["Type inference", "Declaration handling", "Module types"],
          color: "warning.main"
        },
        {
          title: "Code Generation",
          features: ["Module creation", "Import handling", "Type preservation"],
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

const TypeScriptSplitterShowcase = ({ media }) => {
  const technologies = [
    'TypeScript',
    'Node.js',
    'AST Parser',
    'Babel',
    'Jest',
    'ESLint',
    'Prettier',
    'Webpack',
  ];

  const featureSections = [
    {
      title: 'Code Analysis',
      icon: Code,
      features: [
        'AST parsing',
        'Type inference',
        'Dependency tracking',
        'Module analysis',
        'Import/export resolution',
      ],
    },
    {
      title: 'Type System',
      icon: Storage,
      features: [
        'Type preservation',
        'Declaration handling',
        'Interface management',
        'Generic support',
        'Module types',
      ],
    },
    {
      title: 'Code Generation',
      icon: Architecture,
      features: [
        'Module splitting',
        'Code transformation',
        'Import management',
        'Type generation',
        'Source maps',
      ],
    },
    {
      title: 'System Features',
      icon: Build,
      features: [
        'Configuration options',
        'Plugin system',
        'Error handling',
        'Progress tracking',
        'Performance optimization',
      ],
    },
  ];

  return (
    <BaseShowcase
      title="TypeScript Module Splitter"
      description="Advanced TypeScript code analysis and transformation tool for intelligent module splitting and organization."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "AST-based analysis system",
          "Type inference engine",
          "Module transformation pipeline",
          "Code generation system",
          "Plugin architecture"
        ],
        requirements: [
          { name: "Node.js", details: "14+ LTS version" },
          { name: "TypeScript", details: "4.0+ compiler" },
          { name: "Memory", details: "8GB+ RAM recommended" },
          { name: "Storage", details: "SSD for better performance" }
        ]
      }}
      pipelineComponent={<SystemVisuals />}
    />
  );
};

export default TypeScriptSplitterShowcase;
