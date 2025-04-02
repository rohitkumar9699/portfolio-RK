import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Medal, Trophy, Clock } from "lucide-react";
import { FaRunning, FaChess } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "Shiv Nadar Foundation (SNF) Scholarship",
    description: "A prestigious, fully funded scholarship awarded to meritorious students from economically disadvantaged backgrounds, supporting education from Grade 6 to Grade 12.",
    subtitle: "Awarded for academic excellence and outstanding potential",
    icon: <Award className="text-xl" />,
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    borderColor: "from-amber-500 to-yellow-500"
  },
  {
    id: 2,
    title: "100% Scholarship at SRM University",
    description: "Merit-based scholarship covering full tuition fees and accommodation, enabling talented students to pursue their education without financial burden.",
    subtitle: "Recognition of academic excellence and entrance exam performance",
    icon: <Medal className="text-xl" />,
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    borderColor: "from-indigo-500 to-blue-500"
  },
  {
    id: 3,
    title: "National Level Athlete",
    description: "Competed four times in the CBSE National Championships, demonstrating consistent performance and dedication to athletics at a prestigious level.",
    subtitle: "Excellence in running events and competitive sports",
    icon: <FaRunning className="text-xl" />,
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "from-emerald-500 to-green-500"
  },
  {
    id: 4,
    title: "National Level Chess Player",
    description: "Competed in various tournaments including T-gulf, demonstrating strong strategic thinking and problem-solving skills at high-level competitions.",
    subtitle: "Strategic excellence and competitive achievement",
    icon: <FaChess className="text-xl" />,
    iconBg: "bg-slate-100 dark:bg-slate-700",
    iconColor: "text-slate-700 dark:text-slate-300",
    borderColor: "from-slate-500 to-slate-700"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 mb-4">
            <span className="mr-2">🏆</span> Achievements
          </div>
          <h2 className="text-3xl font-bold">Notable Accomplishments</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 rounded mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className={`h-2 bg-gradient-to-r ${achievement.borderColor}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className={`shrink-0 w-12 h-12 ${achievement.iconBg} rounded-full flex items-center justify-center mr-4 ${achievement.iconColor} group-hover:scale-110 transition-transform`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {achievement.description}
                      </p>
                      <div className="text-sm text-slate-500 dark:text-slate-500">
                        {achievement.subtitle}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
