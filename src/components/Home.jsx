import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Home() {
  
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-around px-6 md:px-20 bg-transparent text-white relative"
    >
      {/* Left Text Side */}
      <div className="flex flex-col items-start max-w-xl mt-20 md:mt-0">
        <span className="border px-3 py-1 text-sm rounded-full border-white/30 text-white/70 mb-4">
          ● Data Scientist & ML Engineer
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Hello, I'm <br />
          <span className="text-accent">Akshay</span>
        </h1>

        <p className="text-lg text-white/80 mb-6">
          From India | Passionate about AI & ML | Let your <span className="text-accent">Data</span> tell the story
        </p>

        {/* Download CV */}
        <a
          href="/Akshay_Resume.pdf"
          download
          className="px-6 py-3 border-2 border-accent rounded-full text-white hover:bg-accent hover:text-primary transition mb-6"
        >
          Download CV
        </a>

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl">
          <a href="https://github.com/AKXLR8" target="_blank">
            <FaGithub className="hover:text-accent transition" />
          </a>
          <a href="https://www.linkedin.com/in/akshay-maniyampara-b2a058366/" target="_blank">
            <FaLinkedin className="hover:text-accent transition" />
          </a>
          <a href="https://x.com/rea1akshay?t=WDmGlbXvo7Ozmxr8dOlOyw&s=09" target="_blank">
            <FaTwitter className="hover:text-accent transition" />
          </a>
          <a href="akshaymaniyampara40@gmail.com">
            <MdEmail className="hover:text-accent transition" />
          </a>
        </div>
      </div>

      {/* Right Image Side */}
<motion.div
  initial={{ opacity: 0, scale: 0.7 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative md:ml-[0px] mt-12 md:30"
>
  <div className="rounded-full animate-glow">
    <img
      src="/profile_pic.JPG"
      alt="Akshay"
      className="w-80 h-80 rounded-full object-cover"
    />
  </div>
</motion.div>


    </section>
  );
}
