import axios from 'axios';

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://lfgconsultants.com/wp-json';

export const wp = axios.create({
  baseURL: WORDPRESS_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Content Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

// Core WordPress Endpoints
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

// Contact Form 7 Endpoint
export async function submitContactForm(formData: ContactFormData) {
  try {
    const response = await wp.post(
      `/contact-form-7/v1/contact-forms/${process.env.CONTACT_FORM_ID}/feedback`,
      {
        'your-name': formData.name,
        'your-email': formData.email,
        'your-company': formData.company,
        'your-service': formData.service,
        'your-message': formData.message,
      }
    );
    
    if (response.status !== 200) {
      throw new Error(response.data.message || 'Failed to submit form');
    }

    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
} 