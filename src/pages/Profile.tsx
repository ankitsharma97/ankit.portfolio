import { motion } from 'framer-motion'
import { ExternalLink, Trophy } from 'lucide-react'

const Profile = () => {
  const profiles = [
    {
      name: "LeetCode",
      description: "Sharpen coding skills, tackle algorithmic challenges, enhance problem-solving abilities, and prepare for technical interviews.",
      url: "https://leetcode.com/u/ankit972125/",
      icon: "💻",
      category: "Problem Solving",
      achievements: ["Algorithm Practice", "Data Structures", "Competitive Programming"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      name: "GitHub",
      description: "Showcases projects, fosters collaboration, and highlights coding prowess with open source contributions.",
      url: "https://github.com/ankitsharma97",
      icon: "🐙",
      category: "Code Repository",
      achievements: ["15+ Projects", "Open Source", "Collaboration"],
      color: "from-gray-500/20 to-black/20"
    },
    {
      name: "LinkedIn",
      description: "Profiles professional experience and connects with peers in the tech industry.",
      url: "https://www.linkedin.com/in/ankit-sharma-64aa32255/",
      icon: "💼",
      category: "Professional Network",
      achievements: ["Networking", "Career Growth", "Industry Connections"],
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      name: "GeeksforGeeks",
      description: "Enhance problem-solving skills, practice algorithms and data structures, and prepare for technical interviews.",
      url: "https://www.geeksforgeeks.org/user/ankit_sharma0616/",
      icon: "📚",
      category: "Learning Platform",
      achievements: ["DSA Practice", "Interview Prep", "Skill Development"],
      color: "from-green-500/20 to-green-600/20"
    },
    {
      name: "X-Twitter",
      description: "Share insights, connect with the tech community, and stay updated with latest trends.",
      url: "https://twitter.com/ANKITSH0161",
      icon: "🐦",
      category: "Social Media",
      achievements: ["Tech Community", "Knowledge Sharing", "Networking"],
      color: "from-blue-400/20 to-blue-500/20"
    },
    {
      name: "HackerRank",
      description: "Sharpen coding skills, tackle algorithmic challenges, enhance problem-solving abilities, and prepare for technical interviews.",
      url: "https://www.hackerrank.com/profile/ankit972125/",
      icon: "⚡",
      category: "Coding Platform",
      achievements: ["Skill Assessment", "Problem Solving", "Certification"],
      color: "from-green-400/20 to-green-500/20"
    }
  ]

  const achievements = [
    {
      title: "Problem Solver",
      description: "Consistent practice on LeetCode, GeeksforGeeks, and HackerRank",
      icon: "🧠",
      stats: "500+ Problems Solved"
    },
    {
      title: "Project Creator",
      description: "Developed 15+ full-stack projects with modern technologies",
      icon: "🚀",
      stats: "15+ Projects"
    },
    {
      title: "Team Player",
      description: "Successfully completed internships with collaborative development",
      icon: "👥",
      stats: "2 Internships"
    },
    {
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving skills",
      icon: "📈",
      stats: "Always Learning"
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
              My Profiles & Achievements
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Explore my coding profiles, professional networks, and achievements across various platforms.
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Coding Profiles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile, index) => (
                <motion.div
                  key={profile.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${profile.color} p-6`}>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl">{profile.icon}</div>
                      <div className="text-right">
                        <h3 className="font-bold text-white">{profile.name}</h3>
                        <p className="text-sm text-gray-300">{profile.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {profile.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-primary-500" />
                        Key Features
                      </h4>
                      <div className="space-y-1">
                        {profile.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-xs text-gray-400">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visit Button */}
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary-500/10 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors duration-200 group-hover:scale-105"
                    >
                      <span>Visit Profile</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-colors duration-200 text-center"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{achievement.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm font-medium">
                    {achievement.stats}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-dark-800/50 rounded-2xl p-8 border border-dark-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Profile Statistics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">6</div>
                <div className="text-sm text-gray-400">Active Profiles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">500+</div>
                <div className="text-sm text-gray-400">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
                <div className="text-sm text-gray-400">Projects Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-2">2</div>
                <div className="text-sm text-gray-400">Internships</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Profile 