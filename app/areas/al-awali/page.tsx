import { Metadata } from 'next';
import Breadcrumb from '../../../components/Breadcrumb';
import { Phone, CheckCircle, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "تركيب زجاج سيكوريت حي العوالي | مؤسسة عالم الفن والهندسة - 0548980056",
  description: "خبراء تركيب الزجاج السيكوريت في حي العوالي بالمدينة المنورة. نصمم وننفذ أرقى كبائن الشاور، الدربزينات الزجاجية، والمكاتب التي تناسب فخامة الحي.",
  alternates: {
    canonical: "https://tarkeb-zoogag.com/areas/al-awali",
  }
};

export default function AlAwaliPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "مؤسسة عالم الفن والهندسة - تركيب زجاج حي العوالي",
    "image": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229726/logo_ebueow.webp",
    "telephone": "+966558935165",
    "url": "https://tarkeb-zoogag.com/areas/al-awali",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "المدينة المنورة",
      "neighborhood": "حي العوالي",
      "addressCountry": "SA"
    }
  };

  return (
    <main className="min-h-screen py-12 bg-[#f8f9fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ label: 'أحياء المدينة المنورة', path: '/' }, { label: 'حي العوالي', path: '/areas/al-awali' }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1628] mb-8 leading-tight flex items-center">
            <MapPin className="w-10 h-10 ml-4 text-[#c9a84c] flex-shrink-0" />
            تركيب زجاج سيكوريت في حي العوالي بالمدينة المنورة
          </h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-10">
            <p>
              أهلاً بكم في مؤسسة عالم الفن والهندسة، الشريك الموثوق لتنفيذ كافة أعمال زجاج السيكوريت في حي العوالي الراقي بالمدينة المنورة. نعي تماماً مستوى الرقي التي تتميز به عقارات ومباني العوالي، ولذلك نضع بصمتنا الخاصة في كل مشروع نتعامل معه ليتناسق مع هذا الطابع الفخم.
            </p>
            <p>
              يعد حي العوالي من الأحياء التي تكثر فيها الفلل والقصور السكنية والمرافق التجارية المتميزة. من هذا المنطلق، نقدم خدمات تركيب شاورات الاستحمام بتصاميم (الفريم ليس) الحديثة، وتفصيل درابزينات السلالم والمسابح من الزجاج السيكوريت المزدوج ليمنح الأمان ويحافظ على المساحات المفتوحة والإنارة الطبيعية.
            </p>
            <p>
              نمتلك في عالم الفن والهندسة فريقاً مختصاً يجيد التعامل مع أرقى الديكورات، مع التزام تام بمواعيد التسليم والنظافة بعد إتمام العمل. الزجاج المستخدم هو سيكوريت مضاد للصدمات معتمد ومطابق لأعلى المواصفات القياسية السعودية، لضمان استدامته لسنوات طويلة دون تأثر.
            </p>
          </div>

          <div className="bg-[#f0f4f8] rounded-2xl p-8 mb-12 border-r-4 border-[#c9a84c]">
            <h2 className="text-2xl font-bold text-[#1e4d8c] mb-6">ما يميز خدماتنا في حي العوالي</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "تنفيذ أعمال تتناسب مع التصاميم المعمارية الفاخرة للحي.",
                "استخدام إكسسوارات ذهبية وفضية وألوان مطفية تناسب الديكورات الحديثة.",
                "ضمان النظافة وحماية الأرضيات والأثاث أثناء التركيب في الفلل المأهولة.",
                "سرعة في المعاينة دقيقة للمشاريع في حي العوالي لتقديم عروض أسعار تفصيلية.",
                "القدرة على تنفيذ الواجهات الكبيرة والمرايا المعمارية للقصور."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#c9a84c] ml-3 mt-1 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8 text-center text-white pb-12">
            <h3 className="text-2xl font-bold mb-4">احصل على تصميم حصري وعرض سعر الآن</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">لعملائنا في العوالي معاملة خاصة وتصميمات حصرية تلبي كل توقعاتكم. اتصل بنا الآن لمعرفة المزيد.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:0548980056" className="bg-[#c9a84c] hover:bg-[#b08e33] text-white px-8 py-3 rounded-xl font-bold text-lg flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5 ml-2" /> اتصل الآن: 0548980056
              </a>
              <a href="https://wa.me/966558935165" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-3 rounded-xl font-bold text-lg flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5 ml-2" /> تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
