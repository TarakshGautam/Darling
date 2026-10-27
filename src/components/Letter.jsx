import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import config from "../config";

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-[#fdfbf7] px-4 overflow-hidden relative">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-script text-wine mb-4">A Note For You</h2>
          <p className="text-ink/60 font-body">Some things are better said in writing.</p>
        </motion.div>

        {/* Envelope/Letter Container */}
        <motion.div 
          className={`relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-blush transition-all duration-700 ease-in-out ${isOpen ? 'min-h-[400px] p-8 md:p-12' : 'h-64 cursor-pointer flex items-center justify-center bg-rose/10'}`}
          onClick={() => !isOpen && setIsOpen(true)}
          layout
        >
          {!isOpen ? (
            <motion.div 
              className="flex flex-col items-center justify-center text-wine/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Mail size={48} className="mb-4" />
              <p className="font-body tracking-widest uppercase text-sm">Click to open</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-body text-ink/80 leading-relaxed text-lg"
            >
              <p className="font-script text-3xl text-wine mb-6">{config.letter?.heading || "To My Favourite Person,"}</p>
              <p className="mb-6 whitespace-pre-line">
                {config.letter?.body || "I don't know how to put this in one letter, so I'll try. Thank you for being the reason ordinary days feel worth looking forward to. For every laugh, every argument about food, every late-night call — I'd choose all of it again, in every version of this life. You are my favourite habit and my best decision."}
              </p>
              <p className="text-right font-script text-2xl text-wine mt-8">
                {config.letter?.signature || "Yours, always"}
              </p>
            </motion.div>
          )}
        </motion.div>

      </div>
    </section>
  );
}