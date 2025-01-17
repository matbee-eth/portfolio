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
  Psychology,
  Memory,
  SmartToy,
  Hub,
  Code,
  Speed,
  AutoAwesome,
  School,
  EmojiEmotions,
  Groups,
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

const AgentArchitecture = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Grid container spacing={4}>
      {/* Control Room */}
      <Grid item xs={12}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            backgroundColor: 'primary.main',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Hub sx={{ fontSize: 40 }} />
          <Typography variant="h6">Control Room</Typography>
          <Typography variant="body2">Orchestrates System Components</Typography>
        </Paper>
      </Grid>

      {/* Agent Councils */}
      <Grid item xs={12} md={4}>
        <Paper
          elevation={2}
          sx={{ p: 2, height: '100%', backgroundColor: 'success.light', color: 'white' }}
        >
          <Box textAlign="center">
            <EmojiEmotions sx={{ fontSize: 30 }} />
            <Typography variant="h6">Emotional Council</Typography>
            <List dense>
              {['Joy', 'Sadness', 'Anger', 'Anxiety', 'Neutral'].map((emotion) => (
                <ListItem key={emotion}>
                  <ListItemText primary={emotion} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper
          elevation={2}
          sx={{ p: 2, height: '100%', backgroundColor: 'info.light', color: 'white' }}
        >
          <Box textAlign="center">
            <Psychology sx={{ fontSize: 30 }} />
            <Typography variant="h6">Theory Council</Typography>
            <List dense>
              {['Attachment', 'Social Penetration', 'Uncertainty Reduction', 'Emotional Intelligence'].map((theory) => (
                <ListItem key={theory}>
                  <ListItemText primary={theory} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper
          elevation={2}
          sx={{ p: 2, height: '100%', backgroundColor: 'warning.light', color: 'white' }}
        >
          <Box textAlign="center">
            <Memory sx={{ fontSize: 30 }} />
            <Typography variant="h6">Memory System</Typography>
            <List dense>
              {['Emotional Memory', 'Pattern Recognition', 'Experience Learning', 'Relationship History'].map((memory) => (
                <ListItem key={memory}>
                  <ListItemText primary={memory} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </Paper>
);

const PersonalitySystem = () => (
  <Paper sx={{ p: 4, mt: 4 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h6" gutterBottom>
        Personality Development System
      </Typography>
      
      {/* Learning Process */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        {[
          { icon: Memory, label: 'Experience Storage', description: 'Records interactions and outcomes' },
          { icon: Psychology, label: 'Pattern Analysis', description: 'Identifies behavioral patterns' },
          { icon: School, label: 'Adaptation', description: 'Adjusts responses based on learning' },
          { icon: AutoAwesome, label: 'Personality Evolution', description: 'Develops unique traits' },
        ].map(({ icon: Icon, label, description }) => (
          <Paper
            key={label}
            sx={{
              p: 2,
              flex: '1 1 200px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Icon color="primary" />
            <Typography variant="subtitle1" align="center">
              {label}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  </Paper>
);

const PersonaBotShowcase = () => {
  const technologies = [
    'Python',
    'AutoGen',
    'LangChain',
    'Neural Networks',
    'Natural Language Processing',
    'Machine Learning',
  ];

  const features = {
    emotional: [
      'Multi-agent emotional processing',
      'Dynamic state management',
      'Emotionally authentic responses',
      'Context-aware adaptation',
      'Emotional memory system',
    ],
    psychological: [
      'Attachment Theory integration',
      'Social Penetration modeling',
      'Uncertainty Reduction Theory',
      'Emotional Intelligence framework',
      'Relationship development patterns',
    ],
    adaptive: [
      'Experience-based learning',
      'Memory-driven adaptations',
      'Emergent behavior patterns',
      'Natural psychological growth',
      'Personality evolution',
    ],
    technical: [
      'Multi-agent architecture',
      'Control vector system',
      'State management',
      'Pattern recognition',
      'Memory clustering',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Adaptive Personality AI System
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A sophisticated AI character system combining emotional intelligence, psychological theory, and adaptive personality development.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Agent Architecture */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Multi-Agent Architecture
        </Typography>
        <AgentArchitecture />
      </Box>

      {/* Personality System */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Personality Development
        </Typography>
        <PersonalitySystem />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Emotional Intelligence"
            icon={EmojiEmotions}
            features={features.emotional}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Psychological Framework"
            icon={Psychology}
            features={features.psychological}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Adaptive Learning"
            icon={School}
            features={features.adaptive}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Technical Architecture"
            icon={Code}
            features={features.technical}
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
                <Hub />
              </ListItemIcon>
              <ListItemText 
                primary="Multi-Agent System" 
                secondary="Implements a 'society of mind' architecture using AutoGen for coordinated agent interactions"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Memory />
              </ListItemIcon>
              <ListItemText 
                primary="Advanced Memory System" 
                secondary="Sophisticated emotional memory processing with pattern recognition and clustering"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Psychology />
              </ListItemIcon>
              <ListItemText 
                primary="Psychological Integration" 
                secondary="Deep integration of psychological theories for natural personality development"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Speed />
              </ListItemIcon>
              <ListItemText 
                primary="Dynamic Adaptation" 
                secondary="Real-time personality evolution through experience-based learning and memory"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default PersonaBotShowcase;
