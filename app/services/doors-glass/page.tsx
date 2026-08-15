import { generateServiceMetadata, generateServiceSchema } from '../../../lib/seo-helpers';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOImage from '../../../components/SEOImage';
import { Phone, CheckCircle, DoorOpen } from 'lucide-react';

export function generateMetadata() {
  return generateServiceMetadata({
    title: "تركيب أبواب زجاج سيكوريت بالمدينة المنورة | أوتوماتيكية ومنزلقة 2025",
    description: "تركيب أبواب زجاج سيكوريت أوتوماتيكية ومنزلقة بالمدينة المنورة 🚪 موتورات ياباني وإيطالي | صيانة 24 ساعة | إكسسوارات ألماني وتركي أصلي ✅ اتصل: 0548980056",
    path: "/services/doors-glass"
  });
}

export default function DoorsGlassPage() {
  const schema = generateServiceSchema({
    name: "تركيب أبواب زجاج سيكوريت",
    description: "تركيب أبواب زجاج سيكوريت أوتوماتيكية ومنزلقة للمحلات والمكاتب بالمدينة المنورة مع ضمان وصيانة شاملة.",
    url: "/services/doors-glass"
  });

  return (
    <main className="min-h-screen py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={[{ label: 'خدماتنا', path: '/services' }, { label: 'تركيب أبواب زجاج سيكوريت', path: '/services/doors-glass' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6 leading-tight flex items-center">
          <DoorOpen className="w-12 h-12 ml-4 text-[#c9a84c]" />
          تركيب أبواب زجاج سيكوريت بالمدينة المنورة
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نوفر أحدث تصاميم ومكائن الأبواب الزجاجية التي تضيف لمسة من الفخامة والحداثة لمدخل متجرك، صيدليتك، أو شركتك. نستخدم أجود أنواع الزجاج وأقوى المحركات لضمان عمر افتراضي أطول.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "أبواب زجاج أوتوماتيكية (بمستشعر حركة) للمولات والفنادق",
                "أبواب سحاب منزلقة لتوفير المساحة وإعطاء مظهر عصري",
                "أبواب زجاجية مفصلية للمكاتب والغرف والمحلات",
                "مكائن وأجهزة اغلاق ألمانية ويابانية (Dorma, Geze)",
                "تصليح وصيانة كافة أنواع أبواب السيكوريت 24 ساعة",
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
              src="https://tarkeb-zoogag.com/wp-content/uploads/2024/08/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8-%D8%A7%D8%A8%D9%88%D8%A7%D8%A8-%D8%B2%D8%AC%D8%A7%D8%AC-%D8%A7%D9%88%D8%AA%D9%88%D9%85%D8%A7%D8%AA%D9%8A%D9%83%D9%8A%D8%A9-%D8%A8%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9.webp" 
              alt="تركيب أبواب زجاج أوتوماتيكية وسيكوريت بالمدينة المنورة - مؤسسة عالم الفن والهندسة"
              fill
              className="object-cover"
              priority={true}
            />
          </div>
        </div>

        <div className="mt-16 bg-[#0a1628] rounded-3xl p-10 text-center max-w-4xl mx-auto shadow-xl">
           <h2 className="text-3xl font-bold text-white mb-6">استمتع بتجربة دخول مميزة لمكانك</h2>
           <p className="text-gray-300 mb-8 text-lg">لا تتردد في طلب استشارتنا المجانية لتحديد النوع والحجم الأنسب من الأبواب لمساحتك التجارية أو السكنية.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="tel:0548980056" className="inline-flex items-center justify-center bg-[#c9a84c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#b08e33] transition-colors shadow-[0_0_15px_rgba(201,168,76,0.3)]">
               <Phone className="w-6 h-6 ml-2" /> اطلب الخدمة الآن: 0548980056
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
