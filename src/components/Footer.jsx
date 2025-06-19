import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import logo from '../assets/logo.jpeg'; // عدّل المسار حسب مكان الملف

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'السمنة والنحافة',
    'تغذية الأطفال',
    'تغذية الرياضيين',
    'تغذية مرضى السكر',
    'تغذية الحوامل',
    'تغذية كبار السن'
  ]

  const quickLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن الطبيب', path: '/about' },
    { name: 'الخدمات', path: '/services' },
    { name: 'المقالات', path: '/blog' },
    { name: 'احجز الآن', path: '/booking' }
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* معلومات الشركة */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
  <img
    src={logo}
    alt="Gaia Nutrition Logo"
    className="w-10 h-10 rounded-full object-cover"
  />
  <span className="text-xl font-arabic-heading">Gaia Nutrition</span>
</div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              منصة متخصصة لتغيير نمط الحياة الصحي من خلال التغذية المستدامة والمتابعة المهنية مع د/ عمر محمد خلف.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="space-y-4">
            <h3 className="text-lg font-arabic-heading">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الخدمات */}
          <div className="space-y-4">
            <h3 className="text-lg font-arabic-heading">خدماتنا</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div className="space-y-4">
            <h3 className="text-lg font-arabic-heading">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+20 1559121736</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">g4755862@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">الحصري، 6 أكتوبر، الجيزة</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Clock className="w-4 h-4 text-primary" />
                <div className="text-sm">
                  <div>السبت - الخميس: 9:00 ص - 6:00 م</div>
                  <div>الجمعة: مغلق</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* خط الفصل وحقوق النشر */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Gaia Nutrition. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

