import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { User, Github, Save } from "lucide-react";
import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Alex Chen",
    college: "MIT",
    skills: ["React", "Python", "AI/ML", "TypeScript"],
    interests: ["Web Development", "Machine Learning", "Blockchain"],
    github: "https://github.com/alexchen",
    bio: "Full-stack developer passionate about building innovative solutions"
  });

  const badges = [
    { name: "First Project", color: "bg-blue-500" },
    { name: "Team Player", color: "bg-green-500" },
    { name: "Idea Generator", color: "bg-purple-500" },
    { name: "Community Helper", color: "bg-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-primary"
        >
          {/* Profile Header */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
              <p className="text-gray-400">Manage your Hackora profile and preferences</p>
            </div>
          </div>

          {/* Profile Form */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  className="input-hackora w-full"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">College/University</label>
                <input
                  type="text"
                  value={profile.college}
                  onChange={(e) => setProfile({...profile, college: e.target.value})}
                  className="input-hackora w-full"
                  placeholder="Your institution"
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Bio</label>
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({...profile, bio: e.target.value})}
                className="input-hackora w-full h-24 resize-none"
                placeholder="Tell us about yourself..."
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Skills</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm border border-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <input
                type="text"
                className="input-hackora w-full"
                placeholder="Add a skill and press Enter"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Interests</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white px-3 py-1 rounded-lg text-sm border border-gray-600"
                  >
                    {interest}
                  </span>
                ))}
              </div>
              <input
                type="text"
                className="input-hackora w-full"
                placeholder="Add an interest and press Enter"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">GitHub Profile</label>
              <div className="relative">
                <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="url"
                  value={profile.github}
                  onChange={(e) => setProfile({...profile, github: e.target.value})}
                  className="input-hackora w-full pl-12"
                  placeholder="https://github.com/yourusername"
                />
              </div>
            </div>
          </div>

          {/* Badges Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Your Badges</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center"
                >
                  <div className={`w-8 h-8 ${badge.color} rounded-full mx-auto mb-2`}></div>
                  <div className="text-sm font-medium">{badge.name}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary mt-8 flex items-center space-x-2"
          >
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;