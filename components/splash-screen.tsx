"use client"

import { motion } from "framer-motion"

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.5,
          }}
          className="mb-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold">
            <span className="text-white">Fun</span>
            <span className="text-primary">News</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-white/80 text-lg">Your vibrant news experience</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8"
        >
          <div className="w-16 h-16 border-t-4 border-r-4 border-primary rounded-full animate-spin mx-auto"></div>
        </motion.div>
      </div>
    </div>
  )
}

