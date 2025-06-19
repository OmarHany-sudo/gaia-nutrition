import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Award, Users, CheckCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import doctorImage from '../assets/doctor.webp'

const AboutPage = () => {
  const qualifications = [
    'أخصائي التغذية العلاجية',
    'كلية تكنولوجيا العلوم الصحية التطبيقية',
    'قسم تكنولوجيا التغذية وسلامة الغذاء',
    'خبرة في متابعة الحالات المختلفة'
  ]

  const achievements = [
    { number: '500+', label: 'عميل راضٍ' },
    { number: '5+', label: 'سنوات خبرة' },
    { number: '95%', label: 'معدل نجاح' },
    { number: '24/7', label: 'دعم متواصل' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={doctorImage}
                alt="د/ عمر محمد خلف"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto image-hover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-arabic space-y-6"
            >
              <h1 className="text-4xl lg:text-5xl font-arabic-heading text-foreground">
                د/ عمر محمد خلف
              </h1>
              <p className="text-xl text-primary font-semibold">
                أخصائي التغذية العلاجية
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                د/ عمر محمد خلف هو أخصائي التغذية العلاجية، درس في كلية تكنولوجيا العلوم الصحية التطبيقية، قسم تكنولوجيا التغذية وسلامة الغذاء.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                سيكون معكم هنا في متابعتنا الأونلاين لتغيير أسلوب حياتكم إلى حياة صحية أفضل، ومساعدتكم للوصول إلى أهدافكم بطريقة صحية ومعكم حتى النهاية إن شاء الله.
              </p>
              <Button size="lg" asChild className="btn-primary">
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
              شاهد الفيديو التعريفي
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              تعرف على د/ عمر محمد خلف أكثر من خلال هذا الفيديو التعريفي واكتشف كيف يمكنه مساعدتك في رحلتك نحو حياة صحية أفضل
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

      {/* Qualifications Section */}
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
              المؤهلات والخبرة
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Award className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-arabic-heading text-foreground">
                      المؤهلات العلمية
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-center space-x-3 space-x-reverse">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Users className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-arabic-heading text-foreground">
                      فلسفة العلاج
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    نؤمن بأن التغذية السليمة هي أساس الصحة الجيدة. نهدف إلى تقديم خطط تغذية مستدامة وقابلة للتطبيق في الحياة اليومية، مع التركيز على تغيير نمط الحياة بشكل تدريجي وصحي.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    نحن نؤمن بالمتابعة المستمرة والدعم النفسي للمرضى، لأن النجاح في تحقيق الأهداف الصحية يتطلب شراكة حقيقية بين الطبيب والمريض.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-arabic-heading mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg opacity-90">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
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
              فيديو تعريفي
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              تعرف على د/ عمر محمد خلف وخدماته في التغذية العلاجية
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="فيديو تعريفي - د/ عمر محمد خلف"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-arabic-heading text-foreground">
              هل أنت مستعد لبدء رحلتك الصحية؟
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              احجز استشارتك الأولى معنا واحصل على خطة تغذية مخصصة تناسب احتياجاتك وأهدافك الصحية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="btn-primary">
                <Link to="/booking" className="flex items-center space-x-2 space-x-reverse">
                  <Calendar className="w-5 h-5" />
                  <span>احجز استشارة</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">تعرف على خدماتنا</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

