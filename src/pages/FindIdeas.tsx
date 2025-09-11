import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FindIdeas = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Ideas on Hackora</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Discover and shape project ideas with AI assistance, community insights, and real-world problem statements curated for hackathons and personal projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">What you can do</h2>
            <ul className="space-y-3 text-gray-300">
              {[
                "Generate fresh project ideas with AI prompts",
                "Filter ideas by domain, difficulty, and tech stack",
                "View problem statements inspired by real organizations",
                "Save, refine, and collaborate on your shortlisted ideas",
                "See suggested teammates and resources for each idea"
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="text-blue-400 mt-1 text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Why it matters</h2>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                Turning a spark into a solid plan is the hardest part of any project. Hackora helps you go from inspiration to execution by combining AI ideation, community feedback, and practical guidance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Outputs you’ll get</h3>
              <ul className="space-y-2 text-gray-300">
                {[
                  "Problem statement and value proposition",
                  "Suggested features and milestones",
                  "Recommended stack and libraries",
                  "Potential datasets/APIs to use",
                  "Risks and how to de-scope"
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
              Sign in to Start Finding Ideas
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FindIdeas;


