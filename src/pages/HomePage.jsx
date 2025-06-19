import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Users, Award, Heart, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import heroImage from '../assets/healthy-lifestyle.jpeg'

const HomePage = () => {
  const features = [
    {
      icon: Heart,
      title: 'تغذية مستدامة',
      description: 'نصائح غذائية تدعم صحتك وتحافظ على البيئة'
    },
    {
      icon: Users,
      title: 'خطط مخصصة',
      description: 'خطط تغذية مصممة خصيصاً لاحتياجاتك الشخصية'
    },
    {
      icon: Award,
      title: 'دعم مهني',
      description: 'فريق من الخبراء لدعمك في رحلتك الصحية'
    }
  ]

  const services = [
    {
      title: 'السمنة والنحافة',
      description: 'متابعة متخصصة لحالات السمنة والنحافة للوصول للوزن المثالي بطرق صحية.',
      price: '300 جنيه',
      duration: '60 دقيقة'
    },
    {
      title: 'تغذية الأطفال',
      description: 'خطط تغذية متوازنة للأطفال في مختلف المراحل العمرية.',
      price: '400 جنيه',
      duration: '45 دقيقة'
    },
    {
      title: 'تغذية الرياضيين',
      description: 'برامج غذائية مصممة خصيصاً للرياضيين لتحسين الأداء والاستشفاء.',
      price: '200 جنيه',
      duration: '30 دقيقة'
    }
  ]

  const articles = [
    {
      title: 'أهمية البروتين في نظام التخسيس',
      excerpt: 'تعرف على دور البروتين في بناء العضلات وحرق الدهون...',
      date: '2025-01-15',
      readTime: '5 دقائق',
      slug: 'protein-importance'
    },
    {
      title: 'كيف تؤثر الألياف على صحة الجهاز الهضمي والوزن؟',
      excerpt: 'الألياف الغذائية لها دور مهم في تحسين الهضم وإنقاص الوزن...',
      date: '2025-01-10',
      readTime: '7 دقائق',
      slug: 'fiber-benefits'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-arabic"
            >
              <h1 className="text-4xl lg:text-6xl font-arabic-heading text-foreground mb-6 leading-tight">
                عيش حياة صحية مع{' '}
                <span className="text-primary">Gaia Nutrition</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                خطط تغذية متخصصة لتحسين صحتك ورفاهيتك بطريقة مستدامة مع د/ عمر محمد خلف، أخصائي التغذية العلاجية.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="btn-primary">
                  <Link to="/services" className="flex items-center space-x-2 space-x-reverse">
                    <span>اكتشف خدماتنا</span>
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://calendly.com/egyptistima/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 space-x-reverse"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>احجز استشارة</span>
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="نمط حياة صحي"
                className="rounded-2xl shadow-2xl w-full h-auto image-hover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-arabic-heading text-foreground mb-4">
              تعرف على د/ عمر محمد خلف
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              شاهد الفيديو التعريفي للدكتور عمر محمد خلف وتعرف على خبرته في مجال التغذية العلاجية
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src="https://drive.google.com/file/d/19VgV64_ABwt2DkP3FwfRIJl5T074tLq0/preview"
                className="w-full h-64 md:h-96 lg:h-[500px]"
                allow="autoplay"
                title="فيديو تعريفي - د/ عمر محمد خلف"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <Button size="lg" asChild className="btn-accent">
                <a 
                  href="https://calendly.com/egyptistima/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 space-x-reverse"
                >
                  <Calendar className="w-5 h-5" />
                  <span>احجز استشارتك الآن</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-arabic-heading text-foreground mb-4">
              لماذا تختارنا؟
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 card-hover">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-arabic-heading text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-arabic-heading text-foreground mb-4">
              خدماتنا
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المتخصصة في التغذية العلاجية
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-arabic-heading text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-primary font-semibold">{service.price}</span>
                      <span className="text-muted-foreground">{service.duration}</span>
                    </div>
                    <Button className="w-full btn-primary" asChild>
                      <Link to="/booking">احجز الآن</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">عرض جميع الخدمات</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-arabic-heading text-foreground mb-4">
              آخر المقالات
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اكتشف أحدث النصائح والمعلومات في عالم التغذية والصحة
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-arabic-heading text-foreground">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Button variant="outline" asChild>
                      <Link to={`/blog/${article.slug}`}>اقرأ المزيد</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">عرض جميع المقالات</Link>
            </Button>
          </motion.div>
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
              احجز استشارتك الأولى مع د/ عمر محمد خلف واحصل على خطة تغذية مخصصة لك
            </p>
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

