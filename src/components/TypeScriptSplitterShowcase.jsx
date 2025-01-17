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
  Architecture,
  Speed,
  AutoGraph,
  Schema,
  AccountTree,
  SyncAlt,
  DataObject,
  Hub,
  Analytics,
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

const ProcessingPipeline = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Box sx={{ position: 'relative' }}>
      {/* Input */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.dark',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">TypeScript Source</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Classes" size="small" />
          <Chip label="Interfaces" size="small" />
          <Chip label="Functions" size="small" />
        </Box>
      </Paper>

      {/* Processing */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Code Analysis</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="AST Parsing" size="small" />
          <Chip label="Dependency Analysis" size="small" />
          <Chip label="Context Splitting" size="small" />
        </Box>
      </Paper>

      {/* Output */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          backgroundColor: 'primary.light',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Generated Output</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Code Chunks" size="small" />
          <Chip label="Mermaid Diagrams" size="small" />
          <Chip label="Knowledge Graph" size="small" />
        </Box>
      </Paper>
    </Box>
  </Paper>
);

const AnalysisFeatures = () => (
  <Paper sx={{ p: 4, mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      Code Analysis Features
    </Typography>
    <Grid container spacing={2}>
      {[
        { label: 'Syntax Analysis', color: 'success.light', content: ['AST parsing', 'Type inference', 'Generic type handling'] },
        { label: 'Dependency Tracking', color: 'warning.light', content: ['Import analysis', 'Export tracking', 'Variable usage detection'] },
        { label: 'Visualization', color: 'info.light', content: ['Mermaid diagrams', 'Component relationships', 'Type hierarchies'] },
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

const TypeScriptSplitterShowcase = () => {
  const technologies = [
    'TypeScript',
    'Node.js',
    'Mermaid.js',
    'AST',
    'DataLoader',
  ];

  const features = {
    parsing: [
      'AST-based code analysis',
      'Type inference system',
      'Generic type handling',
      'React component detection',
      'Export/import tracking',
    ],
    splitting: [
      'Smart context splitting',
      'Class/function boundaries',
      'Size-based chunking',
      'Dependency preservation',
      'Code organization',
    ],
    analysis: [
      'Import dependency tracking',
      'Variable usage detection',
      'Type relationship mapping',
      'Component hierarchy analysis',
      'Code structure visualization',
    ],
    visualization: [
      'Mermaid diagram generation',
      'Class relationships',
      'Type hierarchies',
      'Component dependencies',
      'Knowledge graph export',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          TypeScript Code Analyzer & Splitter
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Advanced TypeScript code analysis tool for intelligent code splitting, dependency tracking, and visual documentation generation.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Processing Pipeline */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Processing Pipeline
        </Typography>
        <ProcessingPipeline />
      </Box>

      {/* Analysis Features */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Analysis Capabilities
        </Typography>
        <AnalysisFeatures />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Code Parsing"
            icon={Code}
            features={features.parsing}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Context Splitting"
            icon={AccountTree}
            features={features.splitting}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Dependency Analysis"
            icon={Hub}
            features={features.analysis}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Visualization"
            icon={AutoGraph}
            features={features.visualization}
          />
        </Grid>
      </Grid>

      {/* Technical Details */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Technical Implementation
        </Typography>
        <Paper sx={{ p: 4 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Schema />
              </ListItemIcon>
              <ListItemText 
                primary="AST Analysis" 
                secondary="Deep TypeScript AST parsing for accurate code structure analysis and type inference"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SyncAlt />
              </ListItemIcon>
              <ListItemText 
                primary="Smart Splitting" 
                secondary="Intelligent code splitting that preserves context and maintains code relationships"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DataObject />
              </ListItemIcon>
              <ListItemText 
                primary="Type System" 
                secondary="Comprehensive type analysis including generics, interfaces, and React components"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Analytics />
              </ListItemIcon>
              <ListItemText 
                primary="Visualization" 
                secondary="Automated generation of Mermaid diagrams for code structure visualization"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default TypeScriptSplitterShowcase;
