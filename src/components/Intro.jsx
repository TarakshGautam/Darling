import { motion } from "framer-motion";
import { Heart, MailOpen } from "lucide-react";
import config from "../config";

export default function Intro({ onUnlock }) {
  const floatingHearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: `${Math.random() * 100}vw`,
    size: 16 + Math.random() * 24,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 5,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2a1b1e] px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Floating Hearts */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose/30"
          initial={{ y: "100vh", x: heart.x, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{ duration: heart.duration, repeat: Infinity, delay: heart.delay, ease: "linear" }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}

      {/* Envelope Container */}
      <motion.div
        className="relative w-full max-w-md aspect-[4/3] bg-rose rounded-xl shadow-[0_0_50px_rgba(232,160,168,0.4)] cursor-pointer flex flex-col items-center justify-center overflow-hidden group"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={onUnlock}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        {/* Envelope Flap Design (CSS Triangles) */}
        <div className="absolute top-0 w-full h-1/2 bg-wine/20 clip-path-polygon-[0_0,100%_0,50%_100%] group-hover:-translate-y-2 transition-transform duration-500"></div>
        
        {/* Inner Letter Peeking */}
        <div className="absolute bottom-4 w-[90%] h-[80%] bg-cream rounded-lg shadow-lg flex flex-col items-center justify-center border border-blush transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
          <MailOpen size={40} className="text-wine/50 mb-4" />
          <p className="text-wine/70 font-body tracking-widest uppercase text-xs mb-1">A gift for</p>
          <h1 className="text-4xl md:text-5xl text-wine font-script">
            {config.herName || "My Love"}
          </h1>
          <motion.p 
            className="text-xs text-rose mt-6 font-medium bg-blush/50 px-4 py-1 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tap to open
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}