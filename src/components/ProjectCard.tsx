import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Eye, Code } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  year: string
  category: string
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  image,
  liveUrl, 
  githubUrl, 
  year, 
  category 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-dark-800 rounded-xl overflow-hidden border border-gray-200 dark:border-dark-700 hover:border-blue-500/50 dark:hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-primary-500/10"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-primary-500/20 dark:to-purple-500/20 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 dark:bg-primary-500 rounded-full text-white hover:bg-blue-700 dark:hover:bg-primary-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Eye className="w-5 h-5" />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 dark:bg-dark-700 rounded-full text-white hover:bg-gray-600 dark:hover:bg-dark-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Code className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        <div className="absolute top-4 left-4">
          <span className="bg-blue-500/20 dark:bg-primary-500/20 text-blue-600 dark:text-primary-500 px-2 py-1 rounded text-xs font-medium">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-gray-700/80 dark:bg-dark-700/80 text-gray-300 px-2 py-1 rounded text-xs">
            {year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-primary-500 transition-colors duration-200 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs hover:bg-blue-500/20 hover:text-blue-600 dark:hover:bg-primary-500/20 dark:hover:text-primary-500 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-700">
          <div className="flex gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-primary-500 hover:text-blue-500 dark:hover:text-primary-400 text-sm font-medium transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-sm font-medium transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-primary-500 transition-colors duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 