import React from 'react';
import {
  Psychology,
  Chat,
  Memory,
  Analytics,
  Hub,
  Settings,
  Storage,
  Speed,
} from '@mui/icons-material';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import { BaseShowcase } from './BaseShowcase';

const ChatSystem = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Persona Chat System
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Grid container spacing={3}>
        {/* Input Processing */}
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
              <Chip label="Message Analysis" size="small" />
              <Chip label="Context Management" size="small" />
              <Chip label="Persona Selection" size="small" />
            </Box>
          </Paper>
        </Grid>

        {/* Response Generation */}
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
              Response Generation
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Persona Alignment</Box>
              <Box component="li" sx={{ mb: 1 }}>Content Creation</Box>
              <Box component="li" sx={{ mb: 1 }}>Style Adaptation</Box>
              <Box component="li" sx={{ mb: 1 }}>Response Validation</Box>
            </Box>
          </Paper>
        </Grid>

        {/* Output Processing */}
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
              Output Processing
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Format Adaptation</Box>
              <Box component="li" sx={{ mb: 1 }}>Quality Check</Box>
              <Box component="li" sx={{ mb: 1 }}>Style Enhancement</Box>
              <Box component="li" sx={{ mb: 1 }}>Response Delivery</Box>
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
          title: "Memory System",
          features: ["Context tracking", "State persistence", "History analysis"],
          color: "success.main"
        },
        {
          title: "Real-time Processing",
          features: ["Stream handling", "Async operations", "Queue management"],
          color: "warning.main"
        },
        {
          title: "Analytics Engine",
          features: ["Performance metrics", "Usage patterns", "Quality analysis"],
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
    <ChatSystem />
    <TechnicalFeatures />
  </>
);

const PersonaBotShowcase = ({ media }) => {
  const technologies = [
    'Python',
    'FastAPI',
    'React',
    'OpenAI',
    'LangChain',
    'Redis',
    'PostgreSQL',
    'WebSocket',
  ];

  const featureSections = [
    {
      title: 'Persona Management',
      icon: Psychology,
      features: [
        'Dynamic persona creation',
        'Personality adaptation',
        'Context awareness',
        'Memory management',
        'Behavioral consistency',
      ],
    },
    {
      title: 'Chat Features',
      icon: Chat,
      features: [
        'Real-time responses',
        'Context preservation',
        'Multi-turn dialogue',
        'Stream processing',
        'Error recovery',
      ],
    },
    {
      title: 'System Features',
      icon: Memory,
      features: [
        'State management',
        'Async processing',
        'Error handling',
        'Performance monitoring',
        'Data persistence',
      ],
    },
    {
      title: 'Analytics',
      icon: Analytics,
      features: [
        'Usage tracking',
        'Performance metrics',
        'Quality analysis',
        'Pattern detection',
        'Optimization insights',
      ],
    },
  ];

  return (
    <BaseShowcase
      title="Persona Chat Bot"
      description="Advanced chat system with dynamic persona management and real-time conversation capabilities powered by AI."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "Multi-persona management system",
          "Real-time chat engine",
          "Context preservation framework",
          "Analytics pipeline",
          "State management system"
        ],
        requirements: [
          { name: "Python", details: "3.8+ with async support" },
          { name: "Database", details: "PostgreSQL for data storage" },
          { name: "Cache", details: "Redis for state management" },
          { name: "Memory", details: "8GB+ RAM recommended" }
        ]
      }}
      pipelineComponent={<SystemVisuals />}
    />
  );
};

export default PersonaBotShowcase;
