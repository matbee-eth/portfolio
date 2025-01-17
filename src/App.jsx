import { useState, useEffect } from 'react';
import { 
  Container, Typography, TextField, Box, 
  Grid, CircularProgress, InputAdornment,
  Paper, Link
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import { semanticSearch } from './utils/semanticSearch';
import { projects as featuredProjects } from './data/projects';
import ProjectCard from './components/ProjectCard';
import ProjectLayout from './components/ProjectLayout';
import { Search } from '@mui/icons-material';
import PortfolioPage from './routes/PortfolioPage';
import GitHubCard from './components/GitHubCard';

// Import project pages
import WikiResearchPage from './routes/WikiResearchPage';
import DiskSpacePage from './routes/DiskSpacePage';
import MultiViewPage from './routes/MultiViewPage';
import ImageClusteringPage from './routes/ImageClusteringPage';
import PersonaBotPage from './routes/PersonaBotPage';
import DockerSandboxPage from './routes/DockerSandboxPage';
import ThermalPage from './routes/ThermalPage';
import TypeScriptSplitterPage from './routes/TypeScriptSplitterPage';
import LLMDebuggerPage from './routes/LLMDebuggerPage';
import PosePlacerPage from './routes/PosePlacerPage';
import Object3DPage from './routes/Object3DPage';
import WebpackGraphPage from './routes/WebpackGraphPage';

function FeaturedProject({ title, description, icon, route, tags, techStack, githubUrl, features, implementation, topics }) {
  const navigate = useNavigate();
  
  return (
    <ProjectCard
      title={title}
      description={description}
      icon={icon}
      onClick={() => navigate(`/projects/${route}`)}
      tags={tags}
      techStack={techStack}
      githubUrl={githubUrl}
      features={features}
      implementation={implementation}
      topics={topics}
    />
  );
};

function ProjectsOverview() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState(null)
  const [isSearching, setIsSearching] = useState(false)
  const [categoryProjects, setCategoryProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const categories = [
    'AI & Computer Vision',
    '3D & Interactive',
    'Developer Tools',
    'Research & Analysis',
    'Other Projects'
  ];

  // Load categories with async search
  const loadCategoryProjects = async () => {
    const categoryResults = await Promise.all(
      categories.map(async category => {
        // Filter projects by category, excluding the portfolio project
        const categoryProjects = featuredProjects.filter(project => 
          project.route !== 'portfolio' && 
          (project.category === category || 
          (category === 'Other Projects' && !project.category))
        );
        return { category, projects: categoryProjects };
      })
    );
    setCategoryProjects(categoryResults);
    setIsLoading(false);
  };

  // Load projects on mount
  useEffect(() => {
    loadCategoryProjects();
  }, []);

  // Debounced search effect
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults(null);
      return;
    }

    const doSearch = async () => {
      setIsSearching(true);
      try {
        const results = await semanticSearch(searchTerm, featuredProjects);
        setSearchResults(results);
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    const timeoutId = setTimeout(doSearch, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Project Portfolio
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Exploring the intersection of AI, Computer Vision, and Developer Tools
        </Typography>
      </Box>

      {/* Search */}
      <Box mb={6}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search projects using natural language..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {isSearching ? (
                  <CircularProgress size={20} color="primary" />
                ) : (
                  <Search />
                )}
              </InputAdornment>
            )
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              transition: 'all 0.2s',
              ...(isSearching && {
                backgroundColor: 'action.hover'
              })
            }
          }}
        />
      </Box>

      {/* Loading State */}
      {isLoading && !searchResults && (
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            gap: 2
          }}
        >
          <CircularProgress size={40} />
          <Typography variant="body1" color="text.secondary">
            Loading projects...
          </Typography>
        </Box>
      )}

      {/* Search Results */}
      {searchResults && (
        <Box mb={8}>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            Search Results
            {isSearching && <CircularProgress size={24} />}
          </Typography>
          <Grid container spacing={3}>
            {searchResults.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeaturedProject {...project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* Featured Portfolio Project */}
      {!searchTerm && !isLoading && (
        <Box mb={6}>
          <Paper 
            elevation={2} 
            sx={{ 
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              color: 'white'
            }}
          >
            <Box p={2}>
              <Typography variant="h5" gutterBottom color="inherit" sx={{ opacity: 0.9 }}>
                Featured Project
              </Typography>
              <FeaturedProject {...featuredProjects.find(p => p.route === 'portfolio')} />
            </Box>
          </Paper>
        </Box>
      )}

      {/* Category Results */}
      {!searchTerm && !isLoading && categoryProjects.map(({ category, projects }) => (
        <Box key={category} mb={8}>
          <Typography variant="h4" gutterBottom>
            {category}
          </Typography>
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeaturedProject {...project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Container>
  );
}

// Contact info component
function ContactInfo() {
  return (
    <Box sx={{ mt: 3, mb: 3 }}>
      <GitHubCard username="matbee-eth" />
      <Box component={Paper} sx={{ p: 3, mt: 2 }}>
        <Typography variant="h5" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph>
          I'm always interested in new opportunities and collaborations. Feel free to reach out!
        </Typography>
        <Typography component="div">
          <Link href="mailto:mail@matbee.com" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <strong>Email:</strong> mail@matbee.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <Router>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <ContactInfo />
        <Routes>
          <Route path="/" element={<ProjectsOverview />} />
          <Route path="/projects" element={<ProjectLayout />}>
            <Route path="wiki-research" element={<WikiResearchPage />} />
            <Route path="disk-space" element={<DiskSpacePage />} />
            <Route path="multi-view" element={<MultiViewPage />} />
            <Route path="image-clustering" element={<ImageClusteringPage />} />
            <Route path="persona-bot" element={<PersonaBotPage />} />
            <Route path="docker-sandbox" element={<DockerSandboxPage />} />
            <Route path="thermal" element={<ThermalPage />} />
            <Route path="typescript-splitter" element={<TypeScriptSplitterPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="llm-debugger" element={<LLMDebuggerPage />} />
            <Route path="pose-placer" element={<PosePlacerPage />} />
            <Route path="object-3d" element={<Object3DPage />} />
            <Route path="webpack-graph" element={<WebpackGraphPage />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}
