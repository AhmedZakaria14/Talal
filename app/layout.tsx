import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import './globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'مؤسسة عمر طلال | تركيب زجاج سيكوريت بالمدينة المنورة - 0544315961',
  description: 'مؤسسة عمر طلال - أفضل شركة تركيب زجاج سيكوريت بالمدينة المنورة بخبرة 20 عاماً. تركيب شاور، واجهات، أبواب، دربزين، زجاج مكاتب ومحلات. اتصل: 0544315961',
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "مؤسسة عمر طلال لجميع أعمال الزجاج بالمدينة المنورة",
  "telephone": "+966544315961",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "المدينة المنورة",
    "addressCountry": "SA"
  },
  "openingHours": "Mo-Su 00:00-24:00",
  "url": "https://tarkeb-zoogag.com",
  "priceRange": "$$"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
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
