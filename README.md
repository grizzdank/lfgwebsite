# LFG Consulting Website

© 2025 LFG Consulting. All Rights Reserved

Modern website for LFG Consulting built with Next.js, featuring a responsive design and seamless contact form integration.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Formspree (Contact Form)

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

3. Create a `.env.local` file in the root directory with your environment variables:
```bash
NEXT_PUBLIC_SITE_URL=https://lfgconsultants.com
NEXT_PUBLIC_FORMSPREE_PROJECT_ID=your_formspree_id
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/           # Pages and routes
├── components/    # React components
│   ├── layout/   # Layout components (Header, Footer)
│   ├── sections/ # Page sections (About)
│   └── seo/      # SEO components
├── config/       # Configuration files
└── data/        # Static data files
```

## Deployment

This site is deployed on Vercel's Hobby plan. Any push to the main branch will trigger a new deployment.

Features:
- Automatic HTTPS
- Global CDN
- Automatic deployments on push
- Preview deployments for pull requests
- Analytics and monitoring

## Contact Form

The site uses Formspree for handling contact form submissions. The form is configured with:
- Custom validation
- Spam protection
- Email notifications
- GDPR compliance

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
