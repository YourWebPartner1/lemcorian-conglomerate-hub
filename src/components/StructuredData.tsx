import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lemcorian",
    "alternateName": "Lemcorian Group",
    "url": "https://lemcorian.com",
    "logo": "https://lemcorian.com/hero-background-premium.jpg",
    "description": "Lemcorian is a global multidivision conglomerate operating across agricultural products, chemicals, and medical equipment sectors.",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Corporate Headquarters"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@lemcorian.com",
      "telephone": "+91-XXXXXXXXXX"
    },
    "sameAs": [
      "https://twitter.com/LEMCORIAN"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lemcorian Products and Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Agricultural Products",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Coffee"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Vegetables"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Chemicals",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Industrial Chemicals"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Pharmaceutical Chemicals"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Medical Equipment & Instruments",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Medical Supplies"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Surgical Instruments"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;

