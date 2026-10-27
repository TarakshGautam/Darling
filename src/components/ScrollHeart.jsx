import { motion, useScroll, useSpring } from "framer-motion";
import { Heart } from "lucide-react";

export default function ScrollHeart() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="w-1 h-32 bg-rose/20 rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-wine origin-top"
          style={{ scaleY }}
        />
      </div>
      <Heart size={20} className="text-wine" fill="currentColor" />
    </motion.div>
  );
}