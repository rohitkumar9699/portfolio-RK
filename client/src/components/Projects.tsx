import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Briefcase, Image, IdCard, GraduationCap } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "Career Recommendation System",
    period: "Mar-May 2024",
    description: "Engineered a recommender system using the Random Forest algorithm with 82% accuracy. Developed backend using Python, MySQL for database management, and HTML/CSS for frontend.",
    link: "https://github.com/rohitkumar9699/Career-perspect-of-Individaul-using-Recommendar-System",
    icon: <Briefcase className="text-5xl text-white" />,
    gradient: "from-indigo-500 to-purple-600",
    textColor: "text-indigo-600 dark:text-indigo-400",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300",
    tags: ["Python", "MySQL", "Machine Learning", "HTML/CSS"]
  },
  {
    id: 2,
    title: "Image Editor Application",
    period: "Oct-Nov 2024",
    description: "Developed using JavaScript, React, Express, Node.js, and Python, enabling versatile image editing features like resizing, PDF conversion, sketching, background removal, and more.",
    link: "https://github.com/rohitkumar9699/Image-Editor-Application",
    icon: <Image className="text-5xl text-white" />,
    gradient: "from-emerald-500 to-teal-600",
    textColor: "text-emerald-600 dark:text-emerald-400",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
    tags: ["JavaScript", "React", "Node.js", "Express", "Python"]
  },
  {
    id: 3,
    title: "Employee Records System",
    period: "Jun-Jul 2024",
    description: "Designed and implemented a system for managing employee records using JavaScript, Express, React, Node.js, and MongoDB with Nodemon for efficient development.",
    link: "https://github.com/rohitkumar9699/-Full-stack-Application-for-Employee-Records",
    icon: <IdCard className="text-5xl text-white" />,
    gradient: "from-blue-500 to-sky-600",
    textColor: "text-blue-600 dark:text-blue-400",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: 4,
    title: "Student Records Management",
    period: "Sep-Oct 2023",
    description: "Developed a GUI-based student record management system using Java and Swing. Implemented secure login for faculty and enabled seamless student data handling.",
    link: "https://github.com/rohitkumar9699/Student-Record-Management-using-GUI-JAVA-Swing",
    icon: <GraduationCap className="text-5xl text-white" />,
    gradient: "from-amber-500 to-orange-600",
    textColor: "text-amber-600 dark:text-amber-400",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
    tags: ["Java", "Swing", "GUI", "Database"]
  }
];

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 mb-4">
            <span className="mr-2">🧩</span> Projects
          </div>
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 rounded mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="project-card bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                {project.icon}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className={`text-xs font-medium ${project.badgeColor} px-2 py-1 rounded`}>{project.period}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="bg-slate-100 dark:bg-slate-800 font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className={`inline-flex items-center ${project.textColor} hover:underline transition-colors font-medium text-sm`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
