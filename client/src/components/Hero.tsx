import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              Available for opportunities
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Rohit Kumar</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-medium">
              Final-Year CSE Student | Problem-solving | Software Developer | Full-Stack Developer
            </h2>
            
            <p className="text-slate-700 dark:text-slate-300 max-w-lg">
              Building elegant solutions to complex problems through code, research, and innovation. Passionate about creating efficient, scalable, and user-friendly applications.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/rohitkumar9699" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/rohit-kumar-83b147243/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://leetcode.com/rohit_kumar_9699" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <FaCode className="text-xl" />
              </a>
              <a href="mailto:rk94523386@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 blur-3xl opacity-20 rounded-full"></div>
              <div className="relative bg-white dark:bg-slate-800 p-2 rounded-xl shadow-xl">
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-indigo-600 dark:text-indigo-400">&gt; Rohit.education</div>
                    <div className="text-slate-800 dark:text-slate-200 ml-4">Computer Science & Engineering @ SRM AP</div>
                    <div className="text-indigo-600 dark:text-indigo-400 mt-2">&gt; Rohit.skills</div>
                    <div className="text-slate-800 dark:text-slate-200 ml-4">['C++', 'JavaScript', 'React', 'Node.js', 'Python', 'Java']</div>
                    <div className="text-indigo-600 dark:text-indigo-400 mt-2">&gt; Rohit.interests</div>
                    <div className="text-slate-800 dark:text-slate-200 ml-4">['Software Development', 'Problem Solving', 'Chess', 'Athletics']</div>
                    <div className="text-indigo-600 dark:text-indigo-400 mt-2">&gt; Rohit.findMe()</div>
                    <div className="text-slate-800 dark:text-slate-200 ml-4">"Looking for opportunities to innovate and build impactful solutions"</div>
                    <div className="text-indigo-600 dark:text-indigo-400 mt-2">&gt; _</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
