import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import config from "../config";

export default function FinalSurprise() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <section className="py-32 bg-wine px-4 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      
      {/* Confetti / Hearts Explosion */}
      <AnimatePresence>
        {showSurprise && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="absolute inset-0 pointer-events-none"
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-peach"
                initial={{ 
                  x: "50%", y: "50%", scale: 0,
                  rotate: Math.random() * 360 
                }}
                animate={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`,
                  scale: Math.random() * 1.5 + 0.5,
                  opacity: [1, 1, 0]
                }}
                transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
              >
                <Heart fill="currentColor" size={20 + Math.random() * 20} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl"
      >
        {!showSurprise ? (
          <button
            onClick={() => setShowSurprise(true)}
            className="px-8 py-4 bg-blush text-wine font-body font-semibold rounded-full text-lg shadow-[0_0_20px_rgba(250,218,221,0.4)] hover:scale-105 transition-transform"
          >
            {config.finalSurprise?.buttonLabel || "Ek surprise hai…"}
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-script text-blush mb-6">
              I Love You, {config.herName || "Her Name"}
            </h2>
            <p className="text-lg md:text-xl text-cream/90 font-body leading-relaxed">
              {config.finalSurprise?.note || "I promise to keep choosing you — in every small, boring, beautiful day ahead. ❤️"}
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}