import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن الطبيب', path: '/about' },
    { name: 'الخدمات', path: '/services' },
    { name: 'المقالات', path: '/blog' },
    { name: 'تواصل معنا', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
  <img src="/logo.webp" alt="Gaia Nutrition" className="w-10 h-10 rounded-full" />
  <span className="text-xl font-arabic-heading text-foreground">
    Gaia Nutrition
  </span>
</Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact" className="flex items-center space-x-2 space-x-reverse">
                <Phone className="w-4 h-4" />
                <span>اتصل بنا</span>
              </Link>
            </Button>
            <Button size="sm" asChild className="btn-primary">
              <a 
                href="https://calendly.com/egyptistima/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse"
              >
                <Calendar className="w-4 h-4" />
                <span>احجز الآن</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact" className="flex items-center justify-center space-x-2 space-x-reverse">
                    <Phone className="w-4 h-4" />
                    <span>اتصل بنا</span>
                  </Link>
                </Button>
                <Button size="sm" asChild className="btn-primary">
                  <a 
                    href="https://calendly.com/egyptistima/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>احجز الآن</span>
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Header

