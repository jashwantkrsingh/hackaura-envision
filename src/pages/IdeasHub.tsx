import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Search, Filter, Plus, Heart, MessageCircle, Star } from "lucide-react";
import { useState } from "react";

const IdeasHub = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Dev", "Mobile", "AI/ML", "Blockchain", "IoT", "Game Dev"];

  const ideas = [
    {
      id: 1,
      title: "AI-Powered Code Review Assistant",
      description: "A tool that uses machine learning to automatically review code and suggest improvements, helping developers write better code faster.",
      category: "AI/ML",
      author: "Sarah Kim",
      likes: 24,
      comments: 8,
      tags: ["React", "Python", "OpenAI"]
    },
    {
      id: 2,
      title: "Sustainable Campus Food Tracker",
      description: "Mobile app to track food waste on campus, connect students with leftover meals, and promote sustainable eating habits.",
      category: "Mobile",
      author: "Mike Johnson",
      likes: 18,
      comments: 12,
      tags: ["React Native", "Firebase", "Sustainability"]
    },
    {
      id: 3,
      title: "Decentralized Study Groups",
      description: "Blockchain-based platform for creating and managing study groups with token rewards for active participation and knowledge sharing.",
      category: "Blockchain",
      author: "Alex Chen",
      likes: 31,
      comments: 15,
      tags: ["Solidity", "Web3", "Education"]
    },
    {
      id: 4,
      title: "Smart Home Energy Optimizer",
      description: "IoT system that learns your daily routines and automatically optimizes energy consumption in your home to reduce bills and carbon footprint.",
      category: "IoT",
      author: "Emily Davis",
      likes: 22,
      comments: 6,
      tags: ["Arduino", "Machine Learning", "Energy"]
    },
    {
      id: 5,
      title: "Virtual Reality Classroom",
      description: "Immersive VR platform for remote learning that makes online education more engaging through 3D environments and interactive experiences.",
      category: "Web Dev",
      author: "David Wong",
      likes: 29,
      comments: 19,
      tags: ["WebXR", "Three.js", "Education"]
    },
    {
      id: 6,
      title: "Mental Health Companion Bot",
      description: "AI chatbot that provides 24/7 mental health support for students, using NLP to detect emotional states and offer appropriate resources.",
      category: "AI/ML",
      author: "Jessica Liu",
      likes: 45,
      comments: 23,
      tags: ["Python", "NLP", "Mental Health"]
    }
  ];

  const filteredIdeas = ideas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-2">Ideas Hub 💡</h1>
            <p className="text-gray-400">Discover and share innovative project ideas</p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-2 mt-4 md:mt-0"
          >
            <Plus className="w-5 h-5" />
            <span>Generate New Idea</span>
          </motion.button>
        </div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-hackora w-full pl-12"
              placeholder="Search ideas..."
            />
          </div>

          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Ideas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea, index) => (
            <motion.div
              key={idea.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-hover"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">
                  {idea.category}
                </span>
                <Star className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              </div>

              <h3 className="text-xl font-bold mb-3">{idea.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{idea.description}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {idea.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">by {idea.author}</span>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{idea.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{idea.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">No ideas found matching your search.</div>
            <button className="btn-primary mt-4">Share your own idea!</button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default IdeasHub;