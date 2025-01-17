import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const PipelineNode = ({ title, description, x, y }) => (
  <g transform={`translate(${x},${y})`}>
    <rect
      width="160"
      height="80"
      rx="10"
      ry="10"
      fill="#fff"
      stroke="#1976d2"
      strokeWidth="2"
    />
    <text
      x="80"
      y="30"
      textAnchor="middle"
      fill="#1976d2"
      style={{ fontSize: '14px', fontWeight: 'bold' }}
    >
      {title}
    </text>
    <text
      x="80"
      y="50"
      textAnchor="middle"
      fill="#666"
      style={{ fontSize: '12px' }}
    >
      {description}
    </text>
  </g>
);

const Arrow = ({ startX, startY, endX, endY, label }) => {
  const dx = endX - startX;
  const dy = endY - startY;
  const angle = Math.atan2(dy, dx);
  const length = Math.sqrt(dx * dx + dy * dy);
  
  const midX = startX + dx / 2;
  const midY = startY + dy / 2;

  return (
    <g>
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="#1976d2"
          />
        </marker>
      </defs>
      <line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke="#1976d2"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      {label && (
        <text
          x={midX}
          y={midY - 10}
          textAnchor="middle"
          fill="#666"
          style={{ fontSize: '12px' }}
        >
          {label}
        </text>
      )}
    </g>
  );
};

const TechnicalArchitecture = () => (
  <Paper sx={{ p: 4, backgroundColor: 'grey.50' }}>
    <Typography variant="h5" gutterBottom align="center">
      Technical Architecture
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <svg width="800" height="400" viewBox="0 0 800 400">
        {/* Query Processing */}
        <PipelineNode
          x={50}
          y={50}
          title="Query Processor"
          description="Analyzes & decomposes"
        />
        
        {/* Search Engine */}
        <PipelineNode
          x={320}
          y={50}
          title="Search Engine"
          description="Wikipedia integration"
        />
        
        {/* Fact Checker */}
        <PipelineNode
          x={590}
          y={50}
          title="Fact Checker"
          description="Validates claims"
        />
        
        {/* Data Sources */}
        <PipelineNode
          x={320}
          y={200}
          title="Data Sources"
          description="Content management"
        />
        
        {/* Stream Interface */}
        <PipelineNode
          x={320}
          y={320}
          title="Stream Interface"
          description="Real-time updates"
        />

        {/* Connect the nodes with arrows */}
        <Arrow
          startX={210}
          startY={90}
          endX={320}
          endY={90}
          label="Sub-queries"
        />
        
        <Arrow
          startX={480}
          startY={90}
          endX={590}
          endY={90}
          label="Results"
        />
        
        <Arrow
          startX={320}
          startY={130}
          endX={320}
          endY={200}
          label="Fetch"
        />
        
        <Arrow
          startX={320}
          startY={280}
          endX={320}
          endY={320}
          label="Updates"
        />
        
        <Arrow
          startX={480}
          startY={320}
          endX={590}
          endY={130}
          label="Feedback"
        />
      </svg>
    </Box>
  </Paper>
);

export default TechnicalArchitecture;
