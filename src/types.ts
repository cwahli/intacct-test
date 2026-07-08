export interface IndustryInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string; change: string; isPositive: boolean }[];
  features: string[];
  charts: { label: string; value: number }[];
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface RoiInputs {
  entities: number;
  closeHours: number;
  transactions: number;
}

export interface RoiOutputs {
  hoursSaved: number;
  closeReductionPercent: number;
  estimatedAnnualSavings: number;
  efficiencyMultiplier: number;
}
