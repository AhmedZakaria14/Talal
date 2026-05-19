import { generateServiceMetadata, generateServiceSchema } from '../../../lib/seo-helpers';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOImage from '../../../components/SEOImage';
import { Phone, CheckCircle, Briefcase } from 'lucide-react';

export function generateMetadata() {
  return generateServiceMetadata({
    title: "تركيب زجاج وقواطع مكاتب بالمدينة المنورة | زجاج ذكي وبارتشن 2025",
    description: "تركيب قواطع زجاج مكاتب (بارتشن) وإدارة مساحات العمل بالمدينة المنورة 💼 زجاج سمارت (ذكي) | زجاج مصنفر | عازل للصوت ✅ تصاميم مودرن. اتصل الآن: 0544315961",
    path: "/services/offices-glass"
  });
}

export default function OfficesGlassPage() {
  const schema = generateServiceSchema({
    name: "تركيب قواطع زجاج مكاتب",
    description: "تركيب قواطع زجاج مكاتب وبارتشن زجاجي يعطي خصوصية وعزل صوتي لمساحات العمل في المدينة المنورة.",
    url: "/services/offices-glass"
  });

  return (
    <main className="min-h-screen py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={[{ label: 'خدماتنا', path: '/services' }, { label: 'تركيب زجاج قواطع مكاتب', path: '/services/offices-glass' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6 leading-tight flex items-center">
          <Briefcase className="w-12 h-12 ml-4 text-[#c9a84c]" />
          تركيب قواطع وزجاج مكاتب بالمدينة المنورة
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <SEOImage 
              src="https://tarkeb-zoogag.com/wp-content/uploads/2024/09/%D8%AF%D9%8A%D9%83%D9%88%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D8%B2%D8%AC%D8%A7%D8%AC-%D9%84%D9%84%D9%85%D9%83%D8%A7%D8%AA%D8%A8-%D8%A8%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9.webp" 
              alt="قواطع زجاج مكاتب وزجاج مصنفر بالمدينة المنورة - مؤسسة عمر طلال"
              fill
              className="object-cover"
              priority={true}
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              تساعدك القواطع الزجاجية على استغلال مساحة العمل بكفاءة عالية وتوزيع الإنارة الطبيعية على كافة الأقسام مما يعزز إنتاجية الموظفين ويبعث على الراحة والأناقة في الشركة أو المؤسسة.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "زجاج سمارت (ذكي) يتحول من شفاف إلى معتم بضغطة زر",
                "زجاج مصنفر بالرمل لتوفير خصوصية للمدراء وقاعات الاجتماعات",
                "زجاج سيكوريت عازل للصوت للحفاظ على سرية العمل",
                "إمكانية طباعة الهوية البصرية (اللوجو) على الزجاج بشكل احترافي",
                "قواطع وفواصل قابلة للازالة والتركيب بسهولة عند الحاجة",
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
           <h2 className="text-3xl font-bold text-[#0a1628] mb-4">هل ترغب في تحديث بيئة عملك؟</h2>
           <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
             نقدم لك أفضل التصاميم العصرية لمكتبك مع ضمان جودة التنفيذ وسرعة العمل حتى لا يتعطل نشاطك التجاري.
           </p>
           <div className="flex justify-center">
             <a href="tel:0544315961" className="inline-flex items-center justify-center bg-[#1e4d8c] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#153a6c] transition-colors shadow-lg">
               <Phone className="w-6 h-6 ml-2 text-[#c9a84c]" /> تواصل لرفع مقاسات مكتبك مجاناً: 0544315961
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
