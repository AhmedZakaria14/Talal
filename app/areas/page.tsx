import { Metadata } from 'next';
import Breadcrumb from '../../components/Breadcrumb';
import Link from 'next/link';
import { MapPin, ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "أحياء ومناطق الخدمة بالمدينة المنورة | مؤسسة عمر طلال للزجاج",
  description: "نغطي كافة أحياء المدينة المنورة لتقديم أرقى خدمات تركيب زجاج السيكوريت، الشاورات، والواجهات. تعرف على قائمة الأحياء التي نخدمها.",
  alternates: {
    canonical: "https://tarkeb-zoogag.com/areas",
  }
};

const areas = [
  { id: 'al-aziziyah', name: 'حي العزيزية', desc: 'تركيب شاورات وواجهات المحلات، استجابة سريعة لطلبات الحي.', path: '/areas/al-aziziyah' },
  { id: 'al-awali', name: 'حي العوالي', desc: 'ديكورات زجاجية فاخرة تناسب رقي وفخامة فلل وقصور العوالي.', path: '/areas/al-awali' },
  { id: 'quba', name: 'حي قباء', desc: 'تركيب زجاج الأسواق التجارية والمنازل بجوار المنطقة التاريخية.', path: '/areas/quba' },
  { id: 'sultanah', name: 'حي سلطانة', desc: 'تجهيز واجهات الماركات وزجاج المطاعم والمجمعات بشارع سلطانة.', path: '/areas/sultanah' },
  { id: 'al-ranounaa', name: 'حي الرانوناء', desc: 'توريد وتركيب زجاج السيكوريت للمجمعات السكنية الحديثة والفلل.', path: '/areas/al-ranounaa' },
  { id: 'bani-harithah', name: 'حي بني حارثة', desc: 'تركيب درابزين وقواطع زجاجية للمنازل بأفضل الأسعار وأعلى جودة.', path: '/areas/bani-harithah' },
];

export default function AreasPage() {
  return (
    <main className="min-h-screen py-12 bg-[#f8f9fa]">
      <Breadcrumb items={[{ label: 'أحياء المدينة المنورة', path: '/areas' }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6">مناطق الخدمة بالمدينة المنورة</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              تغطي خدماتنا في مؤسسة عمر طلال كافة أنحاء وأحياء المدينة المنورة. بفضل فريقنا المجهز بالكامل وأسطول سياراتنا، نضمن لك وصولاً سريعاً للمعاينة وإنجاز العمل في أي وقت وأي منطقة داخل المدينة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <Link key={area.id} href={area.path} className="group block h-full">
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-[#c9a84c] hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#f0f4f8] to-transparent rounded-bl-3xl -z-10 group-hover:from-[#fdf8ed] transition-colors"></div>
                  
                  <MapPin className="w-10 h-10 text-[#c9a84c] mb-6" />
                  <h2 className="text-2xl font-bold text-[#0a1628] mb-3 flex items-center justify-between">
                    {area.name}
                    <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-[#1e4d8c] transition-colors transform group-hover:-translate-x-1" />
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{area.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
