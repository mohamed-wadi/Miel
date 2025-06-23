import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Products from './components/Products'
import Contact from './components/Contact'
// import Footer from './components/Footer'
import Cart from './components/Cart'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-cairo">
        <Toaster position="top-right" />
        
        <Navbar 
          cartCount={cart.length} 
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <main>
          <Hero />
          <Story />
          <Products onAddToCart={addToCart} />
          <Contact />
        </main>
        
        {/* <Footer /> */}
        
        <AnimatePresence>
          {isCartOpen && (
            <Cart
              cart={cart}
              total={cartTotal}
              onClose={() => setIsCartOpen(false)}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App 