// import { motion } from 'framer-motion';
// import { Send, Bot } from 'lucide-react';

// export default function ChatWidgetPlaceholder() {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20, scale: 0.95 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ delay: 1, duration: 0.5 }}
//       className="fixed z-40 chat-widget-pos flex flex-col overflow-hidden"
//     >
//       {/* Header */}
//       <div className="bg-primary-600 p-4 flex items-center gap-3 text-white">
//         <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
//           <Bot className="h-6 w-6" />
//         </div>
//         <div>
//           <h3 className="font-semibold text-lg">AI Agronom</h3>
//           <p className="text-primary-100 text-xs font-medium">Onlayn maslahatchi</p>
//         </div>
//       </div>
      
//       {/* Body */}
//       <div className="flex-1 bg-gray-50/50 p-4 custom-scrollbar flex flex-col gap-4">
//          <div className="self-start max-w-[85%] bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-sm text-gray-700">
//            Assalomu alaykum! Men AgroMarkazning sun'iy intellekt agronomiman. Ekinlaringiz bo'yicha qanday yordam bera olaman?
//          </div>
//       </div>

//       {/* Input Placeholder */}
//       <div className="p-4 bg-white border-t border-gray-50 flex gap-2 items-center">
//         <input 
//           type="text" 
//           placeholder="Savolingizni yozing..." 
//           className="input-field py-2.5 !rounded-full !border-gray-100 !bg-gray-50 flex-1 text-sm"
//           disabled
//         />
//         <button className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-500 transition-colors shadow-sm" disabled>
//           <Send className="h-5 w-5 ml-0.5" />
//         </button>
//       </div>
//     </motion.div>
//   );
// }
