import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Founders from './components/Founders';

function App() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showFounders, setShowFounders] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const foundersRef = useRef<HTMLDivElement>(null);

  const handleNavigateToFeatures = () => {
    setShowFeatures(true);
    setTimeout(() => {
      featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNavigateToFounders = () => {
    setShowFounders(true);
    setTimeout(() => {
      foundersRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const isRestricted = !showFeatures && !showFounders;

  return (
    <div
      className={`min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900 ${isRestricted ? 'overflow-hidden max-h-screen' : 'overflow-x-hidden'}`}
    >
      <Navbar 
        onNavigateFeatures={handleNavigateToFeatures} 
        onNavigateFounders={handleNavigateToFounders}
      />

      <main>
        <Hero onNavigateFeatures={handleNavigateToFeatures} />
        
        {showFeatures && (
          <div ref={featuresRef}>
            <Features />
          </div>
        )}

        {showFounders && (
          <div ref={foundersRef}>
            <Founders />
          </div>
        )}
      </main>

      {/* Footer is only visible if any extra section is visible */}
      {(showFeatures || showFounders) && (
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} AgroMarkaz. Barcha huquqlar himoyalangan.</p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
