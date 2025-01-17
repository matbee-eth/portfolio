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
  Terminal,
  Code,
  Architecture,
  Psychology,
  Settings,
  BugReport,
  Memory,
  Hub,
  Keyboard,
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

const DebuggerFlow = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Box sx={{ position: 'relative' }}>
      {/* Command Input */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.dark',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Command Input</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="? prefix" size="small" />
          <Chip label="Command Interception" size="small" />
          <Chip label="Error Detection" size="small" />
        </Box>
      </Paper>

      {/* LLM Analysis */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          mb: 4,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">LLM Analysis</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Error Analysis" size="small" />
          <Chip label="Context Processing" size="small" />
          <Chip label="Solution Generation" size="small" />
        </Box>
      </Paper>

      {/* Interactive Response */}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          backgroundColor: 'primary.light',
          color: 'white',
        }}
      >
        <Typography variant="h6" align="center">Interactive Response</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={1}>
          <Chip label="Command Suggestions" size="small" />
          <Chip label="Tab Accept" size="small" />
          <Chip label="Escape Cancel" size="small" />
        </Box>
      </Paper>
    </Box>
  </Paper>
);

const KeyBindings = () => (
  <Paper sx={{ p: 4, mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      Interactive Features
    </Typography>
    <Grid container spacing={2}>
      {[
        { label: 'Command Prefix', color: 'success.light', content: ['? prefix for debugging', 'Automatic interception', 'Error monitoring'] },
        { label: 'Key Bindings', color: 'warning.light', content: ['Tab to accept', 'Escape to cancel', 'Custom widget integration'] },
        { label: 'Visual Feedback', color: 'info.light', content: ['Loading indicators', 'Suggestion display', 'Error highlighting'] },
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

const LLMDebuggerShowcase = () => {
  const technologies = [
    'Zsh',
    'Python',
    'OpenAI API',
    'Ollama',
    'FIFO Pipes',
    'Shell Scripting',
  ];

  const features = {
    shell: [
      'Command interception',
      'Error detection',
      'FIFO communication',
      'Key binding management',
      'Loading state handling',
    ],
    llm: [
      'OpenAI integration',
      'Ollama support',
      'Error analysis',
      'Context processing',
      'Solution generation',
    ],
    interaction: [
      'Tab completion',
      'Escape cancellation',
      'Visual feedback',
      'Command suggestions',
      'Interactive widgets',
    ],
    system: [
      'Logging system',
      'Debug mode',
      'Cleanup handlers',
      'Process management',
      'Error recovery',
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Project Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          LLM Shell Debugger
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Advanced Zsh plugin that leverages large language models to debug and fix failed shell commands in real-time.
        </Typography>
      </Box>

      {/* Technology Stack */}
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      {/* Debugger Flow */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Debugging Flow
        </Typography>
        <DebuggerFlow />
      </Box>

      {/* Key Bindings */}
      <Box mb={8}>
        <Typography variant="h4" gutterBottom>
          Interactive Features
        </Typography>
        <KeyBindings />
      </Box>

      {/* Features Grid */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="Shell Integration"
            icon={Terminal}
            features={features.shell}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="LLM Integration"
            icon={Psychology}
            features={features.llm}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="User Interaction"
            icon={Keyboard}
            features={features.interaction}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureSection
            title="System Features"
            icon={Memory}
            features={features.system}
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
                primary="Command Processing" 
                secondary="Seamless integration with Zsh command line through custom widgets and FIFO communication"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BugReport />
              </ListItemIcon>
              <ListItemText 
                primary="Error Analysis" 
                secondary="Intelligent error detection and analysis using OpenAI's GPT models and Ollama"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText 
                primary="System Integration" 
                secondary="Robust process management, cleanup handlers, and error recovery mechanisms"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Analytics />
              </ListItemIcon>
              <ListItemText 
                primary="Performance" 
                secondary="Efficient FIFO-based communication and asynchronous processing for real-time feedback"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default LLMDebuggerShowcase;
