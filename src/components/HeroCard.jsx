import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeModal from "./ResumeModal";

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function HeroCard() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.35;
  }, []);

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/Gen-4 Turbo - Animate this scene with a dreamy, surreal Ghibli-inspired aesthetic_ The thousands of.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1424]/85 via-[#0B1424]/40 to-[#0B1424]/85" />

      <div className="relative h-full w-full flex flex-col justify-center px-5 pb-10 pt-5">
        <motion.p {...fadeUp(0)} className="text-xs text-gray-400 uppercase tracking-[0.15em] mb-4">
          welcome
        </motion.p>
        <motion.h1
          {...fadeUp(0.05)}
          className="text-2xl sm:text-3xl leading-[1.5] tracking-[-0.5px] font-normal text-white"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          I'm <span className="gradient-text">Akshay</span>,<br />
          Tech Enthusiast,<br />
          
        </motion.h1>
        <motion.p {...fadeUp(0.1)} className="text-base text-gray-400 leading-relaxed mt-3 max-w-sm">
          Let your data tell the story.
        </motion.p>
        <motion.div {...fadeUp(0.15)} className="flex items-center gap-3 sm:gap-4 mt-5">
          <a href="https://github.com/AKXLR8" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white active:text-accent transition-colors p-2 sm:p-0 -ml-2 sm:ml-0">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/akshay-maniyampara-b2a058366/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white active:text-accent transition-colors p-2 sm:p-0">
            <FaLinkedin size={20} />
          </a>
          <span className="w-px h-4 bg-white/[0.08]" />
          <ResumeModal />
        </motion.div>
      </div>
    </div>
  );
}
