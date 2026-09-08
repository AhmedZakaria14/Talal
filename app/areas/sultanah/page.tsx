import { Metadata } from 'next';
import Breadcrumb from '../../../components/Breadcrumb';
import { Phone, CheckCircle, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "تركيب زجاج سيكوريت حي سلطانة | مؤسسة عالم الفن والهندسة - 0548980056",
  description: "خدمات تفصيل زجاج سيكوريت وواجهات المحلات التجارية والمولات في شارع وحي سلطانة. تصميم عصري يعزز من مظهر متجرك. اتصل بنا لخدمة فورية.",
  alternates: {
    canonical: "https://tarkeb-zoogag.com/areas/sultanah",
  }
};

export default function SultanahPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "مؤسسة عالم الفن والهندسة - تركيب زجاج حي سلطانة",
    "image": "https://tarkeb-zoogag.com/assets/talal/logo-transparent.webp",
    "telephone": "+966558935165",
    "url": "https://tarkeb-zoogag.com/areas/sultanah",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "المدينة المنورة",
      "neighborhood": "حي سلطانة",
      "addressCountry": "SA"
    }
  };

  return (
    <main className="min-h-screen py-12 bg-[#f8f9fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ label: 'أحياء المدينة المنورة', path: '/' }, { label: 'حي سلطانة', path: '/areas/sultanah' }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1628] mb-8 leading-tight flex items-center">
            <MapPin className="w-10 h-10 ml-4 text-[#c9a84c] flex-shrink-0" />
            تركيب زجاج سيكوريت في حي سلطانة بالمدينة المنورة
          </h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-10">
            <p>
              يعد حى وممشى سلطانة بالمدينة المنورة العصب التجاري والقلب النابض للمدينة، حيث يضم أفخم الماركات العالمية والمطاعم والكافيهات. ومن هذا المنطلق السريع، نحرص في مؤسسة عالم الفن والهندسة على تزويد رواد الأعمال وأصحاب المتاجر في سلطانة بأرقى وأحدث الواجهات الزجاجية التي تلفت الانتباه وتبرز هوية المتجر بوضوح تام.
            </p>
            <p>
              نقوم بتفصيل وتركيب زجاج السيكوريت للمحلات التجارية باستخدام نظام (السبايدر) والزجاج المعلق خالي الإطارات (Frameless)، والذي يعطي واجهة عرض زجاجية كاملة دون أي عوائق بصرية، مما يزيد من جاذبية المنتجات المعروضة أمام المتسوقين في شارع سلطانة. إلى جانب تركيب الأبواب الأوتوماتيكية ذات المستشعرات الدقيقة لتحمل حركة المرور الكثيفة للعملاء.
            </p>
            <p>
              وبالنسبة للقطاع السكني في المنطقة المحيطة، فنحن نقدم حلول العزل الحراري عبر تركيب زجاج دبل جلاس المزدوج للنوافذ، وتصميم غرف زجاجية خارجية (Sunrooms) للباحات، وتفصيل قواطع داخلية للشقق والفلل تعكس الهدوء وتمنع وصول الضوضاء من الشريان التجاري المزدحم للحي.
            </p>
          </div>

          <div className="bg-[#f0f4f8] rounded-2xl p-8 mb-12 border-r-4 border-[#c9a84c]">
            <h2 className="text-2xl font-bold text-[#1e4d8c] mb-6">خدماتنا المخصصة لتجار وأهالي شارع وحي سلطانة</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "تنفيذ واجهات استركشر وكرتن وول للمجمعات التجارية بالحي.",
                "تركيب أبواب زجاج أوتوماتيكية تتحمل الضغط العالي في المطاعم والمحلات.",
                "نظام صيانة واستجابة فوري لأي أعطال في الأبواب أو كسر مفاجئ للزجاج.",
                "شفافية عالية للزجاج تلائم متطلبات عرض الماركات والملابس.",
                "تركيب زجاج عاكس للمكاتب الإدارية والعيادات الواقعة في المباني المجاورة."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#c9a84c] ml-3 mt-1 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8 text-center text-white pb-12">
            <h3 className="text-2xl font-bold mb-4">هل تفتتح متجرك الجديد في سطانة؟</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">دعنا نهتم بواجهتك الزجاجية لتكون عنواناً للأناقة والجذب، اتصل بنا وستجدنا في خدمتك في أسرع وقت.</p>
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
