export interface WordPressImage {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      [key: string]: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
}

export interface WordPressPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  acf?: any; // For Advanced Custom Fields data
}

export interface WordPressPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  date: string;
  modified: string;
  author: number;
  categories: number[];
  tags: number[];
  acf?: any; // For Advanced Custom Fields data
}

export interface WordPressAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  avatar_urls: {
    [key: string]: string;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  parent: number;
} 