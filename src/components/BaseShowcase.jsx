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
  Card,
  CardMedia,
  Divider,
} from '@mui/material';
import { Code, Circle } from '@mui/icons-material';

const FeatureSection = ({ title, icon: Icon, features }) => (
  <Paper sx={{ p: 3, height: '100%' }}>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon sx={{ mr: 1 }} />
      <Typography variant="h6">{title}</Typography>
    </Box>
    <List>
      {features.map((feature, index) => (
        <ListItem key={index} dense>
          <ListItemIcon>
            <Circle 
              sx={{ 
                fontSize: '8px',
                color: 'text.secondary',
                opacity: 0.5
              }} 
            />
          </ListItemIcon>
          <ListItemText 
            primary={feature}
            primaryTypographyProps={{
              variant: 'body2',
              color: 'text.primary'
            }}
          />
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

const MediaPreview = ({ media }) => {
  if (!media) return null;

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Preview
      </Typography>
      <Card>
        {media.type === 'image' ? (
          <CardMedia
            component="img"
            image={media.url}
            alt={media.alt || 'Project preview'}
            sx={{ height: 300, objectFit: 'contain' }}
          />
        ) : media.type === 'video' ? (
          <CardMedia
            component="video"
            src={media.url}
            controls
            sx={{ height: 300 }}
          />
        ) : null}
      </Card>
    </Box>
  );
};

const Requirements = ({ requirements }) => {
  if (!requirements) return null;

  return (
    <Box mt={8}>
      <Typography variant="h4" gutterBottom>
        System Requirements & Setup
      </Typography>
      <Paper sx={{ p: 3 }}>
        <List>
          {requirements.map(({ name, details }, index) => (
            <ListItem key={index} dense>
              <ListItemIcon>
                <Circle 
                  sx={{ 
                    fontSize: '8px',
                    color: 'text.secondary',
                    opacity: 0.5
                  }} 
                />
              </ListItemIcon>
              <ListItemText 
                primary={name}
                secondary={details}
                primaryTypographyProps={{
                  variant: 'body2',
                  color: 'text.primary'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

const Architecture = ({ architecture }) => {
  if (!architecture) return null;

  return (
    <Box mt={8}>
      <Typography variant="h4" gutterBottom>
        Technical Architecture
      </Typography>
      <Paper sx={{ p: 3 }}>
        <List>
          {architecture.map((item, index) => (
            <ListItem key={index} dense>
              <ListItemIcon>
                <Circle 
                  sx={{ 
                    fontSize: '8px',
                    color: 'text.secondary',
                    opacity: 0.5
                  }} 
                />
              </ListItemIcon>
              <ListItemText 
                primary={item}
                primaryTypographyProps={{
                  variant: 'body2',
                  color: 'text.primary'
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

const BaseShowcase = ({
  title,
  description,
  media,
  technologies,
  featureSections,
  implementation,
  pipelineComponent,
  children
}) => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          {title}
        </Typography>
        {description && (
          <Typography variant="h5" color="text.secondary" paragraph>
            {description}
          </Typography>
        )}
      </Box>

      <MediaPreview media={media} />
      
      <TechStack technologies={technologies} />

      <Divider sx={{ my: 6 }} />

      <Grid container spacing={4} sx={{ mb: 4 }}>
        {featureSections.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <FeatureSection
              title={section.title}
              icon={section.icon}
              features={section.features}
            />
          </Grid>
        ))}
      </Grid>

      {implementation && (
        <>
          {implementation.architecture && (
            <Architecture architecture={implementation.architecture} />
          )}
          {pipelineComponent}
          {implementation.requirements && (
            <Requirements requirements={implementation.requirements} />
          )}
        </>
      )}

      {children}
    </Container>
  );
};

export { BaseShowcase, FeatureSection, TechStack, MediaPreview };
