import { motion } from 'framer-motion';

const skills = [
  "Python", "Java", "C++", "C", 
  "JavaScript", "React.js", "Tailwind CSS", "HTML", 
  "CSS", "MySQL", "DBMS", "OOP",
  "Git", "GitHub", "AWS Cloud", "VS Code"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-3 bg-secondary rounded-full border border-gray-800 hover:border-primary transition-colors cursor-pointer"
            >
              <span className="text-textMain font-medium">{skill}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Soft Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl text-white font-bold mb-4">Soft Skills</h3>
          <p className="text-textMuted leading-relaxed">
            Teamwork • Communication • Problem Solving • Adaptability • Time Management
          </p>
        </motion.div>
      </div>
    </section>
  );
}
