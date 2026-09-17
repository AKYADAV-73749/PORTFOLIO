import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "TracMate – Productivity & Task Management",
    description: [
      "Developed a task management platform using React and Firebase.",
      "Implemented authentication and cloud-based task storage.",
      "Designed responsive UI supporting task creation, updates, and tracking.",
      "Reduced task management complexity through centralized workflow tracking."
    ],
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    github: "https://github.com/AKYADAV-73749/tracmate",
    live: "https://tracmate.vercel.app"
  },
  {
    title: "AI Disease Detection & Health Assistance System",
    description: [
      "Developed an AI-powered healthcare web application using React.js and Tailwind CSS to analyze symptoms, medical images, and lab reports.",
      "Integrated Google's Gemini API directly via JavaScript SDK to generate intelligent, real-time health recommendations and multi-lingual responses.",
      "Engineered a robust multi-AI fallback system using the Groq API (Llama 3 models) to ensure continuous service availability during API rate limits.",
      "Implemented Firebase for secure user authentication, role-based access control, and cloud-based scan history tracking.",
      "Designed a responsive user interface with advanced prompt engineering to ensure highly accurate, context-aware AI outputs based on patient profiles."
    ],
    tags: ["React.js", "Tailwind CSS", "Gemini API", "Groq API", "Firebase"],
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=400&fit=crop",
    github: "https://github.com/AKYADAV-73749/disease",
    live: "https://disease-seven.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-secondary rounded-2xl overflow-hidden group border border-gray-800 hover:border-primary/50 transition-all shadow-lg hover:shadow-[0_0_40px_rgba(0,246,255,0.15)] flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-secondary/80 rounded-full hover:bg-primary hover:text-background transition-colors text-white hover:scale-110 transform duration-200">
                    <FaGithub size={28} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-secondary/80 rounded-full hover:bg-primary hover:text-background transition-colors text-white hover:scale-110 transform duration-200">
                    <FaExternalLinkAlt size={28} />
                  </a>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <ul className="text-textMuted text-base mb-6 space-y-2 list-disc pl-4 flex-grow">
                  {project.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-sm font-semibold px-4 py-1.5 bg-background border border-gray-700 rounded-full text-primary shadow-inner">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
