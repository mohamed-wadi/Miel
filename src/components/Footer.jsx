import React from 'react'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { name: 'À propos', href: '#about' },
      { name: 'Notre équipe', href: '#team' },
      { name: 'Carrières', href: '#careers' },
      { name: 'Presse', href: '#press' }
    ],
    products: [
      { name: 'Nouveautés', href: '#new' },
      { name: 'Meilleures ventes', href: '#bestsellers' },
      { name: 'Promotions', href: '#promotions' },
      { name: 'Collections', href: '#collections' }
    ],
    support: [
      { name: 'Centre d\'aide', href: '#help' },
      { name: 'Contact', href: '#contact' },
      { name: 'Livraison', href: '#shipping' },
      { name: 'Retours', href: '#returns' }
    ],
    legal: [
      { name: 'Conditions d\'utilisation', href: '#terms' },
      { name: 'Politique de confidentialité', href: '#privacy' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'Mentions légales', href: '#legal' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  WADI
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Votre destination premium pour des produits d'exception. 
                  Qualité, innovation et service client au rendez-vous.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>contact@wadi.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span>123 Rue de la Paix, 75001 Paris</span>
                </div>
                {/* Localisation background behind text */}
                <div className="relative my-4 w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200" style={{height: '110px'}}>
                  {/* Image de fond réelle */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/Localisation.png')" }}
                    aria-hidden="true"
                  ></div>
                  {/* Overlay foncé pour lisibilité */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                  {/* Texte et lien */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full px-2 text-center">
                    <span className="text-white text-xl font-bold drop-shadow-lg mb-1 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 17c2.5 0 4.5-2 4.5-4.5S14.5 8 12 8s-4.5 2-4.5 4.5S9.5 17 12 17z" strokeWidth="2"/>
                        <path d="M12 8V5m0 12v3m7-7h-3m-8 0H5m10.07-4.07l2.12-2.12M6.93 6.93 4.81 4.81" strokeWidth="2"/>
                        <ellipse cx="12" cy="12.5" rx="2" ry="1" fill="currentColor"/>
                      </svg>
                      تفضل بزيارتنا
                    </span>
                    <a href="https://goo.gl/maps/your-location-link" target="_blank" rel="noopener noreferrer" className="text-gray-200 text-sm underline hover:text-white transition">
                      انقر هنا لعرض موقعنا على خرائط جوجل
                    </a>
                  </div>
                </div>
                {/* Location Background Image */}
                <div
                  className="mt-4 w-full max-w-xs h-40 rounded-xl shadow-lg border border-gray-200 mx-auto bg-cover bg-center relative"
                  style={{ backgroundImage: "url('/Localisation.png')" }}
                  aria-label="Emplacement sur la carte"
                  role="img"
                >
                  <span className="sr-only">Emplacement sur la carte</span>
                </div>
              </motion.div>
            </div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Produits</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-gray-800"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  Restez informé
                </h4>
                <p className="text-gray-400">
                  Recevez nos dernières nouveautés et offres exclusives.
                </p>
              </div>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
                >
                  S'abonner
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm"
            >
              © 2024 WADI. Tous droits réservés. Fait avec{' '}
              <Heart className="w-4 h-4 inline text-red-500" /> en France.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-colors z-40"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}

export default Footer 