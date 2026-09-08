'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, animate, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, X, Phone, MessageCircle, Shield, Wrench, Clock, CheckCircle, 
  MapPin, ChevronUp, Droplets, Building2, DoorOpen, LayoutGrid, Store, 
  Briefcase, Waves, Settings, Check, ChevronLeft, ChevronRight, Star, Plus
} from 'lucide-react';

const phoneNumber = "0548980056";
const waNumber = "966558935165";
const waLink = `https://wa.me/${waNumber}`;
const mapLink = "https://maps.app.goo.gl/SVWHydus4wrQZLkk7";

function AnimatedCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, to, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const NAV_LINKS = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'خدماتنا', href: '#services' },
  { label: 'لماذا نحن', href: '#why-us' },
  { label: 'معرض الأعمال', href: '#gallery' },
  { label: 'اتصل بنا', href: '#contact' },
];

const TRUST_ICONS = [
  { icon: Clock, label: 'تركيب فوري خلال 24 ساعة' },
  { icon: Shield, label: 'ضمان شامل 10 سنوات' },
  { icon: Wrench, label: 'فنيون متخصصون مدربون' },
  { icon: CheckCircle, label: 'أرخص سعر متر في المدينة' },
  { icon: Phone, label: 'خدمة 24/7 طوال الأسبوع' },
];

const SERVICES = [
  {
    icon: Droplets, title: 'شاور زجاج سيكوريت',
    points: ['ثابت، منزلق، مفصلي، قابل للطي', 'أسود، مطفي، مع نقوش، بدون إطار', 'سماكات: 10 ملم و12 ملم', 'تركيب في: العزيزية، العوالي، قباء، وغيرهم'],
    link: '/services/shower-glass'
  },
  {
    icon: Building2, title: 'واجهات زجاج سيكوريت',
    points: ['شفاف، عاكس، ملون', 'نظام استركشر، سبيدر، كرتن وول', 'للمحلات، المعارض، المطاعم، الفنادق', 'مقاوم للكسر والرصاص (12 ملم)'],
    link: '/services/facades-glass'
  },
  {
    icon: DoorOpen, title: 'أبواب زجاج سيكوريت',
    points: ['أوتوماتيكية، منزلقة، مفصلية، سحب', 'للمحلات، العمارات، المولات، الفنادق', 'موتورات ياباني وإيطالي', 'إكسسوارات ألماني وتركي أصلي'],
    link: '/services/doors-glass'
  },
  {
    icon: LayoutGrid, title: 'دربزين زجاج سيكوريت',
    points: ['للدرج الداخلي والخارجي، المسابح', 'مع استانلس ستيل، بدون إطار', 'سماكة 12+12 ملم للأمان الكامل', 'أحدث تصاميم 2025 مع إضاءة مخفية'],
    link: '/services/railing-glass'
  },
  {
    icon: Store, title: 'زجاج محلات تجارية',
    points: ['عدادات، رفوف عرض، أرفف متخصصة', 'للذهب والمجوهرات، الملابس، التمور', 'مقاوم للخدش والكسر', 'في: طريق الملك عبدالله، الحرم، العزيزية'],
    link: '/services/shops-glass'
  },
  {
    icon: Briefcase, title: 'زجاج مكاتب وقواطع',
    points: ['قواطع عازلة للصوت', 'سمارت جلاس (يتحول مطفي بضغطة زر)', 'شفاف، مطفي، مع ستائر داخلية', 'دبل جلاس عازل حراري وصوتي'],
    link: '/services/offices-glass'
  },
  {
    icon: Waves, title: 'زجاج مسابح وأرضيات',
    points: ['12+12 ملم، شفاف كريستال', 'مضاد للانزلاق', 'جدران مسابح، أرضيات زجاجية', 'مقاوم للكلور والشمس'],
    link: '/services/pools-glass'
  },
  {
    icon: Settings, title: 'صيانة وإصلاح الزجاج',
    points: ['تغيير زجاج مكسور، إصلاح أبواب', 'تعديل مقاسات شاور، تغيير إكسسوارات', 'إصلاح دربزين، تركيب مفصلات', 'طوارئ 24 ساعة، تغطية: ينبع، العلا، خيبر'],
    link: '/services/maintenance-glass'
  }
];

