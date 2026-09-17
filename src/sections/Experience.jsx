import { motion } from 'framer-motion';

const experiences = [
  {
    role: "AI Intern",
    company: "TechSaksham",
    period: "2025",
    description: "Successfully completed AI internship. Gained practical exposure to Artificial Intelligence concepts. Participated in learning modules by Microsoft, SAP, and Edunet Foundation."
  },
  {
    role: "B.Tech in Computer Science & Engineering (AI)",
    company: "Galgotias College of Engineering & Technology, Greater Noida",
    period: "Ongoing",
    description: "Currently pursuing Bachelor of Technology. Actively engaging in academic and personal projects involving React, Python, and Cloud Computing."
  },
  {
    role: "Senior Secondary Education (12th)",
    company: "DR RIZVI LEARNERS ACADEMY, JAUNPUR",
    period: "2021",
    description: "Completed with 67%."
  },
  {
    role: "Secondary Education (10th)",
    company: "DR RIZVI LEARNERS ACADEMY, JAUNPUR",
    period: "2019",
    description: "Completed with 84%."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative border-l border-primary/30 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-secondary" />
              
              <div className="bg-secondary p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors shadow-xl">
                <span className="text-primary text-sm font-bold tracking-wider uppercase mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-textMuted mb-4">{exp.company}</h4>
                <p className="text-textMuted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
