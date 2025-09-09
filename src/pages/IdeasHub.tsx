import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Search, Plus, Heart, MessageCircle, Star, X } from "lucide-react";
import { useState } from "react";

const allIdeas = [
	{
		id: 1,
		title: "AI-Powered Code Review Assistant",
		shortDescription:
			"AI-driven assistant for faster, consistent, and error-free code reviews.",
		description: `Problem Statement:
Manual code reviews are slow, inconsistent, and error-prone, making it difficult to maintain quality and scalability in large teams.

Expected Solution:
An AI-driven assistant that analyzes code for bugs, vulnerabilities, and style issues while suggesting optimizations and ensuring compliance with best practices. Integrates with GitHub/GitLab to provide real-time inline feedback and learns from developer preferences over time.

Technologies Used:
LLMs (GPT-4/5, CodeBERT), static analysis tools (ESLint, SonarQube, Pylint), Python/Node.js backend, React.js dashboard, GitHub Actions/GitLab CI, Docker/Kubernetes, PostgreSQL/MongoDB, OWASP guidelines.`,
		category: "AI/ML",
		author: "Sarah Kim",
		likes: 24,
		comments: ["This is great!", "Can it work with Java?"],
		tags: ["React", "Python", "OpenAI"],
	},
	{
		id: 2,
		title: "Sustainable Campus Food Tracker",
		shortDescription: "Track food waste and promote sustainability on campus.",
		description: `Problem Statement:
Many campuses face food wastage, lack of transparency in sourcing, and limited awareness of sustainable practices, causing environmental impact and higher costs.

Expected Solution:
A platform to track food consumption, reduce waste with predictions, highlight eco-friendly sourcing, and provide students with dietary impact insights. Can include meal pre-booking, surplus donation, and sustainability scoreboards.

Technologies Used:
Mobile app (React Native/Flutter), backend (Node.js/Python), PostgreSQL, AI/ML for consumption prediction, IoT sensors, cloud deployment (AWS/Azure).`,
		category: "Mobile",
		author: "Mike Johnson",
		likes: 18,
		comments: ["Nice idea", "Will it support Android and iOS?"],
		tags: ["React Native", "Firebase", "Sustainability"],
	},
	{
		id: 3,
		title: "Decentralized Study Groups",
		shortDescription: "Blockchain platform for transparent, tokenized study groups.",
		description: `Problem Statement:
Traditional study groups lack accountability, rewards, and transparency. Participation is inconsistent and tracking contributions is difficult.

Expected Solution:
Blockchain platform where students create study groups, participate in tasks, and earn tokens for contributions. Smart contracts ensure transparent tracking of activity and rewards.

Technologies Used:
Solidity smart contracts, Ethereum blockchain, Web3.js, React.js frontend, Node.js backend, IPFS for secure data storage.`,
		category: "Blockchain",
		author: "Alex Chen",
		likes: 31,
		comments: ["Love the Web3 angle!", "Can we add rewards system?"],
		tags: ["Solidity", "Web3", "Education"],
	},
	{
		id: 4,
		title: "Smart Home Energy Optimizer",
		shortDescription: "IoT system to optimize household energy consumption.",
		description: `Problem Statement:
Households waste energy due to inefficient appliances and lack of automation, leading to higher bills and carbon footprint.

Expected Solution:
IoT system that learns user routines, monitors appliance usage, and optimizes energy consumption. Provides real-time insights and suggestions to save energy.

Technologies Used:
Arduino/Raspberry Pi, Python backend, Machine Learning for predictive optimization, Mobile/React dashboard, MQTT protocol.`,
		category: "IoT",
		author: "Emily Davis",
		likes: 22,
		comments: ["Super useful", "Need solar integration"],
		tags: ["Arduino", "Machine Learning", "Energy"],
	},
	{
		id: 5,
		title: "Mental Health Companion Bot",
		shortDescription: "AI chatbot for 24/7 mental health support.",
		description: `Problem Statement:
Students and young adults often lack immediate mental health support. Existing solutions are limited in personalization and accessibility.

Expected Solution:
AI-powered chatbot providing 24/7 support, detecting emotional states via NLP, recommending resources, and connecting users to professional help if needed.

Technologies Used:
Python, NLP libraries (spaCy, NLTK), TensorFlow/PyTorch, React Native, Firebase database and notifications.`,
		category: "AI/ML",
		author: "Jessica Liu",
		likes: 45,
		comments: ["Very thoughtful!", "Can it detect stress?"],
		tags: ["Python", "NLP", "Mental Health"],
	},
	{
		id: 6,
		title: "Smart Parking Solution",
		shortDescription: "IoT-based system to find and guide parking spots.",
		description: `Problem Statement:
Finding parking in busy urban areas wastes time, increases fuel consumption, and causes congestion.

Expected Solution:
IoT system using sensors and computer vision to detect available spots and guide drivers via a mobile app. Provides real-time updates to reduce congestion.

Technologies Used:
IoT sensors, Raspberry Pi/Arduino, OpenCV, React Native app, Node.js backend, Firebase for real-time updates.`,
		category: "IoT",
		author: "Sophie Brown",
		likes: 27,
		comments: ["Would love to see this in cities!", "Can we use sensors too?"],
		tags: ["Computer Vision", "IoT", "Mobile"],
	},
	{
		id: 7,
		title: "Collaborative Music Studio",
		shortDescription: "Web DAW for musicians to collaborate in real-time.",
		description: `Problem Statement:
Musicians struggle to collaborate remotely due to latency, file sharing issues, and lack of real-time editing tools.

Expected Solution:
Web-based Digital Audio Workstation allowing real-time collaboration, sharing stems, live editing, and instant feedback. Users can create and produce music together from anywhere.

Technologies Used:
WebAudio API, Node.js backend, WebRTC, React.js frontend, cloud storage, OAuth/Firebase authentication.`,
		category: "Web Dev",
		author: "Marcus Johnson",
		likes: 33,
		comments: ["Awesome for creators!", "Latency might be an issue"],
		tags: ["WebAudio", "Real-time", "Music"],
	},
	{
		id: 8,
		title: "Personal Finance AI Coach",
		shortDescription: "AI tool to help users manage personal finances effectively.",
		description: `Problem Statement:
Managing personal finances is challenging due to lack of personalized advice and insights into spending patterns.

Expected Solution:
Machine learning-powered advisor that analyzes spending, provides personalized budgeting recommendations, and tracks financial health over time.

Technologies Used:
ML/AI, Python/Node.js backend, React.js frontend, PostgreSQL/MongoDB, bank API integrations.`,
		category: "AI/ML",
		author: "Lisa Zhang",
		likes: 41,
		comments: ["I would use this daily!", "Needs bank integration support."],
		tags: ["Machine Learning", "Finance", "Analytics"],
	},
	{
		id: 9,
		title: "Augmented Reality Shopping",
		shortDescription: "AR app to virtually try clothes and accessories before buying.",
		description: `Problem Statement:
Online shopping lacks try-before-you-buy experience, leading to low satisfaction and returns.

Expected Solution:
AR mobile app allowing users to visualize products on themselves or in their environment before purchasing.

Technologies Used:
ARKit / ARCore, React Native, Node.js backend, cloud deployment with AWS/Firebase.`,
		category: "Mobile",
		author: "Jake Williams",
		likes: 52,
		comments: ["This is the future of e-commerce!"],
		tags: ["AR", "E-commerce", "Mobile"],
	},
	{
		id: 10,
		title: "Gaming Tournament Platform",
		shortDescription: "Platform for organizing esports tournaments efficiently.",
		description: `Problem Statement:
Organizing esports tournaments manually is error-prone, time-consuming, and hard to scale.

Expected Solution:
Platform with automated brackets, streaming integration, and prize management for seamless esports events.

Technologies Used:
React.js frontend, Node.js backend, Twitch/YouTube streaming integration, MongoDB database, Discord bots.`,
		category: "Game Dev",
		author: "Amy Chen",
		likes: 19,
		comments: ["Love it!", "Would be cool with Discord integration."],
		tags: ["Gaming", "Esports", "Streaming"],
	},
];

