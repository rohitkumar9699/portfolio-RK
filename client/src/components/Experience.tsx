import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
  technologies?: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    position: "Python Developer Intern",
    company: "Prune Digital Consumer Solutions Pvt. Ltd.",
    period: "05/2025 - Present",
    achievements: [
      "Built a robust Coupon Management System API using Django and Django REST Framework",
      "Implemented JWT-based authentication for secure login and role-based access for superusers and regular users",
      "Designed models for Coupon, CouponUsage, and a custom MyUser model with fields like wallet balance and number of orders",
      "Developed coupon registration and application logic with constraints like expiry dates, min order value, usage limits, discount types, and payment validation",
      "Integrated wallet-based deductions and automatic deactivation of coupons based on usage limits",
      "Thoroughly tested all APIs using Postman to ensure reliability and correctness"
    ],
    technologies: ["Django", "Django REST Framework", "JWT Authentication", "Python", "Postman", "API Development"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Building real-world solutions and gaining valuable industry experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {/* Experience Card */}
              <div className="relative pl-20 pb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.position}
                      </h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-lg mb-3">
                        <Briefcase className="w-5 h-5 mr-2" />
                        {experience.company}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.period}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {experience.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achIndex * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {experience.technologies && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: techIndex * 0.05 }}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}