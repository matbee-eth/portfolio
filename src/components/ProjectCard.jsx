import { Card, CardActionArea, CardContent, Typography, Box, Chip, Stack } from '@mui/material';

export default function ProjectCard({ title, description, icon: Icon, onClick, tags, techStack }) {
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
        sx={{ height: '100%', display: 'flex', alignItems: 'stretch' }}
      >
        <CardContent sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          width: '100%',
          p: 3
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            {Icon && <Icon sx={{ mr: 1, color: 'primary.main', fontSize: 28 }} />}
            <Typography variant="h6" component="div" sx={{ fontSize: '1.1rem' }}>
              {title}
            </Typography>
          </Box>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mb: 2,
              flexGrow: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical'
            }}
          >
            {description}
          </Typography>
          {(tags || techStack) && (
            <Stack 
              direction="row" 
              spacing={1} 
              flexWrap="wrap" 
              useFlexGap 
              sx={{ 
                mt: 'auto',
                gap: '4px !important'
              }}
            >
              {tags?.map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{ 
                    height: '24px',
                    '& .MuiChip-label': {
                      px: 1,
                      fontSize: '0.75rem'
                    }
                  }}
                />
              ))}
              {techStack?.map(tech => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ 
                    height: '24px',
                    '& .MuiChip-label': {
                      px: 1,
                      fontSize: '0.75rem'
                    }
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
