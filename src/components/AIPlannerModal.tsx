import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, MapPin, Layers, Droplets, Brain, Sprout,
  TrendingUp, ChevronDown, BarChart3, DollarSign, Wrench,
  FileText, FlaskConical, History
} from 'lucide-react';

// ─── TYPES ───────────────────────────────────────────────────────────────────
type Stage = 'idle' | 'loading' | 'result';

// ─── DEMO RESULT DATA ─────────────────────────────────────────────────────────
const DEMO_RESULT = {
  cropName: "Piyoz (Bahorgi)",
  badge: "YUQORI MOSLIK",
  taxminiyFoyda: "95,000,000",
  prognozHosil: "35-45",
  suvTalabi: "5500",
  umumiyXarajat: "42,000,000",
  tahlilText: "Qumloq tuproqda yaxshi yumshoq struktura va drenaj tufayli piyoz ildizi yaxshi rivojlanadi, lekin o'g'itlash va namlikni ushlab turish muhim. O'rtacha suv sharoitida tomchilatib yoki egatlab to'g'ri sug'orilsa 38–42 t/ga hosil olish mumkin. Xavflar: piyoz pashshasi, chirish kasalliklari va bozordagi mavsumiy narx tebranishi. Hosildorlikni oshirish uchun organik o'g'it (10–15 t/ga go'ng), fosfor-kaliyli o'g'itlar, almashlab ekish va sifatli urug' navlarini qo'llash zarur.",
  bars: [
    { label: "Minimal (Xavf darajasi)", value: 35, max: 50, color: "bg-gray-400" },
    { label: "O'rtacha (Barqaror ho...)", value: 40, max: 50, color: "bg-blue-500" },
    { label: "Maksimal (Optimal sh...", value: 45, max: 50, color: "bg-primary-500" },
  ]
};

// ─── LOADING SPINNER ─────────────────────────────────────────────────────────
function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="40" fill="none" stroke="#e2e8f0" strokeWidth="6" />
          <motion.circle
            cx="48" cy="48" r="40"
            fill="none"
            stroke="#4B8937"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="251.2"
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Brain className="h-9 w-9 text-primary-600" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl font-bold text-gray-800">Ma'lumotlar tahlil qilinmoqda...</p>
        <p className="text-sm text-gray-500 mt-1">Iqlim, tuproq va bozor konyunkturasi o'rganilmoqda</p>
      </div>
    </div>
  );
}

// ─── IDLE STATE ───────────────────────────────────────────────────────────────
function IdleState() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-5 text-center px-8">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
        <Sprout className="h-10 w-10 text-gray-400" />
      </div>
      <div>
        <p className="text-lg font-bold text-gray-800">Eng mos ekinlarni aniqlang</p>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Chap tomondagi ma'lumotlarni to'ldiring va AI yordamida yeringizga eng mos,{' '}
          <span className="text-primary-600 font-medium">serdaromad</span> ekinlar ro'yxatini shakllantiring.
        </p>
      </div>
    </div>
  );
}

