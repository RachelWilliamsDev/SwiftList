'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Container = ({
  delay = 0.2,
  children,
  className,
  maxWidth = 'max-w-screen-2xl',
  padding = 'p-6 xl:p-0',
}: ContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: 'easeInOut' }}
      className={cn('mx-auto h-full w-full', className, maxWidth, padding)}
    >
      {children}
    </motion.div>
  );
};
export default Container;
