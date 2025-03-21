# LFG Consulting Website

Modern website for LFG Consulting built with Next.js and WordPress as a headless CMS.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- WordPress REST API

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd lfgwebsite
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory with your WordPress API URL:
```bash
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This site is deployed on Vercel. Any push to the main branch will trigger a new deployment.

## WordPress Integration

The site uses WordPress as a headless CMS. Content is fetched from the WordPress REST API and rendered using Next.js components.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
