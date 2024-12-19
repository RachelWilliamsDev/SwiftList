import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
  text: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  return (
    <motion.h1
      initial={{ color: '#020611' }}
      animate={{ color: '#7B39ED' }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedText;
