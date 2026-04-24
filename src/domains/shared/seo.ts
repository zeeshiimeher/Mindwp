export type OpenGraphData = {
  title?: string;
  description?: string;
};

export type SharedSeoData = {
  title: string;
  description: string;
  canonical: string;
  openGraph?: OpenGraphData;
};
