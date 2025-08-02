import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    // Frontend Projects
    {
      title: "Facial Recognition System",
      description: "AI-Powered facial recognition platform with real-time detection and recognition using AI. Built with TypeScript and modern web technologies for secure and privacy-focused implementation.",
      technologies: ["TypeScript", "AI", "Web Technologies", "Privacy"],
      image: "/project1.jpg",
      liveUrl: "https://github.com/ankitsharma97/Facial-recognition-system",
      githubUrl: "https://github.com/ankitsharma97/Facial-recognition-system",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "Artistically Platform",
      description: "Creative platform for artists with modern TypeScript-based architecture. Features artist portfolio showcase, interactive gallery, and community features with responsive design.",
      technologies: ["TypeScript", "React", "Creative Platform", "Responsive Design"],
      image: "/project2.jpg",
      liveUrl: "https://github.com/ankitsharma97/artistically-platform",
      githubUrl: "https://github.com/ankitsharma97/artistically-platform",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "Travel Norway",
      description: "Comprehensive travel guide for Norway destinations with interactive maps and location-based features. Includes travel planning, itinerary management, and beautiful UI with stunning photography.",
      technologies: ["JavaScript", "Interactive Maps", "Travel Planning", "UI/UX"],
      image: "/project3.jpg",
      liveUrl: "https://github.com/ankitsharma97/travel-norway",
      githubUrl: "https://github.com/ankitsharma97/travel-norway",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "Huzzle",
      description: "Modern web application with full-stack JavaScript implementation. Features user authentication, profile management, real-time features, and dynamic content with scalable architecture.",
      technologies: ["JavaScript", "Full-stack", "Authentication", "Real-time"],
      image: "/project4.jpg",
      liveUrl: "https://github.com/ankitsharma97/huzzle",
      githubUrl: "https://github.com/ankitsharma97/huzzle",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "TeenHive",
      description: "Age-appropriate social networking platform for teens with safe and moderated community features. Includes interactive content sharing, messaging, and parental controls with safety measures.",
      technologies: ["React", "Social Platform", "Safety Features", "Moderation"],
      image: "/project5.jpg",
      liveUrl: "https://github.com/ankitsharma97/teenhive",
      githubUrl: "https://github.com/ankitsharma97/teenhive",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "PassGenerator",
      description: "Secure password generator with customizable password length and complexity. Features user-friendly interface for generating passwords with copy to clipboard functionality.",
      technologies: ["React", "JavaScript", "CSS", "Vercel"],
      image: "/project6.jpg",
      liveUrl: "https://pass-generator-sepia.vercel.app/",
      githubUrl: "https://github.com/ankitsharma97/passGeneratorr",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "Currency Exchanger",
      description: "Real-time currency converter with up-to-date exchange rates and multiple currency support. Features intuitive user interface for seamless currency conversion.",
      technologies: ["React", "JavaScript", "API", "Vercel"],
      image: "/project7.jpg",
      liveUrl: "https://currency-changer-sepia.vercel.app/",
      githubUrl: "https://github.com/ankitsharma97/reactRouter",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "Atomic-saga",
      description: "Production-ready TypeScript toolkit for managing distributed transactions using the Saga orchestration pattern. Features idempotent API handling, compensating workflows, and transactional outbox for data consistency.",
      technologies: ["TypeScript", "Distributed Systems", "Saga Pattern", "NPM Package"],
      image: "/project8.jpg",
      liveUrl: "https://www.npmjs.com/package/atomic-saga/",
      githubUrl: "https://github.com/ankitsharma97/atomic-saga",
      year: "2024",
      category: "Frontend"
    },

    // Backend Projects
    {
      title: "CodeSync Backend",
      description: "Python backend for real-time code synchronization with WebSocket implementation for live collaboration. Features multi-language support, syntax highlighting, and user authentication.",
      technologies: ["Python", "WebSockets", "Real-time", "Multi-language"],
      image: "/project9.jpg",
      liveUrl: "https://github.com/ankitsharma97/codeSyncBackend",
      githubUrl: "https://github.com/ankitsharma97/codeSyncBackend",
      year: "2024",
      category: "Backend"
    },
    {
      title: "Leave Management",
      description: "Python-based leave management application with employee leave request and approval workflow. Features calendar integration, leave tracking, and admin dashboard for HR management.",
      technologies: ["Python", "Leave Management", "Workflow", "HR System"],
      image: "/project10.jpg",
      liveUrl: "https://github.com/ankitsharma97/leaveManagement",
      githubUrl: "https://github.com/ankitsharma97/leaveManagement",
      year: "2024",
      category: "Backend"
    },
    {
      title: "DJ Chess",
      description: "Django-based chess game platform with real-time chess gameplay using WebSocket. Features user authentication, game history, and responsive chess board interface.",
      technologies: ["Django", "Python", "WebSocket", "Chess Game"],
      image: "/project11.jpg",
      liveUrl: "https://github.com/ankitsharma97/djchess",
      githubUrl: "https://github.com/ankitsharma97/djchess",
      year: "2024",
      category: "Backend"
    },
    {
      title: "Stock Exchange",
      description: "Python-based stock market data analysis platform with real-time stock price tracking and charts. Features portfolio management, investment tracking, and data visualization.",
      technologies: ["Python", "Stock Analysis", "Data Visualization", "Portfolio Management"],
      image: "/project12.jpg",
      liveUrl: "https://github.com/ankitsharma97/stock-ex",
      githubUrl: "https://github.com/ankitsharma97/stock-ex",
      year: "2024",
      category: "Backend"
    },
    {
      title: "Code Interpreter",
      description: "AI code analysis tool with Python-based code interpretation system. Features AI-powered code analysis, multi-language support, and intelligent optimization recommendations.",
      technologies: ["Python", "AI", "Code Analysis", "Multi-language"],
      image: "/project13.jpg",
      liveUrl: "https://github.com/ankitsharma97/code_interpreter",
      githubUrl: "https://github.com/ankitsharma97/code_interpreter",
      year: "2024",
      category: "Backend"
    },

    // Full Stack Projects
    {
      title: "StudySphere",
      description: "Comprehensive educational management system using Django with role-based access control and JWT authentication. Features analytics dashboard and automated workflows achieving 70% reduction in administrative workload.",
      technologies: ["Django", "PostgreSQL", "JWT", "Analytics"],
      image: "/project14.jpg",
      liveUrl: "https://college-management-system-1.onrender.com",
      githubUrl: "https://github.com/ankitsharma97/College-Management-System",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "Code with Friend",
      description: "Collaborative coding platform with real-time collaborative coding using React, Socket.io and Node.js supporting 20+ concurrent users. Features room-based sharing system and shared editor for simultaneous coding.",
      technologies: ["React", "Socket.io", "Node.js", "Real-time"],
      image: "/project15.jpg",
      liveUrl: "https://code-sync-beta.vercel.app/",
      githubUrl: "https://github.com/ankitsharma97/codeSyncFrontend",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "Real-time Chatting",
      description: "Real-time chat application built using Django Channels and WebSockets. Features real-time messaging capabilities and responsive interface across devices.",
      technologies: ["Django", "WebSockets", "Real-time", "Responsive"],
      image: "/project16.jpg",
      liveUrl: "https://chat-frontend-ashy-nu.vercel.app/",
      githubUrl: "https://github.com/ankitsharma97/chatFrontend",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "Blog Application",
      description: "Modern blog platform built with Django and modern design principles. Features responsive layouts, optimized performance, and seamless reading experience on all devices.",
      technologies: ["Django", "Python", "PostgreSQL", "Render"],
      image: "/project17.jpg",
      liveUrl: "https://blog-2-0-s2j0.onrender.com/",
      githubUrl: "https://github.com/ankitsharma97/blog",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "College Management System",
      description: "Comprehensive management system for colleges with student records, course management, and faculty administration features. Built with robust Django-based architecture.",
      technologies: ["Django", "Python", "PostgreSQL", "Render"],
      image: "/project18.jpg",
      liveUrl: "https://college-management-system-1.onrender.com/",
      githubUrl: "https://github.com/ankitsharma97/College-Management-System",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured e-commerce website with product browsing, shopping cart functionality, and secure payment integration. Features seamless shopping experience with modern UI.",
      technologies: ["Django", "Python", "PostgreSQL", "Render"],
      image: "/project19.jpg",
      liveUrl: "https://ecom-mba5.onrender.com/",
      githubUrl: "https://github.com/ankitsharma97/ecommerce",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "ChatBot",
      description: "AI-powered chatbot integrated with Django and OpenAI API. Features enhanced conversational capabilities and interactive user experiences with modern AI integration.",
      technologies: ["Django", "Python", "OpenAI API", "Render"],
      image: "/project20.jpg",
      liveUrl: "https://chats-p6yb.onrender.com/",
      githubUrl: "https://github.com/ankitsharma97/chatbot",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "Hospital Management System",
      description: "Healthcare management platform with patient records, appointment booking, and role-based access control for medical staff. Features intuitive admin panel and comprehensive healthcare workflows.",
      technologies: ["Django", "Python", "PostgreSQL", "Render"],
      image: "/project21.jpg",
      liveUrl: "https://hms-smxp.onrender.com/",
      githubUrl: "https://github.com/ankitsharma97/hospital-management",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking platform with follow/unfollow features, like/dislike functionality, and profile editing capabilities. Built with modern design principles and scalable architecture.",
      technologies: ["Django", "Python", "PostgreSQL", "Render"],
      image: "/project22.jpg",
      liveUrl: "https://socialmedia-c039.onrender.com/",
      githubUrl: "https://github.com/ankitsharma97/social-media",
      year: "2024",
      category: "Full Stack"
    },
    {
      title: "Office Employee Management",
      description: "Employee management system with CRUD operations for effective employee tracking and administrative tasks. Features comprehensive employee database and management tools.",
      technologies: ["Django", "Python", "PostgreSQL", "Render"],
      image: "/project23.jpg",
      liveUrl: "https://osme-00.onrender.com/",
      githubUrl: "https://github.com/ankitsharma97/employee-management",
      year: "2024",
      category: "Full Stack"
    },

    // Machine Learning Projects
    {
      title: "Heart Disease Prediction",
      description: "ML-based health prediction system using trained predictive models with patient records. Features feature selection, model integration, and Django-based web application for medical diagnosis.",
      technologies: ["Python", "Machine Learning", "Django", "Render"],
      image: "/project24.jpg",
      liveUrl: "https://heart-disease-prediction-project.onrender.com/",
      githubUrl: "https://github.com/ankitsharma97/heart-disease-prediction",
      year: "2024",
      category: "ML/AI"
    },
    {
      title: "Skin Cancer Prediction",
      description: "AI-powered medical detection system for skin cancer using computer vision and machine learning algorithms. Features FastAPI-based web application with user-friendly image upload features.",
      technologies: ["Python", "FastAPI", "Machine Learning", "Computer Vision"],
      image: "/project25.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/ankitsharma97/skin-cancer-prediction",
      year: "2024",
      category: "ML/AI"
    }
  ]

  const filters = ['All', 'Frontend', 'Backend', 'Full Stack', 'ML/AI']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My Projects
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my latest work and see how I bring ideas to life through code.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Projects 