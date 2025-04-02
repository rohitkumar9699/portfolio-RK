import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { FaMedal, FaCode, FaChess, FaRunning } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 mb-4">
            <span className="mr-2">👤</span> About
          </div>
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 rounded mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 flex flex-col items-center"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-500 shadow-lg mb-6">
              {/* <img src="Pic.jpg" alt="Rohit Kumar" className="w-full h-full object-cover" /> */}
              <img src="https://lh3.googleusercontent.com/d/1pEvfiORFvLCHU8qVDqli3CEVnre7iVwv" alt="Rohit Kumar" className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              <Card className="bg-slate-50 dark:bg-slate-800 p-3 text-center">
                <FaMedal className="text-2xl text-amber-500 mb-2 mx-auto" />
                <p className="text-sm font-medium">Scholarship Recipient</p>
              </Card>
              <Card className="bg-slate-50 dark:bg-slate-800 p-3 text-center">
                <FaCode className="text-2xl text-indigo-500 mb-2 mx-auto" />
                <p className="text-sm font-medium">Full-Stack Developer</p>
              </Card>
              <Card className="bg-slate-50 dark:bg-slate-800 p-3 text-center">
                <FaChess className="text-2xl text-slate-700 dark:text-slate-300 mb-2 mx-auto" />
                <p className="text-sm font-medium">National Chess Player</p>
              </Card>
              <Card className="bg-slate-50 dark:bg-slate-800 p-3 text-center">
                <FaRunning className="text-2xl text-emerald-500 mb-2 mx-auto" />
                <p className="text-sm font-medium">National Athlete</p>
              </Card>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg">
                I am a driven software engineering student with hands-on experience in research, developing a strong foundation in both theoretical and practical aspects of technology. My work includes projects ranging from machine learning-powered systems to full-stack applications, showcasing proficiency in a wide array of programming languages and technologies.
              </p>
              <p>
                With a passion for problem-solving and innovation, I actively seek to contribute to projects that challenge my skills. I am dedicated to continuous learning and growth in the ever-evolving field of technology.
              </p>
              <p className="italic text-indigo-600 dark:text-indigo-400">
                "Wants to go miles..."
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <Card className="bg-slate-50 dark:bg-slate-800 p-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="flex items-start">
                  <div className="h-full flex flex-col items-center mr-4">
                    <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                    <div className="w-0.5 h-full bg-indigo-200 dark:bg-indigo-800 my-1"></div>
                  </div>
                  <div>
                    <p className="font-semibold">SRM University AP</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">B.Tech in CSE (2021-Present)</p>
                    <p className="text-sm">CGPA: 8.20/10</p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-slate-50 dark:bg-slate-800 p-6">
                <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
                    Full-Stack Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
                    Data Structures & Algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
                    Machine Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 mr-2"></span>
                    Problem Solving
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
