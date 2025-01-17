import {
  Search,
  Psychology,
  ViewInAr,
  BubbleChart,
  Terminal,
  Architecture,
  Code,
  Hub,
  Storage,
  Visibility,
  PieChart,
  Web
} from '@mui/icons-material';

export const projects = [
  {
    title: "This Website",
    description: "You're looking at it! A modern portfolio built with React and Material-UI, featuring semantic search and dynamic project showcases.",
    icon: Web,
    route: "portfolio",
    tags: ["Web", "Search", "UI/UX"],
    techStack: ["React", "Material-UI", "TensorFlow.js", "Express", "Node.js", "Vite"],
    githubUrl: "https://github.com/matbee-eth/portfolio",
    features: [
      "Semantic project search",
      "Dynamic project showcases",
      "Interactive visualizations",
      "Real-time filtering"
    ],
    implementation: "Built with React and Material-UI, featuring TensorFlow.js-powered semantic search and dynamic content loading",
    topics: ["Web Development", "Semantic Search", "UI/UX Design"],
    category: "Developer Tools"
  },
  {
    title: "Wiki Research Assistant",
    description: "A sophisticated AI-powered research assistant that conducts thorough research using Wikipedia data with fact-checking capabilities.",
    icon: Search,
    route: "wiki-research",
    tags: ["AI", "NLP", "Research"],
    techStack: ["Python", "FastAPI", "React", "OpenAI", "LangChain", "Streamlit", "asyncio", "Plotly", "Wikipedia API"],
    githubUrl: "https://github.com/matbee-eth/wiki-research",
    features: [
      "Advanced query processing with real-time fact checking",
      "Interactive streaming interface with pipeline architecture",
      "Semantic search optimization and query decomposition",
      "Real-time results streaming with fact validation",
      "Interactive query refinement and thread management",
      "Efficient data processing with result caching"
    ],
    implementation: {
      architecture: [
        "Modular pipeline design with async processing",
        "LLM integration for query understanding",
        "Distributed caching system",
        "Real-time WebSocket updates"
      ],
      pipeline: [
        { step: "Query Analysis", description: "Natural language processing of user queries" },
        { step: "Decomposition", description: "Breaking complex queries into subtasks" },
        { step: "Search", description: "Parallel Wikipedia article retrieval" },
        { step: "Fact Checking", description: "LLM-based verification of results" },
        { step: "Result Export", description: "Formatted output generation" }
      ],
      requirements: [
        { name: "Python 3.8+", details: "Required for running the application" },
        { name: "Environment Variables", details: "Configure using .env file" },
        { name: "Dependencies", details: "Install using: pip install -r requirements.txt" },
        { name: "Memory", details: "Sufficient memory for LLM operations" }
      ]
    },
    topics: ["Research Tools", "AI Assistants", "Natural Language Processing", "Information Retrieval"],
    category: "AI & Computer Vision"
  },
  {
    title: "Disk Space Analyzer",
    description: "Interactive visualization tool for analyzing disk space usage with real-time updates and filtering capabilities.",
    icon: Storage,
    route: "disk-space",
    tags: ["Visualization", "System", "Analytics"],
    techStack: ["Electron", "D3.js", "Node.js", "SQLite"],
    category: "Developer Tools"
  },
  {
    title: "Multi-View Reconstruction",
    description: "3D reconstruction system that generates detailed 3D models from multiple 2D images using computer vision techniques.",
    icon: ViewInAr,
    route: "multi-view",
    tags: ["3D", "Vision", "Graphics"],
    techStack: ["Python", "OpenCV", "PyTorch", "Open3D"],
    category: "3D & Interactive"
  },
  {
    title: "Image Clustering Engine",
    description: "Unsupervised learning system for organizing and clustering large image datasets using deep learning features.",
    icon: BubbleChart,
    route: "image-clustering",
    tags: ["ML", "Vision", "Clustering"],
    techStack: ["Python", "PyTorch", "scikit-learn", "FastAPI"],
    category: "AI & Computer Vision"
  },
  {
    title: "Persona Bot Framework",
    description: "Multi-agent emotional processing system with dynamic state management and psychological theory integration.",
    icon: Psychology,
    route: "persona-bot",
    tags: ["AI", "NLP", "Chatbot"],
    techStack: ["Python", "TensorFlow", "FastAPI", "Redis", "Docker"],
    githubUrl: "https://github.com/matbee-eth/Psychotherapy-Theory-LLM-Agents",
    features: [
      "Multi-agent conversation system",
      "Emotional state tracking",
      "Dynamic personality adaptation",
      "Real-time response generation"
    ],
    category: "AI & Computer Vision"
  },
  {
    title: "Docker Sandbox",

    description: "Secure nested Docker container execution with OverlayFS-based filesystem layering.",
    icon: Terminal,
    route: "docker-sandbox",
    tags: ["Docker", "Security", "DevOps"],
    techStack: ["Go", "Docker", "Linux", "Prometheus"],
    githubUrl: "https://github.com/matbee-eth/docker-sandbox-shared-system",
    category: "Developer Tools"
  },
  {
    title: "Thermal Vision System",
    description: "Real-time thermal imaging system for detecting and tracking heat signatures in various environments.",
    icon: Visibility,
    route: "thermal",
    tags: ["Vision", "IoT", "Hardware"],
    techStack: ["Python", "OpenCV", "Raspberry Pi", "TensorFlow Lite"],
    category: "AI & Computer Vision"
  },
  {
    title: "TypeScript Code Splitter",
    description: "Intelligent code splitting tool for TypeScript projects to optimize bundle sizes and load times.",
    icon: Code,
    route: "typescript-splitter",
    tags: ["TypeScript", "Build", "Performance"],
    techStack: ["TypeScript", "Webpack", "Node.js", "AST"],
    githubUrl: "https://github.com/matbee-eth/typescript-project-text-splitter",
    category: "Developer Tools"
  },
  {
    title: "LLM Shell Debugger",
    description: "Intelligent shell debugging system with LLM-powered analysis and interactive suggestions.",
    icon: Terminal,
    route: "llm-debugger",
    tags: ["Developer Tools", "AI", "CLI"],
    techStack: ["Rust", "Python", "OpenAI API", "SQLite", "Shell"],
    features: [
      "Real-time error analysis",
      "Context-aware suggestions",
      "Command history analysis",
      "Interactive debugging"
    ],
    implementation: "Integrates with shell through custom PTY and uses LLM for contextual analysis",
    topics: ["System Programming", "Developer Tools", "AI Assistance"],
    githubUrl: "https://github.com/matbee-eth/zsh-llm-debugger",
    category: "Developer Tools"
  },
  {
    title: "3D Pose Placer",
    description: "Sophisticated 3D pose placement system with depth analysis and real-time interaction.",
    icon: ViewInAr,
    route: "pose-placer",
    tags: ["3D", "Computer Vision", "Interactive"],
    techStack: ["C++", "OpenGL", "CUDA", "PyTorch", "Qt"],
    features: [
      "Real-time pose estimation",
      "Depth-aware placement",
      "Physics-based interaction",
      "Multi-view synthesis"
    ],
    implementation: "Combines pose estimation networks with custom depth estimation and physics simulation",
    topics: ["3D Vision", "Human Pose Estimation", "Real-time Graphics"],
  },
  {
    title: "3D Object Generation",
    description: "AI-powered system transforming text prompts into segmented images and interactive 3D models.",
    icon: ViewInAr,
    route: "object-3d",
    tags: ["3D", "AI", "Computer Vision"],
    techStack: ["PyTorch", "Three.js", "WebGL", "CUDA", "React"],
    features: [
      "Text-to-3D generation",
      "Real-time mesh optimization",
      "Interactive viewport",
      "Texture synthesis"
    ],
    implementation: "Combines diffusion models with 3D reconstruction networks and real-time mesh optimization",
    topics: ["3D Generation", "Neural Rendering", "Geometric Deep Learning"],
    githubUrl: "https://github.com/matbee-eth/React-3DObject-From-Image",
    category: "3D & Interactive"
  },
  {
    title: "Webpack Knowledge Graph",
    description: "Generate comprehensive knowledge graphs from TypeScript codebases for deep insights.",
    icon: Hub,
    route: "webpack-graph",
    tags: ["Graph", "Analysis", "TypeScript"],
    techStack: ["TypeScript", "D3.js", "Node.js", "Neo4j"],
    githubUrl: "https://github.com/matbee-eth/webpack-plugin-knowledge-graph",
    category: "Developer Tools"
  }
];

export function getProjectByRoute(route) {
  return projects.find(p => p.route === route);
}

export function getRelatedProjects(currentProject, count = 3) {
  if (!currentProject) return [];
  
  return projects
    .filter(p => p.route !== currentProject.route)
    .filter(p => 
      p.category === currentProject.category ||
      p.tags.some(t => currentProject.tags.includes(t)) ||
      p.techStack.some(t => currentProject.techStack.includes(t))
    )
    .slice(0, count);
}
