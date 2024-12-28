export type AIToolCategory = 
  | 'modeling' 
  | 'rendering' 
  | 'image' 
  | 'prompt' 
  | 'code' 
  | 'writing' 
  | 'animation' 
  | 'optimization';

export interface AITool {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  demoUrl: string;
  pricing: {
    free: string[];
    pro: string[];
    enterprise: string[];
  };
  category: AIToolCategory;
  apiEndpoint?: string;
  documentation?: string;
}