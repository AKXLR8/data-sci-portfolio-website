// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Intro() {
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShow(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.div
//           className="fixed inset-0 bg-primary text-white flex flex-col items-center justify-center z-50"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.h1
//             className="text-6xl md:text-8xl font-bold mb-4"
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 100 }}
//           >
//             Hello
//           </motion.h1>

//           <motion.h2
//             className="text-3xl md:text-5xl text-accent font-semibold"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.5, duration: 1 }}
//           >
//             Namaste 🙏
//           </motion.h2>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
