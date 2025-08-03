import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Home = () => {
  const featuredProjects = [
    {
      title: "PassGenerator",
      description: "A web application designed to generate secure and random passwords. Features include customizable password length, complexity, and user-friendly interface for generating and copying passwords.",
      technologies: ["React", "JavaScript", "CSS", "Vercel"],
      image: "/src/assets/images/passgenerator.png",
      liveUrl: "https://pass-generator-sepia.vercel.app/",
      githubUrl: "https://github.com/ankitsharma97/passGeneratorr",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "Currency Exchanger",
      description: "A web application for converting currencies in real-time. It provides up-to-date exchange rates and allows users to convert between multiple currencies with an intuitive interface.",
      technologies: ["React", "JavaScript", "API", "Vercel"],
      image: "/src/assets/images/currency-exchanger.png",
      liveUrl: "https://currency-changer-sepia.vercel.app/",
      githubUrl: "https://github.com/ankitsharma97/reactRouter",
      year: "2024",
      category: "Frontend"
    },
    {
      title: "Code with Friend",
      description: "A collaborative coding platform where users can create and share a room ID to code together in real-time. It features a shared editor for simultaneous coding and collaboration.",
      technologies: ["React", "Django", "WebSockets", "Real-time"],
      image: "/src/assets/images/code-with-friend.png",
      liveUrl: "https://code-sync-beta.vercel.app/",
      githubUrl: "https://github.com/ankitsharma97/codeSyncFrontend",
      year: "2024",
      category: "Full Stack"
    }
  ]

  const testimonials = [
    {
      name: "Fox Global Technologies",
      role: "Django Developer Intern",
      content: "Ankit worked on optimizing backend systems, developing scalable APIs, and implementing real-time features using Django Channels. Improved overall performance by 20% through Redis caching and collaborative teamwork.",
      rating: 5
    },
    {
      name: "CodSoft",
      role: "Web Developer Intern",
      content: "During this internship, Ankit developed responsive web applications, collaborated on UI/UX design, and implemented backend services. Successfully contributed to projects that enhanced user engagement and system efficiency.",
      rating: 5
    },
    {
      name: "Technical Skills",
      role: "Problem Solver",
      content: "Ankit has demonstrated exceptional problem-solving skills through platforms like LeetCode, GeeksforGeeks, and HackerRank. His expertise in DSA, C++, and web development makes him a valuable asset to any team.",
      rating: 5
    }
  ]

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how I transformed concepts into engaging digital experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience & Recognition
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and achievements in the tech industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl p-6 border border-dark-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <p className="text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 