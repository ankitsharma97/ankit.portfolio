import { motion } from 'framer-motion'
import { ArrowRight, Code, Zap, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const texts = [
    "Full Stack Developer",
    "Problem Solver", 
    "DSA Enthusiast",
    "ML/AI Explorer"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium"
              >
                <Code className="w-4 h-4 mr-2" />
                Available for new projects
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Hi, I'm <span className="text-primary-500">Ankit Sharma</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="h-12 flex items-center"
              >
                <span className="text-2xl md:text-3xl text-gray-300 mr-2">I'm a</span>
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl text-primary-500 font-bold"
                >
                  {texts[currentText]}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-2xl md:text-3xl text-primary-500 ml-1"
                >
                  |
                </motion.span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-400 max-w-2xl"
              >
                Currently pursuing Bachelor of Technology in Information Technology at Rajkiya Engineering College, Azamgarh (2022-2026). 
                I'm a Software Engineer Intern at Meteorite Labs with expertise in Next.js, TypeScript, and AI integration. 
                I'm passionate about problem-solving and have solved 1000+ problems across competitive programming platforms.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://drive.google.com/file/d/1jX1YCD8-KEWnj8mSH5Wkj0EKpIxgzbbq/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Open Resume
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Let's Connect
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-4 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">20+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">1000+</div>
                <div className="text-sm text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">3</div>
                <div className="text-sm text-gray-400">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">5★</div>
                <div className="text-sm text-gray-400">HackerRank C++</div>
              </div>
            </motion.div>
          </motion.div>

                         {/* Right Column - Visual Element */}
               <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 className="relative"
               >
                 <div className="relative bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl p-8">
                   <img 
                     src="/src/assets/images/HERO.jpeg" 
                     alt="Ankit Sharma - Full Stack Developer"
                     className="w-full h-auto rounded-xl mb-6"
                   />
                   <div className="grid grid-cols-2 gap-4">
                     <div className="bg-dark-800 rounded-lg p-4">
                       <Zap className="w-8 h-8 text-primary-500 mb-2" />
                       <h3 className="font-semibold">Problem Solver</h3>
                       <p className="text-sm text-gray-400">LeetCode, GeeksforGeeks</p>
                     </div>
                     <div className="bg-dark-800 rounded-lg p-4">
                       <Users className="w-8 h-8 text-primary-500 mb-2" />
                       <h3 className="font-semibold">Team Player</h3>
                       <p className="text-sm text-gray-400">Collaborative development</p>
                     </div>
                     <div className="bg-dark-800 rounded-lg p-4">
                       <Code className="w-8 h-8 text-primary-500 mb-2" />
                       <h3 className="font-semibold">Full Stack</h3>
                       <p className="text-sm text-gray-400">React, Django, Python</p>
                     </div>
                     <div className="bg-dark-800 rounded-lg p-4">
                       <Zap className="w-8 h-8 text-primary-500 mb-2" />
                       <h3 className="font-semibold">ML/AI</h3>
                       <p className="text-sm text-gray-400">Learning & exploring</p>
                     </div>
                   </div>
                 </div>
               </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 