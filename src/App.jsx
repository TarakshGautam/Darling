import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Reasons from "./components/Reasons";
import Letter from "./components/Letter";
import FinalSurprise from "./components/FinalSurprise";
import ScrollHeart from "./components/ScrollHeart";

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="romantic-shell relative min-h-screen overflow-x-clip bg-cream text-ink">
      <div className="ambient-particles" aria-hidden="true">
        <span data-mark="♡" />
        <span data-mark="✦" />
        <span data-mark="♡" />
        <span data-mark="✧" />
        <span data-mark="♡" />
        <span data-mark="✦" />
      </div>
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <Intro key="intro" onUnlock={() => setIsUnlocked(true)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex min-h-screen flex-col"
          >
            <Hero />
            <Timeline />
            <Reasons />
            <Letter />
            <FinalSurprise />
            <ScrollHeart />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}