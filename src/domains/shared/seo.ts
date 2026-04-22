export type OpenGraphData = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export type SharedSeoData = {
  canonical: string;
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: OpenGraphData;
};
