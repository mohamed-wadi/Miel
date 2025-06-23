import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('/1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Moroccan Pattern Overlay */}
      <div className="absolute inset-0 arabic-pattern opacity-10"></div>

      <motion.div 
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-cairo font-extrabold mb-6 leading-tight text-shadow-lg"
        >
          <span className="gradient-text">وادي العسل</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 font-light">
            رحيق المغرب الأصيل
          </span>
        </motion.h1>
        
        <motion.p 
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          من قلب جبال الأطلس، نقدم لكم عسلًا نقيًا بفوائد لا تعد ولا تحصى. كل قطرة تحكي قصة شغفنا بالطبيعة.
        </motion.p>
        
        <motion.a
          href="#products"
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(243, 119, 30, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4"
        >
          <span>اكتشف منتجاتنا</span>
          <ArrowLeft className="w-6 h-6" />
        </motion.a>
      </motion.div>

       {/* Scroll Indicator */}
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero 