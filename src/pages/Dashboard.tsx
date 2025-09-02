import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Lightbulb, Users, MessageCircle } from "lucide-react";

const Dashboard = () => {
  const dashboardCards = [
    {
      icon: Lightbulb,
      title: "💡 Ideas Hub",
      description: "Discover and share innovative project ideas",
      path: "/ideas",
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Users,
      title: "🤝 Team Matching",
      description: "Find the perfect teammates for your projects",
      path: "/teams",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: MessageCircle,
      title: "🗨️ Community Hub",
      description: "Connect and collaborate with fellow developers",
      path: "/community",
      color: "from-green-500/20 to-teal-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-primary mb-12 text-center bg-gradient-to-r from-gray-900 to-black"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Hackora ✨
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your gateway to innovation, collaboration, and building the future together.
          </p>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {dashboardCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={card.path}>
                  <div className="card-hover h-full bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-center">{card.title}</h3>
                    <p className="text-gray-400 text-center leading-relaxed">{card.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Active Projects", value: "24" },
            { label: "Team Members", value: "156" },
            { label: "Ideas Shared", value: "89" },
            { label: "Communities", value: "12" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;