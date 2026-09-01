from pydantic import BaseModel, Field
from typing import List, Optional, Literal, Dict, Any

RiskProfileType = Literal["conservative", "moderate", "aggressive"]
MarketClassification = Literal["bullish", "bearish", "neutral"]
SentimentClassification = Literal["positive", "negative", "neutral"]
EvidenceClassification = Literal["supportive", "concerning", "neutral", "unavailable"]
RiskLevel = Literal["low", "medium", "high"]
GapClassification = Literal["LOW GAP", "MODERATE GAP", "HIGH GAP"]
VerdictType = Literal["BUY WITH CAUTION", "WAIT FOR CONFIRMATION", "AVOID FOR NOW", "MONITOR"]

class UserProfile(BaseModel):
    risk_profile: RiskProfileType = "conservative"
    portfolio_sector_exposure: float = Field(default=42.0, ge=0, le=100, description="Percentage of portfolio in this stock's sector")
    portfolio_concentration: float = Field(default=35.0, ge=0, le=100, description="Top 3 holdings concentration %")
    fomo_risk: float = Field(default=78.0, ge=0, le=100, description="Behavioral FOMO risk score 0-100")
    experience_years: Optional[float] = 2.5
    capital_allocation_pct: Optional[float] = 12.0

class StockAnalysisRequest(BaseModel):
    stock: str = "RELIANCE"
    user_profile: UserProfile
    degraded_mode: bool = False

class EvidenceSource(BaseModel):
    title: str
    doc_type: str  # "Earnings Report", "Regulatory Filing", "Analyst Note", "Auditor Remark"
    excerpt: str
    date: str
    relevance_score: float = 0.85
    filing_id: Optional[str] = None

class MarketAgentOutput(BaseModel):
    agent: str = "market"
    classification: MarketClassification
    score: float = Field(ge=0, le=100)
    confidence: float = Field(ge=0, le=100)
    reasoning: List[str]
    technical_indicators: Dict[str, Any] = {}
    sparkline: List[float] = []

class SentimentAgentOutput(BaseModel):
    agent: str = "sentiment"
    classification: SentimentClassification
    score: float = Field(ge=0, le=100)
    confidence: float = Field(ge=0, le=100)
    reasoning: List[str]
    headlines: List[Dict[str, str]] = []
    sparkline: List[float] = []

class EvidenceAgentOutput(BaseModel):
    agent: str = "evidence"
    classification: EvidenceClassification
    score: float = Field(ge=0, le=100)
    confidence: float = Field(ge=0, le=100)
    reasoning: List[str]
    sources: List[EvidenceSource] = []
    status: str = "complete"  # "complete" or "degraded"
    sparkline: List[float] = []

class MirrorAgentOutput(BaseModel):
    agent: str = "mirror"
    investor_suitability: float = Field(ge=0, le=100)
    behavioral_risk: RiskLevel
    portfolio_risk: RiskLevel
    fomo_level: RiskLevel
    confidence: float = Field(ge=0, le=100)
    reasoning: List[str]
    sparkline: List[float] = []

class AgentDebateMessage(BaseModel):
    agent_name: str
    agent_type: str
    timestamp: str
    message: str
    stance: str  # "optimistic", "cautious", "skeptical", "protective"
    polarity: Literal["bullish", "bearish", "neutral", "risk_warning"]

class AnalysisResponse(BaseModel):
    stock: str
    timestamp: str
    user_profile: UserProfile
    market_agent: MarketAgentOutput
    sentiment_agent: SentimentAgentOutput
    evidence_agent: EvidenceAgentOutput
    mirror_agent: MirrorAgentOutput
    
    # Core Decision Metrics
    market_opportunity_score: float = Field(ge=0, le=100)
    investor_suitability_score: float = Field(ge=0, le=100)
    decision_gap: float = Field(ge=0, le=100)
    gap_classification: GapClassification
    verdict: VerdictType
    verdict_headline: str
    verdict_explanation: str
    
    # Explainability & Governance
    conditions_to_change: List[str]
    evidence_sources: List[EvidenceSource]
    
    # Disagreement & Debate Layer
    conflict_level: RiskLevel
    conflict_detected: bool
    conflict_summary: str
    debate_messages: List[AgentDebateMessage]
    debate_summary: str
    
    # Reliability & Session Diagnostics
    confidence_quality: float = Field(ge=0, le=100)
    confidence_quality_explanation: str
    is_degraded: bool = False
    degraded_notice: Optional[str] = None
    latency_metrics: Dict[str, float] = {}
