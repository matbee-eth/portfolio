import React from 'react';
import {
  Security,
  Code,
  Settings,
  Build,
} from '@mui/icons-material';
import {
  Box,
  Paper,
  Typography,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { BaseShowcase } from './BaseShowcase';

const ContainerArchitecture = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Container Architecture
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Box sx={{ position: 'relative' }}>
        {/* Host System */}
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mb: 4,
            backgroundColor: 'primary.dark',
            color: 'white',
          }}
        >
          <Typography variant="h6" align="center">Host System</Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={1}>
            <Chip label="Docker Engine" size="small" />
            <Chip label="System Libraries" size="small" />
            <Chip label="Host Binaries" size="small" />
          </Box>
        </Paper>

        {/* Parent Container */}
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mb: 4,
            ml: 4,
            mr: 4,
            backgroundColor: 'primary.main',
            color: 'white',
          }}
        >
          <Typography variant="h6" align="center">Parent Container</Typography>
          <Box display="flex" justifyContent="center" gap={2} mt={1}>
            <Chip label="OverlayFS" size="small" />
            <Chip label="Permission Mapping" size="small" />
            <Chip label="Resource Controls" size="small" />
          </Box>

          {/* Nested Container */}
          <Paper
            elevation={3}
            sx={{
              p: 2,
              m: 2,
              backgroundColor: 'primary.light',
              color: 'white',
            }}
          >
            <Typography variant="h6" align="center">Nested Container</Typography>
            <Box display="flex" justifyContent="center" gap={2} mt={1}>
              <Chip label="Isolated Environment" size="small" />
              <Chip label="Read-only Access" size="small" />
              <Chip label="User Context" size="small" />
            </Box>
          </Paper>
        </Paper>
      </Box>
    </Paper>
  </Box>
);

const FileSystemLayers = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      OverlayFS Architecture
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Grid container spacing={2}>
        {[
          { label: 'Upper Layer (Writable)', color: 'success.light', content: ['Container modifications', 'Temporary files', 'Runtime changes'] },
          { label: 'Lower Layer (Read-only)', color: 'warning.light', content: ['Host binaries', 'System libraries', 'Configuration files'] },
          { label: 'Merged View', color: 'info.light', content: ['Unified filesystem', 'Transparent access', 'Dynamic updates'] },
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
  </Box>
);

const ArchitectureVisuals = () => (
  <>
    <ContainerArchitecture />
    <FileSystemLayers />
  </>
);

const DockerSandboxShowcase = ({ media }) => {
  const technologies = [
    'Docker',
    'Node.js',
    'Express',
    'Redis',
    'WebSocket',
    'Shell Script',
  ];

  const featureSections = [
    {
      title: 'Security Features',
      icon: Security,
      features: [
        'Isolated containers',
        'Resource limitations',
        'Network restrictions',
        'Process monitoring',
        'Secure execution',
      ],
    },
    {
      title: 'Code Execution',
      icon: Code,
      features: [
        'Multiple language support',
        'Real-time output',
        'Input handling',
        'Error management',
        'Timeout control',
      ],
    },
    {
      title: 'System Management',
      icon: Settings,
      features: [
        'Container orchestration',
        'Resource allocation',
        'Queue management',
        'Load balancing',
        'Auto-scaling',
      ],
    },
    {
      title: 'Technical Features',
      icon: Build,
      features: [
        'WebSocket integration',
        'Redis caching',
        'Container pooling',
        'Health monitoring',
        'API endpoints',
      ],
    },
  ];

  return (
    <BaseShowcase
      title="Docker Sandbox Environment"
      description="Secure nested Docker container execution with OverlayFS-based filesystem layering and comprehensive resource controls."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "Multi-layer container isolation",
          "OverlayFS filesystem management",
          "Resource monitoring and control",
          "Real-time execution pipeline",
          "WebSocket-based communication"
        ],
        requirements: [
          { name: "Docker", details: "Docker Engine 20.10+" },
          { name: "Node.js", details: "v16 or higher" },
          { name: "Redis", details: "For session management" },
          { name: "System Resources", details: "4GB RAM, 2 CPU cores minimum" }
        ]
      }}
      pipelineComponent={<ArchitectureVisuals />}
    />
  );
};

export default DockerSandboxShowcase;
