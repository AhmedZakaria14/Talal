import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '../../../components/Breadcrumb';
import RelatedServices from '../../../components/RelatedServices';
import { generateArticleSchema } from '../../../lib/seo-helpers';
import { articlesList } from '../../../lib/data';
import { Calendar, User } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articlesList.find(a => a.slug === resolvedParams.slug);
  
  if (!article) {
    return {
      title: 'مقال غير موجود | مؤسسة عالم الفن والهندسة للزجاج'
    };
  }

  return {
    title: `${article.title} | مؤسسة عالم الفن والهندسة للزجاج`,
    description: article.desc,
    alternates: {
      canonical: `https://tarkeb-zoogag.com/articles/${resolvedParams.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.desc,
      url: `https://tarkeb-zoogag.com/articles/${resolvedParams.slug}`,
      type: 'article',
      images: [
        {
          url: 'https://tarkeb-zoogag.com/assets/talal/logo-transparent.webp',
          width: 1200,
          height: 630,
          alt: article.title,
        }
      ]
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = articlesList.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const currentDate = new Date().toISOString().split('T')[0];

  const schema = generateArticleSchema({
    headline: article.title,
    description: article.desc,
    image: "https://tarkeb-zoogag.com/assets/talal/logo-transparent.webp",
    datePublished: currentDate,
    dateModified: currentDate,
    url: `/articles/${resolvedParams.slug}`
  });

  return (
    <main className="min-h-screen py-12 bg-[#f8f9fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumb items={[
        { label: 'المقالات', path: '/articles' },
        { label: article.title, path: `/articles/${resolvedParams.slug}` }
      ]} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <article className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <header className="mb-10 text-center border-b border-gray-100 pb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0a1628] leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 space-x-reverse text-gray-500 font-medium">
              <span className="flex items-center">
                <User className="w-5 h-5 ml-2 text-[#c9a84c]" />
                مؤسسة عالم الفن والهندسة للزجاج
              </span>
              <span className="flex items-center">
                <Calendar className="w-5 h-5 ml-2 text-[#c9a84c]" />
                2025
              </span>
            </div>
          </header>

          <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl font-medium text-[#1e4d8c] mb-8 p-6 bg-[#f0f4f8] rounded-xl">
              {article.desc}
            </p>
            
            <h2>أهمية اختيار الزجاج المناسب</h2>
            <p>
              يعتبر اختيار زجاج السيكوريت قراراً حاسماً في أي مشروع بناء أو تجديد بالمدينة المنورة. فالزجاج لا يقتصر دوره على التجميل، بل يمتد ليوفر الحماية، العزل الصوتي والحراري، والخصوصية سواء للشركات، المكاتب، المنازل، أو الفنادق.
            </p>

            <h2>لماذا مؤسسة عالم الفن والهندسة هي خيارك الأول؟</h2>
            <ul>
              <li><strong>الخبرة الطويلة:</strong> أكثر من 20 عاماً في خدمة سكان وأصحاب الأعمال بالمدينة المنورة في تركيب شاورات، واجهات، وأبواب زجاجية.</li>
              <li><strong>جودة المواد:</strong> نستخدم زجاج سيكوريت عالي السماكة (10-12 ملم) وإكسسوارات استيل مقاومة للصدأ.</li>
              <li><strong>الضمان الشامل:</strong> حماية وضمان حقيقي يصل إلى 10 سنوات على كافة أعمال التركيب والصيانة.</li>
              <li><strong>تنفيذ احترافي:</strong> فريق مدرب ومؤهل لتنفيذ أدق التصاميم بسرعة وإتقان قياسي.</li>
            </ul>

            <p>
              للحصول على استشارة مجانية وتسعير دقيق لمشروعك، لا تتردد في التواصل معنا عبر الأرقام الموضحة. سنكون سعداء بتقديم الأفضل لك.
            </p>
          </div>
        </article>

        {/* Related Services Section for Internal Linking */}
        <RelatedServices currentSlug={resolvedParams.slug} />
      </div>
    </main>
  );
}
