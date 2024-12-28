import { AITool } from '../types/tools';

export const aiTools: AITool[] = [
  {
    id: 'image-generator',
    name: 'AI Image Generator',
    description: 'Create stunning images from text descriptions using advanced AI models',
    features: [
      'Text-to-image generation',
      'Style transfer',
      'Image editing',
      'Batch processing',
      'Custom art styles'
    ],
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=800',
    demoUrl: '/tools/image-generator/demo',
    pricing: {
      free: ['5 images/day', 'Basic styles', 'Standard resolution'],
      pro: ['100 images/day', 'All styles', 'HD resolution'],
      enterprise: ['Unlimited', 'Custom styles', '4K resolution']
    },
    category: 'image',
    apiEndpoint: '/api/v1/generate-image'
  },
  {
    id: 'prompt-engineer',
    name: 'AI Prompt Engineer',
    description: 'Generate and optimize prompts for various AI models',
    features: [
      'Prompt optimization',
      'Context enhancement',
      'Style suggestions',
      'Multi-model support'
    ],
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?auto=format&fit=crop&q=80&w=800',
    demoUrl: '/tools/prompt-engineer/demo',
    pricing: {
      free: ['Basic optimization', '10 prompts/day', 'Standard templates'],
      pro: ['Advanced optimization', '100 prompts/day', 'Custom templates'],
      enterprise: ['Enterprise optimization', 'Unlimited', 'Custom solutions']
    },
    category: 'prompt',
    apiEndpoint: '/api/v1/optimize-prompt'
  },
  {
    id: 'code-assistant',
    name: 'AI Code Generator',
    description: 'Generate, review, and optimize code across multiple languages',
    features: [
      'Code generation',
      'Code review',
      'Bug detection',
      'Performance optimization',
      'Multi-language support'
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    demoUrl: '/tools/code-assistant/demo',
    pricing: {
      free: ['Basic generation', '100 lines/day', 'Three languages'],
      pro: ['Advanced generation', '1000 lines/day', 'All languages'],
      enterprise: ['Custom solutions', 'Unlimited', 'Priority support']
    },
    category: 'code',
    apiEndpoint: '/api/v1/generate-code'
  },
  {
    id: 'article-writer',
    name: 'AI Article Writer',
    description: 'Create engaging articles and content with AI assistance',
    features: [
      'Article generation',
      'SEO optimization',
      'Style customization',
      'Multi-language support',
      'Plagiarism check'
    ],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    demoUrl: '/tools/article-writer/demo',
    pricing: {
      free: ['500 words/day', 'Basic SEO', 'Three languages'],
      pro: ['5000 words/day', 'Advanced SEO', 'All languages'],
      enterprise: ['Unlimited', 'Custom features', 'API access']
    },
    category: 'writing',
    apiEndpoint: '/api/v1/generate-article'
  }
];