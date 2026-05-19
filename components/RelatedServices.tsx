import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const allServices = [
  { id: 'shower-glass', name: 'تركيب شاور زجاج سيكوريت', path: '/services/shower-glass' },
  { id: 'facades-glass', name: 'تركيب واجهات زجاج سيكوريت', path: '/services/facades-glass' },
  { id: 'doors-glass', name: 'تركيب أبواب زجاج أوتوماتيكية', path: '/services/doors-glass' },
  { id: 'railing-glass', name: 'تركيب دربزين زجاج للسلالم', path: '/services/railing-glass' },
  { id: 'offices-glass', name: 'تركيب قواطع زجاج مكاتب', path: '/services/offices-glass' },
  { id: 'shops-glass', name: 'تركيب زجاج محلات تجارية', path: '/services/shops-glass' },
  { id: 'pools-glass', name: 'تركيب زجاج مسابح سيكوريت', path: '/services/pools-glass' },
  { id: 'maintenance-glass', name: 'صيانة وإصلاح زجاج سيكوريت', path: '/services/maintenance-glass' }
];

export default function RelatedServices({ currentSlug }: { currentSlug?: string }) {
  // Select 3 random/related services, avoiding the current page if it is a service.
  // For simplicity, we just pick the first 3 that don't match the current slug if provided.
  const related = allServices.filter(s => s.id !== currentSlug).slice(0, 3);

  return (
    <div className="mt-16 border-t border-gray-200 pt-12">
      <h3 className="text-2xl font-bold text-[#0a1628] mb-8">خدمات ذات صلة قد تهمك:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {related.map((service) => (
          <Link 
            key={service.id} 
            href={service.path}
            className="group block p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#c9a84c] hover:shadow-md transition-all"
          >
            <h4 className="font-bold text-[#1e4d8c] group-hover:text-[#c9a84c] transition-colors mb-3">
              {service.name}
            </h4>
            <span className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-800">
              استكشف الخدمة <ArrowLeft className="w-4 h-4 mr-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