const FEATURES = [
  "خامات سيكوريت أصلي مقاوم للكسر والصدمات بعُمر افتراضي طويل",
  "فنيون متخصصون مدربون على أحدث طرق التركيب بدقة متناهية",
  "أرخص سعر متر في المدينة المنورة مع ضمان 10 سنوات",
  "تنفيذ فوري وتسليم في نفس اليوم أو خلال 24 ساعة",
  "أحدث المعدات الألمانية والتركية في القص والتفصيل",
  "خدمة عملاء متاحة 24 ساعة طوال أيام الأسبوع"
];

const GALLERY_CATEGORIES = ["الكل", "شاور زجاج", "واجهات زجاج", "دربزين زجاج", "زجاج محلات", "زجاج مكاتب", "زجاج مسابح"];

const GALLERY_IMAGES = [
  { id: 1, src: encodeURI("/assets/talal/glass-securit-19.webp"), category: "شاور زجاج" },
  { id: 2, src: encodeURI("/assets/talal/facades-glass-12.webp"), category: "واجهات زجاج" },
  { id: 3, src: encodeURI("/assets/talal/railing-glass-19.webp"), category: "دربزين زجاج" },
  { id: 4, src: encodeURI("/assets/talal/shops-glass-2.webp"), category: "زجاج محلات" },
  { id: 5, src: encodeURI("/assets/talal/offices-glass-26.webp"), category: "زجاج مكاتب" },
  { id: 6, src: encodeURI("/assets/talal/pools-glass-2.webp"), category: "زجاج مسابح" },
  { id: 7, src: encodeURI("/assets/talal/mirrors-glass-14.webp"), category: "واجهات زجاج" },
];

