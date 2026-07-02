import { Helmet } from "react-helmet-async";

const siteUrl = "https://www.otrack.co.zw";

export default function Seo({ title, description, keywords, ogImage, ogType = "website", path = "" }) {
  const fullTitle = title ? `${title} | O'Track Global` : "O'Track Global | Vehicle Tracking & Fleet Management Solutions Zimbabwe";
  const desc = description || "Zimbabwe's leading vehicle tracking and fleet management solutions provider. GPS tracking, fuel monitoring, telematics, and AI-powered fleet intelligence for businesses across Southern Africa.";
  const kw = keywords || "vehicle tracking Zimbabwe, fleet management Zimbabwe, GPS tracking Zimbabwe, telematics solutions Zimbabwe, vehicle monitoring Zimbabwe, fleet tracking Zimbabwe, O'Track Global";
  const image = ogImage || "https://www.otrack.co.zw/logo.svg";
  const url = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="O'Track Global" />
      <meta property="og:locale" content="en_ZW" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
