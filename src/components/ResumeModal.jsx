import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

export default function ResumeModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-gray-400 hover:text-white active:text-accent transition-colors"
      >
        Resume
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-4xl h-[85vh] sm:h-[80vh] bg-primary rounded-xl border border-white/[0.06] shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-white/[0.06] shrink-0">
                <span className="text-sm text-gray-400">Resume — Akshay Maniyampara</span>
                <div className="flex items-center gap-2">
                  <a
                    href="/newR.pdf"
                    download
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-accent/20 text-accent hover:bg-accent/10 active:bg-accent/20 transition-colors"
                  >
                    <Download size={14} /> Download
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-500 hover:text-white active:text-accent transition-colors p-1"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 min-h-0 bg-[#1a1a2e]">
                <object
                  data="/newR.pdf#toolbar=0&navpanes=0&scrollbar=1"
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <iframe
                    src="/newR.pdf"
                    className="w-full h-full"
                    title="Resume"
                  />
                </object>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
