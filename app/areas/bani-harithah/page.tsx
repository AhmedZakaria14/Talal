import { Metadata } from 'next';
import Breadcrumb from '../../../components/Breadcrumb';
import { Phone, CheckCircle, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "تركيب زجاج سيكوريت حي بني حارثة | مؤسسة عالم الفن والهندسة - 0548980056",
  description: "المؤسسة الرائدة في تركيب الزجاج السيكوريت بحي بني حارثة بالمدينة. تركيب درابزين، أبواب، شاورات زجاجية بأعلى معايير الأمان والسلامة.",
  alternates: {
    canonical: "https://tarkeb-zoogag.com/areas/bani-harithah",
  }
};

export default function BaniHarithahPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "مؤسسة عالم الفن والهندسة - تركيب زجاج حي بني حارثة",
    "image": "https://tarkeb-zoogag.com/assets/talal/logo.webp",
    "telephone": "+966558935165",
    "url": "https://tarkeb-zoogag.com/areas/bani-harithah",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "المدينة المنورة",
      "neighborhood": "حي بني حارثة",
      "addressCountry": "SA"
    }
  };

  return (
    <main className="min-h-screen py-12 bg-[#f8f9fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ label: 'أحياء المدينة المنورة', path: '/' }, { label: 'حي بني حارثة', path: '/areas/bani-harithah' }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1628] mb-8 leading-tight flex items-center">
            <MapPin className="w-10 h-10 ml-4 text-[#c9a84c] flex-shrink-0" />
            تركيب زجاج سيكوريت في حي بني حارثة بالمدينة المنورة
          </h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-10">
            <p>
              لعملاء حي بني حارثة العريق بالمدينة المنورة، نوفر في مؤسسة عالم الفن والهندسة أحدث الحلول الزجاجية المتكاملة باستخدام أجود أنواع السيكوريت المقاوم للكسر والحرارة. نلبي كافة الطلبات السكنية والمشاريع التجارية التابعة للحي بمهنية واحترافية لا تضاهى، وبأسعار مدروسة تناسب الجميع.
            </p>
            <p>
              نمتلك ورش ومعدات مجهزة بالكامل تمكننا من تغطية طلبات سكان بني حارثة بسرعة قياسية. سواء أكنت ترغب في تجديد ديكور الحمام عبر تركيب كابينة شاور زجاجية شفافة توسع المكان وتمنع تسرب المياه، أو ترغب في تركيب قواطع زجاجية للمجالس وممرات الضيوف لتوفير الخصوصية دون حجب الرؤية أو الإنارة، فتأكد أنك مع الفريق الصح.
            </p>
            <p>
              كما نقوم بتركيب الدربزينات الزجاجية ذات الطابع المودرن مع مقابض وإطارات ألمنيوم أو خشب لضمان الأمان، خصوصا للمنازل التي بها أطفال وكبار السن، حيث يمتاز زجاج السيكوريت الذي نوفره بقدرته الفائقة على تحمل الصدمات، وفي حال كسره، والذی نادرا ما يحدث، فإنه يتفتت إلى أجزاء صغيرة غير حادة حفاظا على السلامة الحيوية.
            </p>
          </div>

          <div className="bg-[#f0f4f8] rounded-2xl p-8 mb-12 border-r-4 border-[#c9a84c]">
            <h2 className="text-2xl font-bold text-[#1e4d8c] mb-6">مزايا شركتنا لسكان بني حارثة</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "سرعة تلبية نداء المعاينة والرفع المساحي داخل حي بني حارثة.",
                "تقديم استشارات ديكور مجانية لكيفية تنسيق الزجاج بمنزلك.",
                "ضمان 10 سنوات على جودة الزجاج وعدم تغير لونه مع الزمن.",
                "خيارات زجاج سيكوريت عاتم ومصنفر لتوفير الخصوصية في غرف النوم والمجالس.",
                "تنفيذ بوابات رئيسية للعمارات السكنية تعكس الانطباع الأول المتميز."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#c9a84c] ml-3 mt-1 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8 text-center text-white pb-12">
            <h3 className="text-2xl font-bold mb-4">نحن في خدمتك على مدار الساعة</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">إذا كنت تخطط لتركيب أي نوع من الزجاج في عقارك بمنطقة بني حارثة، لا تتردد بالاتصال للحصول على تسعيرة فورية ومنافسة.</p>
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
