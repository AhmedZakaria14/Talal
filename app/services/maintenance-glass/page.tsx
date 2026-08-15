import { generateServiceMetadata, generateServiceSchema } from '../../../lib/seo-helpers';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOImage from '../../../components/SEOImage';
import { Phone, CheckCircle, Wrench } from 'lucide-react';

export function generateMetadata() {
  return generateServiceMetadata({
    title: "صيانة وإصلاح زجاج سيكوريت بالمدينة المنورة | فريق طوارئ 24/7",
    description: "خدمات صيانة وإصلاح وتغيير زجاج السيكوريت بالمدينة المنورة 🛠️ تصليح مكائن الأبواب، معالجة الخدوش، تغيير المفصلات. خدمة طوارئ سريعة للمحلات والمنازل ✅ 0548980056",
    path: "/services/maintenance-glass"
  });
}

export default function MaintenanceGlassPage() {
  const schema = generateServiceSchema({
    name: "صيانة وإصلاح زجاج سيكوريت",
    description: "صيانة وإصلاح أبواب وواجهات وشاورات زجاج السيكوريت بالمدينة المنورة. تغيير مكائن وتصليح أعطال.",
    url: "/services/maintenance-glass"
  });

  return (
    <main className="min-h-screen py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={[{ label: 'خدماتنا', path: '/services' }, { label: 'صيانة زجاج سيكوريت', path: '/services/maintenance-glass' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6 leading-tight flex items-center">
          <Wrench className="w-12 h-12 ml-4 text-[#c9a84c]" />
          صيانة وإصلاح زجاج سيكوريت بالمدينة المنورة
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              متجرك أو منزلك تعرض لمشكلة في الزجاج أو تعطلت مكينة الباب؟ نحن هنا لخدمتك! نمتلك أفضل فنيين صيانة الزجاج السيكوريت في المدينة المنورة للتعامل الفوري مع أي كسور أو أعطال في الإكسسوارات وصيانتها أو تبديلها بقطع غيار أصلية.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "تبديل وتصليح مكائن الأبواب الأوتوماتيكية والمفصلية",
                "تغيير زجاج واجهات المحلات المكسور بأقصر مدة زمنية",
                "صيانة مشاكل تسريب المياه في كبائن শاور الحمامات",
                "إصلاح المفصلات، الأقفال، والمقابض الصدئة",
                "خدمة طوارئ سريعة لمعالجة الزجاج المحطم وإغلاق المكان وحمايته",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#c9a84c] ml-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <SEOImage 
              src="https://tarkeb-zoogag.com/wp-content/uploads/2024/09/%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%B2%D8%AC%D8%A7%D8%AC-%D8%A8%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9-2.webp" 
              alt="فني صيانة زجاج سيكوريت وإصلاح مكائن الأبواب بالمدينة المنورة - مؤسسة عالم الفن والهندسة"
              fill
              className="object-cover"
              priority={true}
            />
          </div>
        </div>

        <div className="mt-16 bg-[#0a1628] rounded-3xl p-10 text-center max-w-4xl mx-auto shadow-xl">
           <h2 className="text-3xl font-bold text-white mb-6">لديك عطل طارئ؟</h2>
           <p className="text-gray-300 mb-8 text-lg">فريقنا جاهز للانطلاق إليك فوراً لحل المشكلة بسرعة واحترافية.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="tel:0548980056" className="inline-flex items-center justify-center bg-[#c9a84c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#b08e33] transition-colors shadow-[0_0_15px_rgba(201,168,76,0.3)]">
               <Phone className="w-6 h-6 ml-2" /> اتصل بفني الصيانة الآن: 0548980056
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
