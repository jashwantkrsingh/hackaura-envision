import { motion } from "framer-motion";
import { Mail, Github, Linkedin, User, MapPin } from "lucide-react";

const Contact = () => {
  const teamMembers = [
    {
      name: "Mehul Kumar Singh",
      role: "Full Stack Developer & Project Lead",
      email: "mehulkumarsingh6@gmail.com",
      github: "https://share.google/GoDRQ4Nha4yl5DBdH",
      linkedin: "https://www.linkedin.com/in/mehul-kumar-singh-655b5432b",
      location: "Kolkata, India",
      bio: "Passionate about building scalable web applications and leading innovative projects. Specializes in React, Node.js, and cloud technologies.",
      avatar: "MS"
    },
    {
      name: "Amrit Raj",
      role: "UI/UX Designer & Full Stack Developer ",
      email: "amritraj612004@gmail.com",
      github: "https://github.com/AmritOnline",
      linkedin: "https://www.linkedin.com/in/amrit-raj-076a1b301",
      location: "Delhi, India",
      bio: "Backend specialist with strong expertise in server architecture, database design, and cloud infrastructure. Ensures robust and scalable systems.",
      avatar: "AR"
    },
    {
      name: "Jashwant Kumar Singh",
      role: "idea developer & UI/UX Designer",
      email: "jashwantkumarsingh.13@gmail.com",
      github: "https://github.com/jashwantkrsingh",
      linkedin: "https://www.linkedin.com/in/jashwant-kumar-singh-630425331",
      location: "Kolkata, India",
      bio: "Creative designer with expertise in user experience design and modern real life ideas thinker. Focuses on creating intuitive and beautiful interfaces.",
      avatar: "JS"
    }
  ];

  const ContactCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="card-hover bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
    >
      <div className="p-8">
        {/* Avatar and Basic Info */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white text-xl">
            {member.avatar}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
            <p className="text-blue-400 font-medium mb-2">{member.role}</p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{member.location}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
          
          {/* Email */}
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            <a 
              href={`mailto:${member.email}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {member.email}
            </a>
          </div>


          {/* Social Links */}
          <div className="flex items-center space-x-4 pt-2">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get in touch with our talented team members who are passionate about building the future of innovation and collaboration.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <ContactCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* General Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="card-primary text-center"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">General Inquiries</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Have a question about Hackora or want to collaborate with us? We'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact@hackora.com"
                className="btn-primary flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>contact@hackora.com</span>
              </a>
              
              <a
                href="https://github.com/jashwantkrsingh/hackaura-envision"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>View Project</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12 text-gray-500"
        >
          <p>We typically respond within 24 hours. Looking forward to connecting with you!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
