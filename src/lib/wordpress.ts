import axios from 'axios';

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://lfgconsultants.com/wp-json';

export const wp = axios.create({
  baseURL: WORDPRESS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getPages() {
  try {
    const response = await wp.get('/wp/v2/pages');
    return response.data;
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPage(slug: string) {
  try {
    const response = await wp.get(`/wp/v2/pages?slug=${slug}`);
    return response.data[0];
  } catch (error) {
    console.error(`Error fetching page ${slug}:`, error);
    return null;
  }
}

export async function getPosts() {
  try {
    const response = await wp.get('/wp/v2/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug: string) {
  try {
    const response = await wp.get(`/wp/v2/posts?slug=${slug}`);
    return response.data[0];
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    return null;
  }
}

export async function getMedia(id: number) {
  try {
    const response = await wp.get(`/wp/v2/media/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching media ${id}:`, error);
    return null;
  }
} 