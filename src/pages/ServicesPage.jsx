import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Calendar, CheckCircle, Users, Heart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ServicesPage = () => {
  const services = [
    {
      title: 'السمنة والنحافة',
      description: 'متابعة متخصصة لحالات السمنة والنحافة للوصول للوزن المثالي بطرق صحية.',
      price: '300 جنيه',
      duration: '60 دقيقة',
      icon: Users,
      features: [
        'تقييم شامل للحالة الصحية',
        'خطة غذائية مخصصة',
        'متابعة أسبوعية',
        'نصائح لتغيير نمط الحياة'
      ],
      popular: true
    },
    {
      title: 'تغذية الأطفال',
      description: 'خطط تغذية متوازنة للأطفال في مختلف المراحل العمرية.',
      price: '400 جنيه',
      duration: '45 دقيقة',
      icon: Heart,
      features: [
        'تقييم النمو والتطور',
        'خطط غذائية مناسبة للعمر',
        'نصائح للأمهات',
        'متابعة شهرية'
      ]
    },
    {
      title: 'تغذية الرياضيين',
      description: 'برامج غذائية مصممة خصيصاً للرياضيين لتحسين الأداء والاستشفاء.',
      price: '200 جنيه',
      duration: '30 دقيقة',
      icon: Star,
      features: [
        'تحليل الاحتياجات الرياضية',
        'خطط ما قبل وبعد التمرين',
        'مكملات غذائية مناسبة',
        'متابعة الأداء'
      ]
    },
    {
      title: 'تغذية مرضى السكر',
      description: 'إدارة التغذية لمرضى السكر للمساعدة في التحكم بمستويات السكر في الدم.',
      price: '350 جنيه',
      duration: '45 دقيقة',
      icon: CheckCircle,
      features: [
        'خطط غذائية لمرضى السكر',
        'مراقبة مستوى السكر',
        'نصائح للوجبات اليومية',
        'متابعة دورية'
      ]
    },
    {
      title: 'تغذية الحوامل',
      description: 'نصائح وخطط غذائية متكاملة للحوامل لضمان صحة الأم والجنين.',
      price: '350 جنيه',
      duration: '45 دقيقة',
      icon: Heart,
      features: [
        'تغذية ما قبل الولادة',
        'مكملات غذائية آمنة',
        'نصائح لكل مرحلة',
        'متابعة شهرية'
      ]
    },
    {
      title: 'تغذية كبار السن',
      description: 'خطط تغذية مخصصة لكبار السن لدعم الصحة والحيوية.',
      price: '350 جنيه',
      duration: '45 دقيقة',
      icon: Users,
      features: [
        'تقييم الاحتياجات الخاصة',
        'خطط سهلة التطبيق',
        'نصائح للأمراض المزمنة',
        'متابعة منتظمة'
      ]
    }
  ]

  const process = [
    {
      step: '01',
      title: 'الاستشارة الأولى',
      description: 'تقييم شامل لحالتك الصحية وأهدافك'
    },
    {
      step: '02',
      title: 'وضع الخطة',
      description: 'إعداد خطة تغذية مخصصة لك'
    },
    {
      step: '03',
      title: 'المتابعة',
      description: 'متابعة دورية وتعديل الخطة حسب التقدم'
    },
    {
      step: '04',
      title: 'تحقيق الأهداف',
      description: 'الوصول لأهدافك الصحية بطريقة مستدامة'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-arabic-heading text-foreground">
              خدماتنا المتخصصة
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نقدم مجموعة شاملة من الخدمات المتخصصة في التغذية العلاجية لجميع الفئات العمرية والحالات الصحية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {service.popular && (
                  <Badge className="absolute -top-3 right-4 z-10 bg-accent text-accent-foreground">
                    الأكثر طلباً
                  </Badge>
                )}
                <Card className="h-full card-hover">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-arabic-heading">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center text-sm border-t pt-4">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{service.duration}</span>
                      </div>
                      <span className="text-primary font-semibold text-lg">
                        {service.price}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full btn-primary" asChild>
                      <a 
                        href="https://calendly.com/egyptistima/30min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        احجز الآن
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              كيف نعمل معك؟
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              عملية منظمة ومدروسة لضمان تحقيق أفضل النتائج
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-arabic-heading text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              الأسئلة الشائعة
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'كم تستغرق الاستشارة الأولى؟',
                answer: 'تستغرق الاستشارة الأولى عادة من 45-60 دقيقة حسب نوع الخدمة المطلوبة.'
              },
              {
                question: 'هل يمكنني الحصول على استشارة أونلاين؟',
                answer: 'نعم، نوفر خدمة الاستشارات الأونلاين عبر منصات مختلفة لراحتك.'
              },
              {
                question: 'كم مرة أحتاج للمتابعة؟',
                answer: 'يعتمد ذلك على حالتك وأهدافك، لكن عادة ما تكون المتابعة أسبوعية أو شهرية.'
              },
              {
                question: 'هل الخطط الغذائية مناسبة للجميع؟',
                answer: 'نعم، نصمم خطط مخصصة لكل شخص حسب احتياجاته وحالته الصحية.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-arabic-heading text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              جاهز لبدء رحلتك الصحية؟
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              احجز استشارتك الأولى الآن واحصل على خطة تغذية مخصصة تناسب احتياجاتك
            </p>
            <Button size="lg" variant="secondary" asChild className="btn-accent">
              <a 
                href="https://calendly.com/egyptistima/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 space-x-reverse"
              >
                <Calendar className="w-5 h-5" />
                <span>احجز استشارة الآن</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

