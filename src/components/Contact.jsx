import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const templateParams = {
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.send(
      'service_vokvkhb',
      'template_r57erpo',
      templateParams,
      'vAsv6Ei_dTQGPEnLe'
    )
    .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        toast.success('!تم إرسال رسالتك بنجاح');
        setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
        console.log('FAILED...', error);
        toast.error('حدث خطأ أثناء إرسال الرسالة. الرجاء معاودة المحاولة.');
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'wadi.youssef2004@gmail.com',
      href: 'mailto:wadi.youssef2004@gmail.com',
    },
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+212 6 65 00 20 86',
      href: 'tel:+212665002086',
      ltr: true,
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: 'حي لالة مريم',
      href: 'https://maps.app.goo.gl/FWtQPZsygTttbiay6',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white arabic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            تواصل <span className="gold-text">معنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            هل لديك سؤال أو مشروع؟ فريقنا مستعد لمساعدتك.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-1 space-y-8"
          >
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="mt-1 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {info.title}
                  </h3>
                  <p 
                    className="text-gray-600"
                    style={info.ltr ? { direction: 'ltr', textAlign: 'left' } : {}}
                  >
                    {info.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-2 honey-card p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                  placeholder="الاسم الكامل *"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                  placeholder="البريد الإلكتروني *"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                placeholder="الموضوع *"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/70 border border-amber-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none"
                placeholder="رسالتك *"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ... جار الإرسال
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <a href="https://maps.app.goo.gl/FWtQPZsygTttbiay6" target="_blank" rel="noopener noreferrer" className="block rounded-2xl overflow-hidden shadow-2xl group">
            <div 
              className="w-full h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{backgroundImage: `url('/Localisation.png')`}}
            >
               <div className="w-full h-full bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
                  <MapPin className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold">تفضل بزيارتنا</h3>
                  <p className="text-lg">انقر هنا لعرض موقعنا على خرائط جوجل</p>
               </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 