import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Metadata } from "next";

const siteConfig = {
  name: "Ai Image Generator",
  description:
    "An open-source Property Managements, full-stack projects with advanced authentication and several database configurations.",
  url: "https://guerdoul.com",
  ogImage:
    "https://cdn.sanity.io/images/zny2kz29/production/ae60eab7ebf0df2e7e037ba9cec733c516844cca-1200x776.jpg",
  author: "mahmoudguerdoul",
  address: "Gueliz District Marrakech - Marrakech, MA 42050",
  metadataBase: new URL("https://ai.guerdoul.com"),
  keywords: ["Ai", "Replicate ai", "Playground", "Ai Image Generator"],
};

export const metaObject = (
  title?: string,
  description?: string,
  openGraph?: OpenGraph
) => {
  return {
    title: title ? `${title} - Ai Image Generator` : siteConfig.name,
    description: description ? description : siteConfig.description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Ai Image Generator` : title,
      description: description ? description : siteConfig.description,
      url: "https://guerdoul.com",
      siteName: "Ai Image Generator",
      images: {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
      locale: "en_US",
      type: "website",
    },
  };
};
