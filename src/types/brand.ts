export interface WPBrandLink {
  url: string;
  title: string;
  target: string | null;
}

export interface WPBrandNode {
  id: string;
  title: string;
  brandFields: {
    description: string;
    href: WPBrandLink;
    logo: {
      node: {
        sourceUrl: string;
        altText: string;
      };
    };
  };
}

export interface WPBrandsResponse {
  brands: {
    nodes: WPBrandNode[];
  };
}
