export default function LocalSEO() {
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
        "image": "https://tarkeb-zoogag.com/assets/talal/logo.webp",
        "logo": "https://tarkeb-zoogag.com/assets/talal/logo.webp",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
