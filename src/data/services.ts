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
    title: 'AI Workflow Design & Integration',
    description: 'Transform your business operations with tailored AI workflow design. We expertly map your existing human processes into AI-augmented workflows, embedding cutting-edge Generative AI (GenAI), intelligent agents, and advanced automation directly into your operational backbone. Streamline your processes, amplify efficiency, and empower your teams to harness AI for sustainable productivity and innovation.',
    image: '/images/services/ai-workflow.jpg'
  },
  {
    title: 'Rapid MVP Development',
    description: 'Fast-track your ideas from concept to market-ready MVPs. Leveraging AI-powered prototyping methods, we rapidly deliver scalable solutions that help you validate ideas, capture opportunities, and stay ahead of competitors.',
    image: '/images/services/mvp.png'
  }
]; 