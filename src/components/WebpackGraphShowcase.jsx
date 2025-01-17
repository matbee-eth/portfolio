import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import {
  Code,
  AccountTree,
  Storage,
  Build,
  Analytics,
  Hub,
  Schema,
  DataObject,
  Extension,
  Speed,
} from '@mui/icons-material';
import { BaseShowcase } from './BaseShowcase';

const ProcessFlow = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Processing Pipeline
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Box sx={{ position: 'relative' }}>
        {/* Code Analysis */}
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mb: 4,
            backgroundColor: 'primary.dark',
            color: 'white',
          }}
        >
          <Typography variant="h6" align="center">Code Analysis</Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={1}>
            <Chip label="TypeScript Parsing" size="small" />
            <Chip label="AST Analysis" size="small" />
            <Chip label="Dependency Detection" size="small" />
          </Box>
        </Paper>

        {/* Graph Generation */}
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mb: 4,
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        >
          <Typography variant="h6" align="center">Graph Generation</Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={1}>
            <Chip label="Knowledge Graph" size="small" />
            <Chip label="Relationship Mapping" size="small" />
            <Chip label="Data Structuring" size="small" />
          </Box>
        </Paper>

        {/* Data Export */}
        <Paper
          elevation={3}
          sx={{
            p: 2,
            backgroundColor: 'primary.light',
            color: 'white',
          }}
        >
          <Typography variant="h6" align="center">Data Export</Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={1}>
            <Chip label="Parquet Format" size="small" />
            <Chip label="SQLite Database" size="small" />
            <Chip label="GraphQL Schema" size="small" />
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
          title: "Code Analysis",
          features: ["AST traversal", "Type inference", "Pattern detection"],
          color: "success.main"
        },
        {
          title: "Graph Processing",
          features: ["Relationship mapping", "Entity extraction", "Type hierarchies"],
          color: "warning.main"
        },
        {
          title: "Data Management",
          features: ["Parquet export", "SQLite storage", "GraphQL schema"],
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
    <ProcessFlow />
    <TechnicalFeatures />
  </>
);

const WebpackGraphShowcase = ({ media }) => {
  const technologies = [
    'Webpack',
    'TypeScript',
    'GraphQL',
    'Parquet',
    'SQLite',
    'Node.js',
  ];

  const featureSections = [
    {
      title: 'Code Analysis',
      icon: Code,
      features: [
        'TypeScript AST parsing',
        'Code structure analysis',
        'Dependency detection',
        'Type inference',
        'Pattern recognition',
      ],
    },
    {
      title: 'Graph Generation',
      icon: AccountTree,
      features: [
        'Knowledge graph creation',
        'Relationship mapping',
        'Entity extraction',
        'Type hierarchies',
        'Import/Export tracking',
      ],
    },
    {
      title: 'Data Management',
      icon: Storage,
      features: [
        'Parquet file generation',
        'SQLite database storage',
        'GraphQL schema generation',
        'Query optimization',
        'Data compression',
      ],
    },
    {
      title: 'Integration',
      icon: Extension,
      features: [
        'Webpack plugin system',
        'Build process integration',
        'Configuration options',
        'Performance optimization',
        'Debug logging',
      ],
    },
  ];

  return (
    <BaseShowcase
      title="Webpack Graph Generator"
      description="Advanced Webpack plugin for generating knowledge graphs from TypeScript codebases with comprehensive data export capabilities."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "AST-based code analyzer",
          "Knowledge graph generator",
          "Multi-format exporter",
          "Webpack plugin system",
          "Query optimization engine"
        ],
        requirements: [
          { name: "Node.js", details: "14+ for Webpack integration" },
          { name: "TypeScript", details: "4.0+ for AST parsing" },
          { name: "Memory", details: "8GB+ RAM recommended" },
          { name: "Storage", details: "SSD for database operations" }
        ]
      }}
      pipelineComponent={<SystemVisuals />}
    />
  );
};

export default WebpackGraphShowcase;
