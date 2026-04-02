import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, Share2, ShieldCheck } from 'lucide-react';

const foundersData = [
  {
    name: "Behruz Karimov",
    role: "Founder & Finance Lead",
    image: "/IMG_1375.png",
    description: "Agro Billing va hujjatlar bo'yicha mas'ul. Biznes va Qishloq xo'jaligi sohasida 6 yillik professional tajribaga ega.",
    email: "behruz.karimov@gmail.com",
    website: "https://agrom24.uz",
    stats: "6+ Yil Tajriba"
  },
  {
    name: "Khayrullayevich Oyatullokh",
    role: "Founder & Tech Architect",
    image: "/IMG_1378.png",
    description: "DevOps, Xavfsizlik va FrontEnd texnologiyalari bo'yicha yuqori malakali mutaxassis, 6 yillik tajribaga ega.",
    email: "rootzero.xz@gmail.com",
    website: "https://cybernexus.uz",
    stats: "DevOps & Security"
  },
  {
    name: "Karayev Umedjon",
    role: "Founder & Backend Lead",
    image: "/IMG_1384.png",
    description: "Tizimning backend infratuzilmasi va barqaror ishlashini ta'minlovchi yetakchi dasturchi, 7 yillik tajribaga ega.",
    email: "karayev.umedjon@gmail.com",
    website: "https://umedzhan.vercel.app/",
    stats: "Backend Expert"
  }
];

export default function Founders() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleShare = async (founder: typeof foundersData[0]) => {
    const shareData = {
      title: `AgroMarkaz Asoschisi: ${founder.name}`,
      text: `${founder.name} — ${founder.role}. ${founder.description}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        alert("Ma'lumotlar buferga nusxalandi!");
      }
    } catch (err) {
      console.error('Sharing failed:', err);
    }
  };

  return (
    <section id="founders" className="py-32 bg-[#0A0F0C] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-primary-400" />
            <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">Bizning Jamoa</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter"
          >
            AgroMarkaz <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">Arxitektorlari</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed font-medium"
          >
            O'zbekistonning raqamli agro-kelajagini qurayotgan professional muhandislar va strateglar jamoasi.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {foundersData.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 50 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Main Card Container */}
              <div className="relative z-10 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[48px] p-4 pb-10 transition-all duration-500 group-hover:border-primary-500/30 group-hover:bg-white/[0.05] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-full flex flex-col items-center">
                
                {/* Image Section */}
                <div className="relative w-full mb-8 overflow-hidden rounded-[40px] aspect-[4/5] bg-gray-900">
                  <motion.img 
                    src={founder.image} 
                    alt={founder.name}
                    animate={{ 
                      scale: hoveredIndex === index ? 1.05 : 1,
                      filter: hoveredIndex === index ? "grayscale(0%)" : "grayscale(30%)"
                    }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Stat Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl text-[10px] font-bold text-white uppercase tracking-wider">
                      {founder.stats}
                    </div>
                  </div>

                  {/* Glass Action Overlay */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-8 px-6"
                      >
                         <div className="flex gap-4">
                            <motion.a 
                              whileHover={{ y: -5, scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={founder.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl text-white border border-white/10 hover:bg-primary-500 hover:border-primary-400 transition-all shadow-xl"
                            >
                              <Globe className="h-5 w-5" />
                            </motion.a>
                            <motion.button 
                              whileHover={{ y: -5, scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleShare(founder)}
                              className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl text-white border border-white/10 hover:bg-primary-500 hover:border-primary-400 transition-all shadow-xl"
                            >
                              <Share2 className="h-5 w-5" />
                            </motion.button>
                            <motion.a 
                              whileHover={{ y: -5, scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={`mailto:${founder.email}`}
                              className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl text-white border border-white/10 hover:bg-primary-500 hover:border-primary-400 transition-all shadow-xl"
                            >
                              <Mail className="h-5 w-5" />
                            </motion.a>
                         </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content Section */}
                <div className="text-center px-6 flex-grow flex flex-col items-center">
                  <div className="inline-block mb-3">
                    <span className="text-[10px] font-bold text-primary-400 uppercase tracking-[0.2em] bg-primary-400/10 px-3 py-1 rounded-full border border-primary-400/20">
                      {founder.role}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                    {founder.name}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed italic text-sm line-clamp-3 group-hover:text-gray-300 transition-colors">
                    "{founder.description}"
                  </p>
                </div>
                
                {/* Visual Connector */}
                <div className="mt-8 w-12 h-1 rounded-full bg-gradient-to-r from-primary-500 to-emerald-500 opacity-20 group-hover:opacity-100 transition-all duration-500 scale-x-50 group-hover:scale-x-100" />
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-emerald-500 rounded-[50px] blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
        
      </div>

      {/* Modern Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
