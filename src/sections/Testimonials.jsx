import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at StartUp",
    text: "Working with him was a game changer for our business. The website is not only beautiful but incredibly fast and intuitive.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    text: "Exceptional attention to detail and a great eye for design. The animations added that extra polish we were looking for.",
    avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background p-8 rounded-2xl border border-gray-800 relative"
            >
              <div className="text-primary text-4xl font-serif absolute top-4 right-6 opacity-20">"</div>
              <p className="text-textMuted text-lg italic mb-6">"{test.text}"</p>
              <div className="flex items-center gap-4">
                <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="text-white font-bold">{test.name}</h4>
                  <span className="text-textMuted text-sm">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
