import json
import os
from typing import Dict, List, Any, Optional

DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "data")
EVIDENCE_FILE = os.path.join(DATA_DIR, "evidence_documents.json")

# Deterministic simulated market state
STOCKS_DATA = {
    "RELIANCE": {
        "name": "Reliance Industries Limited",
        "sector": "Energy & Conglomerate",
        "price": 2985.40,
        "change_pct": 2.45,
        "volume_surge": "1.85x 20D Avg",
        "rsi_14": 68.4,
        "macd_status": "Bullish Crossover",
        "moving_averages": "Above 20 & 50 EMA",
        "volatility_tier": "Moderate",
        "technical_summary": "Strong upside price breakout on elevated institutional volume; holding above critical resistance at 2,940.",
        "sparkline": [2860, 2875, 2890, 2885, 2920, 2950, 2985],
        "headlines": [
            {"source": "Economic Times", "title": "Reliance accelerates renewable Capex with multi-GW solar rollout", "impact": "positive"},
            {"source": "LiveMint", "title": "Jio adds 3.8M active subscribers in monthly TRAI disclosure", "impact": "positive"},
            {"source": "Bloomberg India", "title": "Global crude refining spreads firm up heading into summer demand peak", "impact": "positive"},
            {"source": "Reuters", "title": "Valuation multiples approach upper bound of 3-year historical average", "impact": "cautious"}
        ]
    },
    "TCS": {
        "name": "Tata Consultancy Services Ltd",
        "sector": "Information Technology",
        "price": 3840.15,
        "change_pct": 0.85,
        "volume_surge": "1.10x 20D Avg",
        "rsi_14": 54.2,
        "macd_status": "Neutral Convergence",
        "moving_averages": "Testing 50 EMA",
        "volatility_tier": "Low",
        "technical_summary": "Consolidating near 50-day EMA with resilient margin defence and steady accumulation.",
        "sparkline": [3780, 3810, 3795, 3820, 3815, 3830, 3840],
        "headlines": [
            {"source": "Business Standard", "title": "TCS bags $1B multi-year cloud transformation contract from UK insurer", "impact": "positive"},
            {"source": "Financial Express", "title": "Attrition hits 6-quarter low as talent utilization reaches 85%", "impact": "positive"},
            {"source": "CNBC-TV18", "title": "North American BFSI enterprise tech discretionary budgets stabilize", "impact": "neutral"}
        ]
    },
    "INFY": {
        "name": "Infosys Limited",
        "sector": "Information Technology",
        "price": 1495.60,
        "change_pct": -0.65,
        "volume_surge": "0.95x 20D Avg",
        "rsi_14": 46.8,
        "macd_status": "Mild Bearish Divergence",
        "moving_averages": "Below 20 EMA",
        "volatility_tier": "Moderate",
        "technical_summary": "Range-bound trading with resistance at 1,530; waiting for volume catalyst following guidance update.",
        "sparkline": [1520, 1515, 1500, 1510, 1490, 1505, 1495],
        "headlines": [
            {"source": "Moneycontrol", "title": "Infosys expands Topaz generative AI suite for European banking clients", "impact": "positive"},
            {"source": "NDTV Profit", "title": "Management notes cautious client procurement cycles in discretionary consulting", "impact": "cautious"},
            {"source": "Reuters", "title": "Large deal pipeline remains healthy at $4.5B with strong renewal rates", "impact": "neutral"}
        ]
    },
    "HDFCBANK": {
        "name": "HDFC Bank Limited",
        "sector": "Banking & Financial Services",
        "price": 1540.80,
        "change_pct": 1.70,
        "volume_surge": "1.60x 20D Avg",
        "rsi_14": 62.1,
        "macd_status": "Bullish Reversal",
        "moving_averages": "Reclaimed 200 EMA",
        "volatility_tier": "Low-Moderate",
        "technical_summary": "Decisive reversal off cyclical support; institutional accumulation evident as credit-deposit ratio normalizes.",
        "sparkline": [1460, 1475, 1490, 1510, 1505, 1525, 1540],
        "headlines": [
            {"source": "Economic Times", "title": "HDFC Bank deposit growth outpaces credit expansion for second straight quarter", "impact": "positive"},
            {"source": "Business Today", "title": "FII buying resumes in banking heavyweights following valuation reset", "impact": "positive"},
            {"source": "LiveMint", "title": "NIMs stabilize above 3.4% as high-cost legacy borrowings mature", "impact": "positive"}
        ]
    }
}

USER_PROFILES = {
    "conservative": {
        "risk_profile": "conservative",
        "portfolio_sector_exposure": 42.0,
        "portfolio_concentration": 35.0,
        "fomo_risk": 78.0,
        "experience_years": 1.5,
        "capital_allocation_pct": 10.0,
        "label": "Conservative Investor",
        "description": "Capital preservation priority, sensitive to drawdown risk, elevated behavioral FOMO vulnerability."
    },
    "moderate": {
        "risk_profile": "moderate",
        "portfolio_sector_exposure": 24.0,
        "portfolio_concentration": 20.0,
        "fomo_risk": 45.0,
        "experience_years": 4.0,
        "capital_allocation_pct": 20.0,
        "label": "Moderate Investor",
        "description": "Balanced growth and risk control, diversified sector allocations, measured decision triggers."
    },
    "aggressive": {
        "risk_profile": "aggressive",
        "portfolio_sector_exposure": 12.0,
        "portfolio_concentration": 15.0,
        "fomo_risk": 25.0,
        "experience_years": 7.0,
        "capital_allocation_pct": 35.0,
        "label": "Aggressive Investor",
        "description": "High risk tolerance, low current sector saturation, disciplined momentum execution."
    }
}

class DataService:
    @staticmethod
    def get_stock_data(stock: str) -> Dict[str, Any]:
        symbol = stock.upper().strip()
        if symbol not in STOCKS_DATA:
            symbol = "RELIANCE"
        return STOCKS_DATA[symbol]

    @staticmethod
    def get_all_stocks() -> List[Dict[str, Any]]:
        return [
            {
                "symbol": k,
                "name": v["name"],
                "sector": v["sector"],
                "price": v["price"],
                "change_pct": v["change_pct"]
            }
            for k, v in STOCKS_DATA.items()
        ]

    @staticmethod
    def get_evidence_documents(stock: str) -> List[Dict[str, Any]]:
        symbol = stock.upper().strip()
        if not os.path.exists(EVIDENCE_FILE):
            return []
        try:
            with open(EVIDENCE_FILE, "r", encoding="utf-8-sig") as f:
                data = json.load(f)
                return data.get(symbol, [])
        except Exception:
            return []

    @staticmethod
    def get_profile_presets() -> Dict[str, Any]:
        return USER_PROFILES
