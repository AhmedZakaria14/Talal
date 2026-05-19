import Link from 'next/link';
import { generateBreadcrumbs } from '../lib/seo-helpers';
import { ChevronLeft } from 'lucide-react';

export default function Breadcrumb({
  items,
}: {
  items: { label: string; path: string }[];
}) {
  const jsonLd = generateBreadcrumbs([
    { label: 'الرئيسية', path: '/' },
    ...items,
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="my-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 space-x-reverse text-sm md:text-base text-gray-500 overflow-x-auto whitespace-nowrap pb-2">
          <li>
            <Link href="/" className="hover:text-[#c9a84c] transition-colors flex items-center">
              الرئيسية
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2 space-x-reverse">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
              {index === items.length - 1 ? (
                <span className="text-[#1e4d8c] font-bold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-[#c9a84c] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
