import { motion } from 'framer-motion';
import { ArrowRight, Play, Brain } from 'lucide-react';
import { useState } from 'react';
import AIPlannerModal from './AIPlannerModal';

interface HeroProps {
  onNavigateFeatures: () => void;
}

export default function Hero({ onNavigateFeatures }: HeroProps) {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative min-h-[100svh] pt-28 pb-20 flex items-center overflow-hidden">
        {/* Background radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, var(--color-primary-100) 0%, transparent 65%)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ─── LEFT: Text ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col gap-7 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold w-fit mx-auto lg:mx-0 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500" />
                </span>
                AgroMarkaz 2.0 ishga tushdi
              </div>

              {/* Heading */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight">
                Zamonaviy{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                  Qishloq Xo'jaligi
                </span>{' '}
                Platformasi
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Sun'iy intellekt yordamida hosildorlikni oshiring, resurslarni to'g'ri taqsimlang va biznesingizni yangi bosqichga olib chiqing. Barchasi bitta qulay tizimda.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
                <button
                  onClick={onNavigateFeatures}
                  className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base !rounded-2xl"
                >
                  <Brain className="h-5 w-5" />
                  Boshlash
                </button>
                <button className="btn-secondary w-full sm:w-auto px-8 py-4 text-base !rounded-2xl">
                  <Play className="h-5 w-5 text-gray-700 fill-gray-700" />
                  Videoni ko'rish
                </button>
              </div>

              {/* Social proof strip */}
              <div className="flex items-center gap-6 justify-center lg:justify-start mt-2">
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-extrabold text-gray-900">12,000+</p>
                  <p className="text-xs text-gray-500 font-medium">Aktiv foydalanuvchi</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-extrabold text-gray-900">34%</p>
                  <p className="text-xs text-gray-500 font-medium">Hosildorlik o'sishi</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-extrabold text-gray-900">14 ta</p>
                  <p className="text-xs text-gray-500 font-medium">Viloyat qamrovi</p>
                </div>
              </div>
            </motion.div>

            {/* ─── RIGHT: Desktop mockup hero image ─── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              {/* Subtle glow under image */}
              <div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 rounded-full blur-3xl opacity-30"
                style={{ background: 'var(--color-primary-300)' }}
              />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white/20 transform hover:scale-[1.01] transition-transform duration-700 ease-in-out">
                <img
                  src="/assets/desktop-mockup.png"
                  alt="AgroMarkaz dasturi kompyuter ekranida"
                  className="w-full h-auto object-cover"
                />
                {/* subtle green tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none" />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 bg-white px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
              >
                <div className="bg-primary-50 p-2.5 rounded-xl">
                  <ArrowRight className="h-5 w-5 text-primary-600 -rotate-45" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 font-medium">Hosildorlik</p>
                  <p className="text-lg font-extrabold text-gray-900">+34%</p>
                </div>
              </motion.div>

              {/* AI badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -right-4 bg-primary-600 text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2"
              >
                <Brain className="h-4 w-4" />
                <span className="text-sm font-bold">AI Tahlil</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      <AIPlannerModal isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  );
}
