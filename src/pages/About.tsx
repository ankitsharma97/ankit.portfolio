import { motion } from 'framer-motion'
import { Code, BookOpen, Users, Heart, Book } from 'lucide-react'

const About = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", level: "Advanced", projects: 8, icon: "⚡" },
        { name: "Python", level: "Advanced", projects: 12, icon: "🐍" },
        { name: "JavaScript", level: "Intermediate", projects: 6, icon: "🟨" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", level: "Intermediate", projects: 4, icon: "⚛️" },
        { name: "Django", level: "Advanced", projects: 8, icon: "🎯" },
        { name: "HTML/CSS", level: "Advanced", projects: 10, icon: "🌐" },
        { name: "Bootstrap", level: "Intermediate", projects: 3, icon: "🎨" }
      ]
    },
    {
      category: "Databases & APIs",
      skills: [
        { name: "SQL", level: "Intermediate", projects: 6, icon: "🗄️" },
        { name: "MongoDB", level: "Intermediate", projects: 4, icon: "🍃" },
        { name: "REST API", level: "Intermediate", projects: 5, icon: "🔗" }
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: "Intermediate", projects: 15, icon: "📚" },
        { name: "Linux", level: "Intermediate", projects: 3, icon: "🐧" },
        { name: "Docker", level: "Beginner", projects: 2, icon: "🐳" }
      ]
    }
  ]

  const experienceLevels = {
    "Advanced": { color: "text-green-500", bg: "bg-green-500/20", description: "Extensive experience, can mentor others" },
    "Intermediate": { color: "text-blue-500", bg: "bg-blue-500/20", description: "Comfortable with complex projects" },
    "Beginner": { color: "text-yellow-500", bg: "bg-yellow-500/20", description: "Learning and growing" }
  }

  const interests = [
    { icon: BookOpen, name: "Learning", description: "Always exploring new technologies" },
    { icon: Code, name: "Problem Solving", description: "LeetCode, GeeksforGeeks, HackerRank" },
    { icon: Users, name: "Collaboration", description: "Team projects and open source" },
    { icon: Heart, name: "Diligent Worker", description: "Committed to quality and excellence" },
    { icon: Book, name: "Continuous Growth", description: "Learning new things daily" },
    { icon: Code, name: "Full Stack", description: "Frontend and backend development" },
    { icon: Users, name: "Event Organization", description: "Organizing tech events" },
    { icon: Heart, name: "Positive Impact", description: "Making changes in society" }
  ]

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Me
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              As an IT student, I am deeply passionate about exploring the intricate world of technology 
              and its endless possibilities. From coding to algorithms, databases to artificial intelligence, 
              I am eager to delve into every facet of this dynamic field.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
                                 <h2 className="text-2xl font-bold mb-4">My Overview</h2>
                   <div className="space-y-4 text-gray-300">
                     <p>
                       As an IT student at Rajkiya Engineering College, Azamgarh, I am deeply passionate about exploring the intricate world of technology 
                       and its endless possibilities. From coding to algorithms, databases to artificial intelligence, 
                       I am eager to delve into every facet of this dynamic field.
                     </p>
                     <p>
                       With a strong foundation in programming languages like C++ and Python, coupled with my 
                       enthusiasm for problem-solving, I am excited to embark on this journey of discovery alongside 
                       my peers and mentors.
                     </p>
                     <p>
                       I believe that through collaboration, creativity, and continuous learning, we can harness 
                       the power of technology to drive positive change in our world.
                     </p>
                   </div>
              <div className="pt-4">
                <a
                  href="https://drive.google.com/file/d/1hY4I07xg3i7G_wr-z3b1ouODIU7saHvn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Open Resume
                  <BookOpen className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Column - Skills Overview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
              
              {/* Experience Level Legend */}
              <div className="bg-white dark:bg-dark-800 rounded-lg p-4 mb-6 border border-gray-200 dark:border-dark-700">
                <h3 className="font-semibold mb-3 text-blue-900 dark:text-white">Experience Levels</h3>
                <div className="space-y-2">
                  {Object.entries(experienceLevels).map(([level, config]) => (
                    <div key={level} className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${config.bg} ${config.color}`}>
                        {level}
                      </span>
                      <span className="text-sm text-blue-700 dark:text-gray-400">{config.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
                                   <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white dark:bg-dark-800 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-700">
                         <div className="text-2xl font-bold text-blue-600 dark:text-primary-500">20+</div>
                         <div className="text-sm text-blue-700 dark:text-gray-400">Projects Built</div>
                       </div>
                       <div className="bg-white dark:bg-dark-800 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-700">
                         <div className="text-2xl font-bold text-blue-600 dark:text-primary-500">1000+</div>
                         <div className="text-sm text-blue-700 dark:text-gray-400">Problems Solved</div>
                       </div>
                       <div className="bg-white dark:bg-dark-800 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-700">
                         <div className="text-2xl font-bold text-blue-600 dark:text-primary-500">3</div>
                         <div className="text-sm text-blue-700 dark:text-gray-400">Internships</div>
                       </div>
                       <div className="bg-white dark:bg-dark-800 rounded-lg p-4 text-center border border-gray-200 dark:border-dark-700">
                         <div className="text-2xl font-bold text-blue-600 dark:text-primary-500">5★</div>
                         <div className="text-sm text-blue-700 dark:text-gray-400">HackerRank C++</div>
                       </div>
                     </div>
            </motion.div>
          </div>

          {/* Skills Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Skills by Category</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary-500">{category.category}</h3>
                  <div className="space-y-3">
                    {category.skills.map((skill) => {
                      const levelConfig = experienceLevels[skill.level as keyof typeof experienceLevels]
                      return (
                        <div key={skill.name} className="flex items-center justify-between p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{skill.icon}</span>
                            <div>
                              <div className="font-medium text-blue-900 dark:text-white">{skill.name}</div>
                              <div className="text-xs text-blue-700 dark:text-gray-400">{skill.projects} projects</div>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${levelConfig.bg} ${levelConfig.color}`}>
                            {skill.level}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-500">Education</h3>
                <div className="space-y-4">
                                       <div className="p-4 bg-gray-100 dark:bg-dark-700 rounded-lg">
                       <div className="flex justify-between items-start mb-2">
                         <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor of Technology in Information Technology</h4>
                         <span className="text-sm text-gray-600 dark:text-gray-400">2022 - 2026</span>
                       </div>
                       <p className="text-blue-600 dark:text-primary-500 font-medium">Rajkiya Engineering College, Azamgarh</p>
                       <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                         <li>• Currently pursuing B.Tech in Information Technology</li>
                         <li>• Relevant coursework: Data Structures & Algorithms, OOP, OS, DBMS, Computer Networking</li>
                         <li>• Active participation in coding competitions and hackathons</li>
                       </ul>
                     </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-500">Certifications</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">Problem Basic Skill</span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">HackerRank</span>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">Cyber Security</span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Simplilearn</span>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">AWS S3 Basics</span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">AWS</span>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900 dark:text-white">Web Dev Workshop</span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">Microsoft</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* DSA Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Data Structures & Algorithms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700 text-center">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Arrays & Strings</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Advanced manipulation and optimization</p>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700 text-center">
                <div className="text-3xl mb-3">🔗</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Linked Lists</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Complex pointer operations</p>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700 text-center">
                <div className="text-3xl mb-3">🌳</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Trees & Graphs</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Traversal and pathfinding</p>
              </div>
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Dynamic Programming</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Optimization techniques</p>
              </div>
            </div>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Beyond the Code</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  className="bg-white dark:bg-dark-800 rounded-xl p-6 text-center border border-gray-200 dark:border-dark-700 hover:border-blue-500/50 dark:hover:border-primary-500/50 transition-colors duration-200"
                >
                  <interest.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{interest.name}</h3>
                  <p className="text-sm text-gray-400">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-16 bg-dark-800/50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">What I Value</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-primary-500">Continuous Learning</h3>
                <p className="text-gray-400 text-sm">
                  Always eager to learn new technologies and improve my skills
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-primary-500">Problem Solving</h3>
                <p className="text-gray-400 text-sm">
                  Passionate about solving complex problems and algorithmic challenges
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 text-primary-500">Collaboration</h3>
                <p className="text-gray-400 text-sm">
                  Love interacting with new people and working in teams to achieve goals
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 