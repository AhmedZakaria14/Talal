import { generateServiceMetadata, generateServiceSchema } from '../../../lib/seo-helpers';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOImage from '../../../components/SEOImage';
import { Phone, CheckCircle, Waves } from 'lucide-react';

export function generateMetadata() {
  return generateServiceMetadata({
    title: "تركيب زجاج مسابح وأرضيات بالمدينة المنورة | حماية وأمان 2025",
    description: "تركيب زجاج مسابح وأرضيات زجاجية بالمدينة المنورة 🏊‍♂️ سماكات عالية، مقاوم للضغط والعوامل الجوية لحماية الأطفال بأناقة ✅ مؤسسة عالم الفن والهندسة | 0548980056",
    path: "/services/pools-glass"
  });
}

export default function PoolsGlassPage() {
  const schema = generateServiceSchema({
    name: "تركيب زجاج مسابح",
    description: "تركيب حواجز زجاجية للمسابح وأرضيات زجاجية مأمونة ومقاومة للضغط في المدينة المنورة.",
    url: "/services/pools-glass"
  });

  return (
    <main className="min-h-screen py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={[{ label: 'خدماتنا', path: '/services' }, { label: 'تركيب زجاج المسابح', path: '/services/pools-glass' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6 leading-tight flex items-center">
          <Waves className="w-12 h-12 ml-4 text-[#c9a84c]" />
          تركيب زجاج مسابح وأرضيات بالمدينة المنورة
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <SEOImage 
              src="https://tarkeb-zoogag.com/wp-content/uploads/2024/09/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8-%D8%B2%D8%AC%D8%A7%D8%AC-%D9%85%D8%B3%D8%A7%D8%A8%D8%AD-%D8%A8%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9-2.webp" 
              alt="تركيب حواجز مسابح زجاجية وأرضيات بالمدينة المنورة - مؤسسة عالم الفن والهندسة"
              fill
              className="object-cover"
              priority={true}
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              تأمين مسابح الفلل والقصور والمجمعات أمر لا مساومة فيه. نوفر أفضل أنظمة حواجز المسابح الزجاجية التي تمنحك الأمان الكامل للأطفال والحيوانات الأليفة دون عرقلة الرؤية الجمالية للمسبح والحديقة.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "حواجز زجاج سيكوريت عالي السماكة (حتى 16 ملم) لمقاومة الضغط",
                "إكسسوارات وأعمدة من الستانلس ستيل المقاوم لصدأ المياه والكلور",
                "أبواب زجاجية للمسابح مزودة بأقبية غلق ذاتي لسلامة الأطفال",
                "تركيب أرضيات زجاجية (سكاي لايت أرضي) للقصور والمشاريع الكبرى",
                "تصاميم تتناغم مع اللاند سكيب والمناظر الخارجية للمنزل",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#c9a84c] ml-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-[#f8f9fa] border border-[#e8edf3] rounded-3xl p-10 text-center max-w-4xl mx-auto">
           <h2 className="text-3xl font-bold text-[#0a1628] mb-4">آمان أطفالك هي أولوياتنا</h2>
           <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
             لا تترك المسبح بدون حماية. تواصل معنا اليوم لتركيب أحدث الحواجز الزجاجية المتوافقة مع كود البناء واشتراطات السلامة.
           </p>
           <div className="flex justify-center">
             <a href="tel:0548980056" className="inline-flex items-center justify-center bg-[#1e4d8c] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#153a6c] transition-colors shadow-lg">
               <Phone className="w-6 h-6 ml-2 text-[#c9a84c]" /> اتصل للحصول على عرض سعر مجاني: 0548980056
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
