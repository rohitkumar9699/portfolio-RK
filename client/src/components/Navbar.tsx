import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              RK
            </div>
            <span className="text-lg font-semibold hidden sm:block">Rohit Kumar</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#about" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">About</a>
            <a href="#experience" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Experience</a>
            <a href="#projects" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Projects</a>
            <a href="#education" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Education</a>
            <a href="#achievements" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Achievements</a>
            <a href="#skills" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Skills</a>
            <a href="#contact" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-2">
            {/* Theme Toggler */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-md hover:bg-slate-100 dark:hover:bg-slate-800" 
              onClick={handleMobileMenuToggle}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 animate-fade-in ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-1">
          <a href="#about" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={closeMobileMenu}>About</a>
          <a href="#projects" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={closeMobileMenu}>Projects</a>
          <a href="#education" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={closeMobileMenu}>Education</a>
          <a href="#achievements" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={closeMobileMenu}>Achievements</a>
          <a href="#skills" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={closeMobileMenu}>Skills</a>
          <a href="#contact" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" onClick={closeMobileMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
