import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ShoppingCart, Heart, Star, Filter, Search } from 'lucide-react'
import toast from 'react-hot-toast'

const categories = [
  { id: 'all', name: 'الكل' },
  { id: 'عسل فاخر', name: 'عسل فاخر' },
  { id: 'عسل عضوي', name: 'عسل عضوي' },
  { id: 'عسل خاص', name: 'عسل خاص' },
  { id: 'هدايا', name: 'هدايا' },
]

const initialProducts = [
  // Catégorie: عسل فاخر
  { id: 1, name: 'عسل السدر الملكي', category: 'عسل فاخر', price: 350, rating: 5, image: '/products/عسل فاخر/1.jpg', inStock: true },
  { id: 2, name: 'عسل الغابة السوداء', category: 'عسل فاخر', price: 400, rating: 5, image: '/products/عسل فاخر/2.jpg', inStock: true },
  { id: 3, name: 'عسل الزعتر النادر', category: 'عسل فاخر', price: 380, rating: 4, image: '/products/عسل فاخر/3.jpg', inStock: true },
  
  // Catégorie: عسل عضوي
  { id: 4, name: 'عسل الليمون العضوي', category: 'عسل عضوي', price: 250, rating: 4, image: '/products/عسل عضوي/1.jpg', inStock: true },
  { id: 5, name: 'عسل الكالبتوس العضوي', category: 'عسل عضوي', price: 220, rating: 5, image: '/products/عسل عضوي/2.jpg', inStock: true },
  { id: 6, name: 'عسل البرتقال العضوي', category: 'عسل عضوي', price: 240, rating: 4, image: '/products/عسل عضوي/3.jpg', inStock: false },

  // Catégorie: عسل خاص
  { id: 7, name: 'عسل الدغموس الخاص', category: 'عسل خاص', price: 280, rating: 5, image: '/products/عسل خاص/1.jpg', inStock: true },

  // Catégorie: هدايا
  { id: 8, name: 'باقة الهدايا الفاخرة', category: 'هدايا', price: 550, rating: 5, image: '/products/هدايا/1.jpg', inStock: true },
]

const Products = ({ onAddToCart }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [products, setProducts] = useState(initialProducts)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortOrder, setSortOrder] = useState('default')

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (sortOrder === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortOrder === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [products, searchTerm, selectedCategory, sortOrder])

  const handleAddToCart = (product) => {
    onAddToCart(product)
    toast.success(`${product.name} أضيف إلى السلة!`, {
      style: {
        direction: 'rtl',
      },
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-orange-50 to-amber-100 arabic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            <ShoppingCart className="w-4 h-4 ml-2" />
            مجموعة العسل لدينا
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            اكتشف رحيقنا
            <span className="block gold-text">الاستثنائي</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            مجموعة حصرية من العسل النادر والثمين، يتم جمعه بحب من قبل نحلنا.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث عن عسل..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="default">الترتيب الافتراضي</option>
              <option value="price-asc">السعر: من الأرخص للأغلى</option>
              <option value="price-desc">السعر: من الأغلى للأرخص</option>
              <option value="rating">الأعلى تقييماً</option>
            </select>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredAndSortedProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
                className="group"
              >
                <div className="honey-card h-full overflow-hidden flex flex-col">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Stock Status */}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">نفذت الكمية</span>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50"
                      >
                        <Heart className="w-5 h-5 text-gray-600" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500 capitalize">{product.category}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 mr-1">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between mt-auto pt-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary-600">
                          {product.price} درهم
                        </span>
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          product.inStock
                            ? 'bg-primary-600 text-white hover:bg-primary-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart className="w-4 h-4 inline ml-1" />
                        {product.inStock ? 'أضف' : 'غير متوفر'}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-6xl mb-4">🍯</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لم يتم العثور على عسل
            </h3>
            <p className="text-gray-500">
              جرب تعديل معايير البحث
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Products 