'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useBreachMode } from '@/lib/useBreachMode';

const SCRAMBLE_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

export function TextDecrypt({ textNormal, textHacker, as = 'p', className = '' }) {
  const { isBreached } = useBreachMode();
  const [displayText, setDisplayText] = useState(textNormal);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const targetText = isBreached ? textHacker : textNormal;
    
    if (isScrambling) return;
    
    setIsScrambling(true);
    
    // Scramble animation
    const duration = 0.5;
    const startTime = Date.now();
    const maxChars = Math.max(textNormal.length, textHacker.length);
    
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      let scrambled = '';
      for (let i = 0; i < targetText.length; i++) {
        // Characters decrypt one by one
        if (i < targetText.length * progress) {
          scrambled += targetText[i];
        } else {
          scrambled += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      
      setDisplayText(scrambled);
      
      if (progress === 1) {
        clearInterval(interval);
        setDisplayText(targetText);
        setIsScrambling(false);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [isBreached, textNormal, textHacker]);

  const Component = as;
  
  return (
    <Component className={className}>
      {displayText}
    </Component>
  );
}
