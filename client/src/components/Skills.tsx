import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Palette, 
  Book, 
  Brain,
  Check as CheckIcon
} from "lucide-react";
import { FaTools } from "react-icons/fa";
import { 
  FaDatabase, 
  FaLeaf, 
  FaFlask, 
  FaNodeJs, 
  FaGitAlt,
  FaPaperPlane
} from "react-icons/fa";

interface SkillBarProps {
  label: string;
  percentage: number;
}

const programmingSkills = [
  { label: "C++ (Primary)", percentage: 90 },
  { label: "Java", percentage: 80 },
  { label: "Python", percentage: 85 },
  { label: "C", percentage: 75 },
  { label: "SQL", percentage: 70 }
];

const frontendSkills = [
  { label: "HTML", percentage: 90 },
  { label: "CSS", percentage: 80 },
  { label: "JavaScript", percentage: 80 },
  { label: "ReactJS", percentage: 85 }
];

const SkillBar = ({ label, percentage }: SkillBarProps) => {
  const skillRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillRef, { once: true, margin: "-100px" });

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{label}</span>
        <span>{percentage}%</span>
      </div>
      <div ref={skillRef} className="skill-bar bg-slate-200 dark:bg-slate-700 h-2 rounded-full">
        <div 
          className="skill-progress bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: isInView ? `${percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 mb-4">
            <span className="mr-2">💻</span> Skills
          </div>
          <h2 className="text-3xl font-bold">Technical Expertise</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 rounded mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Code className="mr-2 text-indigo-600 dark:text-indigo-400" /> 
              Programming Languages
            </h3>
            
            <div className="space-y-5">
              {programmingSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  label={skill.label} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
            
            <h3 className="text-xl font-bold mt-12 mb-6 flex items-center">
              <Database className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Backend & Database
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-100 dark:bg-slate-800 p-3">
                <CardContent className="p-0 flex items-center">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                    <FaDatabase className="text-blue-600 dark:text-blue-400" />
                  </span>
                  <span>MySQL</span>
                </CardContent>
              </Card>
              <Card className="bg-slate-100 dark:bg-slate-800 p-3">
                <CardContent className="p-0 flex items-center">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                    <FaLeaf className="text-green-600 dark:text-green-400" />
                  </span>
                  <span>MongoDB</span>
                </CardContent>
              </Card>
              <Card className="bg-slate-100 dark:bg-slate-800 p-3">
                <CardContent className="p-0 flex items-center">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                    <FaDatabase className="text-blue-600 dark:text-blue-400" />
                  </span>
                  <span>PostgreSQL</span>
                </CardContent>
              </Card>
              <Card className="bg-slate-100 dark:bg-slate-800 p-3">
                <CardContent className="p-0 flex items-center">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mr-3">
                    <FaFlask className="text-cyan-600 dark:text-cyan-400" />
                  </span>
                  <span>Flask</span>
                </CardContent>
              </Card>
              <Card className="bg-slate-100 dark:bg-slate-800 p-3">
                <CardContent className="p-0 flex items-center">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-3">
                    <FaNodeJs className="text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span>Node.js</span>
                </CardContent>
              </Card>
              <Card className="bg-slate-100 dark:bg-slate-800 p-3">
                <CardContent className="p-0 flex items-center">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mr-3">
                    <FaFlask className="text-cyan-600 dark:text-cyan-400" />
                  </span>
                  <span>Django</span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Palette className="mr-2 text-indigo-600 dark:text-indigo-400" />
              Frontend Development
            </h3>
            
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  label={skill.label} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Book className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Relevant Courses
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon className="text-indigo-600 dark:text-indigo-400 mr-2" size={16} />
                    Data Structures and Algorithms
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-indigo-600 dark:text-indigo-400 mr-2" size={16} />
                    Operating Systems
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-indigo-600 dark:text-indigo-400 mr-2" size={16} />
                    Database Management Systems
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="text-indigo-600 dark:text-indigo-400 mr-2" size={16} />
                    Object-Oriented Programming
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FaTools className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Other Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium flex items-center">
                    <FaGitAlt className="mr-1 text-orange-600 dark:text-orange-400" /> Git
                  </span>
                  <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium flex items-center">
                    <FaPaperPlane className="mr-1 text-orange-600 dark:text-orange-400" /> Postman
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center">
                  <Brain className="mr-2 text-indigo-600 dark:text-indigo-400" />
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">Problem-solving</span>
                  <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">Analytical Thinking</span>
                  <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">Adaptability</span>
                  <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium">Teamwork</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
