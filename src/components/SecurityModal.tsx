import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Lock, EyeOff, CheckCircle2, ShieldAlert } from 'lucide-react';

interface SecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecurityModal({ isOpen, onClose }: SecurityModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
               <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
               </div>

               <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Xavfsizlik va Ishonch</h3>
               <p className="text-gray-500 text-sm leading-relaxed mb-8">
                 AgroMarkaz platformasi foydalanuvchi ma'lumotlarini eng yuqori darajada himoya qilishni o'zining ustuvor vazifasi deb biladi.
               </p>

               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="shrink-0 mt-1">
                        <Lock className="h-5 w-5 text-primary-500" />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900 text-sm">Shifrlangan ma'lumotlar</h4>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">Barcha shaxsiy va moliyaviy ma'lumotlar AES-256 shifrlash standartlari asosida himoyalanadi.</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="shrink-0 mt-1">
                        <EyeOff className="h-5 w-5 text-primary-500" />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900 text-sm">Maxfiylik kafolati</h4>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">Sizning fermerlik tarixingiz va tahlillaringiz uchinchi shaxslarga hech qachon berilmaydi.</p>
                     </div>
                  </div>

                  <div className="flex gap-4">
                     <div className="shrink-0 mt-1">
                        <ShieldAlert className="h-5 w-5 text-primary-500" />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-900 text-sm">24/7 Monitoring</h4>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">Tizim barqarorligi va xavfsizligi mutaxassislarimiz tomonidan doimiy nazorat qilinadi.</p>
                     </div>
                  </div>
               </div>

               <button 
                 onClick={onClose}
                 className="w-full mt-10 py-3.5 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
               >
                 <CheckCircle2 className="h-5 w-5" /> tushunarli
               </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
