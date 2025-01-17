import { useState, useEffect } from 'react'
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  Typography, 
  Box, 
  Chip,
  IconButton,
  Link,
  CircularProgress,
  Grid,
  Divider
} from '@mui/material'
import { Close, GitHub, Language, Code, Schedule, Star, CallSplit } from '@mui/icons-material'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

const ProjectShowcase = ({ repo, open, onClose }) => {
  const [readmeContent, setReadmeContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReadme = async () => {
      if (open && repo) {
        try {
          const response = await axios.get(`https://api.github.com/repos/${repo.full_name}/readme`, {
            headers: {
              Accept: 'application/vnd.github.raw'
            }
          })
          setReadmeContent(response.data)
        } catch (error) {
          setReadmeContent('No README available')
        } finally {
          setLoading(false)
        }
      }
    }

    fetchReadme()
  }, [repo, open])

  if (!repo) return null

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="span">
            {repo.name}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          {/* Project Stats */}
          <Grid item xs={12}>
            <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
              <Chip
                icon={<Star />}
                label={`${repo.stargazers_count} stars`}
                variant="outlined"
              />
              <Chip
                icon={<CallSplit />}
                label={`${repo.forks_count} forks`}
                variant="outlined"
              />
              {repo.language && (
                <Chip
                  icon={<Code />}
                  label={repo.language}
                  variant="outlined"
                />
              )}
              <Chip
                icon={<Schedule />}
                label={`Updated ${new Date(repo.updated_at).toLocaleDateString()}`}
                variant="outlined"
              />
            </Box>
          </Grid>

          {/* Description */}
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              {repo.description || 'No description available'}
            </Typography>
          </Grid>

          {/* Links */}
          <Grid item xs={12}>
            <Box display="flex" gap={2}>
              <Link 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap={1}
              >
                <GitHub /> View on GitHub
              </Link>
              {repo.homepage && (
                <Link 
                  href={repo.homepage} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <Language /> Live Demo
                </Link>
              )}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          {/* README Content */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              README
            </Typography>
            {loading ? (
              <Box display="flex" justifyContent="center" p={3}>
                <CircularProgress />
              </Box>
            ) : (
              <Box sx={{ 
                '& img': { 
                  maxWidth: '100%', 
                  height: 'auto' 
                },
                '& pre': {
                  backgroundColor: '#f5f5f5',
                  padding: 2,
                  borderRadius: 1,
                  overflow: 'auto'
                },
                '& code': {
                  backgroundColor: '#f5f5f5',
                  padding: '2px 4px',
                  borderRadius: 1
                }
              }}>
                <ReactMarkdown>{readmeContent}</ReactMarkdown>
              </Box>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectShowcase
