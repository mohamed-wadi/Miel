import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Story = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section id="story" ref={ref} className="py-20 bg-white arabic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              من خليتنا إلى بيتكم
              <span className="block gold-text">قصتنا مع العسل</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              في وادي العسل، نحن أكثر من مجرد منتجين. نحن عائلة من النحالين الشغوفين، ورثنا هذه الحرفة النبيلة عن أجدادنا. كل خلية نحل هي جزء من عائلتنا، وكل قطرة عسل هي ثمرة عمل دؤوب وتفانٍ لا حدود له.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              نحن نؤمن بأن أفضل أنواع العسل تأتي من النحل السعيد والبيئة الصحية. لهذا السبب، تقع مناحلنا في قلب مناطق طبيعية محمية في المغرب، بعيدًا عن التلوث، حيث يتغذى نحلنا على رحيق الأزهار البرية.
            </p>
          </motion.div>
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img src="/products/عسل عضوي/2.jpg" alt="نحالون يعملون" className="w-full h-full object-cover"/>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Story 