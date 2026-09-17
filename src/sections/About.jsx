import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-textMuted text-lg leading-relaxed mb-6">
            I am a Computer Science Engineering student (B.Tech in CSE with AI specialization) at Galgotias College of Engineering & Technology, Greater Noida. I am highly passionate about software development and exploring new technologies.
          </p>
          <p className="text-textMuted text-lg leading-relaxed mb-10">
            I have practical experience in developing academic and personal projects using modern web technologies, AI tools, and cloud platforms. I am constantly seeking opportunities to contribute my technical and analytical skills while learning and growing in a professional environment.
          </p>

          <div className="flex gap-6 flex-wrap justify-center">
            <div className="text-center bg-background p-6 rounded-xl border border-gray-800 flex-1 min-w-[200px]">
              <h3 className="text-2xl font-bold text-primary mb-2">B.Tech</h3>
              <span className="text-sm text-textMuted uppercase tracking-wider">CSE (AI)</span>
            </div>
            <div className="text-center bg-background p-6 rounded-xl border border-gray-800 flex-1 min-w-[200px]">
              <h3 className="text-2xl font-bold text-primary mb-2">Intern</h3>
              <span className="text-sm text-textMuted uppercase tracking-wider">TechSaksham AI</span>
            </div>
            <div className="text-center bg-background p-6 rounded-xl border border-gray-800 flex-1 min-w-[200px]">
              <h3 className="text-2xl font-bold text-primary mb-2">AWS</h3>
              <span className="text-sm text-textMuted uppercase tracking-wider">Cloud Arch.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
