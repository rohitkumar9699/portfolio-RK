const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <a href="#hero" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                RK
              </div>
              <span className="text-lg font-semibold">Rohit Kumar</span>
            </a>
          </div>
          
          <div className="text-center sm:text-right">
            <p>&copy; 2025 Rohit Kumar. All rights reserved.</p>
            <p className="text-slate-400 text-sm mt-1">Final-Year CSE Student | Problem-solving | Software Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
