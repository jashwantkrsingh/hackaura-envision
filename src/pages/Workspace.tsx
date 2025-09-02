import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { BarChart3, CheckSquare, Github, MessageCircle, Plus, MoreHorizontal } from "lucide-react";

const Workspace = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", name: "Overview", icon: BarChart3 },
    { id: "tasks", name: "Tasks", icon: CheckSquare },
    { id: "github", name: "GitHub", icon: Github },
    { id: "chat", name: "Team Chat", icon: MessageCircle }
  ];

  const tasks = [
    { id: 1, title: "Setup React project structure", status: "completed", assignee: "Sarah Kim", priority: "high" },
    { id: 2, title: "Design user authentication flow", status: "in-progress", assignee: "Emily Davis", priority: "medium" },
    { id: 3, title: "Implement backend API endpoints", status: "in-progress", assignee: "Mike Johnson", priority: "high" },
    { id: 4, title: "Create responsive landing page", status: "todo", assignee: "Alex Chen", priority: "medium" },
    { id: 5, title: "Set up CI/CD pipeline", status: "todo", assignee: "David Wong", priority: "low" },
    { id: 6, title: "Write unit tests", status: "todo", assignee: "Jessica Liu", priority: "medium" }
  ];

  const taskColumns = {
    todo: tasks.filter(task => task.status === "todo"),
    "in-progress": tasks.filter(task => task.status === "in-progress"),
    completed: tasks.filter(task => task.status === "completed")
  };

  const teamMessages = [
    { user: "Sarah Kim", message: "Just pushed the latest changes to the main branch!", time: "10:30 AM" },
    { user: "Mike Johnson", message: "API is ready for testing. Let me know if you run into any issues.", time: "11:45 AM" },
    { user: "Emily Davis", message: "Updated the design system. Check out the new color palette!", time: "1:20 PM" }
  ];

  const TaskCard = ({ task }: { task: typeof tasks[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-700 border border-gray-600 rounded-xl p-4 mb-3"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium">{task.title}</h4>
        <button>
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-400">{task.assignee}</span>
        <span className={`px-2 py-1 rounded text-xs ${
          task.priority === "high" ? "bg-red-500/20 text-red-400" :
          task.priority === "medium" ? "bg-yellow-500/20 text-yellow-400" :
          "bg-green-500/20 text-green-400"
        }`}>
          {task.priority}
        </span>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">AI-Powered Study Assistant</h1>
          <p className="text-gray-400 mb-4">
            Building an intelligent platform to help students learn more effectively using machine learning and natural language processing.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "Python", "OpenAI", "PostgreSQL", "Docker"].map((tech) => (
              <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex space-x-1 mb-8 bg-gray-900 rounded-2xl p-2 w-fit"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-black"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-primary">
                <h3 className="text-xl font-bold mb-4">Project Progress</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Frontend</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Backend</span>
                      <span>60%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Testing</span>
                      <span>25%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-primary">
                <h3 className="text-xl font-bold mb-4">Team Members</h3>
                <div className="space-y-3">
                  {["Sarah Kim", "Mike Johnson", "Emily Davis", "Alex Chen"].map((member, index) => (
                    <div key={member} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
                        {member.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span>{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-primary">
                <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                <div className="space-y-3 text-sm">
                  <div className="text-gray-400">
                    <span className="text-white">Sarah</span> completed "Setup React project structure"
                  </div>
                  <div className="text-gray-400">
                    <span className="text-white">Mike</span> pushed new commits to main branch
                  </div>
                  <div className="text-gray-400">
                    <span className="text-white">Emily</span> updated the design system
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tasks" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Project Tasks</h2>
                <button className="btn-primary flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Task</span>
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(taskColumns).map(([status, statusTasks]) => (
                  <div key={status} className="card-primary">
                    <h3 className="text-lg font-bold mb-4 capitalize flex justify-between">
                      {status.replace('-', ' ')}
                      <span className="bg-gray-700 text-gray-300 text-sm px-2 py-1 rounded">
                        {statusTasks.length}
                      </span>
                    </h3>
                    <div>
                      {statusTasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "github" && (
            <div className="card-primary">
              <h2 className="text-2xl font-bold mb-6">GitHub Repository</h2>
              <div className="text-center text-gray-400">
                <Github className="w-16 h-16 mx-auto mb-4" />
                <p className="mb-4">Connect your GitHub repository to see commits, issues, and pull requests.</p>
                <button className="btn-primary">Connect Repository</button>
              </div>
            </div>
          )}

          {activeTab === "chat" && (
            <div className="card-primary h-96">
              <h2 className="text-2xl font-bold mb-6">Team Chat</h2>
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-4 mb-4">
                  {teamMessages.map((msg, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white text-xs">
                        {msg.user.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{msg.user}</span>
                          <span className="text-gray-400 text-xs">{msg.time}</span>
                        </div>
                        <p className="text-gray-300">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    className="input-hackora flex-1"
                    placeholder="Type a message..."
                  />
                  <button className="btn-primary p-3">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Workspace;