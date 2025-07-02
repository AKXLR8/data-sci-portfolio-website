import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "नमस्ते दुनिया",        // Hindi
  "வணக்கம் உலகம்",         // Tamil
  "नमस्कार विश्व",       // Bengali
           // Telugu
             // Malayalam
  "હેલો વર્લ્ડ",           // Gujarati
  "ಹಲೋ ವರ್ಲ್ಡ್",           // Kannada
  "Hello,World",       // English (final)
];

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  // Handle match cut transitions every 800ms
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 380);

    if (index >= messages.length - 1) {
      clearInterval(interval);
      // Start hiding after English appears for 1.5s
      setTimeout(() => {
        setShow(false);
      }, 1500);
    }

    return () => clearInterval(interval);
  }, [index]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-primary text-white flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold text-center">
            {messages[index]}
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
