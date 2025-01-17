import React from 'react';
import {
  Search,
  Architecture,
  Chat,
  Storage,
  Stream,
  CheckCircle,
  Build,
} from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';
import { BaseShowcase } from './BaseShowcase';

const PipelineFlow = () => (
  <Box mt={8}>
    <Typography variant="h4" gutterBottom>
      Pipeline Flow
    </Typography>
    <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        {[
          { icon: Search, label: 'Query Analysis', description: 'Natural language processing of user queries' },
          { icon: Stream, label: 'Decomposition', description: 'Breaking complex queries into subtasks' },
          { icon: Storage, label: 'Search', description: 'Parallel Wikipedia article retrieval' },
          { icon: CheckCircle, label: 'Fact Checking', description: 'LLM-based verification of results' },
          { icon: Build, label: 'Result Export', description: 'Formatted output generation' },
        ].map(({ icon: Icon, label, description }, index, array) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Paper
              sx={{
                p: 2,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                color: 'white',
              }}
            >
              <Icon />
            </Paper>
            <Typography variant="body1" fontWeight="bold">{label}</Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ maxWidth: 150 }}>
              {description}
            </Typography>
            {index < array.length - 1 && (
              <Typography variant="h5" color="primary" sx={{ mx: 2 }}>
                →
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Paper>
  </Box>
);

const WikiResearchShowcase = ({ media }) => {
  const technologies = [
    'Python',
    'FastAPI',
    'React',
    'OpenAI',
    'LangChain',
    'Streamlit',
    'asyncio',
    'Plotly',
    'Wikipedia API'
  ];

  const featureSections = [
    {
      title: "Core Features",
      icon: Architecture,
      features: [
        "Advanced query processing with real-time fact checking",
        "Interactive streaming interface with pipeline architecture",
        "Semantic search optimization and query decomposition",
        "Real-time results streaming with fact validation",
        "Interactive query refinement and thread management",
        "Efficient data processing with result caching"
      ],
    },
    {
      title: "Search Capabilities",
      icon: Search,
      features: [
        "Natural language query understanding",
        "Multi-source data integration",
        "Semantic similarity matching",
        "Real-time query refinement",
        "Context-aware search"
      ],
    },
    {
      title: "Interactive Interface",
      icon: Chat,
      features: [
        "Real-time streaming updates",
        "Interactive query refinement",
        "Progress visualization",
        "Thread management",
        "Result filtering"
      ],
    },
    {
      title: "Data Management",
      icon: Storage,
      features: [
        "Efficient caching system",
        "Result persistence",
        "Data validation",
        "Version tracking",
        "Export capabilities"
      ],
    },
  ];

  return (
    <BaseShowcase
      title="Wiki Research Assistant"
      description="A sophisticated AI-powered research assistant that conducts thorough research using Wikipedia data with fact-checking capabilities."
      media={media}
      technologies={technologies}
      featureSections={featureSections}
      implementation={{
        architecture: [
          "Modular pipeline design with async processing",
          "LLM integration for query understanding",
          "Distributed caching system",
          "Real-time WebSocket updates"
        ],
        requirements: [
          { name: "Python 3.8+", details: "Required for running the application" },
          { name: "Environment Variables", details: "Configure using .env file" },
          { name: "Dependencies", details: "Install using: pip install -r requirements.txt" },
          { name: "Memory", details: "Sufficient memory for LLM operations" }
        ]
      }}
      pipelineComponent={<PipelineFlow />}
    />
  );
};

export default WikiResearchShowcase;
