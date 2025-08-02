import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Award, Users, Zap, Code } from 'lucide-react'

const Experience = () => {
  const internships = [
    {
      company: "Meteorite Labs",
      position: "Software Engineer Intern",
      duration: "April 2025 - Present",
      location: "Remote",
      certificate: "",
      description: "Engineered responsive interfaces with Next.js and TypeScript, resulting in seamless user experiences. Integrated Strapi CMS using REST/GraphQL APIs while implementing AI features via OpenAI/Pinecone. Developed a modular component library that enhanced development efficiency and code reusability by 25%.",
      achievements: [
        "Engineered responsive interfaces with Next.js and TypeScript",
        "Integrated Strapi CMS using REST/GraphQL APIs",
        "Implemented AI features via OpenAI/Pinecone",
        "Developed modular component library enhancing efficiency by 25%",
        "Created seamless user experiences across platforms",
        "Collaborated on cutting-edge AI integration projects"
      ],
      technologies: ["Next.js", "TypeScript", "React", "Strapi CMS", "OpenAI API", "Pinecone", "GraphQL"],
      image: "/meteorite.png"
    },
    {
      company: "Hirreetech Consulting and Services",
      position: "Software Developer (Frontend) Intern",
      duration: "November 2024 - May 2025",
      location: "Remote",
      certificate: "https://drive.google.com/file/d/1eQd0v20DBB6BnDypI2m8tC4RBxvFTdGb/view?usp=drive_link",
      description: "Built production-quality interfaces using React, Redux, and Tailwind CSS with efficient API integration. Reduced application downtime by 20% through systematic debugging and performance optimization. Improved user engagement metrics by 15% through UI/UX enhancements and cross-device compatibility.",
      achievements: [
        "Built production-quality interfaces using React, Redux, and Tailwind CSS",
        "Reduced application downtime by 20% through systematic debugging",
        "Improved user engagement metrics by 15% through UI/UX enhancements",
        "Implemented efficient API integration and performance optimization",
        "Ensured cross-device compatibility and responsive design",
        "Collaborated with development teams for seamless delivery"
      ],
      technologies: ["React", "Redux", "Tailwind CSS", "JavaScript", "API Integration", "Performance Optimization"],
      image: "/hirreetech.png"
    },
    {
      company: "Fox Global Technologies",
      position: "Django Developer Intern",
      duration: "May 2024 - September 2024",
      location: "Remote",
      certificate: "https://drive.google.com/file/d/1U6vSMzlyrUmz2B0K9lUc8sNmpgRsnGII/view?usp=drive_link",
      description: "Accelerated API response times by 20% through Django backend optimization and RESTful architecture. Implemented task automation with Celery and enhanced database performance through query optimization. Streamlined deployment processes using Docker and CI/CD workflows in collaborative team environments.",
      achievements: [
        "Accelerated API response times by 20% through Django backend optimization",
        "Implemented task automation with Celery",
        "Enhanced database performance through query optimization",
        "Streamlined deployment processes using Docker and CI/CD workflows",
        "Worked in collaborative team environments",
        "Implemented RESTful architecture and best practices"
      ],
      technologies: ["Django", "Python", "Celery", "Docker", "CI/CD", "PostgreSQL", "REST API"],
      image: "/dj_intern.png"
    }
  ]

  const certifications = [
    {
      name: "Problem Basic Skill",
      issuer: "HackerRank",
      date: "2024",
      certificate: "https://drive.google.com/file/d/1xkRcQ0HJ2t1ZTghIj3AkWeCopFPWBdbq/view?usp=sharing",
      image: "/prob.png"
    },
    {
      name: "Cyber Security",
      issuer: "Simplilearn",
      date: "2024",
      certificate: "https://drive.google.com/file/d/1Xl_jCteXrmoN5aArG-Tr4lTka7mbRGQ_/view?usp=drive_link",
      image: "/simple.png"
    },
    {
      name: "AWS S3 Basics",
      issuer: "AWS",
      date: "2024",
      certificate: "https://drive.google.com/file/d/1et4s5CHgIjFAt3f5fj95yzgPh741ONIB/view?usp=sharing",
      image: "/aws.png"
    },
    {
      name: "Web Dev Workshop",
      issuer: "Microsoft",
      date: "2024",
      certificate: "https://drive.google.com/file/d/1kcD4EwBRqB6uy9Jbn6pB8y4gCFPPDquO/view?usp=drive_link",
      image: "/ms.png"
    }
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
              Experience & Certifications
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              My professional journey through internships and certifications that have shaped my technical expertise.
            </p>
          </motion.div>

          {/* Internships Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Internship Experience</h2>
            <div className="space-y-12">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-dark-800 rounded-xl p-8 border border-dark-700"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left - Image and Basic Info */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-4">🏢</div>
                        <h3 className="text-xl font-bold text-primary-500">{internship.company}</h3>
                        <p className="text-gray-400">{internship.position}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-primary-500" />
                          <span className="text-gray-300">{internship.duration}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-primary-500" />
                          <span className="text-gray-300">{internship.location}</span>
                        </div>
                        <a
                          href={internship.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-primary-500 hover:text-primary-400 transition-colors duration-200"
                        >
                          <Award className="w-5 h-5" />
                          <span>View Certificate</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Right - Details */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Description</h4>
                        <p className="text-gray-300 leading-relaxed">{internship.description}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-primary-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-primary-500" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-primary-500/20 text-primary-500 px-3 py-1 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Programming Languages</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">JavaScript</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">TypeScript</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Python</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">C/C++</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Java</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">SQL</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.6 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Frontend Development</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">React.js</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Next.js</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">HTML5/CSS3</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Tailwind CSS</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Material-UI</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Bootstrap</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Redux</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.7 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Backend Development</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Django</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Django REST Framework</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">FastAPI</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Node.js</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Express.js</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Socket.io</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Celery</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.8 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Database & DevOps</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">PostgreSQL</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">MongoDB</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">MySQL</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Redis</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">AWS</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Docker</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Vercel</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Heroku</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.9 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">AI/ML & Tools</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">OpenAI API</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">LangChain</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Vector Databases</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Pinecone</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Git</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">Advanced</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Jira</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Postman</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Trello</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">Intermediate</span>
                   </div>
                 </div>
               </motion.div>

                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.0 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700"
               >
                 <h3 className="text-xl font-bold mb-4 text-primary-500">Achievements & Ratings</h3>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">HackerRank C/C++</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">5★ Rating</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">HackerRank Python</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">3★ Rating</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Problems Solved</span>
                     <span className="text-sm text-green-500 bg-green-500/20 px-2 py-1 rounded">1000+</span>
                   </div>
                   <div className="flex justify-between items-center p-3 bg-dark-700 rounded-lg">
                     <span className="font-medium text-white">Freelance Projects</span>
                     <span className="text-sm text-blue-500 bg-blue-500/20 px-2 py-1 rounded">5+ Delivered</span>
                   </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                             <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.2 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700 text-center"
               >
                 <div className="text-4xl mb-4">📊</div>
                 <h3 className="font-semibold text-white mb-2">1000+ Problems Solved</h3>
                 <p className="text-sm text-gray-400">Across GeeksforGeeks, LeetCode, and HackerRank</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.3 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700 text-center"
               >
                 <div className="text-4xl mb-4">🚀</div>
                 <h3 className="font-semibold text-white mb-2">20+ Projects Built</h3>
                 <p className="text-sm text-gray-400">Using modern technologies and best practices</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.4 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700 text-center"
               >
                 <div className="text-4xl mb-4">💼</div>
                 <h3 className="font-semibold text-white mb-2">3 Successful Internships</h3>
                 <p className="text-sm text-gray-400">Real-world project experience</p>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 1.5 }}
                 className="bg-dark-800 rounded-xl p-6 border border-dark-700 text-center"
               >
                 <div className="text-4xl mb-4">⭐</div>
                 <h3 className="font-semibold text-white mb-2">5★ HackerRank C++</h3>
                 <p className="text-sm text-gray-400">Top-rated problem solver</p>
               </motion.div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                  className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-colors duration-200"
                >
                  <div className="text-center space-y-4">
                    <div className="bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-lg p-4">
                      <div className="text-3xl mb-2">🏆</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{cert.name}</h3>
                      <p className="text-sm text-gray-400">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.date}</p>
                    </div>
                    <a
                      href={cert.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center text-sm"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Experience 