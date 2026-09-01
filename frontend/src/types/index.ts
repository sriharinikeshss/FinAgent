export type RiskProfileType = 'conservative' | 'moderate' | 'aggressive';
export type MarketClassification = 'bullish' | 'bearish' | 'neutral';
export type SentimentClassification = 'positive' | 'negative' | 'neutral';
export type EvidenceClassification = 'supportive' | 'concerning' | 'neutral' | 'unavailable';
export type RiskLevel = 'low' | 'medium' | 'high';
export type GapClassification = 'LOW GAP' | 'MODERATE GAP' | 'HIGH GAP';
export type VerdictType = 'BUY WITH CAUTION' | 'WAIT FOR CONFIRMATION' | 'AVOID FOR NOW' | 'MONITOR';

export interface PortfolioHolding {
  symbol: string;
  name: string;
  shares: number;
  avgBuyPrice: number;
  currentPrice: number;
  sector: string;
  allocationPct: number;
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  avatar: string;
  accountType: string;
  totalPortfolioValue: number;
  cashBalance: number;
  risk_preference: RiskProfileType;
  portfolio: PortfolioHolding[];
  sector_exposure: number;
  concentration_pct: number;
  fomo_signals_score: number;
  behavioral_tendency: string;
}

export interface UserProfile {
  risk_profile: RiskProfileType;
  portfolio_sector_exposure: number;
  portfolio_concentration: number;
  fomo_risk: number;
  experience_years?: number;
  capital_allocation_pct?: number;
  label?: string;
  description?: string;
}

export interface EvidenceSource {
  title: string;
  doc_type: string;
  excerpt: string;
  date: string;
  relevance_score: number;
  filing_id?: string;
}

export interface MarketAgentOutput {
  agent: 'market';
  classification: MarketClassification;
  score: number;
  confidence: number;
  reasoning: string[];
  technical_indicators?: Record<string, any>;
  sparkline: number[];
}

export interface SentimentAgentOutput {
  agent: 'sentiment';
  classification: SentimentClassification;
  score: number;
  confidence: number;
  reasoning: string[];
  headlines: Array<{ source?: string; title: string; impact?: string }>;
  sparkline: number[];
}

export interface EvidenceAgentOutput {
  agent: 'evidence';
  classification: EvidenceClassification;
  score: number;
  confidence: number;
  status: 'complete' | 'degraded';
  reasoning: string[];
  sources: EvidenceSource[];
  sparkline: number[];
}

export interface MirrorAgentOutput {
  agent: 'mirror';
  investor_suitability: number;
  behavioral_risk: RiskLevel;
  portfolio_risk: RiskLevel;
  fomo_level: RiskLevel;
  confidence: number;
  reasoning: string[];
  sparkline: number[];
}

export interface AgentDebateMessage {
  agent_name: string;
  agent_type: string;
  timestamp: string;
  message: string;
  stance: 'optimistic' | 'cautious' | 'skeptical' | 'protective';
  polarity: 'bullish' | 'bearish' | 'neutral' | 'risk_warning';
}

export interface AnalysisResponse {
  stock: string;
  stock_price?: number;
  stock_change_pct?: number;
  timestamp: string;
  user_profile: UserProfile;
  market_agent: MarketAgentOutput;
  sentiment_agent: SentimentAgentOutput;
  evidence_agent: EvidenceAgentOutput;
  mirror_agent: MirrorAgentOutput;
  
  market_opportunity_score: number;
  investor_suitability_score: number;
  decision_gap: number;
  gap_classification: GapClassification;
  verdict: VerdictType;
  verdict_headline: string;
  verdict_explanation: string;
  
  conditions_to_change: string[];
  evidence_sources: EvidenceSource[];
  
  conflict_level: RiskLevel;
  conflict_detected: boolean;
  conflict_summary: string;
  debate_messages: AgentDebateMessage[];
  debate_summary: string;
  
  confidence_quality: number;
  confidence_quality_explanation: string;
  is_degraded: boolean;
  degraded_notice?: string;
  latency_metrics: Record<string, number>;
}

export interface StockOption {
  symbol: string;
  name: string;
  sector: string;
  price: number;
  change_pct: number;
}
