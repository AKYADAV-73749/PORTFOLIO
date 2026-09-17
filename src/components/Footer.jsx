import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Portfolio.</h3>
            <p className="text-textMuted leading-relaxed max-w-sm">
              Building intelligent systems and beautifully designed web experiences. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Experience', 'Projects'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-textMuted hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/AKYADAV-73749" target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-gray-800 rounded-full text-textMuted hover:text-primary hover:border-primary transition-all">
                <FaGithub size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-gray-800 rounded-full text-textMuted hover:text-primary hover:border-primary transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-gray-800 rounded-full text-textMuted hover:text-primary hover:border-primary transition-all">
                <FaTwitter size={20} />
              </a>
            </div>
            <a href="mailto:yaak73749@gmail.com" className="inline-flex items-center gap-2 text-textMuted hover:text-primary transition-colors">
              <FaEnvelope size={16} />
              <span>yaak73749@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800/50">
          <p className="text-textMuted text-sm">
            © {currentYear} Akash Yadav. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
