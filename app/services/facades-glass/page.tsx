import { generateServiceMetadata, generateServiceSchema } from '../../../lib/seo-helpers';
import Breadcrumb from '../../../components/Breadcrumb';
import SEOImage from '../../../components/SEOImage';
import { Phone, CheckCircle, Building2 } from 'lucide-react';

export function generateMetadata() {
  return generateServiceMetadata({
    title: "تركيب واجهات زجاج سيكوريت بالمدينة المنورة | محلات وفنادق ومولات 2025",
    description: "تركيب واجهات زجاج سيكوريت احترافية بالمدينة المنورة 🏢 شفاف | عاكس | ملون | كرتن وول | سبيدر ✅ أرخص سعر متر + ضمان + صيانة مجانية أول سنة | 0548980056",
    path: "/services/facades-glass"
  });
}

export default function FacadesGlassPage() {
  const schema = generateServiceSchema({
    name: "تركيب واجهات زجاج سيكوريت",
    description: "تركيب واجهات زجاج سيكوريت احترافية بالمدينة المنورة شفاف وعاكس وملون للشركات والمحلات بضمان 10 سنوات.",
    url: "/services/facades-glass"
  });

  return (
    <main className="min-h-screen py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={[{ label: 'خدماتنا', path: '/services' }, { label: 'تركيب واجهات زجاج', path: '/services/facades-glass' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6 leading-tight flex items-center">
          <Building2 className="w-12 h-12 ml-4 text-[#c9a84c]" />
          تركيب واجهات زجاج سيكوريت بالمدينة المنورة
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <SEOImage 
              src="/assets/talal/facades-glass-12.webp"
              alt="تركيب واجهات زجاج سيكوريت للمحلات بالمدينة المنورة - مؤسسة عالم الفن والهندسة"
              fill
              className="object-cover"
              priority={true}
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نحن رواد تركيب الواجهات الزجاجية بالمدينة المنورة، نقدم حلول متطورة للواجهات التجارية، الفنادق، الشركات، والمعارض. تتميز واجهاتنا بالصلابة، العزل الحراري، والشكل المعماري الجذاب.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "زجاج استركشر (كرتن وول) للواجهات الكبيرة والمولات",
                "واجهات زجاج سبايدر (نظام العناكب) لمظهر أكثر شفافية",
                "زجاج عاكس ومظلل لتقليل حرارة الشمس القوية بالمدينة",
                "زجاج أمان سيكوريت وسيكيوريت دبل جلاس مضاد للكسر",
                "دقة وإنجاز سريع للمشاريع الكبيرة",
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
           <h2 className="text-3xl font-bold text-[#0a1628] mb-4">هل تبحث عن مؤسسة زجاج لتنفيذ مشروعك؟</h2>
           <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
             نقوم بتنفيذ أضخم المشاريع التجارية بواجهات زجاجية عصرية مطابقة لمواصفات الجودة والأمان مع تقديم أرخص سعر للمتر بالمدينة المنورة.
           </p>
           <div className="flex justify-center">
             <a href="tel:0548980056" className="inline-flex items-center justify-center bg-[#1e4d8c] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#153a6c] transition-colors shadow-lg">
               <Phone className="w-6 h-6 ml-2 text-[#c9a84c]" /> تواصل مع المهندس المختص: 0548980056
             </a>
           </div>
        </div>
      </div>
    </main>
  );
}
