import { useState, useEffect } from 'react'
import { Box, Typography, Paper, Chip } from '@mui/material'
import { Code, Description, Link as LinkIcon } from '@mui/icons-material'

const ProjectMetadata = ({ project }) => {
  if (!project) return null

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* Project Type and Source */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {project.type && (
            <Chip
              icon={<Code />}
              label={project.type}
              variant="outlined"
              color="primary"
            />
          )}
          {project.source && (
            <Chip
              icon={<LinkIcon />}
              label={project.source === 'github' ? 'GitHub' : 'Local'}
              variant="outlined"
              color={project.source === 'github' ? 'success' : 'default'}
            />
          )}
        </Box>

        {/* Local Path if available */}
        {project.localPath && (
          <Typography variant="body2" color="text.secondary">
            Local Path: {project.localPath}
          </Typography>
        )}

        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Technologies Used:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {project.technologies.map((tech, index) => (
                <Chip
                  key={index}
                  label={tech}
                  size="small"
                  variant="outlined"
                />
              ))}
            </Box>
          </Box>
        )}

        {/* Project Status */}
        {project.status && (
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Status:
            </Typography>
            <Chip
              label={project.status}
              color={
                project.status === 'Active' ? 'success' :
                project.status === 'Archived' ? 'default' :
                'warning'
              }
              size="small"
            />
          </Box>
        )}

        {/* Additional Notes */}
        {project.notes && (
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Notes:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.notes}
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  )
}

export default ProjectMetadata
