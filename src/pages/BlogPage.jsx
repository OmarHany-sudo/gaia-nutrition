import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, ArrowLeft, Search, Filter, BookOpen, TrendingUp, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('جميع المقالات')

  const categories = [
    { name: 'جميع المقالات', count: 4, icon: BookOpen },
    { name: 'التخسيس', count: 2, icon: TrendingUp },
    { name: 'التغذية العلاجية', count: 1, icon: Star },
    { name: 'الرياضة والصحة', count: 1, icon: User },
    { name: 'تغذية الأطفال', count: 1, icon: User },
    { name: 'نصائح صحية', count: 2, icon: BookOpen }
  ]

  const articles = [
    {
      id: 1,
      title: 'أهمية البروتين في نظام التخسيس',
      excerpt: 'تعرف على دور البروتين في بناء العضلات وحرق الدهون، وكيف يمكن أن يساعدك في تحقيق أهدافك في إنقاص الوزن بطريقة صحية ومستدامة.',
      content: `البروتين هو أحد أهم العناصر الغذائية في رحلة التخسيس. يلعب دوراً حيوياً في بناء العضلات والحفاظ عليها، كما يساعد في زيادة معدل الحرق وإعطاء شعور بالشبع لفترات أطول.

## فوائد البروتين في التخسيس:

### 1. زيادة معدل الأيض
البروتين يتطلب طاقة أكبر للهضم مقارنة بالكربوهيدرات والدهون، مما يعني حرق سعرات حرارية أكثر أثناء عملية الهضم.

### 2. الحفاظ على الكتلة العضلية
عند اتباع نظام غذائي لإنقاص الوزن، البروتين يساعد في الحفاظ على العضلات ومنع فقدانها.

### 3. الشعور بالشبع
البروتين يعطي شعوراً بالشبع أطول من الكربوهيدرات، مما يقلل من الرغبة في تناول الطعام.

## أفضل مصادر البروتين:

- **البروتين الحيواني**: الدجاج، السمك، البيض، اللحوم الحمراء الخالية من الدهون
- **البروتين النباتي**: البقوليات، المكسرات، البذور، الكينوا
- **منتجات الألبان**: الزبادي اليوناني، الجبن القريش، الحليب قليل الدسم

## الكمية المناسبة:
ينصح بتناول 1.2-1.6 جرام من البروتين لكل كيلوجرام من وزن الجسم يومياً للأشخاص الذين يتبعون نظام تخسيس.

تذكر أن التوازن هو المفتاح، ولا يجب الاعتماد على البروتين فقط بل يجب تناول نظام غذائي متوازن يشمل جميع العناصر الغذائية.`,
      date: '2025-01-15',
      readTime: '5 دقائق',
      author: 'د/ عمر محمد خلف',
      category: 'التخسيس',
      slug: 'protein-importance',
      featured: true,
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'كيف تؤثر الألياف على صحة الجهاز الهضمي والوزن؟',
      excerpt: 'الألياف الغذائية لها دور مهم في تحسين الهضم وإنقاص الوزن. اكتشف كيف يمكن للألياف أن تحسن صحتك العامة.',
      content: `الألياف الغذائية هي جزء من النباتات لا يستطيع الجسم هضمه أو امتصاصه. رغم ذلك، فهي تلعب دوراً حيوياً في صحة الجهاز الهضمي والتحكم في الوزن.

## أنواع الألياف:

### 1. الألياف القابلة للذوبان
تذوب في الماء وتكون مادة هلامية تساعد في:
- خفض مستوى الكوليسترول
- التحكم في مستوى السكر في الدم
- إبطاء عملية الهضم

### 2. الألياف غير القابلة للذوبان
لا تذوب في الماء وتساعد في:
- تحسين حركة الأمعاء
- منع الإمساك
- إضافة حجم للبراز

## فوائد الألياف للوزن:

### الشعور بالشبع
الألياف تمتص الماء وتنتفخ في المعدة، مما يعطي شعوراً بالامتلاء والشبع لفترة أطول.

### تقليل امتصاص السعرات
الألياف تبطئ امتصاص السكريات والدهون، مما يقلل من إجمالي السعرات المتاحة للجسم.

### تحسين الهضم
الألياف تغذي البكتيريا النافعة في الأمعاء، مما يحسن صحة الجهاز الهضمي عموماً.

## أفضل مصادر الألياف:

- **الخضروات**: البروكلي، الجزر، السبانخ، الخرشوف
- **الفواكه**: التفاح، الكمثرى، التوت، الموز
- **الحبوب الكاملة**: الشوفان، الأرز البني، الكينوا
- **البقوليات**: العدس، الفاصوليا، الحمص

## الكمية المناسبة:
ينصح بتناول 25-35 جرام من الألياف يومياً للبالغين، مع زيادة الكمية تدريجياً وشرب كمية كافية من الماء.`,
      date: '2025-01-10',
      readTime: '7 دقائق',
      author: 'د/ عمر محمد خلف',
      category: 'التغذية العلاجية',
      slug: 'fiber-benefits',
      featured: false,
      views: 890,
      likes: 67
    },
    {
      id: 3,
      title: 'التغذية السليمة للأطفال في سن المدرسة',
      excerpt: 'دليل شامل لتغذية الأطفال في سن المدرسة، مع نصائح عملية لضمان نمو صحي وتطور سليم.',
      content: `تغذية الأطفال في سن المدرسة أمر بالغ الأهمية لنموهم الجسدي والذهني. في هذه المرحلة، يحتاج الأطفال إلى تغذية متوازنة تدعم نشاطهم وتركيزهم في المدرسة.

## احتياجات الأطفال الغذائية:

### البروتين
ضروري لنمو العضلات والأنسجة:
- اللحوم الخالية من الدهون
- الأسماك
- البيض
- البقوليات
- منتجات الألبان

### الكربوهيدرات المعقدة
توفر الطاقة المستدامة:
- الحبوب الكاملة
- الأرز البني
- الشوفان
- الخبز الأسمر

### الدهون الصحية
مهمة لتطور الدماغ:
- المكسرات
- البذور
- الأفوكادو
- زيت الزيتون

### الفيتامينات والمعادن
من خلال الفواكه والخضروات المتنوعة.

## نصائح عملية:

### وجبة الإفطار
- يجب أن تكون غنية بالبروتين والألياف
- تجنب السكريات المضافة
- أمثلة: الشوفان بالفواكه، البيض مع الخبز الأسمر

### وجبة المدرسة
- تحضير وجبات صحية ومتنوعة
- تجنب الأطعمة المصنعة
- إشراك الطفل في اختيار الوجبة

### العشاء
- وجبة متوازنة تحتوي على جميع العناصر
- تناول الطعام كعائلة
- تجنب الشاشات أثناء الأكل

## مشاكل شائعة وحلولها:

### رفض الخضروات
- تقديمها بطرق مبتكرة
- إشراك الطفل في التحضير
- القدوة الإيجابية من الوالدين

### الإفراط في السكريات
- تقليل المشروبات المحلاة
- استبدال الحلويات بالفواكه
- قراءة ملصقات الطعام

تذكر أن تكوين عادات غذائية صحية في الصغر يستمر مدى الحياة.`,
      date: '2025-01-05',
      readTime: '6 دقائق',
      author: 'د/ عمر محمد خلف',
      category: 'تغذية الأطفال',
      slug: 'children-nutrition',
      featured: false,
      views: 654,
      likes: 45
    },
    {
      id: 4,
      title: 'نصائح التغذية للرياضيين المبتدئين',
      excerpt: 'إذا كنت قد بدأت للتو في ممارسة الرياضة، فإن التغذية السليمة ستساعدك على تحقيق أفضل النتائج وتجنب الإصابات.',
      content: `بدء ممارسة الرياضة خطوة رائعة نحو حياة صحية أفضل. لكن النجاح في الرياضة لا يعتمد فقط على التمرين، بل أيضاً على التغذية السليمة.

## أساسيات التغذية الرياضية:

### قبل التمرين (1-3 ساعات)
**الهدف**: توفير الطاقة اللازمة
- كربوهيدرات معقدة (الشوفان، الموز)
- بروتين خفيف (الزبادي)
- تجنب الدهون والألياف الكثيرة
- شرب الماء بكمية كافية

### أثناء التمرين
**للتمارين أقل من ساعة**: الماء فقط
**للتمارين أكثر من ساعة**: 
- مشروبات رياضية
- موز
- تمر

### بعد التمرين (خلال 30 دقيقة)
**الهدف**: استعادة الطاقة وبناء العضلات
- نسبة 3:1 كربوهيدرات إلى بروتين
- أمثلة: حليب بالشوكولاتة، موز مع زبدة اللوز

## احتياجات خاصة:

### الترطيب
- شرب 500-600 مل قبل التمرين بساعتين
- 200-300 مل كل 15-20 دقيقة أثناء التمرين
- تعويض كل كيلو مفقود بـ 1.5 لتر ماء

### الكربوهيدرات
- 3-5 جرام لكل كيلو من وزن الجسم يومياً
- التركيز على الكربوهيدرات المعقدة
- توقيت تناولها مهم جداً

### البروتين
- 1.2-1.7 جرام لكل كيلو من وزن الجسم
- توزيعه على مدار اليوم
- مصادر متنوعة حيوانية ونباتية

## أخطاء شائعة:

### عدم تناول الطعام قبل التمرين
يؤدي إلى انخفاض الطاقة والأداء

### الإفراط في المكملات
التركيز على الطعام الطبيعي أولاً

### إهمال الترطيب
الجفاف يقلل الأداء بشكل كبير

### تجاهل وجبة ما بعد التمرين
تفويت فرصة الاستشفاء الأمثل

## نصائح عملية:

- خطط وجباتك مسبقاً
- احتفظ بوجبات خفيفة صحية
- استمع لجسمك
- استشر أخصائي تغذية عند الحاجة

تذكر أن التغذية الرياضية علم، والتطبيق الصحيح يحتاج وقت وصبر.`,
      date: '2024-12-28',
      readTime: '8 دقائق',
      author: 'د/ عمر محمد خلف',
      category: 'الرياضة والصحة',
      slug: 'sports-nutrition',
      featured: true,
      views: 1100,
      likes: 78
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'جميع المقالات' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = articles.filter(article => article.featured)

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
              مقالات التغذية والصحة
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              اكتشف أحدث النصائح والمعلومات في عالم التغذية والصحة من خلال مقالاتنا المتخصصة
            </p>
            
            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-12 py-4 text-lg rounded-full border-2 border-primary/20 focus:border-primary transition-all duration-300 shadow-lg"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Filter className="text-muted-foreground w-5 h-5" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 space-x-reverse px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </motion.button>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-arabic-heading text-foreground mb-4">
                المقالات المميزة
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-muted/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          <Star className="w-3 h-3 mr-1" />
                          مميز
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {article.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-arabic-heading text-foreground group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <span className="flex items-center space-x-1 space-x-reverse">
                            <User className="w-4 h-4" />
                            <span>{article.views}</span>
                          </span>
                          <span className="flex items-center space-x-1 space-x-reverse">
                            <Star className="w-4 h-4" />
                            <span>{article.likes}</span>
                          </span>
                        </div>
                      </div>
                      
                      <Button variant="outline" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Link to={`/blog/${article.slug}`} className="flex items-center justify-center space-x-2 space-x-reverse">
                          <span>اقرأ المزيد</span>
                          <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
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
              جميع المقالات
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-0">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      {article.featured && (
                        <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          مميز
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg font-arabic-heading text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Calendar className="w-3 h-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="outline" asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Link to={`/blog/${article.slug}`} className="flex items-center justify-center space-x-2 space-x-reverse">
                        <span>اقرأ المزيد</span>
                        <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-arabic-heading text-foreground mb-2">
                لا توجد مقالات
              </h3>
              <p className="text-muted-foreground">
                لم يتم العثور على مقالات تطابق بحثك. جرب كلمات مختلفة أو اختر فئة أخرى.
              </p>
            </motion.div>
          )}
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
              هل تحتاج استشارة شخصية؟
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              احجز استشارتك مع د/ عمر محمد خلف واحصل على خطة تغذية مخصصة لاحتياجاتك
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

export default BlogPage

