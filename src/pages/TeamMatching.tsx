import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { User, MapPin, Code, Star, MessageCircle } from "lucide-react";
import { useState } from "react";

const TeamMatching = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skills = ["React", "Python", "AI/ML", "Design", "Mobile", "Backend", "DevOps", "Blockchain"];

  const teammates = [
    {
      id: 1,
      name: "Sarah Kim",
      role: "Full-Stack Developer",
      location: "San Francisco, CA",
      skills: ["React", "Python", "PostgreSQL"],
      rating: 4.9,
      projects: 12,
      bio: "Passionate about building scalable web applications and exploring new technologies.",
      avatar: "SK",
      isAISuggested: true
    },
    {
      id: 2,
      name: "Mike Johnson",
      role: "ML Engineer",
      location: "Boston, MA",
      skills: ["Python", "TensorFlow", "AI/ML"],
      rating: 4.8,
      projects: 8,
      bio: "Specializing in computer vision and natural language processing applications.",
      avatar: "MJ",
      isAISuggested: true
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "UX/UI Designer",
      location: "Seattle, WA",
      skills: ["Design", "Figma", "User Research"],
      rating: 4.9,
      projects: 15,
      bio: "Creating intuitive and beautiful user experiences for web and mobile apps.",
      avatar: "ED",
      isAISuggested: false
    },
    {
      id: 4,
      name: "Alex Chen",
      role: "Mobile Developer",
      location: "New York, NY",
      skills: ["React Native", "Swift", "Mobile"],
      rating: 4.7,
      projects: 10,
      bio: "Building cross-platform mobile apps with focus on performance and user experience.",
      avatar: "AC",
      isAISuggested: true
    },
    {
      id: 5,
      name: "David Wong",
      role: "DevOps Engineer",
      location: "Austin, TX",
      skills: ["Docker", "AWS", "DevOps"],
      rating: 4.8,
      projects: 9,
      bio: "Automating deployments and managing cloud infrastructure for scalable applications.",
      avatar: "DW",
      isAISuggested: false
    },
    {
      id: 6,
      name: "Jessica Liu",
      role: "Backend Developer",
      location: "Chicago, IL",
      skills: ["Node.js", "Backend", "Database"],
      rating: 4.9,
      projects: 14,
      bio: "Expert in building robust APIs and managing complex database architectures.",
      avatar: "JL",
      isAISuggested: false
    }
  ];

  const aiSuggestedTeammates = teammates.filter(teammate => teammate.isAISuggested);
  const otherTeammates = teammates.filter(teammate => !teammate.isAISuggested);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const TeammateCard = ({ teammate, index }: { teammate: typeof teammates[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="card-hover"
    >
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white">
          {teammate.avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{teammate.name}</h3>
          <p className="text-gray-400">{teammate.role}</p>
          <div className="flex items-center space-x-1 text-sm text-gray-400 mt-1">
            <MapPin className="w-4 h-4" />
            <span>{teammate.location}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-1 text-yellow-400 mb-1">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-white">{teammate.rating}</span>
          </div>
          <div className="text-sm text-gray-400">{teammate.projects} projects</div>
        </div>
      </div>

      <p className="text-gray-400 mb-4 text-sm">{teammate.bio}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {teammate.skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary w-full flex items-center justify-center space-x-2"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Request Collaboration</span>
      </motion.button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-80 mr-8 sticky top-24"
          >
            <div className="card-primary">
              <h2 className="text-2xl font-bold mb-6">Find Teammates</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-3 py-1 rounded-lg text-sm transition-all duration-200 ${
                        selectedSkills.includes(skill)
                          ? "bg-white text-black"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Location</h3>
                <select className="input-hackora w-full">
                  <option>Any Location</option>
                  <option>San Francisco, CA</option>
                  <option>New York, NY</option>
                  <option>Boston, MA</option>
                  <option>Seattle, WA</option>
                </select>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Experience Level</h3>
                <select className="input-hackora w-full">
                  <option>Any Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold mb-2">Team Matching 🤝</h1>
              <p className="text-gray-400">Connect with talented individuals for your next project</p>
            </motion.div>

            {/* AI Suggested Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-6 mb-6">
                <h2 className="text-2xl font-bold mb-2">🤖 AI Suggested Teammates</h2>
                <p className="text-gray-400">Based on your skills and project interests</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {aiSuggestedTeammates.map((teammate, index) => (
                  <TeammateCard key={teammate.id} teammate={teammate} index={index} />
                ))}
              </div>
            </motion.div>

            {/* All Teammates Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">All Available Teammates</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {otherTeammates.map((teammate, index) => (
                  <TeammateCard key={teammate.id} teammate={teammate} index={index + aiSuggestedTeammates.length} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMatching;