import { Card, CardActionArea, CardContent, Typography, Box, Chip, Stack, Divider } from '@mui/material';
import { GitHubRepoLink } from './GitHubCard';

const renderImplementation = (implementation) => {
  if (typeof implementation === 'string') {
    return implementation;
  }
  if (implementation?.architecture) {
    return implementation.architecture.join(' • ');
  }
  return null;
};

export default function ProjectCard({ 
  title, 
  description, 
  icon: Icon, 
  onClick, 
  tags, 
  techStack, 
  githubUrl,
  features,
  implementation,
  topics
}) {
  const implementationText = renderImplementation(implementation);
  
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.2s ease-in-out'
        }
      }}
    >
      <CardActionArea 
        onClick={onClick}
        sx={{ 
          height: '100%', 
          display: 'flex', 
          alignItems: 'stretch',
          '& .MuiCardContent-root': {
            pb: '16px !important'
          }
        }}
      >
        <CardContent sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          width: '100%',
          gap: 1.5,
          p: 2.5
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
              {Icon && <Icon sx={{ mr: 1, color: 'primary.main', fontSize: 28, flexShrink: 0 }} />}
              <Typography variant="h6" component="div" sx={{ fontSize: '1.1rem', minWidth: 0, flexShrink: 1 }}>
                {title}
              </Typography>
            </Box>
            {githubUrl && (
              <Box sx={{ flexShrink: 0, ml: 1 }}>
                <GitHubRepoLink repoUrl={githubUrl} />
              </Box>
            )}
          </Box>

          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ lineHeight: 1.5 }}
          >
            {description}
          </Typography>

          {features && features.length > 0 && (
            <>
              <Divider textAlign="left">
                <Typography variant="caption" color="text.secondary">Features</Typography>
              </Divider>
              <Typography variant="body2" color="text.secondary">
                {features.join(' • ')}
              </Typography>
            </>
          )}
{/* 
          {implementationText && (
            <>
              <Divider textAlign="left">
                <Typography variant="caption" color="text.secondary">Implementation</Typography>
              </Divider>
              <Typography variant="body2" color="text.secondary">
                {implementationText}
              </Typography>
            </>
          )} */}

          {tags && tags.length > 0 && (
            <Stack 
              direction="row" 
              spacing={1} 
              flexWrap="wrap" 
              useFlexGap 
              sx={{ gap: '8px !important' }}
            >
              {tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.08)',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.12)'
                    }
                  }}
                />
              ))}
            </Stack>
          )}

          {techStack && techStack.length > 0 && (
            <Stack 
              direction="row" 
              spacing={1} 
              flexWrap="wrap" 
              useFlexGap 
              sx={{ mt: 'auto', pt: 1, gap: '4px !important' }}
            >
              {techStack.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{ 
                    borderColor: 'rgba(0, 0, 0, 0.12)',
                    fontSize: '0.75rem'
                  }}
                />
              ))}
            </Stack>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
