export interface Module {
  id: number;
  title: string;
  duration: string;
  topics: string[];
}

export interface Instructor {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  isRecommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}