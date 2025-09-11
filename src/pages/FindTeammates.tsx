import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FindTeammates = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Teammates on Hackora</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Meet collaborators who complement your skills. Build balanced, motivated teams for hackathons and long-term projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <ul className="space-y-3 text-gray-300">
              {[
                "Smart matching based on skills, interests, and availability",
                "Role-based searches: frontend, backend, designer, PM, and more",
                "Detailed profiles with past work, stack, and preferences",
                "Shortlist, message, and form teams securely",
                "Recommendations for filling skill gaps in your team"
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Why it's useful</h2>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                Great ideas need great teams. Hackora helps you assemble people who align with your goals and timelines, so you can build faster with confidence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What you’ll get</h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Curated teammate recommendations",
                  "Team skill composition insights",
                  "Direct messaging and invites",
                  "Availability and timezone matching",
                  "Team workspace to kick off quickly"
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
          <Link to="/auth">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-cta text-lg px-10 py-4"
            >
              Start Finding Teammates
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FindTeammates;


