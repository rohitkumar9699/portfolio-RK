import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BuildingIcon, School, BookOpen, Star, Medal } from "lucide-react";

const educationData = [
  {
    id: 1,
    title: "Bachelor's in Computer Science and Engineering",
    institution: "SRM University AP",
    period: "2021 - Present",
    description: "Received a 100% scholarship covering tuition and accommodation. Actively engaged in coding contests, research internships, and project-based learning.",
    highlights: [
      { icon: <Star className="text-amber-500" size={16} />, text: "CGPA: 8.20/10" },
      { icon: <Medal className="text-indigo-600 dark:text-indigo-400" size={16} />, text: "100% Scholarship" }
    ],
    icon: <BuildingIcon className="text-white" size={20} />
  },
  {
    id: 2,
    title: "Higher Secondary Education (Class 12th)",
    institution: "Vidyagyan School, UP",
    period: "2021",
    description: "Received the Shiv Nadar Foundation (SNF) Scholarship from Class 6 to 12. Excelled in academics while actively participating in extracurricular and competitive activities.",
    highlights: [
      { icon: <Star className="text-amber-500" size={16} />, text: "Percetage 95.6%" },
      { icon: <Medal className="text-indigo-600 dark:text-indigo-400" size={16} />, text: "SNF Scholarship 100%" }
    ],
    icon: <School className="text-white" size={20} />
  },
  {
    id: 3,
    title: "Secondary Education (Class 10th)",
    institution: "Vidyagyan School, UP",
    period: "2019",
    description: "Completed foundational education with outstanding academic performance. Participated in various extracurricular activities and competitions.",
    highlights: [
      { icon: <Star className="text-amber-500" size={16} />, text: "Percentage 92.8%" }
    ],
    icon: <BookOpen className="text-white" size={20} />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
            <span className="mr-2">🎓</span> Education
          </div>
          <h2 className="text-3xl font-bold">Academic Journey</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 rounded mt-4"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-800 rounded"></div>
          
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-16 last:mb-0"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-4 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center">
                {item.icon}
              </div>
              
              <Card className={`
                ${index % 2 === 0 ? 'ml-auto md:ml-0 md:mr-auto' : 'mr-auto md:mr-0 md:ml-auto'} 
                w-full md:w-5/12 bg-white dark:bg-slate-800 shadow-md
                ${index % 2 === 0 ? 'md:translate-x-8' : 'md:-translate-x-8'}
              `}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 rounded">{item.period}</span>
                  </div>
                  <h4 className="text-lg font-medium mb-3">{item.institution}</h4>
                  
                  {item.highlights.length > 0 && (
                    <div className="flex items-center mb-4 flex-wrap gap-4">
                      {item.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center">
                          {highlight.icon}
                          <span className="ml-1">{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