// ─── RESULT STATE ─────────────────────────────────────────────────────────────
function ResultState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 h-full overflow-y-auto custom-scrollbar"
    >
      {/* Crop header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900">{DEMO_RESULT.cropName}</h3>
          <span className="inline-block mt-1 px-3 py-0.5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold tracking-wide">
            {DEMO_RESULT.badge}
          </span>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">Taxminiy sof foyda</p>
          <p className="text-2xl font-extrabold text-primary-600 leading-tight">
            {DEMO_RESULT.taxminiyFoyda} <span className="text-base font-bold text-gray-500">so'm/ga</span>
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-primary-50 rounded-2xl p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <TrendingUp className="h-3.5 w-3.5 text-primary-500" />
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Prognoz hosil</p>
          </div>
          <p className="text-lg font-extrabold text-gray-900">{DEMO_RESULT.prognozHosil}</p>
          <p className="text-[10px] text-gray-400 font-medium">tonna/gektar</p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <Droplets className="h-3.5 w-3.5 text-blue-500" />
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Suv talabi</p>
          </div>
          <p className="text-lg font-extrabold text-gray-900">{DEMO_RESULT.suvTalabi}</p>
          <p className="text-[10px] text-gray-400 font-medium">m³/yil</p>
        </div>
        <div className="bg-amber-50 rounded-2xl p-3">
          <div className="flex items-center gap-1.5 mb-1">
            <DollarSign className="h-3.5 w-3.5 text-amber-500" />
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Umumiy xarajat</p>
          </div>
          <p className="text-base font-extrabold text-gray-900">{DEMO_RESULT.umumiyXarajat}</p>
          <p className="text-[10px] text-gray-400 font-medium">so'm</p>
        </div>
      </div>

      {/* Analysis text */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="h-4 w-4 text-primary-600" />
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Hosildorlik tahlili</p>
          <span className="text-[10px] text-gray-400">O'rtacha 40 t/ga</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{DEMO_RESULT.tahlilText}</p>
      </div>

      {/* Bar chart */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-primary-500" />
          <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">Hosildorlik grafik tahlili (gektar/tonna)</p>
        </div>
        <div className="space-y-3">
          {DEMO_RESULT.bars.map((bar, i) => (
            <div key={i} className="flex items-center gap-3">
              <p className="text-xs text-gray-500 w-36 shrink-0 truncate">{bar.label}</p>
              <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(bar.value / bar.max) * 100}%` }}
                  transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                  className={`h-full rounded-full ${bar.color}`}
                />
              </div>
              <p className="text-xs font-bold text-gray-700 w-6 text-right">{bar.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer stats */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-[10px] text-gray-400 font-semibold uppercase">Xarajatlar taqsimoti</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3 flex items-center gap-2">
          <Wrench className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-[10px] text-gray-400 font-semibold uppercase">Mehnat sarfi</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN MODAL ───────────────────────────────────────────────────────────────
const HUDUD_OPTIONS = [
  "Toshkent viloyati", "Samarqand viloyati", "Surxondaryo viloyati",
  "Farg'ona viloyati", "Andijon viloyati", "Namangan viloyati",
  "Buxoro viloyati", "Qashqadaryo viloyati", "Xorazm viloyati",
  "Jizzax viloyati", "Sirdaryo viloyati", "Navoiy viloyati",
  "Qoraqalpog'iston Respublikasi",
];

interface AIPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIPlannerModal({ isOpen, onClose }: AIPlannerModalProps) {
  const [stage, setStage] = useState<Stage>('idle');
  const [hudud, setHudud] = useState('');
  const [yer, setYer] = useState('25');
  const [tuproq, setTuproq] = useState('Qumloq');
  const [suv, setSuv] = useState('');
  const [oldingiHosil, setOldingiHosil] = useState('');
  const [urugNavi, setUrugNavi] = useState('');
  const [qoshimchaMalumot, setQoshimchaMalumot] = useState('');

  // close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // lock body scroll
  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const canAnalyze = hudud !== '' && yer !== '' && suv !== '';

  function handleAnalyze() {
    if (!canAnalyze) return;
    
    // Log the data for future backend integration
    console.log("Analyzing data:", {
      hudud,
      yerHajmi: yer,
      tuproqTuri: tuproq,
      suvMavjudligi: suv,
      oldingiHosil,
      urugNavi,
      qoshimchaMalumot
    });

    setStage('loading');
    setTimeout(() => setStage('result'), 2200);
  }

  function handleReset() {
    setStage('idle');
    setHudud('');
    setYer('25');
    setTuproq('Qumloq');
    setSuv('');
    setOldingiHosil('');
    setUrugNavi('');
    setQoshimchaMalumot('');
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="ai-planner-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            key="ai-planner-modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#F5F7F6] rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header — green banner */}
            <div
              className="relative flex items-center gap-4 px-7 py-5 text-white rounded-t-3xl"
              style={{ background: 'linear-gradient(135deg, #4B8937 0%, #3b6c2c 100%)' }}
            >
              {/* decorative circle */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
              />
              <div className="p-2.5 bg-white/20 rounded-xl">
                <Brain className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">AI Agronom</h2>
                <p className="text-green-100 text-sm mt-0.5">
                  Sun'iy intellekt yordamida yeringiz uchun eng daromadli va mos keluvchi ekinlarni kashf eting.
                </p>
              </div>
              <button
                onClick={onClose}
                className="ml-auto z-10 p-2 rounded-xl bg-white/10 hover:bg-white/25 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex flex-col md:flex-row flex-1 overflow-hidden min-h-0">

              {/* ─── LEFT: INPUT FORM ─── */}
              <div className="w-full md:w-[340px] shrink-0 bg-white p-6 overflow-y-auto custom-scrollbar border-r border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Ma'lumotlarni kiriting</h3>

                {/* Hudud */}
                <div className="mb-5">
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="h-4 w-4 text-primary-500" />
                    Hudud
                  </label>
                  <div className="relative">
                    <select
                      value={hudud}
                      onChange={e => setHudud(e.target.value)}
                      className="input-field appearance-none pr-10 cursor-pointer"
                    >
                      <option value="">Tanlang</option>
                      {HUDUD_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Yer hajmi */}
                <div className="mb-5">
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-2">
                    <Layers className="h-4 w-4 text-primary-500" />
                    Yer hajmi (gektar)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={9999}
                    value={yer}
                    onChange={e => setYer(e.target.value)}
                    className="input-field"
                    placeholder="25"
                  />
                </div>

                {/* Tuproq turi */}
                <div className="mb-5">
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500">
                      <path d="M12 22V12M12 12C12 6.5 7 3 2 3M12 12C12 6.5 17 3 22 3"/>
                    </svg>
                    Tuproq turi
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Qumloq', 'Loyli', 'Sopol', "Sho'rli"].map(t => (
                      <button
                        key={t}
                        onClick={() => setTuproq(t)}
                        className={`py-2.5 px-3 rounded-xl text-sm font-semibold border transition-all ${
                          tuproq === t
                            ? 'bg-white border-primary-500 text-primary-700 shadow-sm'
                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-primary-200 hover:bg-primary-50/50'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Suv mavjudligi */}
                <div className="mb-7">
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-3">
                    <Droplets className="h-4 w-4 text-primary-500" />
                    Suv mavjudligi
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Yuqori', "O'rta", 'Past'].map(s => (
                      <button
                        key={s}
                        onClick={() => setSuv(s)}
                        className={`py-2.5 px-2 rounded-xl text-sm font-semibold border transition-all ${
                          suv === s
                            ? 'bg-white border-primary-500 text-primary-700 shadow-sm'
                            : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-primary-200 hover:bg-primary-50/50'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Oldingi Hosil */}
                <div className="mb-5">
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-2">
                    <History className="h-4 w-4 text-primary-500" />
                    Oldingi Hosil (tonna/gektar)
                  </label>
                  <input
                    type="number"
                    value={oldingiHosil}
                    onChange={e => setOldingiHosil(e.target.value)}
                    className="input-field"
                    placeholder="Masalan: 35"
                  />
                </div>

                {/* Urug' Navi */}
                <div className="mb-5">
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-2">
                    <FlaskConical className="h-4 w-4 text-primary-500" />
                    Urug' Navi
                  </label>
                  <input
                    type="text"
                    value={urugNavi}
                    onChange={e => setUrugNavi(e.target.value)}
                    className="input-field"
                    placeholder="Masalan: Elita"
                  />
                </div>

                {/* Qo'shimcha malumotlar */}
                <div className="mb-7">
                  <label className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 mb-2">
                    <FileText className="h-4 w-4 text-primary-500" />
                    Qo'shimcha ma'lumotlar
                  </label>
                  <textarea
                    value={qoshimchaMalumot}
                    onChange={e => setQoshimchaMalumot(e.target.value)}
                    className="input-field min-h-[100px] resize-none"
                    placeholder="Yerning holati yoki boshqa eslatmalar..."
                  />
                </div>

                {/* Submit button */}
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleAnalyze}
                    disabled={!canAnalyze || stage === 'loading'}
                    className={`btn-primary flex items-center justify-center gap-2 ${
                      !canAnalyze ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <Brain className="h-5 w-5" />
                    AI tahlil qilish
                  </button>
                  {stage !== 'idle' && (
                    <button
                      onClick={handleReset}
                      className="w-full text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors py-2"
                    >
                      Qayta boshlash
                    </button>
                  )}
                </div>
              </div>

              {/* ─── RIGHT: RESULT PANEL ─── */}
              <div className="flex-1 bg-[#F5F7F6] min-h-0 overflow-hidden">
                <AnimatePresence mode="wait">
                  {stage === 'idle' && (
                    <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                      <IdleState />
                    </motion.div>
                  )}
                  {stage === 'loading' && (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                      <LoadingState />
                    </motion.div>
                  )}
                  {stage === 'result' && (
                    <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
                      <ResultState />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
