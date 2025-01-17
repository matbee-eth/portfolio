# AI-Powered Project Portfolio

A modern, React-based portfolio site featuring an advanced semantic search system to showcase projects. Built with Material-UI and TensorFlow.js for intelligent project discovery.

## 🌟 Features

### Semantic Search
- Real-time project search using TensorFlow.js and Universal Sentence Encoder
- Natural language understanding for better project matching
- Automatic query enrichment for image and tech-related searches
- Pre-computed embeddings for fast search results

### Smart Project Organization
- Category-based project grouping (AI & Computer Vision, 3D & Interactive, Developer Tools, etc.)
- Intelligent related projects suggestions based on:
  - Similar technologies
  - Shared tags
  - Related categories
- Dynamic project cards with tag visualization

### Modern UI/UX
- Clean, responsive Material-UI design
- Interactive project cards with hover effects
- Compact tag display for technologies and features
- Consistent layout across all project pages

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/github-portfolio.git

# Install dependencies
cd github-portfolio
npm install

# Generate project embeddings
npm run generate-embeddings

# Start development server
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

## 🛠 Technology Stack

### Frontend
- React 18
- Material-UI v5
- React Router v6
- Emotion for styled components

### AI/ML
- TensorFlow.js
- Universal Sentence Encoder
- Custom semantic search implementation

### Development
- Vite
- ESLint
- Concurrent development server

## 📁 Project Structure

```
github-portfolio/
├── src/
│   ├── components/        # Reusable React components
│   ├── data/             # Project data and configuration
│   ├── routes/           # Individual project pages
│   ├── utils/            # Utility functions and AI features
│   └── App.jsx           # Main application component
├── scripts/
│   └── generateEmbeddings.mjs  # Embedding generation script
├── server/
│   └── index.js          # Express server for API endpoints
└── public/               # Static assets
```

## 🔍 Key Components

### ProjectCard
- Displays project information with consistent styling
- Shows technologies and tags
- Handles long descriptions with elegant truncation

### RelatedProjects
- Suggests similar projects based on multiple factors
- Appears at the bottom of each project page
- Uses the same card component for consistency

### Semantic Search
- Processes natural language queries
- Enriches search terms for better matching
- Uses pre-computed embeddings for performance

## 📝 Adding New Projects

1. Add your project data to `src/data/projects.js`:
```javascript
{
  title: "Project Name",
  description: "Project description",
  icon: IconComponent,
  route: "project-route",
  tags: ["tag1", "tag2"],
  techStack: ["tech1", "tech2"],
  features: ["feature1", "feature2"],
  implementation: "Implementation details",
  topics: ["topic1", "topic2"],
  category: "Project Category"
}
```

2. Create a new route component in `src/routes/`
3. Add the route to `App.jsx`
4. Run `npm run generate-embeddings` to update search capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Material-UI for the component library
- TensorFlow.js team for the machine learning capabilities
- React team for the amazing framework
