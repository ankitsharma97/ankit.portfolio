import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, Home, Briefcase, FolderOpen, UserCheck, Info, Mail, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const location = useLocation()

  // Theme toggle functionality
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem('theme', newTheme)
    
    if (newIsDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Initialize theme on component mount
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark'
    const isDarkTheme = theme === 'dark'
    setIsDark(isDarkTheme)
    
    if (isDarkTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Projects', path: '/projects', icon: FolderOpen },
    { name: 'Profile', path: '/profile', icon: UserCheck },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-dark-700">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Avatar */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 group">
              {/* Avatar */}
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center overflow-hidden border-2 border-primary-500/20 group-hover:border-primary-500 transition-colors duration-200">
                  <img 
                    src="/images/HERO.jpeg" 
                    alt="Ankit Sharma"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <User className="w-6 h-6 text-white hidden" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-900"></div>
              </div>
              
              {/* Logo Text */}
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-blue-600 dark:text-primary-500">Ankit Sharma</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Full Stack Developer</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg flex items-center space-x-2 ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50 dark:text-primary-500 dark:bg-primary-500/10'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-500/10 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-dark-700 bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Mobile Avatar Section */}
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-200 dark:border-dark-700 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center overflow-hidden border-2 border-primary-500/20">
                    <img 
                      src="/images/HERO.jpeg" 
                      alt="Ankit Sharma"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <User className="w-6 h-6 text-white hidden" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-dark-900"></div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">Ankit Sharma</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</div>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        location.pathname === item.path
                          ? 'text-blue-600 bg-blue-50 border border-blue-200 dark:text-primary-500 dark:bg-primary-500/10 dark:border-primary-500/20'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Theme Toggle in Mobile */}
              <div className="pt-4 border-t border-gray-200 dark:border-dark-700 mt-4">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Theme</div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-dark-800"
                >
                  <motion.div
                    initial={false}
                    animate={{ rotate: isDark ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDark ? (
                      <Sun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-blue-600" />
                    )}
                  </motion.div>
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 dark:border-dark-700 mt-4">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Contact</div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-700 dark:text-gray-300">ankit972125@gmail.com</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">+91 8115080798</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 