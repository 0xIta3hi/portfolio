'use client';

import { motion } from 'framer-motion';
import { useBreachMode } from '@/lib/useBreachMode';

export function BreachToggle() {
  const { isBreached, toggleBreach } = useBreachMode();

  return (
    <motion.button
      onClick={toggleBreach}
      className={`fixed top-6 right-6 z-40 px-6 py-3 font-mono font-bold text-sm rounded transition-all duration-300 border-2 ${
        isBreached
          ? 'bg-black/80 border-[#00FF41] text-[#00FF41] hover:shadow-[0_0_10px_#00FF41]'
          : 'bg-white border-gray-400 text-gray-900 hover:border-gray-600'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isBreached ? '[ SYSTEM BREACHED ]' : '[ SECURE MODE ]'}
    </motion.button>
  );
}
