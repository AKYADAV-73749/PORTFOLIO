import { motion } from 'framer-motion';

export default function Hero() {
  // Generate random shapes for background
  const shapes = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: "linear",
            }}
          />
        ))}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 text-center z-10 pt-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary text-xl md:text-2xl font-medium mb-4 tracking-wide"
        >
          Hello, I'm
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          AKASH YADAV
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-textMuted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Computer Science Engineering Student & Software Developer. I build web applications and intelligent systems using modern technologies like React, Python, and Cloud Computing.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a href="#projects" className="px-8 py-3 bg-primary text-background font-semibold rounded-full hover:bg-primary/90 hover:scale-105 transition-all">
            View My Work
          </a>
          <a href="/resume.pdf" download className="px-8 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-background hover:scale-105 transition-all">
            Download CV
          </a>
          <a href="#contact" className="px-8 py-3 border border-gray-600 text-textMuted font-semibold rounded-full hover:border-primary hover:text-primary transition-colors hidden sm:inline-block">
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-textMuted text-sm mb-2 uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-primary"
        />
      </motion.div>
    </section>
  );
}