const IdeasHub = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [ideas, setIdeas] = useState(allIdeas.slice(0, 8));
	const [likedIdeas, setLikedIdeas] = useState({});
	const [starredIdeas, setStarredIdeas] = useState({});
	const [openComments, setOpenComments] = useState({});
	const [newComment, setNewComment] = useState("");
	const [selectedIdea, setSelectedIdea] = useState(null); // For modal
	const [modalComment, setModalComment] = useState(""); // Add this state for modal input

	const categories = [
		"All",
		"Web Dev",
		"Mobile",
		"AI/ML",
		"Blockchain",
		"IoT",
		"Game Dev",
	];

	const generateRandomIdea = () => {
		const randomIdeas = [...allIdeas]
			.sort(() => Math.random() - 0.5)
			.slice(0, 8);
		setIdeas(randomIdeas);
	};

	const toggleLike = (id) => {
		setLikedIdeas((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const toggleStar = (id) => {
		setStarredIdeas((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const toggleComments = (id) => {
		setOpenComments((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const addComment = (id) => {
		if (!newComment.trim()) return;
		setIdeas((prevIdeas) =>
			prevIdeas.map((idea) =>
				idea.id === id
					? { ...idea, comments: [...idea.comments, newComment] }
					: idea
			)
		);
		setNewComment("");
	};

	const filteredIdeas = ideas.filter((idea) => {
		const matchesSearch =
			idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			idea.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === "All" || idea.category === selectedCategory;
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
						<p className="text-gray-400">
							Discover and share innovative project ideas
						</p>
					</motion.div>

					<motion.button
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={generateRandomIdea}
						className="btn-primary flex items-center space-x-2 mt-4 md:mt-0"
					>
						<Plus className="w-5 h-5" />
						<span>Generate New Ideas</span>
					</motion.button>
				</div>

				{/* Search + Filters */}
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
							className="card-hover cursor-pointer p-4 bg-gray-900 rounded-xl"
							onClick={() => setSelectedIdea(idea)}
						>
							<div className="flex justify-between items-start mb-2">
								<span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-sm">
									{idea.category}
								</span>
								<Star
									className={`w-5 h-5 cursor-pointer ${
										starredIdeas[idea.id]
											? "text-yellow-400"
											: "text-gray-400"
									}`}
									onClick={(e) => {
										e.stopPropagation();
										toggleStar(idea.id);
									}}
								/>
							</div>

							<h3 className="text-xl font-bold mb-2">{idea.title}</h3>
							<p className="text-gray-400 mb-4">{idea.shortDescription}</p>

							<div className="flex flex-wrap gap-1 mb-2">
								{idea.tags.map((tag, i) => (
									<span
										key={i}
										className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="flex justify-between items-center text-gray-400 text-sm">
								<span>by {idea.author}</span>
								<div className="flex items-center gap-3">
									<Heart
										className={`w-4 h-4 cursor-pointer ${
											likedIdeas[idea.id]
												? "text-red-500 fill-red-500"
												: ""
										}`}
										onClick={(e) => {
											e.stopPropagation();
											toggleLike(idea.id);
										}}
									/>
									{idea.likes + (likedIdeas[idea.id] ? 1 : 0)}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{filteredIdeas.length === 0 && (
					<div className="text-center py-12 text-gray-400">
						No ideas found matching your search.
					</div>
				)}
			</div>

			{/* Modal for Detailed Idea */}
			{selectedIdea && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						className="bg-gray-900 p-6 rounded-2xl w-full max-w-3xl overflow-y-auto max-h-[90vh] shadow-lg relative"
					>
						<button
							onClick={() => setSelectedIdea(null)}
							className="absolute top-3 right-3 text-gray-400 hover:text-white"
						>
							<X size={20} />
						</button>

						<h2 className="text-2xl font-bold text-white mb-2">
							{selectedIdea.title}
						</h2>
						<p className="text-gray-500 mb-4">By {selectedIdea.author}</p>
						<pre className="text-gray-300 whitespace-pre-wrap">
							{selectedIdea.description}
						</pre>

						<div className="flex gap-2 mt-4 flex-wrap">
							{selectedIdea.tags.map((tag, i) => (
								<span
									key={i}
									className="bg-gray-800 px-3 py-1 text-sm rounded-lg text-gray-300"
								>
									{tag}
								</span>
							))}
						</div>

						<div className="flex items-center gap-6 mt-4 text-gray-400">
							❤️ {selectedIdea.likes + (likedIdeas[selectedIdea.id] ? 1 : 0)}{" "}
							Likes
							💬 {selectedIdea.comments.length} Comments
						</div>

						{/* Comments Section */}
						<div className="mt-6">
							<h3 className="text-lg font-semibold text-white mb-2">
								Comments
							</h3>
							<div className="space-y-2 mb-4">
								{selectedIdea.comments.map((comment, idx) => (
									<div
										key={idx}
										className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg"
									>
										{comment}
									</div>
								))}
							</div>
							<div className="flex gap-2">
								<input
									type="text"
									value={modalComment}
									onChange={(e) => setModalComment(e.target.value)}
									className="input-hackora flex-1"
									placeholder="Add a comment..."
								/>
								<button
									className="btn-primary px-4 py-2 rounded-lg"
									onClick={() => {
										if (!modalComment.trim()) return;
										setIdeas((prevIdeas) =>
											prevIdeas.map((idea) =>
												idea.id === selectedIdea.id
													? { ...idea, comments: [...idea.comments, modalComment] }
													: idea
											)
										);
										setSelectedIdea((prev) =>
											prev
												? { ...prev, comments: [...prev.comments, modalComment] }
												: prev
										);
										setModalComment("");
									}}
								>
									Add
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default IdeasHub;
