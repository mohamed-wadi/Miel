import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Minus, Plus, Trash2, ShoppingBag, CreditCard, Truck, ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast'

const Cart = ({ cart, total, onClose, onRemove, onUpdateQuantity }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Votre panier est vide')
      return
    }
    toast.success('Redirection vers le paiement...')
  }

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      onRemove(productId)
      toast.success('Produit retiré du panier')
    } else {
      onUpdateQuantity(productId, newQuantity)
    }
  }

  if (!cart) {
    return null
  }
  
  const whatsappMessage = `مرحباً، أود أن أطلب المنتجات التالية:\n\n${cart.map(item => `- ${item.name} (الكمية: ${item.quantity})`).join('\n')}\n\n*السعر الإجمالي: ${total} د.م.*\n\n--- معلومات التوصيل ---\n*الاسم:* ${customerName}\n*العنوان:* ${shippingAddress}\n*الهاتف:* ${customerPhone}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
        className="bg-gray-50 w-full max-w-md h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary-600" />
            <h2 className="text-xl font-bold text-gray-800">سلة التسوق</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence>
            {cart.length > 0 ? (
              <div className="space-y-4">
                {cart.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-start gap-4"
                  >
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover border border-gray-200" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{item.price} د.م.</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="w-6 h-6 border rounded-md">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="w-6 h-6 border rounded-md">+</button>
                      </div>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="p-1 text-gray-400 hover:text-red-500">
                      <X className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <ShoppingBag className="w-24 h-24 mx-auto text-gray-300" />
                <h3 className="mt-4 text-2xl font-semibold text-gray-800">سلتك فارغة</h3>
                <p className="mt-2 text-gray-500">
                  لم تقم بإضافة أي منتجات إلى السلة بعد.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-white">
            <AnimatePresence mode="wait">
              {isCheckingOut ? (
                <motion.div
                  key="checkout-form"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-4">معلومات التوصيل</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="* الاسم الكامل"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <textarea
                      placeholder="* عنوان التوصيل"
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      rows="3"
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    />
                    <input
                      type="tel"
                      placeholder="* رقم الهاتف"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <a
                      href={`https://wa.me/212665002086?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full btn-primary flex items-center justify-center gap-3 text-lg text-center ${(!customerName || !shippingAddress || !customerPhone) ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={(e) => {
                        if (!customerName || !shippingAddress || !customerPhone) e.preventDefault();
                        else onClose();
                      }}
                    >
                      <i className="fab fa-whatsapp text-2xl"></i>
                      <span>أرسل الطلب عبر WhatsApp</span>
                    </a>
                    <button onClick={() => setIsCheckingOut(false)} className="py-3 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
                      رجوع
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="checkout-summary"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center text-xl font-bold text-gray-800 mb-4">
                    <span>المجموع:</span>
                    <span>{total.toFixed(2)} <span className="text-base font-normal">د.م.</span></span>
                  </div>
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full btn-primary flex items-center justify-center gap-3 text-lg text-center"
                  >
                    <span>متابعة الطلب</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Cart 