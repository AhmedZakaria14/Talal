import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  themeColor: '#1e4d8c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: '%s | مؤسسة عالم الفن والهندسة للزجاج - المدينة المنورة',
    default: 'زجاج سيكوريت بالمدينة المنورة | عالم الفن والهندسة - 0548980056',
  },
  description: 'أفضل شركة تركيب زجاج سيكوريت بالمدينة المنورة. تفصيل واجهات شاورات أبواب ومكاتب بضمان 10 سنوات. اتصل الآن: 0548980056',
  keywords: [
    'تركيب زجاج سيكوريت بالمدينة المنورة',
    'شركة تركيب زجاج المدينة المنورة',
    'افضل شركة زجاج سيكوريت بالمدينة المنورة',
    'سعر متر زجاج سيكوريت المدينة المنورة',
    'تركيب شاور زجاج بالمدينة المنورة',
    'تركيب واجهات زجاج بالمدينة المنورة',
    'تركيب ابواب زجاج سيكوريت المدينة المنورة',
    'تركيب دربزين زجاج المدينة المنورة',
    'زجاج مكاتب بالمدينة المنورة',
    'زجاج محلات تجارية المدينة المنورة',
    'تركيب زجاج مسابح المدينة المنورة',
    'صيانة زجاج سيكوريت المدينة المنورة',
    'تركيب شاور زجاج سيكوريت العزيزية',
    'تركيب شاور زجاج سيكوريت قباء',
    'تركيب شاور زجاج سيكوريت الرانوناء',
    'تركيب شاور زجاج سيكوريت العوالي',
    'واجهات زجاج سيكوريت المدينة المنورة 12 ملم',
    'شاور زجاج فريم ليس المدينة المنورة',
    'دربزين زجاج درج داخلي المدينة المنورة',
    'زجاج مكاتب سمارت المدينة المنورة',
    'تركيب زجاج فندق المدينة المنورة',
    'فني زجاج سيكوريت المدينة المنورة'
  ],
  openGraph: {
    title: 'تركيب زجاج سيكوريت بالمدينة المنورة | مؤسسة عالم الفن والهندسة',
    description: 'أفضل شركة تركيب زجاج سيكوريت بالمدينة المنورة. تفصيل واجهات شاورات أبواب ومكاتب بضمان 10 سنوات.',
    url: 'https://tarkeb-zoogag.com',
    siteName: 'مؤسسة عالم الفن والهندسة للزجاج',
    images: [
      {
        url: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229726/logo_ebueow.webp',
        width: 1200,
        height: 630,
        alt: 'مؤسسة عالم الفن والهندسة للزجاج - المدينة المنورة',
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تركيب زجاج سيكوريت بالمدينة المنورة | مؤسسة عالم الفن والهندسة',
    description: 'أفضل شركة تركيب زجاج سيكوريت بالمدينة المنورة. تفصيل واجهات شاورات أبواب ومكاتب بضمان 10 سنوات.',
    images: ['https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229726/logo_ebueow.webp'],
  },
  alternates: {
    canonical: 'https://tarkeb-zoogag.com',
    languages: {
      'ar-SA': 'https://tarkeb-zoogag.com',
    },
  },
  icons: {
    icon: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229726/logo_ebueow.webp',
    shortcut: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229726/logo_ebueow.webp',
    apple: 'https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229726/logo_ebueow.webp',
  },
  verification: {
    google: 'google-site-verification-code', // Placeholder
    other: {
      me: ['bing-site-verification-code'], // Placeholder
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://tarkeb-zoogag.com/#business",
      "name": "مؤسسة عالم الفن والهندسة لجميع أعمال الزجاج بالمدينة المنورة",
      "alternateName": ["زجاج سيكوريت المدينة المنورة", "عالم الفن والهندسة للزجاج"],
      "description": "متخصصون في توريد وتركيب زجاج سيكوريت بالمدينة المنورة بخبرة أكثر من 20 عاماً",
      "url": "https://tarkeb-zoogag.com",
      "telephone": "+966558935165",
      "priceRange": "$$",
      "image": "https://tarkeb-zoogag.com/wp-content/uploads/2024/06/logo2-1.png",
      "logo": "https://res.cloudinary.com/dxvjqrb9l/image/upload/v1779229452/logo2_zwfsgq.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "المدينة المنورة",
        "addressLocality": "المدينة المنورة",
        "addressRegion": "منطقة المدينة المنورة",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.5247,
        "longitude": 39.5692
      },
      "hasMap": "https://maps.app.goo.gl/SVWHydus4wrQZLkk7",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": [
        {"@type": "City", "name": "المدينة المنورة"},
        {"@type": "City", "name": "ينبع"},
        {"@type": "City", "name": "العلا"},
        {"@type": "City", "name": "خيبر"}
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {"@type": "GeoCoordinates", "latitude": 24.5247, "longitude": 39.5692},
        "geoRadius": "100000"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "knowsAbout": [
        "تركيب زجاج سيكوريت",
        "تركيب واجهات زجاج",
        "تركيب شاور زجاج",
        "تركيب دربزين زجاج",
        "تركيب أبواب زجاج",
        "تركيب زجاج مكاتب",
        "صيانة زجاج سيكوريت"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "خدمات تركيب زجاج سيكوريت",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "تركيب شاور زجاج سيكوريت", "url": "https://tarkeb-zoogag.com/services/shower-glass"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "تركيب واجهات زجاج سيكوريت", "url": "https://tarkeb-zoogag.com/services/facades-glass"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "تركيب أبواب زجاج سيكوريت", "url": "https://tarkeb-zoogag.com/services/doors-glass"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "تركيب دربزين زجاج سيكوريت", "url": "https://tarkeb-zoogag.com/services/railing-glass"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "تركيب زجاج مكاتب وقواطع", "url": "https://tarkeb-zoogag.com/services/offices-glass"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "تركيب زجاج محلات تجارية", "url": "https://tarkeb-zoogag.com/services/shops-glass"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "تركيب زجاج مسابح وأرضيات", "url": "https://tarkeb-zoogag.com/services/pools-glass"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "صيانة وإصلاح زجاج سيكوريت", "url": "https://tarkeb-zoogag.com/services/maintenance-glass"}}
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://tarkeb-zoogag.com/#website",
      "url": "https://tarkeb-zoogag.com",
      "name": "مؤسسة عالم الفن والهندسة لجميع أعمال الزجاج",
      "inLanguage": "ar",
      "publisher": {"@id": "https://tarkeb-zoogag.com/#business"},
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tarkeb-zoogag.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-tajawal antialiased bg-[#f8f9fa] text-[#0a1628] selection:bg-[#1e4d8c] selection:text-white" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
