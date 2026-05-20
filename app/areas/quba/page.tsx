import { Metadata } from 'next';
import Breadcrumb from '../../../components/Breadcrumb';
import { Phone, CheckCircle, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "تركيب زجاج سيكوريت حي قباء | مؤسسة عمر طلال - 0558935165",
  description: "خدمات تفصيل وتركيب زجاج السيكوريت في حي قباء وما حوله بالمدينة المنورة. نقوم بتنفيذ الواجهات والمحلات بأجود أنواع الزجاج. اتصل للمعاينة المجانية.",
  alternates: {
    canonical: "https://tarkeb-zoogag.com/areas/quba",
  }
};

export default function QubaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "مؤسسة عمر طلال - تركيب زجاج حي قباء",
    "image": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229726/logo_ebueow.webp",
    "telephone": "+966558935165",
    "url": "https://tarkeb-zoogag.com/areas/quba",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "المدينة المنورة",
      "neighborhood": "حي قباء",
      "addressCountry": "SA"
    }
  };

  return (
    <main className="min-h-screen py-12 bg-[#f8f9fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ label: 'أحياء المدينة المنورة', path: '/' }, { label: 'حي قباء', path: '/areas/quba' }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1628] mb-8 leading-tight flex items-center">
            <MapPin className="w-10 h-10 ml-4 text-[#c9a84c] flex-shrink-0" />
            تركيب زجاج سيكوريت في حي قباء بالمدينة المنورة
          </h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-10">
            <p>
              نفتخر في مؤسسة عمر طلال بتقديم أسرع وأدق خدمات تركيب الزجاج السيكوريت في منطقة وحي قباء التاريخي بالمدينة المنورة. يعتبر حي قباء من المناطق الحيوية ذات النشاط التجاري الكثيف والسكني المتنوع، ما يجعلنا حريصين على توفير باقة واسعة من خدمات الزجاج لتلبي حاجة السوق هناك بحرفية عالية.
            </p>
            <p>
              نقوم بتركيب واجهات زجاجية للمتاجر والأسواق في حي قباء لجذب الانتباه وتوفير رؤية بانورامية واضحة للبضائع والمعروضات بفضل صفاء ونقاء الزجاج الذي نستخدمه والمستورد من أفضل المصانع. كما ننفذ قواطع المكاتب الإدارية لشركات المنطقة لزيادة المساحة البصرية.
            </p>
            <p>
              أما الجانب السكني في حي قباء، فيمكن الاعتماد علينا لتركيب أرقى كبائن الشاور ودربزين السلالم الزجاجية للمنازل والشقق الحديثة. نضمن لك استخدام إكسسوارات قوية تتحمل الضغط والاستخدام اليومي المستمر بضمان طويل الأجل ودعم ما بعد البيع.
            </p>
          </div>

          <div className="bg-[#f0f4f8] rounded-2xl p-8 mb-12 border-r-4 border-[#c9a84c]">
            <h2 className="text-2xl font-bold text-[#1e4d8c] mb-6">قدراتنا لخدمة سكان وتجار حي قباء</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "سرعة في التوريد والتركيب لا تتأخر عن المواعيد المتفق عليها للمحلات والمعارض.",
                "تركيب زجاج واجهات بسماكات متعددة تناسب واجهات الشوارع المزدحمة بحي قباء.",
                "توفير زجاج عازل للصوت للحد من الضوضاء في شوارع قباء الرئيسية.",
                "معاينة مجانية للمتاجر والمنازل بالحي في نفس يوم الاتصال.",
                "عروض وتخفيضات خاصة لأصحاب المحلات التجارية المتجاورة."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#c9a84c] ml-3 mt-1 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8 text-center text-white pb-12">
            <h3 className="text-2xl font-bold mb-4">في قلب حي قباء، نحن الأقرب والأسرع إليك</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">للاستفسارات ولتحديد موعد مع فني الزجاج في مؤسسة عمر طلال، بادر بالتواصل معنا الآن عبر أرقامنا المباشرة.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:0558935165" className="bg-[#c9a84c] hover:bg-[#b08e33] text-white px-8 py-3 rounded-xl font-bold text-lg flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5 ml-2" /> اتصل الآن: 0558935165
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
