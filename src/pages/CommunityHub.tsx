import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Send, Hash, Users, TrendingUp, MessageCircle } from "lucide-react";
import { useState } from "react";

const CommunityHub = () => {
  const [selectedChannel, setSelectedChannel] = useState("general");
  const [message, setMessage] = useState("");

  const channels = [
    { id: "general", name: "general", members: 1247, unread: 0 },
    { id: "announcements", name: "announcements", members: 1247, unread: 2 },
    { id: "web-dev", name: "web-dev", members: 423, unread: 0 },
    { id: "ai-ml", name: "ai-ml", members: 312, unread: 5 },
    { id: "mobile-dev", name: "mobile-dev", members: 287, unread: 0 },
    { id: "blockchain", name: "blockchain", members: 156, unread: 1 },
    { id: "design", name: "design", members: 298, unread: 0 },
    { id: "career-advice", name: "career-advice", members: 567, unread: 3 },
    { id: "random", name: "random", members: 892, unread: 0 }
  ];

  const messages = [
    {
      id: 1,
      user: "Sarah Kim",
      avatar: "SK",
      message: "Just launched my new React project! Would love to get some feedback from the community 🚀",
      timestamp: "2:34 PM",
      isOwn: false
    },
    {
      id: 2,
      user: "Mike Johnson",
      avatar: "MJ",
      message: "That's awesome! I'd be happy to take a look. Do you have the GitHub repo link?",
      timestamp: "2:35 PM",
      isOwn: false
    },
    {
      id: 3,
      user: "You",
      avatar: "YO",
      message: "Hey everyone! I'm looking for a team member who's good with Python and ML. Working on an exciting AI project for sustainability 🌱",
      timestamp: "2:36 PM",
      isOwn: true
    },
    {
      id: 4,
      user: "Emily Davis",
      avatar: "ED",
      message: "I might be interested! I have experience with scikit-learn and TensorFlow. Can you share more details?",
      timestamp: "2:37 PM",
      isOwn: false
    },
    {
      id: 5,
      user: "Alex Chen",
      avatar: "AC",
      message: "Count me in too! I've been working on environmental data analysis projects. This sounds right up my alley!",
      timestamp: "2:38 PM",
      isOwn: false
    },
    {
      id: 6,
      user: "You",
      avatar: "YO",
      message: "Perfect! I'll DM you both with the project details. This community is amazing! 💪",
      timestamp: "2:39 PM",
      isOwn: true
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex h-[calc(100vh-12rem)]">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-80 bg-gray-900 border border-gray-800 rounded-2xl mr-6 overflow-hidden"
          >
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold mb-4">Hackora Community</h2>
              <div className="flex items-center space-x-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span>1,247 members online</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Channels</h3>
              <div className="space-y-1">
                {channels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                      selectedChannel === channel.id
                        ? "bg-gray-700 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Hash className="w-4 h-4" />
                      <span>{channel.name}</span>
                    </div>
                    {channel.unread > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {channel.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-800 mt-auto">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">Trending</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">#hackathon2024</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">#react-tips</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">#job-opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chat Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-gray-900 border border-gray-800 rounded-2xl flex flex-col overflow-hidden"
          >
            {/* Chat Header */}
            <div className="p-6 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <Hash className="w-6 h-6 text-gray-400" />
                <h1 className="text-2xl font-bold">{selectedChannel}</h1>
                <span className="text-gray-400">
                  • {channels.find(c => c.id === selectedChannel)?.members} members
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-2xl ${msg.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
                      {msg.avatar}
                    </div>
                    <div className={`p-4 rounded-2xl ${
                      msg.isOwn 
                        ? 'bg-white text-black rounded-br-md' 
                        : 'bg-gray-700 text-white rounded-bl-md'
                    }`}>
                      {!msg.isOwn && (
                        <div className="font-semibold text-sm mb-1">{msg.user}</div>
                      )}
                      <div className="leading-relaxed">{msg.message}</div>
                      <div className={`text-xs mt-2 ${msg.isOwn ? 'text-gray-600' : 'text-gray-400'}`}>
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-6 border-t border-gray-800">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="input-hackora flex-1"
                  placeholder={`Message #${selectedChannel}`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="btn-primary p-3"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHub;