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
    title: "Persona Bot",
    description: "Multi-agent emotional processing system with dynamic state management and psychological theory integration.",
    icon: Psychology,
    route: "persona-bot",
    tags: ["AI", "ML", "Psychology"],
    techStack: ["Python", "TensorFlow", "FastAPI", "Redis", "Docker"],
    features: [
      "Multi-agent conversation system",
      "Emotional state tracking",
      "Dynamic personality adaptation",
      "Real-time response generation"
    ],
    implementation: "Uses transformer-based language models with custom emotional embeddings and state management",
    topics: ["Natural Language Processing", "Emotional AI", "Multi-agent Systems"],
    category: "AI & Computer Vision"
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
    category: "3D & Interactive"
  },
  {
    title: "Image Clustering",
    description: "Advanced image dataset labeling system with face detection and interactive visualization.",
    icon: BubbleChart,
    route: "image-clustering",
    tags: ["Computer Vision", "ML", "Data"],
    techStack: ["Python", "PyTorch", "OpenCV", "scikit-learn", "D3.js"],
    features: [
      "Automated face detection",
      "Similarity-based clustering",
      "Interactive visualization",
      "Batch processing"
    ],
    implementation: "Uses FAISS for efficient similarity search and hierarchical clustering with custom distance metrics",
    topics: ["Computer Vision", "Clustering", "Face Recognition"],
    category: "AI & Computer Vision"
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
    category: "Developer Tools"
  },
  {
    title: "3D Pose Placement",
    description: "Sophisticated 3D pose placement system with depth analysis and real-time interaction.",
    icon: Architecture,
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
    category: "3D & Interactive"
  },
  {
    title: "TypeScript Splitter",
    description: "AST-based code analysis tool with smart context splitting and visualization.",
    icon: Code,
    route: "typescript-splitter",
    tags: ["Developer Tools", "Analysis"],
    techStack: ["TypeScript", "Node.js", "ESTree", "D3.js"],
    features: [
      "AST-based analysis",
      "Smart context detection",
      "Dependency tracking",
      "Code visualization"
    ],
    implementation: "Uses TypeScript Compiler API for AST analysis with custom context detection algorithms",
    topics: ["Static Analysis", "Code Processing", "Developer Tools"],
    category: "Developer Tools"
  },
  {
    title: "Webpack Knowledge Graph",
    description: "Generate comprehensive knowledge graphs from TypeScript codebases for deep insights.",
    icon: Hub,
    route: "webpack-graph",
    tags: ["Developer Tools", "Analysis", "Visualization"],
    techStack: ["TypeScript", "Webpack", "Neo4j", "D3.js", "React"],
    features: [
      "Dependency analysis",
      "Knowledge extraction",
      "Interactive visualization",
      "Code navigation"
    ],
    implementation: "Custom Webpack plugin with AST analysis and graph database integration",
    topics: ["Code Analysis", "Knowledge Graphs", "Visualization"],
    category: "Developer Tools"
  },
  {
    title: "Multi-view Generator",
    description: "Generate multiple views of 3D objects using advanced image synthesis techniques.",
    icon: ViewInAr,
    route: "multi-view",
    tags: ["3D", "Computer Vision", "AI"],
    techStack: ["PyTorch", "OpenGL", "CUDA", "JAX", "Three.js"],
    features: [
      "Novel view synthesis",
      "3D reconstruction",
      "Real-time rendering",
      "Multi-view consistency"
    ],
    implementation: "Neural radiance fields with custom view synthesis and optimization",
    topics: ["Neural Rendering", "3D Vision", "View Synthesis"],
    category: "3D & Interactive"
  },
  {
    title: "Docker Sandbox",
    description: "Secure nested Docker container execution with OverlayFS-based filesystem layering.",
    icon: Storage,
    route: "docker-sandbox",
    tags: ["Developer Tools", "Security", "Infrastructure"],
    techStack: ["Go", "Docker", "Linux", "OverlayFS", "Rust"],
    features: [
      "Nested containerization",
      "Filesystem isolation",
      "Resource management",
      "Security policies"
    ],
    implementation: "Custom container runtime with OverlayFS and seccomp-bpf security",
    topics: ["Containerization", "System Security", "Infrastructure"],
    category: "Developer Tools"
  },
  {
    title: "Thermal Vision",
    description: "Real-time thermal vision system with RGB-Thermal camera integration and visualization.",
    icon: Visibility,
    route: "thermal",
    tags: ["Computer Vision", "Hardware", "Real-time"],
    techStack: ["C++", "CUDA", "OpenCV", "Qt", "Python"],
    features: [
      "Multi-modal fusion",
      "Real-time processing",
      "Temperature mapping",
      "Custom calibration"
    ],
    implementation: "Custom camera drivers with real-time fusion and calibration pipeline",
    topics: ["Thermal Imaging", "Sensor Fusion", "Real-time Systems"],
    category: "AI & Computer Vision"
  },
  {
    title: "Wiki Research",
    description: "Advanced research and knowledge extraction system for Wikipedia with semantic analysis and data mining capabilities.",
    icon: Search,
    route: "wiki-research",
    tags: ["Research", "NLP", "Knowledge Discovery", "Information Extraction"],
    techStack: ["Python", "SpaCy", "Elasticsearch", "Neo4j", "FastAPI"],
    features: [
      "Semantic search",
      "Knowledge extraction",
      "Citation analysis",
      "Topic modeling"
    ],
    implementation: "Custom NLP pipeline with knowledge graph construction and semantic search",
    topics: ["Information Retrieval", "Knowledge Extraction", "Text Mining"],
    category: "Research & Analysis"
  },
  {
    title: "Disk Space Analyzer",
    description: "Interactive disk space visualization and analysis tool with real-time monitoring.",
    icon: PieChart,
    route: "disk-space",
    tags: ["Analysis", "System", "Visualization"],
    techStack: ["Rust", "WebAssembly", "D3.js", "SQLite", "React"],
    features: [
      "Real-time monitoring",
      "Interactive visualization",
      "Pattern detection",
      "Space optimization"
    ],
    implementation: "Efficient disk traversal with real-time updates and custom visualization engine",
    topics: ["System Tools", "Data Visualization", "Performance Analysis"],
    category: "Research & Analysis"
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
