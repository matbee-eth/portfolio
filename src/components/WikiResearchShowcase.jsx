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
  Architecture,
  Code,
  Search,
  Chat,
  Storage,
  CheckCircle,
  Stream,
  Build,
} from '@mui/icons-material';
import TechnicalArchitecture from './TechnicalArchitecture';
import RelatedProjects from './RelatedProjects';
import { projectEmbeddings } from '../utils/precomputedEmbeddings';

const FeatureSection = ({ title, icon: Icon, features }) => (
  <Paper sx={{ p: 3, height: '100%' }}>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon sx={{ mr: 1 }} />
      <Typography variant="h6">{title}</Typography>
    </Box>
    <List>
      {features.map((feature, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <CheckCircle color="success" fontSize="small" />
          </ListItemIcon>
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
          icon={<Code />}
        />
      ))}
    </Box>
  </Box>
);

const WikiResearchShowcase = () => {
  const technologies = [
    'Python 3.8+',
    'Streamlit',
    'asyncio',
    'LLM Integration',
    'Plotly',
    'Wikipedia API',
  ];

  const features = {
    core: [
      'Advanced Query Processing',
      'Real-time Fact Checking',
      'Interactive Streaming Interface',
      'Pipeline Architecture',
      'LLM Integration',
    ],
    search: [
      'Semantic search optimization',
      'Query decomposition',
      'Real-time results streaming',
      'Fact validation',
      'Result export functionality',
    ],
    interface: [
      'Interactive query refinement',
      'Real-time response streaming',
      'Thread management',
      'Progress visualization',
      'Downloadable results',
    ],
    data: [
      'Efficient data processing',
      'Result caching',
      'Export functionality',
      'Session state management',
      'Document analysis',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Wiki Research Assistant
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A sophisticated AI-powered research assistant that conducts thorough research using Wikipedia data with fact-checking capabilities.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Core Features"
            icon={Architecture}
            features={features.core}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Search Capabilities"
            icon={Search}
            features={features.search}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Interactive Interface"
            icon={Chat}
            features={features.interface}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Data Management"
            icon={Storage}
            features={features.data}
          />
        </Grid>
      </Grid>

      {/* Technical Architecture */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Technical Architecture
        </Typography>
        <TechnicalArchitecture />
      </Box>

      {/* Pipeline Flow */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          Pipeline Flow
        </Typography>
        <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            {[
              { icon: Search, label: 'Query Analysis' },
              { icon: Stream, label: 'Decomposition' },
              { icon: Storage, label: 'Search' },
              { icon: CheckCircle, label: 'Fact Checking' },
              { icon: Build, label: 'Result Export' },
            ].map(({ icon: Icon, label }, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Icon fontSize="large" color="primary" />
                <Typography variant="body2">{label}</Typography>
                {index < 4 && (
                  <Typography variant="h5" color="primary" sx={{ mx: 2 }}>
                    →
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>

      {/* System Requirements */}
      <Box mt={8}>
        <Typography variant="h4" gutterBottom>
          System Requirements & Setup
        </Typography>
        <Paper sx={{ p: 3 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Python 3.8+" 
                secondary="Required for running the application"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Environment Variables" 
                secondary="Configure using .env file"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Dependencies" 
                secondary="Install using: pip install -r requirements.txt"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText 
                primary="Memory Requirements" 
                secondary="Sufficient memory for LLM operations"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>      
      <RelatedProjects projectsWithEmbeddings={projectEmbeddings} />
    </Container>
  );
};

export default WikiResearchShowcase;
