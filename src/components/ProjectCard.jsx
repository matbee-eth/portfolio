import { Card, CardActionArea, CardContent, Typography, Box, Chip, Stack } from '@mui/material';
import { GitHubRepoLink } from './GitHubCard';

export default function ProjectCard({ title, description, icon: Icon, onClick, tags, techStack, githubUrl }) {
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
            pb: '16px !important' // Override Material-UI's default padding removal
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
            sx={{ 
              minHeight: '2.5em',
              lineHeight: 1.5
            }}
          >
            {description}
          </Typography>

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
                  color="primary"
                  variant="outlined"
                  sx={{ height: 24 }}
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
              sx={{ gap: '8px !important' }}
            >
              {techStack.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{ height: 24 }}
                />
              ))}
            </Stack>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
