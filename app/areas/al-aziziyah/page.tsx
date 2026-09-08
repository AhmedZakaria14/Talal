import { Metadata } from 'next';
import Breadcrumb from '../../../components/Breadcrumb';
import { Phone, CheckCircle, MessageCircle, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: "تركيب زجاج سيكوريت حي العزيزية | مؤسسة عالم الفن والهندسة - 0548980056",
  description: "أفضل شركة تركيب زجاج سيكوريت في حي العزيزية بالمدينة المنورة. تفصيل وتركيب شاورات، واجهات تجارية، ابواب، مكاتب بأفضل الأسعار وأعلى جودة. تواصل معنا 0548980056.",
  alternates: {
    canonical: "https://tarkeb-zoogag.com/areas/al-aziziyah",
  }
};

export default function AlAziziyahPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "مؤسسة عالم الفن والهندسة - تركيب زجاج حي العزيزية",
    "image": "https://tarkeb-zoogag.com/assets/talal/logo.webp",
    "telephone": "+966558935165",
    "url": "https://tarkeb-zoogag.com/areas/al-aziziyah",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "المدينة المنورة",
      "neighborhood": "حي العزيزية",
      "addressCountry": "SA"
    }
  };

  return (
    <main className="min-h-screen py-12 bg-[#f8f9fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ label: 'أحياء المدينة المنورة', path: '/' }, { label: 'حي العزيزية', path: '/areas/al-aziziyah' }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1628] mb-8 leading-tight flex items-center">
            <MapPin className="w-10 h-10 ml-4 text-[#c9a84c] flex-shrink-0" />
            تركيب زجاج سيكوريت في حي العزيزية بالمدينة المنورة
          </h1>
          
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed mb-10">
            <p>
              تعتبر مؤسسة عالم الفن والهندسة الخيار الأول لسكان ومستثمري حي العزيزية بالمدينة المنورة عندما يتعلق الأمر بجودة وأمان أعمال الزجاج السيكوريت. بفضل موقعنا الجغرافي وقربنا من الحي، نوفر استجابة سريعة فورية لتلقي الطلبات وإجراء المعاينة المجانية في نفس اليوم.
            </p>
            <p>
              نحن نغطي كافة شوارع ومخططات حي العزيزية، سواء كنت في حاجة إلى تركيب واجهات زجاجية لمحلك التجاري المتواجد على الشارع العام، أو ترغب في تركيب شاور زجاجي فخم لفيلتك الخاصة داخل الحي، فإن فريقنا من الفنيين المتخصصين على أتم الاستعداد.
            </p>
            <p>
              نعتمد في جميع أعمالنا في حي العزيزية على أحدث تقنيات القياس بالليزر للوصول إلى دقة متناهية، كما نستخدم سماكات متعددة تناسب متطلبات العميل من ١٠ ملم إلى ١٢ ملم وما فوق، مع توفير أفخر أنواع الإكسسوارات الاستانلس ستيل التركية والألمانية المقاومة للصدأ وعوامل الجو.
            </p>
          </div>

          <div className="bg-[#f0f4f8] rounded-2xl p-8 mb-12 border-r-4 border-[#c9a84c]">
            <h2 className="text-2xl font-bold text-[#1e4d8c] mb-6">مميزات خدمتنا في حي العزيزية تحديدا</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "سرعة الوصول للموقع في حي العزيزية خلال وقت قياسي.",
                "معاينة وأخذ مقاسات مجانية لسكان العزيزية.",
                "أسعار خاصة ومنافسة تناسب المشاريع السكنية والتجارية بالحي.",
                "فريق صيانة طوارئ مخصص قريب من الحي يعمل على مدار الساعة.",
                "خبرة في معرفة متطلبات واشتراطات البناء والتصاميم الدارجة بالمنطقة."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#c9a84c] ml-3 mt-1 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0a1628] rounded-2xl p-8 text-center text-white pb-12">
            <h3 className="text-2xl font-bold mb-4">هل أنت من سكان حي العزيزية وتبحث عن فني زجاج؟</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">تواصل معنا الآن عبر الاتصال المباشر أو الواتساب، وسيقوم فريقنا بخدمتك فورا وبأعلى معايير الجودة.</p>
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
