import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CommunityInfo = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Hub on Hackora</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Join discussions, get feedback, and learn from peers and mentors. Share progress, ask questions, and grow your network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What happens here</h2>
            <ul className="space-y-3 text-gray-300">
              {[
                "Topic channels for ideas, tech, design, and announcements",
                "Progress updates and showcases for feedback",
                "Mentor AMAs and resources shared by the community",
                "Collaboration requests and team formation posts",
                "Events, challenges, and learning sprints"
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Why join</h2>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                Community accelerates learning. Get answers faster, stay motivated, and discover opportunities you won’t find alone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">You’ll benefit from</h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Guidance from experienced builders",
                  "Constructive feedback on your work",
                  "Connections for internships and projects",
                  "Early access to challenges and events",
                  "A supportive space to keep momentum"
                ].map((o) => (
                  <li key={o}>• {o}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link to="/community">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-cta text-lg px-10 py-4"
            >
              Go to Community Hub
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityInfo;


