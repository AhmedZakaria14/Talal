import { Metadata } from 'next';
import Breadcrumb from '../../components/Breadcrumb';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: "مقالات ومدونة زجاج السيكوريت | مؤسسة عمر طلال للزجاج",
  description: "دليلك الشامل لكل ما يخص تركيب وصيانة زجاج السيكوريت، الشاورات، الدربزين، والواجهات الزجاجية في المدينة المنورة. نصائح وأسعار 2025.",
  alternates: {
    canonical: "https://tarkeb-zoogag.com/articles",
  }
};

import { articlesList } from '../../lib/data';

export default function ArticlesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "مدونة مؤسسة عمر طلال للزجاج بالمدينة المنورة",
    "url": "https://tarkeb-zoogag.com/articles",
    "description": "مقالات متخصصة في أعمال تركيب وصيانة الزجاج السيكوريت.",
    "publisher": {
      "@type": "Organization",
      "name": "مؤسسة عمر طلال للزجاج",
      "logo": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229726/logo_ebueow.webp"
      }
    }
  };

  return (
    <main className="min-h-screen py-12 bg-[#f8f9fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[{ label: 'المقالات والمدونة', path: '/articles' }]} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1628] mb-6">مدونة ديكورات وأعمال الزجاج</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              تصفح أحدث المقالات والنصائح المتخصصة في عالم الزجاج السيكوريت، الشاورات، والواجهات لتبقى على اطلاع بأحدث التصاميم والأسعار بالمدينة المنورة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesList.map((article) => (
              <article key={article.slug} className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#c9a84c] hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="p-6 md:p-8 flex-grow">
                  <div className="w-12 h-12 bg-[#f0f4f8] rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-[#1e4d8c]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#0a1628] mb-4">
                    <Link href={`/articles/${article.slug}`} className="hover:text-[#c9a84c] transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {article.desc}
                  </p>
                </div>
                <div className="p-6 md:p-8 pt-0 mt-auto">
                  <Link 
                    href={`/articles/${article.slug}`} 
                    className="inline-flex items-center font-bold text-[#1e4d8c] hover:text-[#c9a84c] transition-colors"
                  >
                    اقرأ المزيد <ArrowLeft className="w-4 h-4 mr-2" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
