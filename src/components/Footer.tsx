import { Linkedin, Twitter, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const { t, language } = useLanguage();
  const isArabic = language === 'ar';

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#mission', label: t('nav.mission') },
    { href: '#services', label: t('nav.services') },
    { href: '#projects', label: isArabic ? 'المشاريع' : 'Projects' },
    { href: '#contact', label: t('nav.contact') },
  ];

  const services = [
    isArabic ? 'كشف المعادن' : 'Metal Detection',
    isArabic ? 'كاميرات المراقبة' : 'CCTV Surveillance',
    isArabic ? 'الأشعة السينية' : 'X-Ray Screening',
    isArabic ? 'التحكم بالدخول' : 'Access Control',
  ];

  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-card border-t border-border/30">
      {/* Gradient Line */}
      <div className="h-1 gradient-primary" />

      <div className="container-premium py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <img src={logo} alt="Alpha Core Solutions" className="h-14 w-auto rounded-lg" />
            </a>
            <p className={`text-muted-foreground mb-4 text-sm ${isArabic ? 'font-arabic' : ''}`}>
              {t('footer.tagline')}
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold text-foreground mb-5 ${isArabic ? 'font-arabic' : ''}`}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`text-muted-foreground hover:text-primary transition-colors text-sm ${isArabic ? 'font-arabic' : ''}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`font-semibold text-foreground mb-5 ${isArabic ? 'font-arabic' : ''}`}>
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className={`text-muted-foreground hover:text-primary transition-colors text-sm ${isArabic ? 'font-arabic' : ''}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-semibold text-foreground mb-5 ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic ? 'اتصل بنا' : 'Contact Us'}
            </h4>
            <div className="space-y-4">
              <a href="mailto:info@alphacs.sa" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 text-primary" />
                info@alphacs.sa
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className={isArabic ? 'font-arabic' : ''}>
                  {isArabic ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-sm text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
              {isArabic 
                ? '© 2026 ألفا كور سوليوشنز. جميع الحقوق محفوظة.' 
                : '© 2026 Alpha Core Solutions Est. All Rights Reserved.'}
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className={`text-sm text-muted-foreground hover:text-primary transition-colors ${isArabic ? 'font-arabic' : ''}`}>
                {t('footer.privacy')}
              </a>
              <a href="/terms-of-service" className={`text-sm text-muted-foreground hover:text-primary transition-colors ${isArabic ? 'font-arabic' : ''}`}>
                {t('footer.terms')}
              </a>
            </div>
          </div>
          <p className={`text-center text-sm text-primary mt-4 ${isArabic ? 'font-arabic' : ''}`}>
            {t('footer.serving')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
