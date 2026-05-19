import { generateServiceMetadata, generateServiceSchema } from '../../../lib/seo-helpers';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOImage from '../../../components/SEOImage';
import { Phone, CheckCircle } from 'lucide-react';

export function generateMetadata() {
  return generateServiceMetadata({
    title: "تركيب شاور زجاج سيكوريت بالمدينة المنورة | أنواع وأسعار 2025 - 0544315961",
    description: "متخصصون في تركيب شاور زجاج سيكوريت بالمدينة المنورة 🚿 فريم ليس | منزلق | ثابت | مفصلي | أسود | 10-12 ملم ✅ تركيب في نفس اليوم | ضمان 10 سنوات | اتصل: 0544315961",
    path: "/services/shower-glass"
  });
}

export default function ShowerGlassPage() {
  const schema = generateServiceSchema({
    name: "تركيب شاور زجاج سيكوريت",
    description: "متخصصون في تركيب شاور زجاج سيكوريت بالمدينة المنورة 🚿 فريم ليس | منزلق | ثابت | مفصلي | أسود | 10-12 ملم.",
    url: "/services/shower-glass"
  });

  return (
    <main className="min-h-screen py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={[{ label: 'خدماتنا', path: '/services' }, { label: 'تركيب شاور زجاج', path: '/services/shower-glass' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6 leading-tight">
          تركيب شاور زجاج سيكوريت بالمدينة المنورة
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نوفر في مؤسسة عمر طلال أفضل خدمات تفصيل وتركيب كبائن وشاورات الزجاج السيكوريت بالمدينة المنورة بجميع أنواعها. نضمن لك جودة عالية، متانة، وتصميمات عصرية تناسب حمامك، وبأسعار تنافسية.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "زجاج سيكوريت مقوى 10 - 12 ملم مقاوم للكسر",
                "إكسسوارات مقاومة للصدأ (ستانلس ستيل 304)",
                "شاور فريم ليس (بدون إطار) لمظهر عصري",
                "أبواب سحاب (منزلقة) أو مفصلية حسب المساحة",
                "ضمان 10 سنوات على الزجاج والتركيب",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#c9a84c] ml-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <SEOImage 
              src="https://tarkeb-zoogag.com/wp-content/uploads/2024/08/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8-%D8%B4%D8%A7%D9%88%D8%B1-%D8%B2%D8%AC%D8%A7%D8%AC-%D8%B3%D9%8A%D9%83%D9%88%D8%B1%D9%8A%D8%AA-%D8%A8%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9.webp" 
              alt="تركيب شاور زجاج سيكوريت فريم ليس بالمدينة المنورة - مؤسسة عمر طلال"
              fill
              className="object-cover"
              priority={true}
            />
          </div>
        </div>

        <div className="mt-16 bg-[#0a1628] rounded-3xl p-10 text-center max-w-4xl mx-auto shadow-xl">
           <h2 className="text-3xl font-bold text-white mb-6">اطلب معاينة وتصميم مجاني الآن</h2>
           <p className="text-gray-300 mb-8 text-lg">اتصل بنا ليصلك فني تفصيل وتركيب شاور الزجاج لأخذ المقاسات وتحديد السعر المناسب.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="tel:0544315961" className="inline-flex items-center justify-center bg-[#c9a84c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#b08e33] transition-colors shadow-lg">
               <Phone className="w-6 h-6 ml-2" /> اتصل الآن: 0544315961
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
