import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-400 via-moroccan-400 to-honey-500 flex items-center justify-center z-50 arabic-pattern">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full"
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold text-white mb-4 text-shadow-lg"
        >
          🍯 وادي العسل
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-white/90 text-lg"
        >
          تحضير الرحيق الذهبي...
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.9, duration: 1.5 }}
          className="mt-8 h-1 bg-white/30 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="h-full bg-white rounded-full"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen 