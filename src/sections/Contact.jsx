import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:yaak73749@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect!</h3>
              <p className="text-textMuted mb-8">
                I'm currently looking for new opportunities and collaborations. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:yaak73749@gmail.com" className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors">
                <FaEnvelope size={20} />
                <span>yaak73749@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors">
                <FaPhone size={20} />
                <span>7460855090</span>
              </div>
              <div className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors">
                <FaMapMarkerAlt size={20} />
                <span>Greater Noida, Uttar Pradesh</span>
              </div>
              <a href="https://github.com/AKYADAV-73749" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-textMuted hover:text-primary transition-colors">
                <FaGithub size={20} />
                <span>github.com/AKYADAV-73749</span>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-background transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <form className="bg-secondary p-8 rounded-2xl border border-gray-800 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-textMuted">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-textMuted">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-textMuted">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Subject"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-textMuted">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="5"
                  className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Type your message here..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-background font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
