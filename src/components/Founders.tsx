import { motion } from 'framer-motion';
import { User, Mail, Globe, Share2 } from 'lucide-react';

const foundersData = [
  {
    name: "Founder 1",
    role: "CEO & Visionary",
    image: "/IMG_1375.HEIC",
    description: "AgroMarkaz platformasining asoschisi va strategik rivojlanish bo'yicha mas'ul."
  },
  {
    name: "Founder 2",
    role: "CTO & Tech Lead",
    image: "/IMG_1378.HEIC",
    description: "Sun'iy intellekt va texnologik yechimlarni joriy etish bo'yicha mutaxassis."
  },
  {
    name: "Founder 3",
    role: "COO & Operations",
    image: "/IMG_1384.HEIC",
    description: "Fermerlar bilan aloqalar va operatsion boshqaruvni yo'lga qo'yuvchi rahbar."
  }
];

export default function Founders() {
  return (
    <section id="founders" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-gray-900 mb-4"
          >
            Bizning <span className="text-primary-600">Asoschilarimiz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            AgroMarkaz jamoasi O'zbekiston qishloq xo'jaligini innovatsion texnologiyalar orqali yuksaltirishni maqsad qilgan professional mutaxassislardan iborat.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {foundersData.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-8 aspect-[4/5] rounded-[32px] overflow-hidden bg-white shadow-premium group-hover:shadow-premium-hover transition-all duration-500">
                {/* Image Placeholder with actual filenames */}
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 p-4">
                   <div className="flex gap-4">
                      <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-primary-600 transition-all">
                        <Globe className="h-5 w-5" />
                      </button>
                      <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-primary-600 transition-all">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white hover:bg-white hover:text-primary-600 transition-all">
                        <Mail className="h-5 w-5" />
                      </button>
                   </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                <p className="text-primary-600 font-bold text-sm uppercase tracking-widest mb-4">{founder.role}</p>
                <p className="text-gray-500 leading-relaxed italic px-4">
                  "{founder.description}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>

      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  );
}
