import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import config from "../config";

export default function Hero() {
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const start = config.startDate || new Date(2023, 5, 14);
      const diff = now - start;

      if (diff > 0) {
        setTimeTogether({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-cream px-4 py-20 text-center overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blush/60 via-cream to-cream -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-peach/40 rounded-full blur-3xl -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="z-10 flex flex-col items-center max-w-3xl mx-auto"
      >
        <p className="text-wine/60 font-body tracking-[0.2em] uppercase text-sm md:text-base mb-8">
          A little something made with love
        </p>

        {/* Names */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-8">
          <h1 className="text-6xl md:text-8xl font-script text-wine drop-shadow-sm">
            {config.yourName || "Your Name"}
          </h1>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-rose my-2 md:my-0"
          >
            <Heart size={48} fill="currentColor" />
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-script text-wine drop-shadow-sm">
            {config.herName || "Her Name"}
          </h1>
        </div>

        <p className="text-ink/70 font-body text-lg md:text-xl mb-16 italic max-w-lg">
          "{config.tagline || "You are my favourite notification."}"
        </p>

        {/* Live Timer */}
        <div className="w-full">
          <p className="text-sm font-semibold tracking-widest text-wine/50 uppercase mb-6">
            Together for
          </p>
          <div className="flex justify-center gap-2 md:gap-6">
            {Object.entries(timeTogether).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center justify-center w-16 h-20 md:w-24 md:h-28 bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-white">
                <span className="text-2xl md:text-4xl font-semibold text-wine font-body">
                  {value}
                </span>
                <span className="text-[10px] md:text-xs text-ink/60 capitalize mt-1">
                  {unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}