import { Card, CardContent, CardActions, Typography, Button, Box, Chip } from '@mui/material'
import { Star, CallSplit } from '@mui/icons-material'

const RepoCard = ({ repo, onShowDetails }) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4
        }
      }}
      onClick={() => onShowDetails(repo)}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {repo.name}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {repo.description || 'No description available'}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          {repo.language && (
            <Chip
              label={repo.language}
              size="small"
              color="primary"
              variant="outlined"
            />
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Star fontSize="small" />
            <Typography variant="body2">{repo.stargazers_count}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CallSplit fontSize="small" />
            <Typography variant="body2">{repo.forks_count}</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          onClick={(e) => {
            e.stopPropagation()
            window.open(repo.html_url, '_blank', 'noopener,noreferrer')
          }}
        >
          View on GitHub
        </Button>
      </CardActions>
    </Card>
  )
}

export default RepoCard
