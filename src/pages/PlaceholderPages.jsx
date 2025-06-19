// Placeholder pages - سيتم تطويرها لاحقاً

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const BlogPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-arabic-heading text-foreground">
              المقالات
            </h1>
            <p className="text-lg text-muted-foreground">
              قريباً - مجموعة شاملة من المقالات المفيدة في التغذية والصحة
            </p>
            <Button asChild>
              <Link to="/" className="flex items-center space-x-2 space-x-reverse">
                <ArrowRight className="w-4 h-4" />
                <span>العودة للرئيسية</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export const ArticlePage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-arabic-heading text-foreground">
              المقال
            </h1>
            <p className="text-lg text-muted-foreground">
              قريباً - عرض تفصيلي للمقالات
            </p>
            <Button asChild>
              <Link to="/blog" className="flex items-center space-x-2 space-x-reverse">
                <ArrowRight className="w-4 h-4" />
                <span>العودة للمقالات</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export const BookingPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-arabic-heading text-foreground">
              حجز الاستشارة
            </h1>
            <p className="text-lg text-muted-foreground">
              قريباً - نظام حجز متطور وسهل الاستخدام
            </p>
            <Button asChild>
              <Link to="/contact" className="flex items-center space-x-2 space-x-reverse">
                <ArrowRight className="w-4 h-4" />
                <span>تواصل معنا الآن</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export const ContactPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-arabic-heading text-foreground">
              تواصل معنا
            </h1>
            <p className="text-lg text-muted-foreground">
              قريباً - صفحة تواصل شاملة مع نموذج اتصال
            </p>
            <div className="space-y-4">
              <p className="text-foreground">
                <strong>الهاتف:</strong> +20 1559121736
              </p>
              <p className="text-foreground">
                <strong>البريد الإلكتروني:</strong> g4755862@gmail.com
              </p>
              <p className="text-foreground">
                <strong>العنوان:</strong> الحصري، 6 أكتوبر، الجيزة
              </p>
            </div>
            <Button asChild>
              <Link to="/" className="flex items-center space-x-2 space-x-reverse">
                <ArrowRight className="w-4 h-4" />
                <span>العودة للرئيسية</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