const COVERAGE = [
  { label: "العزيزية", link: "/areas/al-aziziyah" },
  { label: "سلطانه", link: "/areas/sultanah" },
  { label: "العوالي" }, { label: "قباء" }, { label: "الرانوناء" }, { label: "بني حارثة" }, 
  { label: "طريق الملك عبدالله" }, { label: "الحرم" }, { label: "الدائري" }, 
  { label: "ينبع" }, { label: "العلا" }, { label: "خيبر" }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("الكل");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 1000], ['0%', '40%']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredImages = activeTab === "الكل" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setLightboxIndex(null);
        if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
        }
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxIndex, filteredImages.length]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main className="min-h-screen relative font-tajawal text-[#0a1628]">
      
      {/* 1. HEADER / NAVBAR (Sticky) */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled ? 'bg-white shadow-md py-2 md:py-4' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex-shrink-0 relative z-10 block ml-4">
              <Image 
                src={isScrolled ? "/assets/talal/logo.webp" : "/assets/talal/logo-transparent.webp"} 
                alt="مؤسسة عالم الفن والهندسة للزجاج" 
                width={220} 
                height={70} 
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain drop-shadow-md transition-all duration-300 "
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={`text-base xl:text-lg font-bold hover:text-[#c9a84c] transition-colors ${
                    isScrolled ? 'text-[#0a1628]' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3 mr-4">
              <a 
                href={`tel:${phoneNumber}`} 
                className="bg-[#c9a84c] hover:bg-[#b08e33] text-white px-6 py-3 rounded-full font-bold flex items-center transition-transform hover:scale-105 shadow-lg whitespace-nowrap"
              >
                <Phone className="w-5 h-5 ml-2" />
                <span className="hidden xl:inline">اتصل الآن</span>
              </a>
              <a 
                href={waLink} 
                target="_blank" 
                rel="noopener noreferrer nofollow"
                className="bg-[#25D366] hover:bg-[#1ebd5a] text-white p-3 rounded-full transition-transform hover:scale-110 shadow-lg"
                aria-label="تواصل واتساب"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-[#0a1628]' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t overflow-hidden shadow-xl"
            >
              <div className="px-4 py-6 space-y-4">
                {NAV_LINKS.map(link => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="block text-[#0a1628] font-semibold text-lg py-2 border-b border-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      setTimeout(() => {
                        const targetId = link.href.substring(1);
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          targetElement.scrollIntoView({ behavior: 'smooth' });
                          window.history.pushState(null, '', link.href);
                        }
                      }, 100);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4">
                  <a href={`tel:${phoneNumber}`} className="bg-[#c9a84c] text-white text-center py-3 rounded-xl font-bold flex items-center justify-center">
                    <Phone className="w-5 h-5 ml-2" />
                    {phoneNumber}
                  </a>
                  <a href={waLink} target="_blank" rel="noopener noreferrer nofollow" className="bg-[#25D366] text-white text-center py-3 rounded-xl font-bold flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 ml-2" />
                    تواصل واتساب
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a1628]">
        {/* Background gradient & decorative elements */}
        <motion.div style={{ y: parallaxY }} className="absolute -top-[50%] left-0 w-full h-[200%] bg-gradient-to-br from-[#0a1628] via-[#1e4d8c] to-[#0a1628] opacity-90 z-0"></motion.div>
        <motion.div style={{ y: parallaxY }} className="absolute -top-[50%] right-0 w-1/2 h-[200%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#c9a84c]/20 via-transparent to-transparent z-0"></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            مؤسسة عالم الفن والهندسة لأعمال<br className="hidden md:block"/> <span className="text-[#c9a84c]">زجاج سيكوريت</span> بالمدينة المنورة
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            الاسم الأول والأخير عند البحث عن تركيب زجاج سيكوريت بجودة عالية وأسعار منافسة
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-dark rounded-2xl max-w-4xl mx-auto p-6 md:p-8 mb-12 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 shadow-2xl"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-[#c9a84c] mb-2">
                <AnimatedCounter to={20} suffix=" عام" />
              </span>
              <span className="text-sm md:text-base text-gray-300">من الخبرة</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-[#c9a84c] mb-2">
                <AnimatedCounter to={5000} suffix="+" />
              </span>
              <span className="text-sm md:text-base text-gray-300">عميل تم خدمتهم</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold text-[#c9a84c] mb-2">
                <AnimatedCounter to={10} suffix=" سنوات" />
              </span>
              <span className="text-sm md:text-base text-gray-300">ضمان شامل</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a href={`tel:${phoneNumber}`} className="bg-[#c9a84c] hover:bg-[#b08e33] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_30px_rgba(201,168,76,0.5)]">
              <Phone className="w-6 h-6 ml-2" /> اتصل بنا الآن
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer nofollow" className="bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all shadow-lg hover:shadow-xl">
              <MessageCircle className="w-6 h-6 ml-2" /> تواصل عبر واتساب
            </a>
          </motion.div>
        </div>
      </section>

      {/* 3. TRUST BAR */}
      <div className="bg-[#1e4d8c] text-white py-6 border-b-4 border-[#c9a84c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 text-center">
            {TRUST_ICONS.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center justify-center space-y-2 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-default"
              >
                <item.icon className="w-8 h-8 text-[#c9a84c]" />
                <span className="text-sm md:text-base font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] mb-4">خدماتنا الشاملة في تركيب زجاج سيكوريت</h2>
            <div className="w-24 h-1.5 bg-[#c9a84c] mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">نقدم أحدث الحلول وأفضل جودة لتوريد وتركيب الزجاج في كافة المنشآت</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((srv, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#1e4d8c]/5 rounded-bl-[100px] z-0 transition-all group-hover:bg-[#1e4d8c]/10"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#0a1628] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1e4d8c] transition-colors shadow-md">
                    <srv.icon className="w-8 h-8 text-[#c9a84c]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[#0a1628] group-hover:text-[#1e4d8c] transition-colors">{srv.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {srv.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start text-sm text-gray-600">
                        <Check className="w-4 h-4 text-[#c9a84c] ml-2 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={srv.link} className="inline-flex items-center text-[#1e4d8c] font-bold hover:text-[#c9a84c] transition-colors">
                    اعرف اكثر <ChevronLeft className="w-4 h-4 mr-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY US SECTION */}
      <section id="why-us" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] mb-4">لماذا يختارنا الجميع لتركيب زجاج سيكوريت في المدينة المنورة؟</h2>
            <div className="w-24 h-1.5 bg-[#c9a84c] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-start p-6 bg-[#f8f9fa] rounded-2xl hover:bg-[#0a1628] hover:text-white transition-all group"
              >
                <div className="bg-white group-hover:bg-[#1e4d8c] p-2 rounded-full shadow-sm ml-4 transition-colors">
                  <CheckCircle className="w-6 h-6 text-[#c9a84c] group-hover:text-white" />
                </div>
                <p className="font-semibold text-lg leading-relaxed pt-1 group-hover:text-gray-100">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS SECTION */}
      <section className="py-20 bg-[#0a1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#c9a84c] opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-x-reverse divide-white/10">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[#c9a84c] mb-2"><AnimatedCounter to={5000} suffix="+" /></div>
              <div className="text-lg md:text-xl font-medium">عميل تم خدمتهم</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[#c9a84c] mb-2"><AnimatedCounter to={20} suffix="+" /></div>
              <div className="text-lg md:text-xl font-medium">عام خبرة</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[#c9a84c] mb-2"><AnimatedCounter to={50} suffix="+" /></div>
              <div className="text-lg md:text-xl font-medium">فني ومهندس متخصص</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-[#c9a84c] mb-2"><AnimatedCounter to={10} suffix="" /></div>
              <div className="text-lg md:text-xl font-medium">سنوات ضمان شامل</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GALLERY SECTION */}
      <section id="gallery" className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] mb-4">معرض أعمالنا في تركيب زجاج سيكوريت</h2>
            <div className="w-24 h-1.5 bg-[#c9a84c] mx-auto rounded-full mb-8"></div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {GALLERY_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all ${
                    activeTab === cat 
                      ? 'bg-[#1e4d8c] text-white shadow-md' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all relative aspect-[4/3] group bg-white cursor-zoom-in"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <img
                    src={img.src}
                    alt={img.category}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 select-none">
                    <span className="text-white font-bold text-lg mb-1">{img.category}</span>
                    <span className="text-gray-300 text-sm flex items-center"><Plus className="w-4 h-4 ml-1" /> اضغط للتكبير</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          <div className="text-center mt-12">
             <a href={waLink} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center text-[#c9a84c] font-bold hover:text-[#0a1628] transition-colors border-b-2 border-transparent hover:border-[#0a1628] pb-1">
               اطلب رؤية المزيد من الأعمال عبر الواتساب <ChevronLeft className="w-5 h-5 mr-1" />
             </a>
          </div>
        </div>
      </section>

      {/* 8. ABOUT/TEAM SECTION */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1628] mb-6">فريق مؤسسة عالم الفن والهندسة لتركيب الزجاج السيكوريت</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                نحن نفخر بامتلاكنا أفضل الكوادر الفنية المتخصصة في مجالات توريد وتركيب وصيانة كافة أعمال الزجاج السيكوريت في المدينة المنورة. نعمل باحترافية عالية لضمان تقديم وتنفيذ الأعمال بأفضل جودة ممكنة.
              </p>
              <ul className="space-y-4 mb-8">
                {['خدمة فورية خلال 24 ساعة', 'ضمان شامل على كافة أنواع الزجاج', 'خبرة طويلة وكفاءة عالية', 'تركيب في جميع الأماكن العامة والخاصة'].map((item, i) => (
                  <li key={i} className="flex items-center text-lg font-semibold text-[#1e4d8c]">
                     <span className="bg-[#e8edf3] p-1 rounded-full ml-3"><Check className="w-5 h-5 text-[#c9a84c]" /></span>
                     {item}
                  </li>
                ))}
              </ul>
              <a href={`tel:${phoneNumber}`} className="inline-flex bg-[#0a1628] hover:bg-[#1e4d8c] text-white px-8 py-3 rounded-xl font-bold transition-colors">
                اتصل بنا: {phoneNumber}
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[400px] lg:h-[500px]">
               <div className="absolute inset-0 bg-[#0a1628]/5 rounded-3xl transform rotate-3"></div>
               <Image src={encodeURI("/assets/talal/facades-glass-12.webp")} alt="فريق عالم الفن والهندسة" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover rounded-3xl shadow-xl z-10" referrerPolicy="no-referrer" />
               <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#c9a84c] rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0a1628]">مؤسسة معتمدة</div>
                    <div className="text-sm text-gray-500">جودة وعالمية</div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. COVERAGE AREAS */}
      <section className="py-16 bg-[#e8edf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-[#0a1628] mb-8"
          >
            نخدم جميع أحياء المدينة المنورة والمناطق المجاورة
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {COVERAGE.map((area, i) => {
              const content = (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-white text-[#1e4d8c] border border-blue-100 px-4 py-2 rounded-lg font-semibold shadow-sm flex items-center hover:-translate-y-1 transition-transform"
                >
                  <MapPin className="w-4 h-4 ml-1.5 text-[#c9a84c]" /> {area.label}
                </motion.span>
              );
              
              if (area.link) {
                return (
                  <a key={i} href={area.link} className="block">
                    {content}
                  </a>
                );
              }
              
              return React.cloneElement(content, { key: i });
            })}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="py-24 relative bg-[#1e4d8c] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e4d8c] to-[#0a1628] opacity-90"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c9a84c] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">هل تبحث عن خدمات زجاج موثوقة؟</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">للحصول على استشارة مجانية أو الاستفسار عن خدماتنا، لا تتردد في التواصل معنا بضغطة زر.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${phoneNumber}`} className="bg-white text-[#0a1628] hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-transform hover:scale-105 shadow-xl">
              <Phone className="w-6 h-6 ml-2 text-[#c9a84c]" /> اتصل الآن: {phoneNumber}
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer nofollow" className="bg-[#25D366] text-white hover:bg-[#1ebd5a] px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-transform hover:scale-105 shadow-xl">
              <MessageCircle className="w-6 h-6 ml-2" /> واتساب مباشر
            </a>
          </div>
        </div>
      </section>

      {/* 11. CONTACT INFO BAR */}
      <section id="contact" className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href={mapLink} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center p-6 bg-[#f8f9fa] rounded-2xl hover:shadow-md transition-shadow group">
              <div className="bg-[#1e4d8c]/10 p-4 rounded-xl ml-4 group-hover:bg-[#1e4d8c] transition-colors">
                <MapPin className="w-8 h-8 text-[#1e4d8c] group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0a1628] mb-1">موقعنا</h3>
                <p className="text-gray-600 text-sm">المدينة المنورة - السعودية</p>
              </div>
            </a>
            <a href={`tel:${phoneNumber}`} className="flex items-center p-6 bg-[#f8f9fa] rounded-2xl hover:shadow-md transition-shadow group">
              <div className="bg-[#1e4d8c]/10 p-4 rounded-xl ml-4 group-hover:bg-[#1e4d8c] transition-colors">
                <Phone className="w-8 h-8 text-[#1e4d8c] group-hover:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0a1628] mb-1">رقم الجوال</h3>
                <p className="text-gray-600 text-sm" dir="ltr">{phoneNumber}</p>
              </div>
            </a>
            <div className="flex items-center p-6 bg-[#f8f9fa] rounded-2xl">
              <div className="bg-[#1e4d8c]/10 p-4 rounded-xl ml-4">
                <Clock className="w-8 h-8 text-[#1e4d8c]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0a1628] mb-1">ساعات العمل</h3>
                <p className="text-gray-600 text-sm">24 ساعة طوال الأسبوع</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-[#0a1628] pt-16 pb-8 border-t-4 border-[#c9a84c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Image 
                src="/assets/talal/logo-transparent.webp" 
                alt="مؤسسة عالم الفن والهندسة للزجاج" 
                width={260} 
                height={80} 
                className="h-16 sm:h-20 w-auto object-contain mb-6 drop-shadow-md "
                referrerPolicy="no-referrer"
              />
              <p className="text-gray-400 mb-4 leading-relaxed">
                المقصد الأول في المدينة المنورة لتوريد وتركيب كافة أعمال زجاج السيكوريت للمشاريع التجارية والسكنية بجودة ودقة عالية.
              </p>
              <span className="inline-flex items-center bg-[#c9a84c]/20 text-[#c9a84c] px-3 py-1 rounded-full text-sm font-semibold border border-[#c9a84c]/30">
                <Shield className="w-4 h-4 ml-1" /> مؤسسة مسجلة ومعتمدة
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-[#1e4d8c] pb-2 inline-block">روابط سريعة</h3>
              <ul className="space-y-3 text-gray-400">
                {['الرئيسية', 'تعرف علينا', 'المقالات', 'معرض الأعمال', 'تواصل معنا'].map((link, i) => (
                  <li key={i}><a href="#" className="hover:text-[#c9a84c] transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-[#1e4d8c] pb-2 inline-block">تواصل معنا</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#c9a84c] ml-3 flex-shrink-0 mt-0.5" />
                   المدينة المنورة، المملكة العربية السعودية
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-[#c9a84c] ml-3 flex-shrink-0" />
                  <span dir="ltr">{phoneNumber}</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 text-[#c9a84c] ml-3 flex-shrink-0" />
                   24 ساعة / 7 أيام
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>حقوق النشر محفوظة © 2026 مؤسسة عالم الفن والهندسة لجميع أعمال الزجاج بالمدينة المنورة</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-4">
        {/* Call Button */}
        <a 
          href={`tel:${phoneNumber}`} 
          className="bg-[#c9a84c] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform "
          aria-label="اتصل بنا"
        >
          <Phone className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </a>
        
        {/* WhatsApp Button */}
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer nofollow" 
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform "
          aria-label="تواصل واتساب"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </a>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 left-6 z-50 bg-[#0a1628] text-white p-3 rounded-full shadow-xl hover:bg-[#1e4d8c] transition-colors"
            aria-label="الرجوع للأعلى"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-12 select-none"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
              className="absolute top-6 right-6 text-white hover:text-[#c9a84c] bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[60] cursor-pointer"
              aria-label="إغلاق"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
              }}
              className="absolute left-4 md:left-8 text-white hover:text-[#c9a84c] bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-all z-[60] transform hover:scale-110 cursor-pointer"
              aria-label="الصورة السابقة"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-5xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center pointer-events-none">
              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].category}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl pointer-events-auto cursor-zoom-out"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
              />
              
              {/* Category tag & index counter */}
              <div className="absolute bottom-[-50px] left-0 right-0 text-center text-white/80 font-medium text-lg pointer-events-auto">
                <span className="bg-black/40 px-4 py-1.5 rounded-full select-none">
                  {filteredImages[lightboxIndex].category} ({lightboxIndex + 1} / {filteredImages.length})
                </span>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
              }}
              className="absolute right-4 md:right-8 text-white hover:text-[#c9a84c] bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-all z-[60] transform hover:scale-110 cursor-pointer"
              aria-label="الصورة التالية"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
