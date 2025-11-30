import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "Lemcorian – Global Multidivision Conglomerate",
  description = "Lemcorian is a global conglomerate operating across Agricultural Products, Chemicals, and Medical Equipment & Instruments.",
  keywords = "conglomerate, lemcorian, agriculture, chemicals, medical equipment, corporate, global company",
  image = "/og-image.jpg",
  url = "https://www.lemcorian.com",
  type = "website",
  noindex = false,
}: SEOProps) => {
  const fullTitle = title.includes("Lemcorian") ? title : `${title} | Lemcorian`;
  const fullUrl = url.startsWith("http") ? url : `https://www.lemcorian.com${url}`;
  const fullImage = image.startsWith("http") ? image : `https://www.lemcorian.com${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Lemcorian" />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="Lemcorian" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@LEMCORIAN" />

      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
    </Helmet>
  );
};

export default SEO;

