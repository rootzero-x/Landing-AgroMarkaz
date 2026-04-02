import { Sprout, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIPlannerModal from './AIPlannerModal';

interface NavbarProps {
  onNavigateFeatures: () => void;
  onNavigateFounders: () => void;
}

export default function Navbar({ onNavigateFeatures, onNavigateFounders }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  function goToAI() {
    setIsOpen(false);
    setAiOpen(true);
  }

  return (
    <>
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-100/40 bg-white/75 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-2">
              <div className="p-2 bg-primary-50 rounded-xl">
                <Sprout className="h-6 w-6 text-primary-600" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Agro<span className="text-primary-600">Markaz</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                Bosh sahifa
              </a>
              <button 
                onClick={onNavigateFeatures}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Afzalliklar
              </button>
              <button 
                onClick={onNavigateFounders}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                Founderlar
              </button>
              <button
                onClick={goToAI}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                AI Rejalashtiruvchi
              </button>
              <a
                href="https://agromarkaz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold transition-all shadow-premium hover:shadow-premium-hover active:scale-95"
              >
                Kirish
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 hover:text-primary-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
                <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors">
                  Bosh sahifa
                </a>
                <button 
                  onClick={() => { setIsOpen(false); onNavigateFeatures(); }} 
                  className="w-full text-left block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  Afzalliklar
                </button>
                <button 
                  onClick={() => { setIsOpen(false); onNavigateFounders(); }} 
                  className="w-full text-left block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  Founderlar
                </button>
                <button
                  onClick={goToAI}
                  className="text-left block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                >
                  AI Rejalashtiruvchi
                </button>
                <div className="pt-3">
                  <a
                    href="https://agromarkaz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold shadow-sm active:scale-95 transition-all"
                  >
                    Kirish
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AIPlannerModal isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
