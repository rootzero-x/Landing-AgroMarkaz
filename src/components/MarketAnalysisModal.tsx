import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, BarChart3, ShoppingCart, 
  ArrowUpRight, AlertCircle, Info, ChevronRight,
  Package, Scale, ArrowDownRight, Globe
} from 'lucide-react';

interface MarketAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MarketAnalysisModal({ isOpen, onClose }: MarketAnalysisModalProps) {
  
  const handleCardClick = (title: string) => {
    alert(`Batafsil ma'lumot: ${title} bo'yicha tahlillar 2024-yil uchun hisoblanmoqda.`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#F8FAFB] rounded-[32px] w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Area */}
            <div className="bg-[#4B8937] p-8 text-white relative overflow-hidden shrink-0">
               <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
               <div className="relative z-10 flex justify-between items-start">
                  <div className="flex gap-4 items-center">
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                      <BarChart3 className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-extrabold tracking-tight">Bozor Tahlili</h2>
                      <p className="text-green-100 mt-1 max-w-md opacity-90">
                        Qishloq xo'jaligi mahsulotlarining ishlab chiqarish va bozor talabi o'rtasidagi muvozanatini kuzatib boring.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-xl transition-colors">
                      <X className="h-6 w-6" />
                    </button>
                    <div className="bg-white/10 px-4 py-2 rounded-2xl border border-white/20 backdrop-blur-sm text-xs font-bold tracking-widest uppercase">
                      Muddat: 2024 Yillik Hisobot
                    </div>
                  </div>
               </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              
              {/* Top Row: Main Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Producton */}
                <div 
                  onClick={() => handleCardClick("Ishlab chiqarish")}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors">
                      <Package className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ishlab chiqarish</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-gray-900">7.5M</span>
                    <span className="text-sm font-bold text-gray-500 mb-1.5 uppercase">tonna</span>
                  </div>
                </div>

                {/* Demand */}
                <div 
                  onClick={() => handleCardClick("Bozor talabi")}
                  className="bg-white p-6 rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-50 text-amber-600 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <ShoppingCart className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bozor talabi</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-gray-900">6.8M</span>
                    <span className="text-sm font-bold text-gray-500 mb-1.5 uppercase">tonna</span>
                  </div>
                </div>

                {/* Balance */}
                <div 
                  onClick={() => handleCardClick("Balans holati")}
                  className="bg-white p-6 rounded-3xl border border-primary-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-50 text-primary-600 rounded-xl group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Scale className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Balans holati</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-extrabold text-primary-600">+685K</span>
                    <span className="px-2.5 py-1 bg-primary-100 text-primary-700 text-[10px] font-extrabold rounded-lg uppercase tracking-tighter">
                      Ortiqcha
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle Row: Opportunities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {/* Export */}
                <div 
                  onClick={() => handleCardClick("Eksport imkoniyati")}
                  className="bg-[#2D5A40] p-8 rounded-[32px] text-white relative overflow-hidden group cursor-pointer"
                >
                   <div className="absolute right-0 bottom-0 opacity-10 -rotate-12 translate-y-1/4 group-hover:scale-110 transition-transform">
                      <Globe className="h-48 w-48" />
                   </div>
                   <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 mb-6 font-bold text-xs">
                        <ArrowUpRight className="h-4 w-4" />
                        Eksport imkoniyati
                      </div>
                      <h4 className="text-sm font-bold text-green-200 uppercase tracking-wider mb-2">Jami ortiqcha hosil</h4>
                      <div className="flex items-baseline gap-4">
                        <span className="text-5xl font-black">1,135,000</span>
                        <span className="text-xl font-bold text-green-300">tonna</span>
                      </div>
                      <p className="mt-4 text-sm text-green-100 font-medium bg-black/20 w-fit px-3 py-1 rounded-lg border border-white/5">
                        6 turdagi mahsulot uchun
                      </p>
                   </div>
                </div>

                {/* Import */}
                <div 
                  onClick={() => handleCardClick("Import kerak")}
                  className="bg-[#E45D21] p-8 rounded-[32px] text-white relative overflow-hidden group cursor-pointer"
                >
                   <div className="absolute right-0 bottom-0 opacity-10 rotate-12 translate-y-1/4 group-hover:scale-110 transition-transform">
                      <AlertCircle className="h-48 w-48" />
                   </div>
                   <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-xl border border-white/10 mb-6 font-bold text-xs">
                        <ArrowDownRight className="h-4 w-4" />
                        Tanqislik aniqlandi
                      </div>
                      <h4 className="text-sm font-bold text-orange-200 uppercase tracking-wider mb-2">Import kerak</h4>
                      <div className="flex items-baseline gap-4">
                        <span className="text-5xl font-black">450,000</span>
                        <span className="text-xl font-bold text-orange-300">tonna</span>
                      </div>
                      <p className="mt-4 text-sm text-orange-100 font-medium bg-black/20 w-fit px-3 py-1 rounded-lg border border-white/5">
                        3 turdagi mahsulot uchun
                      </p>
                   </div>
                </div>
              </div>

              {/* Bottom Section: Table style list */}
              <div>
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Mahsulotlar bo'yicha tahlil</h3>
                   <button className="flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700">
                     Barchasini ko'rish <ChevronRight className="h-4 w-4" />
                   </button>
                </div>

                <div className="space-y-4">
                  {[
                    { name: "Bug'doy", type: "Donli ekin", icon: "🌾", prod: "1.2M", demand: "950K", color: "bg-amber-500", tag: "Eksport" },
                    { name: "Paxta (G'o'za)", type: "Texnik ekin", icon: "☁️", prod: "3.2M", demand: "3.2M", color: "bg-blue-500", tag: "Balans" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary-100 transition-colors">
                      <div className="flex items-center gap-4 w-full md:w-1/4">
                        <div className="w-12 h-12 bg-gray-50 flex items-center justify-center text-2xl rounded-2xl group-hover:bg-primary-50 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-extrabold text-gray-900 group-hover:text-primary-600 transition-colors">{item.name}</h5>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.type}</p>
                        </div>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-2 gap-8">
                        <div>
                           <div className="flex justify-between items-center mb-1.5">
                              <span className="text-[10px] font-bold text-gray-400 uppercase">Ishlab chiqarish:</span>
                              <span className="text-xs font-black text-gray-900">{item.prod} t</span>
                           </div>
                           <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} className={`h-full ${item.color}`} />
                           </div>
                        </div>
                        <div>
                           <div className="flex justify-between items-center mb-1.5">
                              <span className="text-[10px] font-bold text-gray-400 uppercase">Bozor talabi:</span>
                              <span className="text-xs font-black text-gray-900">{item.demand} t</span>
                           </div>
                           <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: item.tag === "Balans" ? "100%" : "60%" }} className={`h-full ${item.color} opacity-40`} />
                           </div>
                        </div>
                      </div>

                      <div className="w-full md:w-32 flex justify-end">
                         <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${
                           item.tag === "Eksport" ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
                         }`}>
                           {item.tag}
                         </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Hint */}
              <div className="mt-12 p-6 bg-primary-50/50 rounded-[32px] border border-primary-100 flex items-start gap-4">
                 <div className="p-3 bg-white rounded-2xl text-primary-600 shadow-sm">
                    <Info className="h-6 w-6" />
                 </div>
                 <div>
                    <h5 className="font-bold text-gray-900">Ma'lumotlar xavfsizligi</h5>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      Barcha bozor tahlillari va statistik ma'lumotlar davlat va xalqaro ochiq ma'lumotlar bazalari asosida AgroMarkaz sun'iy intellekti tomonidan qayta ishlanadi.
                    </p>
                 </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
