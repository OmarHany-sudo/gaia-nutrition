import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      value: '01559121736',
      link: 'tel:+201559121736',
      description: 'متاح للاستفسارات والحجز'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'g4755862@gmail.com',
      link: 'mailto:g4755862@gmail.com',
      description: 'للاستفسارات العامة'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: 'الحصري، 6 أكتوبر، الجيزة',
      link: 'https://maps.google.com/?q=الحصري،+6+أكتوبر،+الجيزة',
      description: 'موقع العيادة'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      value: 'السبت - الخميس: 9 ص - 9 م',
      link: null,
      description: 'الجمعة: عطلة أسبوعية'
    }
  ]

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', link: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', link: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, name: 'Twitter', link: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, name: 'LinkedIn', link: '#', color: 'hover:text-blue-700' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-arabic-heading text-foreground mb-6">
              تواصل معنا
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              نحن هنا لمساعدتك في رحلتك نحو حياة صحية أفضل. تواصل معنا للاستفسارات أو لحجز استشارتك
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" asChild className="btn-primary">
                <a 
                  href="https://calendly.com/egyptistima/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <Calendar className="w-5 h-5" />
                  <span>احجز استشارة فورية</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="tel:+201559121736"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل بنا الآن</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-arabic-heading text-foreground mb-4">
              معلومات التواصل
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-muted/20">
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-arabic-heading text-foreground">
                        {info.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {info.link ? (
                        <a 
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-arabic-heading text-foreground flex items-center space-x-2 space-x-reverse">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <span>أرسل لنا رسالة</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                  </p>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">الاسم الكامل *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="أدخل اسمك الكامل"
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">رقم الهاتف *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="أدخل رقم هاتفك"
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="أدخل بريدك الإلكتروني"
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">الموضوع *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="موضوع رسالتك"
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">الرسالة *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="اكتب رسالتك هنا..."
                          rows={5}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full btn-primary"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>جاري الإرسال...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Send className="w-5 h-5" />
                            <span>إرسال الرسالة</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-4"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-arabic-heading text-foreground">
                        تم إرسال رسالتك بنجاح!
                      </h3>
                      <p className="text-muted-foreground">
                        شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-arabic-heading text-foreground">
                    تواصل سريع
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 space-x-reverse p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">اتصل بنا الآن</p>
                      <a href="tel:+201559121736" className="text-primary hover:text-primary/80 transition-colors">
                        01559121736
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 space-x-reverse p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium text-foreground">راسلنا</p>
                      <a href="mailto:g4755862@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
                        g4755862@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 space-x-reverse p-4 bg-muted rounded-lg">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium text-foreground">احجز استشارة</p>
                      <a 
                        href="https://calendly.com/egyptistima/30min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        نظام الحجز الإلكتروني
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-arabic-heading text-foreground">
                    تابعنا على وسائل التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4 space-x-reverse">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <motion.a
                          key={social.name}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-12 h-12 bg-muted rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:shadow-lg`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </motion.a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-arabic-heading text-foreground">
                    موقع العيادة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="w-8 h-8 text-primary mx-auto" />
                      <p className="font-medium text-foreground">الحصري، 6 أكتوبر، الجيزة</p>
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href="https://maps.google.com/?q=الحصري،+6+أكتوبر،+الجيزة"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 space-x-reverse"
                        >
                          <span>عرض على الخريطة</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-arabic-heading">
              ابدأ رحلتك نحو حياة صحية اليوم
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              لا تتردد في التواصل معنا. نحن هنا لمساعدتك في تحقيق أهدافك الصحية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="btn-accent">
                <a 
                  href="https://calendly.com/egyptistima/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <Calendar className="w-5 h-5" />
                  <span>احجز استشارة مجانية</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <a 
                  href="tel:+201559121736"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل بنا الآن</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

