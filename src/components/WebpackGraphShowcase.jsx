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

const FeatureSection = ({ title, icon: Icon, features }) => (
  <Paper sx={{ p: 3, height: '100%' }}>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon sx={{ mr: 1 }} />
      <Typography variant="h6">{title}</Typography>
    </Box>
    <List>
      {features.map((feature, index) => (
        <ListItem key={index}>
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

const ProcessFlow = () => (
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
);

const TechnicalFeatures = () => (
  <Paper sx={{ p: 4, mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      Technical Features
    </Typography>
    <Grid container spacing={2}>
      {[
        { label: 'Code Analysis', color: 'success.light', content: ['TypeScript parsing', 'AST traversal', 'Pattern recognition'] },
        { label: 'Graph Processing', color: 'warning.light', content: ['Relationship mapping', 'Dependency tracking', 'Type inference'] },
        { label: 'Data Management', color: 'info.light', content: ['Parquet export', 'SQLite storage', 'GraphQL integration'] },
      ].map(({ label, color, content }) => (
        <Grid item xs={12} md={4} key={label}>
          <Paper
            sx={{
              p: 2,
              height: '100%',
              backgroundColor: color,
              color: 'white',
            }}
          >
            <Typography variant="subtitle1" gutterBottom align="center">
              {label}
            </Typography>
            <List dense>
              {content.map((item) => (
                <ListItem key={item}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

const WebpackGraphShowcase = () => {
  const technologies = [
    'Webpack',
    'TypeScript',
    'GraphQL',
    'Parquet',
    'SQLite',
    'Node.js',
  ];

  const features = {
    codeAnalysis: [
      'TypeScript AST parsing',
      'Code structure analysis',
      'Dependency detection',
      'Type inference',
      'Pattern recognition',
    ],
    graphGeneration: [
      'Knowledge graph creation',
      'Relationship mapping',
      'Entity extraction',
      'Type hierarchies',
      'Import/Export tracking',
    ],
    dataManagement: [
      'Parquet file generation',
      'SQLite database storage',
      'GraphQL schema generation',
      'Query optimization',
      'Data compression',
    ],
    integration: [
      'Webpack plugin system',
      'Build process integration',
      'Configuration options',
      'Performance optimization',
      'Debug logging',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Webpack Knowledge Graph Plugin
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Generate comprehensive knowledge graphs from TypeScript codebases for deep insights and analysis.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Process Flow */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Process Flow
        </Typography>
        <ProcessFlow />
      </Box>

      {/* Technical Features */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Technical Implementation
        </Typography>
        <TechnicalFeatures />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Code Analysis"
            icon={Code}
            features={features.codeAnalysis}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Graph Generation"
            icon={AccountTree}
            features={features.graphGeneration}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Data Management"
            icon={Storage}
            features={features.dataManagement}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Integration"
            icon={Extension}
            features={features.integration}
          />
        </Grid>
      </Grid>

      {/* Technical Details */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          System Architecture
        </Typography>
        <Paper sx={{ p: 4 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Schema />
              </ListItemIcon>
              <ListItemText 
                primary="Code Analysis Engine" 
                secondary="Advanced TypeScript parsing and AST analysis for comprehensive code understanding"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Hub />
              </ListItemIcon>
              <ListItemText 
                primary="Graph Generation System" 
                secondary="Sophisticated knowledge graph creation with relationship mapping and type hierarchies"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DataObject />
              </ListItemIcon>
              <ListItemText 
                primary="Data Export Pipeline" 
                secondary="Efficient data export to Parquet and SQLite with GraphQL integration"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Speed />
              </ListItemIcon>
              <ListItemText 
                primary="Performance Optimization" 
                secondary="Optimized build process integration with configurable options and debug support"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default WebpackGraphShowcase;
