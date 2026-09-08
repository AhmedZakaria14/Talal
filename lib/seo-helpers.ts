import { Metadata } from 'next';

export function generateServiceMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `https://tarkeb-zoogag.com${path}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: 'https://tarkeb-zoogag.com/assets/talal/logo.webp',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://tarkeb-zoogag.com/assets/talal/logo.webp'],
    },
  };
}

export function generateBreadcrumbs(items: { label: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://tarkeb-zoogag.com${item.path}`,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'مؤسسة عالم الفن والهندسة لجميع أعمال الزجاج بالمدينة المنورة',
      telephone: '+966558935165',
    },
    areaServed: {
      '@type': 'City',
      name: 'المدينة المنورة',
    },
    url: `https://tarkeb-zoogag.com${url}`,
  };
}

export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  url,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'مؤسسة عالم الفن والهندسة للزجاج',
    },
    publisher: {
      '@type': 'Organization',
      name: 'مؤسسة عالم الفن والهندسة للزجاج',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tarkeb-zoogag.com/assets/talal/logo.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tarkeb-zoogag.com${url}`,
    },
  };
}
