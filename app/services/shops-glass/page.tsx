import { generateServiceMetadata, generateServiceSchema } from '../../../lib/seo-helpers';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOImage from '../../../components/SEOImage';
import { Phone, CheckCircle, Store } from 'lucide-react';

export function generateMetadata() {
  return generateServiceMetadata({
    title: "تركيب زجاج محلات تجارية بالمدينة المنورة | تفصيل واجهات محلات 2025",
    description: "تركيب زجاج المعارض والمحلات التجارية بالمدينة المنورة 🏪 تفصيل زجاج عازل ومقاوم للكسر للمقاهي والمطاعم والصيدليات ✅ أفضل الأسعار | 0544315961",
    path: "/services/shops-glass"
  });
}

export default function ShopsGlassPage() {
  const schema = generateServiceSchema({
    name: "تركيب زجاج محلات تجارية",
    description: "تفصيل وتركيب زجاج للمحلات التجارية والمقاهي بالمدينة المنورة يبرز المنتجات بأفضل شكل ويحمي الممتلكات.",
    url: "/services/shops-glass"
  });

  return (
    <main className="min-h-screen py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={[{ label: 'خدماتنا', path: '/services' }, { label: 'تركيب زجاج المحلات', path: '/services/shops-glass' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6 leading-tight flex items-center">
          <Store className="w-12 h-12 ml-4 text-[#c9a84c]" />
          تركيب زجاج محلات تجارية بالمدينة المنورة
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              واجهة محلك هي الانطباع الأول لعملائك! نحن نقدم خدمات متكاملة لتفصيل وتركيب زجاج المحلات والمعارض والمولات بأعلى معايير الجودة والشفافية. نضمن لك إبراز معروضاتك بأفضل صورة وحمايتها في آنٍ واحد.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "تفصيل واجهات للمعارض الكبيرة والمقاهي والمطاعم",
                "زجاج مضاد للكسر والسرقة لتأمين البضائع القيمة (كالمجوهرات)",
                "زجاج استركشر وفريم ليس للواجهات العريضة",
                "تركيب أرفف وفترينات زجاجية داخلية مصممة خصيصا",
                "صيانة دورية وتغيير الزجاج المكسور بأسرع وقت",
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
              src="https://tarkeb-zoogag.com/wp-content/uploads/2024/09/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8-%D8%B2%D8%AC%D8%A7%D8%AC-%D9%85%D8%AD%D9%84%D8%A7%D8%AA-%D8%A8%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9.webp" 
              alt="تركيب واجهات زجاج محلات وصيدليات ومقاهي بالمدينة المنورة - مؤسسة عمر طلال"
              fill
              className="object-cover"
              priority={true}
            />
          </div>
        </div>

        <div className="mt-16 bg-[#0a1628] rounded-3xl p-10 text-center max-w-4xl mx-auto shadow-xl">
           <h2 className="text-3xl font-bold text-white mb-6">ارفع من قيمة ومبيعات محلك التجاري</h2>
           <p className="text-gray-300 mb-8 text-lg">اتصل الآن لنقوم بمعاينة المحل وتقديم الحل الأمثل والأنسب لواجهتك.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="tel:0544315961" className="inline-flex items-center justify-center bg-[#c9a84c] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#b08e33] transition-colors shadow-[0_0_15px_rgba(201,168,76,0.3)]">
               <Phone className="w-6 h-6 ml-2" /> اتصل الآن: 0544315961
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
