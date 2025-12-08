export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    title?: string;
    image?: string;
  };
  publishedAt: string; // ISO date string
  updatedAt?: string; // ISO date string
  category: string;
  tags: string[];
  coverImage?: string;
  featured?: boolean;
  readingTime?: number; // in minutes
}

export interface BlogCategory {
  slug: string;
  name: string;
  description?: string;
}
