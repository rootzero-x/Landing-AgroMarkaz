import { motion } from 'framer-motion';
import { Network, Leaf, LineChart, ShieldCheck } from 'lucide-react';

import { useState } from 'react';
import AIPlannerModal from './AIPlannerModal';
import MarketAnalysisModal from './MarketAnalysisModal';
import SecurityModal from './SecurityModal';

const featuresData = [
  {
    id: 'ai-agronom',
    icon: Leaf,
    title: "AI Agronom",
    description: "Ekinlaringiz holatini tahlil qilib, sun'iy intellekt orqali aniq maslahatlar va rejalarni oling."
  },
  {
    id: 'market-analysis',
    icon: LineChart,
    title: "Bozor Tahlili",
    description: "Narxlar o'zgarishi va bozor tendensiyalarini kuzatib borish orqali foydani maksimal darajaga ko'taring."
  },
  {
    id: 'community',
    icon: Network,
    title: "Fermerlar Tarmog'i",
    description: "Boshqa mutaxassislar bilan ishlash, tajriba almashish va hamkorlik qilish uchun qulay muhit."
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: "Xavfsiz va Ishonchli",
    description: "Sizning barcha ma'lumotlaringiz va moliyaviy tranzaksiyalaringiz zamonaviy himoya tizimi ostida."
  }
];

export default function Features() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleFeatureClick = (id: string) => {
    setActiveModal(id);
  };

  return (
    <>
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-gray-900 mb-4"
            >
              Nega aynan <span className="text-primary-600">AgroMarkaz</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Eng zamonaviy texnologiyalar va boy tajriba uyg'unligi tufayli biznesingizni barqaror rivojlantiring.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-premium p-8 group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => handleFeatureClick(feature.id)}
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary-600">
                  <feature.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Modals Management */}
      <AIPlannerModal 
        isOpen={activeModal === 'ai-agronom'} 
        onClose={() => setActiveModal(null)} 
      />
      <MarketAnalysisModal 
        isOpen={activeModal === 'market-analysis'} 
        onClose={() => setActiveModal(null)} 
      />
      <SecurityModal 
        isOpen={activeModal === 'security'} 
        onClose={() => setActiveModal(null)} 
      />
    </>
  );
}
