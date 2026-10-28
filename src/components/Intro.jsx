import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Lock, Unlock, Clock } from "lucide-react";
import config from "../config";

export default function Intro({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [timeTogether, setTimeTogether] = useState("");

  // Background floating hearts
  const floatingHearts = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: `${Math.random() * 100}vw`,
    size: 16 + Math.random() * 24,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 5,
  }));

  // Calculate time together for the button
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      // Config se date uthayenge, default 8 June 2025
      const start = config.startDate || new Date(2025, 5, 8);
      const diff = now - start;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        setTimeTogether(`${days} days, ${hours} hours, ${minutes} mins`);
      }
    };

    if (showTime) {
      calculateTime();
      const timer = setInterval(calculateTime, 60000); // Update every minute
      return () => clearInterval(timer);
    }
  }, [showTime]);

  // Handle Password Check
  const handleUnlock = (e) => {
    e.preventDefault();
    // Password check (case insensitive, removes extra spaces)
    const cleanInput = password.toLowerCase().replace(/\s+/g, ' ').trim();
    const correctPassword = "8 june 2025";

    if (cleanInput === correctPassword) {
      setError(false);
      setIsUnlocked(true);
      // Slight delay so she can see the "Unlocked" animation before site opens
      setTimeout(() => {
        onUnlock();
      }, 2000);
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2a1b1e] px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Floating Hearts Background */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose/20"
          initial={{ y: "100vh", x: heart.x, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 1, 0] }}
          transition={{ duration: heart.duration, repeat: Infinity, delay: heart.delay, ease: "linear" }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}

      {/* Main Envelope Container */}
      <motion.div
        className="relative w-full max-w-md min-h-[480px] bg-rose rounded-2xl shadow-[0_0_50px_rgba(232,160,168,0.3)] flex flex-col items-center justify-center overflow-hidden z-10 border border-white/20"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        {/* Envelope Background Design */}
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-wine/20 to-transparent pointer-events-none"></div>

        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            // --- LOCKED STATE (Password Screen) ---
            <motion.div 
              key="locked"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className="w-full p-8 flex flex-col items-center z-10"
            >
              <motion.div 
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-md border border-white/30 shadow-inner"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Lock size={28} className="text-wine" />
              </motion.div>

              <p className="text-wine/70 font-body tracking-widest uppercase text-xs mb-2">A gift for</p>
              <h1 className="text-5xl text-wine font-script mb-8 drop-shadow-sm">
                {config.herName || "My Love"}
              </h1>

              <form onSubmit={handleUnlock} className="w-full flex flex-col items-center">
                <p className="text-wine/80 text-sm mb-3 font-medium text-center">
                  Enter our special date to unlock<br/>
                  <span className="text-xs opacity-70">(Format: 1 january 2024)</span>
                </p>
                
                <input
                  type="text"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  placeholder="e.g. 8 june 2025"
                  className={`w-full max-w-[260px] px-4 py-3 bg-white/50 backdrop-blur-sm border-2 rounded-xl text-center text-wine font-semibold outline-none transition-all placeholder:text-wine/30 placeholder:font-normal ${error ? 'border-red-400/80 animate-shake' : 'border-white/50 focus:border-wine/50 shadow-sm'}`}
                />
                
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-red-500/90 text-xs mt-2 font-medium"
                  >
                    That's not our date. Try again! ❤️
                  </motion.p>
                )}

                <button
                  type="submit"
                  className="mt-6 px-8 py-3 bg-wine text-cream rounded-full font-body font-medium shadow-lg hover:bg-wine/90 hover:scale-105 active:scale-95 transition-all w-full max-w-[200px]"
                >
                  Unlock ❤️
                </button>
              </form>

              {/* Time Together Button */}
              <div className="mt-8 pt-6 border-t border-wine/10 w-full flex flex-col items-center">
                <button 
                  type="button"
                  onClick={() => setShowTime(!showTime)}
                  className="flex items-center gap-2 text-wine/60 hover:text-wine transition-colors text-sm font-medium"
                >
                  <Clock size={16} />
                  Since when are we together?
                </button>
                
                <AnimatePresence>
                  {showTime && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden text-center bg-white/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20"
                    >
                      <p className="text-wine font-semibold text-sm">
                        {timeTogether || "Calculating..."} of pure love.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            // --- UNLOCKED STATE (Animation) ---
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center p-8 z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mb-6"
              >
                <Unlock size={56} className="text-wine drop-shadow-md" />
              </motion.div>
              <h2 className="text-4xl text-wine font-script mb-2 drop-shadow-sm">Unlocked!</h2>
              <p className="text-wine/80 font-body text-sm font-medium">Opening your surprise...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}