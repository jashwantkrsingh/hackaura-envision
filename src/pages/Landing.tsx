import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lightbulb, Users, MessageCircle, Github, X } from "lucide-react";
import { useState } from "react";

const Landing = () => {
  const [showAbout, setShowAbout] = useState(false);

  const features = [
    {
      icon: Lightbulb,
      title: "💡 Find Ideas",
      description: "Discover innovative project ideas and get inspired by what others are building."
    },
    {
      icon: Users,
      title: "🤝 Find Teammates",
      description: "Connect with like-minded developers, designers, and creators for your next project."
    },
    {
      icon: MessageCircle,
      title: "🗨️ Community Hub",
      description: "Join discussions, share knowledge, and be part of an active developer community."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="gradient-gray min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Aura of Hackathons,<br />
              Ideas & Community ✨
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Find ideas, teammates, and mentors – all in one platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Join Now
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAbout(true)}
                className="btn-outline text-lg px-8 py-4"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join a community of creators, innovators, and builders working on the next big thing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card-hover text-center"
                >
                  {feature.title.includes("Find Ideas") ? (
                    <Link to="/find-ideas">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </Link>
                  ) : feature.title.includes("Find Teammates") ? (
                    <Link to="/find-teammates">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </Link>
                  ) : (
                    <Link to="/community-info">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-2xl font-bold">Hackora ✨</span>
            </div>
            
            <div className="flex space-x-8 text-gray-400">
              <button onClick={() => setShowAbout(true)} className="hover:text-white transition-colors">About</button>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              <a href="https://github.com/jashwantkrsingh/hackaura-envision.git" className="hover:text-white transition-colors flex items-center space-x-1">
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Hackora | Crafted with passion by Trio Tech.</p>
          </div>
        </div>
      </footer>

      {/* About Modal */}
      {showAbout && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full h-full bg-gray-900 overflow-y-auto"
          >
            <motion.div 
              className="flex justify-between items-center p-6 border-b border-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold">About Hackora</h2>
              <motion.button
                onClick={() => setShowAbout(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={28} />
              </motion.button>
            </motion.div>

            <motion.div 
              className="p-8 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              
              <div className="space-y-8 text-gray-300 leading-relaxed">
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                >
                  <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                    Hackora is a student-focused innovation platform designed to solve the problem of team 
                    formation, idea generation, and mentorship for hackathons, projects, and startups. It acts 
                    as an all-in-one ecosystem where students can find the right teammates, explore AI-generated 
                    project ideas, and collaborate through an active community.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="grid md:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-semibold text-white">Key Features</h3>
                    <ul className="space-y-4">
                      {[
                        "AI-powered project idea generation to spark creativity",
                        "Smart team matching based on skills and interests",
                        "Active community channels for real-time collaboration",
                        "Mentorship opportunities with industry professionals",
                        "Project showcase and portfolio building tools"
                      ].map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                        >
                          <span className="text-blue-400 mt-1 text-xl">•</span>
                          <span className="text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                    <motion.div 
                      className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
                    >
                      <p className="text-lg italic text-center">
                        "Empowering the next generation of innovators to build, collaborate, and create the future together."
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
                    >
                      <h4 className="text-lg font-semibold text-white">Why Choose Hackora?</h4>
                      <ul className="space-y-2 text-gray-300">
                        {[
                          "Streamlined team formation process",
                          "AI-driven idea generation",
                          "Real-time collaboration tools",
                          "Industry mentorship programs",
                          "Portfolio building features"
                        ].map((benefit, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.1 + index * 0.1, ease: "easeOut" }}
                          >
                            • {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                  <Link to="/auth">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowAbout(false)}
                      className="btn-primary text-lg px-12 py-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
                    >
                      Get Started Today
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Landing;