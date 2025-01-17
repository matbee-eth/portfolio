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
  CardContent,
  Button,
  Divider,
} from '@mui/material';
import { Code, Circle, GitHub } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { getProjectByRoute } from '../data/projects';

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
  const location = useLocation();
  const route = location.pathname.split('/').pop();
  const project = getProjectByRoute(route);
  console.log(project, project?.githubUrl, route);
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>

      <MediaPreview media={media} />

      {project?.githubUrl && (
        <Box sx={{ mb: 4 }}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" alignItems="center" gap={1}>
                <GitHub />
                <Typography variant="h6">Github Repository</Typography>
              </Box>
              <Button 
                variant="contained" 
                startIcon={<GitHub />}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mt: 2 }}
              >
                View on Github
              </Button>
            </CardContent>
          </Card>
        </Box>
      )}

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
            <Box mt={8}>
              <Typography variant="h4" gutterBottom>
                Technical Architecture
              </Typography>
              <Paper sx={{ p: 3 }}>
                <List>
                  {implementation.architecture.map((item, index) => (
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
          )}
          {pipelineComponent}
          {implementation.requirements && (
            <Box mt={8}>
              <Typography variant="h4" gutterBottom>
                System Requirements & Setup
              </Typography>
              <Paper sx={{ p: 3 }}>
                <List>
                  {implementation.requirements.map(({ name, details }, index) => (
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
          )}
        </>
      )}

      {children}
    </Container>
  );
};

export { BaseShowcase, FeatureSection, TechStack, MediaPreview };
