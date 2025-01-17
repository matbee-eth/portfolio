import React from 'react';
import {
  Psychology,
  BugReport,
  Analytics,
  Speed,
  Memory,
  Code,
} from '@mui/icons-material';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
} from '@mui/material';
import { BaseShowcase } from './BaseShowcase';

const DebuggerArchitecture = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Debugger Architecture
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: 'primary.dark',
              color: 'white',
              textAlign: 'center',
              mb: 2
            }}
          >
            <Typography variant="h6">LLM Application</Typography>
            <Box display="flex" justifyContent="center" gap={1} mt={1}>
              <Chip label="Model Interface" size="small" />
              <Chip label="Prompt Engine" size="small" />
              <Chip label="Response Handler" size="small" />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: 'success.main',
              color: 'white',
              height: '100%'
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Input Analysis
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Prompt validation</Box>
              <Box component="li" sx={{ mb: 1 }}>Token analysis</Box>
              <Box component="li" sx={{ mb: 1 }}>Context verification</Box>
              <Box component="li" sx={{ mb: 1 }}>Parameter checks</Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: 'warning.main',
              color: 'white',
              height: '100%'
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Runtime Monitoring
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Token tracking</Box>
              <Box component="li" sx={{ mb: 1 }}>Response analysis</Box>
              <Box component="li" sx={{ mb: 1 }}>Performance metrics</Box>
              <Box component="li" sx={{ mb: 1 }}>Error detection</Box>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              backgroundColor: 'info.main',
              color: 'white',
              height: '100%'
            }}
          >
            <Typography variant="h6" align="center" gutterBottom>
              Output Validation
            </Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Box component="li" sx={{ mb: 1 }}>Response quality</Box>
              <Box component="li" sx={{ mb: 1 }}>Format checking</Box>
              <Box component="li" sx={{ mb: 1 }}>Consistency tests</Box>
              <Box component="li" sx={{ mb: 1 }}>Error reporting</Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  </Box>
);

const LLMDebuggerShowcase = ({ media }) => {
  const technologies = [
    'Python',
    'FastAPI',
    'React',
    'OpenAI',
    'LangChain',
    'Streamlit',
    'Redis',
    'PostgreSQL'
  ];

  const featureSections = [
    {
      title: 'Debug Features',
      icon: BugReport,
      features: [
        'Real-time prompt analysis',
        'Token usage tracking',
        'Response validation',
        'Error detection',
        'Performance monitoring'
      ],
    },
    {
      title: 'LLM Integration',
      icon: Psychology,
      features: [
        'Multi-model support',
        'Prompt optimization',
        'Context management',
        'Response streaming',
        'Model switching'
      ],
    },
    {
      title: 'Analytics',
      icon: Analytics,
      features: [
        'Usage statistics',
        'Performance metrics',
        'Cost tracking',
        'Error analysis',
        'Trend visualization'
      ],
    },
    {
      title: 'System Features',
      icon: Memory,
      features: [
        'Async processing',
        'State management',
        'Cache optimization',
        'Request queuing',
        'Load balancing'
      ],
    },
  ];

  return (
    <BaseShowcase
      title="LLM Debugger"
      description="Advanced debugging and monitoring tool for Large Language Model applications with real-time analysis and optimization capabilities."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "Multi-layer monitoring system",
          "Real-time analysis pipeline",
          "Distributed tracing framework",
          "Metrics aggregation system",
          "Alert management platform"
        ],
        requirements: [
          { name: "Python", details: "3.8+ with async support" },
          { name: "Database", details: "PostgreSQL for metrics storage" },
          { name: "Cache", details: "Redis for real-time data" },
          { name: "Memory", details: "8GB+ RAM recommended" }
        ]
      }}
      pipelineComponent={<DebuggerArchitecture />}
    />
  );
};

export default LLMDebuggerShowcase;
