import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, User, ArrowRight, Share2, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ArticlePage = () => {
  const { slug } = useParams()

  // بيانات المقالات (في التطبيق الحقيقي ستأتي من API)
  const articles = {
    'protein-importance': {
      id: 1,
      title: 'أهمية البروتين في نظام التخسيس',
      content: `البروتين هو أحد أهم العناصر الغذائية في رحلة التخسيس. يلعب دوراً حيوياً في بناء العضلات والحفاظ عليها، كما يساعد في زيادة معدل الحرق وإعطاء شعور بالشبع لفترات أطول.

## فوائد البروتين في التخسيس:

### 1. زيادة معدل الأيض
البروتين يتطلب طاقة أكبر للهضم مقارنة بالكربوهيدرات والدهون، مما يعني حرق سعرات حرارية أكثر أثناء عملية الهضم. هذا ما يُعرف بالتأثير الحراري للطعام (Thermic Effect of Food).

### 2. الحفاظ على الكتلة العضلية
عند اتباع نظام غذائي لإنقاص الوزن، هناك خطر فقدان الكتلة العضلية مع الدهون. البروتين يساعد في الحفاظ على العضلات ومنع فقدانها، مما يحافظ على معدل الأيض الأساسي.

### 3. الشعور بالشبع
البروتين يعطي شعوراً بالشبع أطول من الكربوهيدرات والدهون، مما يقلل من الرغبة في تناول الطعام ويساعد في التحكم في السعرات الحرارية المتناولة.

### 4. تنظيم الهرمونات
البروتين يساعد في تنظيم هرمونات الجوع والشبع مثل الجريلين واللبتين، مما يحسن من التحكم في الشهية.

## أفضل مصادر البروتين:

### البروتين الحيواني:
- **الدجاج منزوع الجلد**: غني بالبروتين وقليل الدهون
- **السمك**: خاصة الأسماك الدهنية مثل السلمون والتونة
- **البيض**: بروتين كامل يحتوي على جميع الأحماض الأمينية الأساسية
- **اللحوم الحمراء الخالية من الدهون**: مثل لحم العجل والضأن

### البروتين النباتي:
- **البقوليات**: العدس، الفاصوليا، الحمص، الفول
- **المكسرات والبذور**: اللوز، الجوز، بذور الشيا، بذور الكتان
- **الكينوا**: حبوب كاملة تحتوي على بروتين كامل
- **التوفو ومنتجات الصويا**: بديل ممتاز للبروتين الحيواني

### منتجات الألبان:
- **الزبادي اليوناني**: عالي البروتين وقليل السكر
- **الجبن القريش**: قليل الدهون وعالي البروتين
- **الحليب قليل الدسم**: مصدر جيد للبروتين والكالسيوم

## الكمية المناسبة:

### للأشخاص العاديين:
0.8 جرام لكل كيلوجرام من وزن الجسم يومياً

### للأشخاص الذين يتبعون نظام تخسيس:
1.2-1.6 جرام لكل كيلوجرام من وزن الجسم يومياً

### للرياضيين:
1.6-2.2 جرام لكل كيلوجرام من وزن الجسم يومياً

## توزيع البروتين على مدار اليوم:

### الإفطار:
- بيضتان مسلوقتان مع خبز أسمر
- زبادي يوناني مع المكسرات
- شوفان بالحليب والفواكه

### الغداء:
- قطعة دجاج مشوية مع السلطة
- سمك مع الخضار المطبوخة
- عدس أو فاصوليا مع الأرز البني

### العشاء:
- سلطة تونة
- جبن قريش مع الخضار
- شوربة العدس

### الوجبات الخفيفة:
- حفنة من المكسرات
- زبادي طبيعي
- بيضة مسلوقة

## نصائح مهمة:

1. **التنويع**: تناول مصادر مختلفة من البروتين لضمان الحصول على جميع الأحماض الأمينية
2. **التوقيت**: وزع البروتين على جميع الوجبات بدلاً من تركيزه في وجبة واحدة
3. **الجودة**: اختر مصادر البروتين عالية الجودة وقليلة المعالجة
4. **الترطيب**: اشرب كمية كافية من الماء عند زيادة تناول البروتين

## تحذيرات:

- لا تفرط في تناول البروتين، فالزيادة المفرطة قد تضر بالكلى
- استشر طبيبك إذا كنت تعاني من مشاكل في الكلى
- تأكد من تناول نظام غذائي متوازن يشمل جميع العناصر الغذائية

## الخلاصة:

البروتين عنصر أساسي في أي نظام تخسيس ناجح. يساعد في الحفاظ على العضلات، زيادة الشبع، وتحسين معدل الأيض. المفتاح هو اختيار مصادر متنوعة وعالية الجودة، وتوزيعها بشكل مناسب على مدار اليوم.

تذكر أن التوازن هو المفتاح، ولا يجب الاعتماد على البروتين فقط بل يجب تناول نظام غذائي متوازن يشمل جميع العناصر الغذائية الأساسية.`,
      date: '2025-01-15',
      readTime: '5 دقائق',
      author: 'د/ عمر محمد خلف',
      category: 'التخسيس'
    },
    'fiber-benefits': {
      id: 2,
      title: 'كيف تؤثر الألياف على صحة الجهاز الهضمي والوزن؟',
      content: `الألياف الغذائية هي جزء من النباتات لا يستطيع الجسم هضمه أو امتصاصه. رغم ذلك، فهي تلعب دوراً حيوياً في صحة الجهاز الهضمي والتحكم في الوزن.

## أنواع الألياف:

### 1. الألياف القابلة للذوبان
تذوب في الماء وتكون مادة هلامية تساعد في:
- خفض مستوى الكوليسترول في الدم
- التحكم في مستوى السكر في الدم
- إبطاء عملية الهضم والامتصاص

**المصادر الرئيسية:**
- الشوفان والشعير
- التفاح والحمضيات
- الجزر والبروكلي
- البقوليات مثل الفاصوليا والعدس

### 2. الألياف غير القابلة للذوبان
لا تذوب في الماء وتساعد في:
- تحسين حركة الأمعاء
- منع الإمساك
- إضافة حجم للبراز
- تسريع مرور الطعام عبر الجهاز الهضمي

**المصادر الرئيسية:**
- الحبوب الكاملة
- المكسرات والبذور
- الخضروات الورقية
- قشور الفواكه

## فوائد الألياف للوزن:

### 1. الشعور بالشبع
الألياف تمتص الماء وتنتفخ في المعدة، مما يعطي شعوراً بالامتلاء والشبع لفترة أطول. هذا يساعد في:
- تقليل كمية الطعام المتناولة
- منع الإفراط في الأكل
- تقليل الرغبة في تناول الوجبات الخفيفة

### 2. تقليل امتصاص السعرات
الألياف تبطئ امتصاص السكريات والدهون، مما يقلل من إجمالي السعرات الحرارية المتاحة للجسم.

### 3. تحسين الهضم
الألياف تغذي البكتيريا النافعة في الأمعاء، مما يحسن صحة الجهاز الهضمي عموماً ويساعد في:
- تحسين امتصاص العناصر الغذائية
- تقوية جهاز المناعة
- تقليل الالتهابات

### 4. تنظيم مستوى السكر
الألياف تبطئ امتصاص السكر، مما يمنع الارتفاع المفاجئ في مستوى السكر في الدم ويقلل من إفراز الأنسولين.

## أفضل مصادر الألياف:

### الخضروات:
- **البروكلي**: 5 جرام ألياف لكل كوب
- **الجزر**: 3.5 جرام ألياف لكل كوب
- **السبانخ**: 4 جرام ألياف لكل كوب مطبوخ
- **الخرشوف**: 10 جرام ألياف لكل حبة متوسطة

### الفواكه:
- **التفاح مع القشر**: 4.5 جرام ألياف لكل حبة متوسطة
- **الكمثرى مع القشر**: 6 جرام ألياف لكل حبة متوسطة
- **التوت**: 8 جرام ألياف لكل كوب
- **الموز**: 3 جرام ألياف لكل حبة متوسطة

### الحبوب الكاملة:
- **الشوفان**: 4 جرام ألياف لكل كوب مطبوخ
- **الأرز البني**: 3.5 جرام ألياف لكل كوب مطبوخ
- **الكينوا**: 5 جرام ألياف لكل كوب مطبوخ
- **خبز القمح الكامل**: 2 جرام ألياف لكل شريحة

### البقوليات:
- **العدس**: 15 جرام ألياف لكل كوب مطبوخ
- **الفاصوليا السوداء**: 15 جرام ألياف لكل كوب مطبوخ
- **الحمص**: 12 جرام ألياف لكل كوب مطبوخ
- **الفول**: 13 جرام ألياف لكل كوب مطبوخ

## الكمية المناسبة:

### للبالغين:
- **النساء**: 25 جرام يومياً
- **الرجال**: 35 جرام يومياً

### نصائح لزيادة الألياف تدريجياً:
1. ابدأ بزيادة 5 جرام أسبوعياً
2. اشرب كمية كافية من الماء (8-10 أكواب يومياً)
3. وزع الألياف على جميع الوجبات
4. اختر الفواكه والخضار مع القشر عندما أمكن

## خطة يومية لزيادة الألياف:

### الإفطار:
- شوفان مع التوت والمكسرات (8 جرام ألياف)
- أو خبز أسمر مع الأفوكادو (7 جرام ألياف)

### الغداء:
- سلطة خضار مع الحمص (10 جرام ألياف)
- أو أرز بني مع الخضار (8 جرام ألياف)

### العشاء:
- شوربة العدس مع الخضار (12 جرام ألياف)
- أو سلطة كبيرة مع البقوليات (9 جرام ألياف)

### الوجبات الخفيفة:
- تفاحة مع القشر (4.5 جرام ألياف)
- حفنة من اللوز (3.5 جرام ألياف)

## تحذيرات مهمة:

1. **زيادة تدريجية**: لا تزيد الألياف بسرعة لتجنب الانتفاخ والغازات
2. **شرب الماء**: الألياف تحتاج للماء لتعمل بشكل صحيح
3. **التنويع**: تناول أنواع مختلفة من الألياف للحصول على فوائد متنوعة
4. **استشارة طبية**: إذا كنت تعاني من مشاكل هضمية، استشر طبيبك قبل زيادة الألياف

## الخلاصة:

الألياف الغذائية عنصر أساسي لصحة الجهاز الهضمي والتحكم في الوزن. تساعد في الشعور بالشبع، تحسين الهضم، وتنظيم مستوى السكر في الدم. المفتاح هو زيادة تناولها تدريجياً مع شرب كمية كافية من الماء.`,
      date: '2025-01-10',
      readTime: '7 دقائق',
      author: 'د/ عمر محمد خلف',
      category: 'التغذية العلاجية'
    }
  }

  const article = articles[slug]

  if (!article) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-arabic-heading text-foreground">
            المقال غير موجود
          </h1>
          <Button asChild>
            <Link to="/blog">العودة للمقالات</Link>
          </Button>
        </div>
      </div>
    )
  }

  const relatedArticles = [
    {
      title: 'نصائح التغذية للرياضيين المبتدئين',
      slug: 'sports-nutrition',
      readTime: '8 دقائق'
    },
    {
      title: 'التغذية السليمة للأطفال في سن المدرسة',
      slug: 'children-nutrition',
      readTime: '6 دقائق'
    }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Article Header */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="mb-6">
              <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                <Link to="/" className="hover:text-primary">الرئيسية</Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-primary">المقالات</Link>
                <span>/</span>
                <span className="text-foreground">{article.title}</span>
              </div>
            </nav>

            {/* Article Meta */}
            <div className="mb-6">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-3xl lg:text-4xl font-arabic-heading text-foreground mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <Button variant="outline" size="sm" className="flex items-center space-x-2 space-x-reverse">
                  <Share2 className="w-4 h-4" />
                  <span>مشاركة</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none text-arabic"
              style={{
                direction: 'rtl',
                textAlign: 'right',
                lineHeight: '1.8'
              }}
            >
              <div 
                className="article-content text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: article.content.replace(/\n/g, '<br>').replace(/## /g, '<h2 class="text-2xl font-arabic-heading text-foreground mt-8 mb-4">').replace(/### /g, '<h3 class="text-xl font-arabic-heading text-foreground mt-6 mb-3">').replace(/<h2 class="text-2xl font-arabic-heading text-foreground mt-8 mb-4">/g, '</p><h2 class="text-2xl font-arabic-heading text-foreground mt-8 mb-4">').replace(/<h3 class="text-xl font-arabic-heading text-foreground mt-6 mb-3">/g, '</p><h3 class="text-xl font-arabic-heading text-foreground mt-6 mb-3">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- (.*?)(<br>|$)/g, '<li class="mb-2">$1</li>').replace(/(<li class="mb-2">.*?<\/li>)/g, '<ul class="list-disc list-inside mb-4 space-y-2">$1</ul>').replace(/<\/ul><ul class="list-disc list-inside mb-4 space-y-2">/g, '').replace(/^/, '<p class="mb-4">').replace(/$/, '</p>')
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-arabic-heading text-foreground mb-8 text-center">
              مقالات ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-arabic-heading text-foreground mb-2">
                        {relatedArticle.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground">
                          <BookOpen className="w-4 h-4" />
                          <span>{relatedArticle.readTime}</span>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/blog/${relatedArticle.slug}`}>اقرأ المزيد</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-arabic-heading">
              هل أعجبك المقال؟
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              احجز استشارتك مع د/ عمر محمد خلف للحصول على نصائح مخصصة لحالتك
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
                  <span>احجز استشارة</span>
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Link to="/blog" className="flex items-center space-x-2 space-x-reverse">
                  <ArrowRight className="w-5 h-5" />
                  <span>المزيد من المقالات</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ArticlePage

