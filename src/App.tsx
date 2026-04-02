import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  const [showFeatures, setShowFeatures] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleNavigateToFeatures = () => {
    setShowFeatures(true);
    // Use a timeout to wait for the section to be rendered before scrolling
    setTimeout(() => {
      featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-primary-200 selection:text-primary-900 ${!showFeatures ? 'overflow-hidden max-h-screen' : 'overflow-x-hidden'}`}
    >
      <Navbar onNavigateFeatures={handleNavigateToFeatures} />

      <main>
        <Hero onNavigateFeatures={handleNavigateToFeatures} />
        
        {showFeatures && (
          <div ref={featuresRef}>
            <Features />
          </div>
        )}
      </main>

      {/* Footer is only visible if features are visible for better flow, or always at the bottom */}
      {showFeatures && (
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
