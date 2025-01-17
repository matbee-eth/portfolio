import React from 'react';
import GenerativeImageCanvasShowcase from '../components/GenerativeImageCanvasShowcase';
import { projects } from '../data/projects';
import { Brush, Psychology, AspectRatio, Code } from '@mui/icons-material';

const GenerativeImageCanvasPage = () => {
  const project = projects.find(p => p.route === 'generative-image-canvas');
  
  return (
    <GenerativeImageCanvasShowcase
      media={{
        type: 'video',
        url: '/videos/generative-image-canvas-demo.mp4',
        poster: '/images/generative-image-canvas-poster.jpg'
      }}
      technologies={project.techStack}
      featureSections={[
        {
          title: 'Canvas Features',
          icon: Brush,
          features: [
            'Interactive canvas with drag-and-drop support',
            'Multiple image layers with transformations',
            'Dynamic layout system with responsive scaling'
          ]
        },
        {
          title: 'AI Integration',
          icon: Psychology,
          features: [
            'AI-powered image generation with natural language prompts',
            'Real-time preview and editing',
            'Seamless integration with generative AI services'
          ]
        },
        {
          title: 'Technical Features',
          icon: Code,
          features: [
            'Built with React and TypeScript',
            'KonvaJS for canvas manipulation',
            'Context API for state management',
            'Custom hooks for reusable logic'
          ]
        }
      ]}
      implementation={{
        architecture: [
          'KonvaJS-based canvas system for image manipulation and transformation',
          'React Context API and custom hooks for efficient state management',
          'Modular component architecture with clear separation of concerns',
          'Integration layer for generative AI services and image processing',
          'Responsive layout system with dynamic dimension handling',
          'Event-driven interaction system for canvas manipulation'
        ]
      }}
    />
  );
};

export default GenerativeImageCanvasPage;
