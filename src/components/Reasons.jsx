import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

export default function Reasons() {
  // Config se reasons aayenge, abhi ke liye default
  const reasonsList = [
    "You narrate your own life like a sports commentator.",
    "You get emotionally attached to every stray dog within 5 metres.",
    "You remember tiny things I said once, months ago.",
    "Your '5-minute nap' is a full lifestyle choice.",
    "You send me reels at 2 AM like it's a national duty.",
    "You make ordinary Sundays feel like festivals.",
    "You defend me before I even explain my side.",
    "You make my worst days feel 40% smaller."
  ];

  const [flipped, setFlipped] = useState(null);

  return (
    <section className="py-24 bg-cream px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-script text-wine mb-4">Reasons I Choose You</h2>
          <p className="text-ink/60 font-body">Tap the cards to reveal a secret.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {reasonsList.map((reason, index) => (
            <motion.div
              key={index}
              className="relative w-full h-48 cursor-pointer perspective-1000"
              onClick={() => setFlipped(flipped === index ? null : index)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="w-full h-full relative preserve-3d"
                animate={{ rotateY: flipped === index ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Front of Card */}
                <div className="absolute inset-0 bg-rose/20 border-2 border-rose/40 rounded-2xl flex flex-col items-center justify-center backface-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Heart size={32} className="text-rose mb-2" fill="currentColor" />
                  <span className="font-script text-3xl text-wine">#{index + 1}</span>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 bg-white border-2 border-rose rounded-2xl flex items-center justify-center p-4 backface-hidden rotate-y-180 shadow-lg">
                  <p className="text-wine text-sm md:text-base font-body font-medium text-center leading-relaxed">
                    {reason}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}