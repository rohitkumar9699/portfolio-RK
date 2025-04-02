import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Home, Github, Linkedin, Code, Utensils } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 mb-4">
            <span className="mr-2">✉️</span> Contact
          </div>
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <div className="h-1 w-20 bg-indigo-600 dark:bg-indigo-500 rounded mt-4"></div>
        </div>
        
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <Card className="bg-white dark:bg-slate-900 rounded-xl shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 text-indigo-600 dark:text-indigo-400">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Email</p>
                      <a href="mailto:rk94523386@gmail.com" className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">rk94523386@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 text-indigo-600 dark:text-indigo-400">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                      <a href="tel:+916306843789" className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">+91 6306843789</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 text-indigo-600 dark:text-indigo-400">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Current Address</p>
                      <p className="text-lg font-medium">SRM University AP, Andhra Pradesh, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-4 text-indigo-600 dark:text-indigo-400">
                      <Home size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Permanent Address</p>
                      <p className="text-lg font-medium">Jamauramafi, Lalitpur, Uttar Pradesh, India, 284124</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mt-10 mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/rohit-kumar-83b147243/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/rohitkumar9699" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-slate-950 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://leetcode.com/rohit_kumar_9699" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 transition-colors"
                  >
                    <Code size={20} />
                  </a>
                  <a 
                    href="https://www.codechef.com/users/rohit_kumar71" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600 transition-colors"
                  >
                    <Utensils size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
