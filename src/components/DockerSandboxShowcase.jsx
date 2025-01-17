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
  Security,
  Storage,
  Code,
  Speed,
  Architecture,
  AccountTree,
  Lock,
  Settings,
  Layers,
  SupervisorAccount,
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

const ContainerArchitecture = () => (
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
);

const FileSystemLayers = () => (
  <Paper sx={{ p: 4, mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      OverlayFS Architecture
    </Typography>
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
);

const DockerSandboxShowcase = () => {
  const technologies = [
    'Docker',
    'OverlayFS',
    'Ubuntu',
    'Bash',
    'FUSE',
    'inotify',
  ];

  const features = {
    security: [
      'Nested container isolation',
      'Read-only system access',
      'User permission mapping',
      'Resource usage controls',
      'Automatic cleanup',
    ],
    filesystem: [
      'OverlayFS layering',
      'Dynamic library resolution',
      'Binary dependency handling',
      'File event monitoring',
      'Mount point isolation',
    ],
    performance: [
      'Efficient resource sharing',
      'Minimal overhead',
      'Quick container startup',
      'Optimized layer caching',
      'Fast filesystem operations',
    ],
    management: [
      'User context preservation',
      'Non-root execution support',
      'Automated setup',
      'Environment configuration',
      'Container lifecycle management',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Nested Docker Sandboxing
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          A secure containerization solution providing enhanced isolation through nested Docker containers with OverlayFS support.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Container Architecture */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Container Architecture
        </Typography>
        <ContainerArchitecture />
      </Box>

      {/* Filesystem Layers */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Filesystem Architecture
        </Typography>
        <FileSystemLayers />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Security Features"
            icon={Security}
            features={features.security}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Filesystem Management"
            icon={Storage}
            features={features.filesystem}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Performance"
            icon={Speed}
            features={features.performance}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Container Management"
            icon={Settings}
            features={features.management}
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
                <Layers />
              </ListItemIcon>
              <ListItemText 
                primary="OverlayFS Integration" 
                secondary="Implements a layered filesystem architecture with read-only lower layer and writable upper layer"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Lock />
              </ListItemIcon>
              <ListItemText 
                primary="Security Controls" 
                secondary="Enforces strict isolation through nested containers and permission mapping"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SupervisorAccount />
              </ListItemIcon>
              <ListItemText 
                primary="User Context Management" 
                secondary="Preserves host user permissions and context within containers"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AccountTree />
              </ListItemIcon>
              <ListItemText 
                primary="Resource Management" 
                secondary="Controls resource allocation and monitors container lifecycle"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default DockerSandboxShowcase;
