import { Metadata } from 'next';
import Breadcrumb from '../../../components/Breadcrumb';
import { Phone, CheckCircle, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "تركيب زجاج سيكوريت حي الرانوناء | مؤسسة عمر طلال - 0544315961",
  description: "المتخصصون في أعمال زجاج السيكوريت بحي الرانوناء بالمدينة المنورة. تصميم كبائن شاور، واجهات الفلل، والسلالم الزجاجية بمقاييس عالمية.",
  alternates: {
    canonical: "https://tarkeb-zoogag.com/areas/al-ranounaa",
  }
};

export default function AlRanounaaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "مؤسسة عمر طلال - تركيب زجاج حي الرانوناء",
    "image": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229726/logo_ebueow.webp",
    "telephone": "+966544315961",
    "url": "https://tarkeb-zoogag.com/areas/al-ranounaa",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "المدينة المنورة",
      "neighborhood": "حي الرانوناء",
      "addressCountry": "SA"
    }
  };

  return (
    <main className="min-h-screen py-12 bg-[#f8f9fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ label: 'أحياء المدينة المنورة', path: '/' }, { label: 'حي الرانوناء', path: '/areas/al-ranounaa' }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1628] mb-8 leading-tight flex items-center">
            <MapPin className="w-10 h-10 ml-4 text-[#c9a84c] flex-shrink-0" />
            تركيب زجاج سيكوريت في حي الرانوناء بالمدينة المنورة
          </h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-10">
            <p>
              إذا كنت من سكان حي الرانوناء بالمدينة المنورة وتبحث عن خبراء لتفصيل وتركيب زجاج السيكوريت، فإن مؤسسة عمر طلال هي وجهتك المثالية المضمونة. يعد الرانوناء من الأحياء التي تشهد تطوراً عمرانياً وسكنياً متسارعاً وتكثر فيه الفلل الحديثة والعمائر السكنية الجديدة التي تحتاج لكفاءات عالية في التنفيذ.
            </p>
            <p>
              نعلم تماماً مدى حرص أصحاب العقارات في حي الرانوناء على التفاصيل، لذلك نوفر أحدث تصاميم شاورات الحمام الزجاجية بجميع أشكالها (الزاوي، النص دائري، المواجه) لتستغل المساحة بشكل مثالي، بالإضافة إلى درج الدرابزين الخارجي أو الداخلي الذي يجمع بين لمسة الحداثة وبين الحماية المتأصلة في جودة زجاج السيكوريت المعالج كيميائياً وحرارياً المقاوم للظروف المناخية.
            </p>
            <p>
              ندرك أيضاً أن الجودة تتجلى في دقة التركيب والتشطيبات النهائية. كل فنيينا مدربين على إخفاء فواصل التركيب بشكل احترافي مع استخدام أجود أنواع السيليكون المقاوم للتعفن والعوامل الجوية ليمنح المظهر الانسيابي لزجاج منزلك لسنوات دون الحاجة للتغيير أو التعديل.
            </p>
          </div>

          <div className="bg-[#f0f4f8] rounded-2xl p-8 mb-12 border-r-4 border-[#c9a84c]">
            <h2 className="text-2xl font-bold text-[#1e4d8c] mb-6">لماذا تختار مؤسسة عمر طلال لحي الرانوناء؟</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "دعم المشاريع الإنشائية والمعمارية الجديدة في الحي.",
                "تقديم تصاميم مخصصة لتلائم مساحات الفلل والعمائر الحديثة بالرانوناء.",
                "توفير زجاج مضاد للكسر ومختبر لضمان سلامة العائلة والأطفال.",
                "زيارة موقع مجانية للفيلا أو العمارة لرفع القياس وعرض الكتالوجات.",
                "مرونة عالية في مواعيد عملنا تناسب كافة شرائح العملاء بالحي."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#c9a84c] ml-3 mt-1 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8 text-center text-white pb-12">
            <h3 className="text-2xl font-bold mb-4">هل تجهز بيتك الجديد في الرانوناء؟</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">ارتقِ بتشطيبات منزلك وتواصل معنا لتركيب زجاج السيكوريت الداخلي أو الخارجي وسنضمن لك أفضل المواصفات بأقل سعر.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:0544315961" className="bg-[#c9a84c] hover:bg-[#b08e33] text-white px-8 py-3 rounded-xl font-bold text-lg flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5 ml-2" /> اتصل الآن: 0544315961
              </a>
              <a href="https://wa.me/966544315961" target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-3 rounded-xl font-bold text-lg flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5 ml-2" /> تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
