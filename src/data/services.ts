export interface Service {
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    title: 'Organizational Change Management (OCM)',
    description: 'We help teams confidently navigate change, ensuring new tools, systems, and processes stick. Our seasoned OCM experts deliver customized strategies, training, and support to drive adoption, engagement, and sustainable success.',
    image: '/images/services/ocm.png'
  },
  {
    title: 'AI Workflow Integration',
    description: 'Transform your business operations by embedding cutting-edge Generative AI (GenAI), intelligent agents, and advanced automation into your workflows. We streamline processes, enhance efficiency, and empower your teams to leverage AI effectively for lasting productivity gains.',
    image: '/images/services/ai-workflow.jpg'
  },
  {
    title: 'Rapid MVP Development',
    description: 'Fast-track your ideas from concept to market-ready MVPs. Leveraging AI-powered prototyping methods, we rapidly deliver scalable solutions that help you validate ideas, capture opportunities, and stay ahead of competitors.',
    image: '/images/services/mvp.png'
  }
]; 