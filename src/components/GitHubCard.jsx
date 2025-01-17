import { useState, useEffect } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Avatar, 
  Link,
  Skeleton,
  Chip,
  Stack
} from '@mui/material';
import { GitHub, LocationOn, Link as LinkIcon } from '@mui/icons-material';

export default function GitHubCard({ username }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching GitHub profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  if (loading) {
    return (
      <Paper sx={{ p: 3, display: 'flex', gap: 2 }}>
        <Skeleton variant="circular" width={80} height={80} />
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="80%" />
        </Box>
      </Paper>
    );
  }

  if (!profile) return null;

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
        <Avatar
          src={profile.avatar_url}
          alt={profile.name}
          sx={{ width: 80, height: 80 }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom>
            {profile.name}
          </Typography>
          <Link
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1, color: 'text.secondary' }}
          >
            <GitHub fontSize="small" />
            {profile.login}
          </Link>
          {profile.bio && (
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {profile.bio}
            </Typography>
          )}
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Chip
              icon={<GitHub />}
              label={`${profile.public_repos} repos`}
              variant="outlined"
              size="small"
            />
            {profile.location && (
              <Chip
                icon={<LocationOn />}
                label={profile.location}
                variant="outlined"
                size="small"
              />
            )}
            {profile.blog && (
              <Chip
                icon={<LinkIcon />}
                label="Website"
                component={Link}
                href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
                clickable
              />
            )}
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}
