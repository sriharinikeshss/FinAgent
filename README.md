# 🪞 MIRROR — AI Decision Twin
> *"Before predicting the market, understand the investor."*
> 
> *"A good market opportunity does not automatically mean it is a good decision for every investor."*

---

## 📌 Executive Summary & Core Innovation

Most traditional investment AI systems answer one question:
> **"Is this stock good?"** (Market Opportunity)

**MIRROR** introduces a paradigm shift by separating financial intelligence into two distinct evaluations and measuring the difference between them:

1. **Question 1: Market Opportunity** — Is the market condition attractive based on technical momentum, sentiment, and grounded regulatory disclosures?
2. **Question 2: Investor Suitability** — Is *this specific investor* in a suitable financial, concentration, and behavioral position to act on that opportunity?
3. **The Core Metric: ⚡ Decision Gap** = $| \text{Market Opportunity} - \text{Investor Suitability} |$

---

## 🏆 The Key Demo: Personalization in Action

On the exact same stock and market conditions, MIRROR produces three distinct, explainable decisions tailored to the investor profile:

| Investor Profile | Market Opportunity | Investor Suitability | Decision Gap | Final Synthesized Verdict |
| :--- | :---: | :---: | :---: | :--- |
| 🛡 **Conservative** (42% Sector Exp, 78 FOMO) | **82/100** | **38/100** | **44 (HIGH GAP)** | **`WAIT FOR CONFIRMATION`** |
| ⚖ **Moderate** (24% Sector Exp, 45 FOMO) | **82/100** | **62/100** | **20 (LOW GAP)** | **`MONITOR`** |
| 🚀 **Aggressive** (12% Sector Exp, 25 FOMO) | **82/100** | **78/100** | **4 (LOW GAP)** | **`BUY WITH CAUTION`** |

---

## 🏗️ Multi-Agent Architecture

```
                                STOCK INPUT + USER PROFILE
                                            │
        ┌───────────────────────────────────┼───────────────────────────────────┐
        ▼                                   ▼                                   ▼
  [MARKET AGENT]                    [SENTIMENT AGENT]                   [EVIDENCE AGENT]
  • Price Momentum                  • Headline Polarity                 • SEBI Reg 30 Filings
  • RSI / MACD Indicators           • Institutional Catalysts           • Audited Q4 Disclosures
  • Volume Anomalies                • Sector Tailwinds                  • Valuation Multiples
        │                                   │                                   │
        └───────────────────────────────────┼───────────────────────────────────┘
                                            ▼
                                MARKET OPPORTUNITY SCORE
                                       (0 - 100)
                                            │
                                            ▼
                                     [MIRROR AGENT]
                           • Portfolio Sector Exposure (Limits)
                           • Drawdown Concentration Risk
                           • Behavioral FOMO Impulse Index
                                            │
                                            ▼
                                INVESTOR SUITABILITY SCORE
                                       (0 - 100)
                                            │
                                            ▼
                                   DECISION GAP ENGINE
                           |Market Opportunity - Suitability|
                                            │
                                            ▼
                                ⚔ LIVE AGENT DEBATE & VERDICT
                                (Powered by Mistral AI Cloud LLM)
```

---

## 🤖 The Specialized Agents

### 1. 📈 Market Agent (`market_agent.py`)
- Analyzes technical structure, 20-day volume surges, RSI momentum exhaustion, and MACD trend confirmation.
- Output: Classification (`bullish`, `bearish`, `neutral`), score (0–100), and confidence metrics.

### 2. 📰 Sentiment Agent (`sentiment_agent.py`)
- Ingests real-world financial headlines, identifying institutional catalysts, regulatory tailwinds, and macro risks.
- Output: Polarity classification, headline attributions, and weighted sentiment score.

### 3. 📄 Evidence Agent (`evidence_agent.py`)
- Performs grounded retrieval against verified **SEBI Corporate Filings**, quarterly earnings disclosures, and institutional equity research.
- Employs **strict citation attribution** (`filing_id`, relevance score, exact document excerpt).
- Gracefully handles degraded data scenarios when feeds are offline without hallucinating evidence.

### 4. 🪞 Mirror Agent (`mirror_agent.py` — The AI Twin)
- Represents the investor's behavioral psychology and balance sheet constraints.
- Penalizes sector over-concentration (e.g. >20% prudential guidelines) and behavioral FOMO triggers.
- Computes investor suitability and personal risk exposure.

### 5. ⚔ Agent Debate & Synthesis Engine (`decision_engine.py`)
- Orchestrates parallel asynchronous execution (`asyncio.gather()`).
- Employs **Mistral AI (`mistral-small-latest`)** for live cross-agent debate and qualitative conflict resolution.

---

## 🛡️ Problem Statement Requirements Checklist

- [x] **Multi-Agent Architecture**: 4 specialized agents running concurrently.
- [x] **Parallel Execution**: Native `asyncio.gather()` pipeline with latency benchmarks.
- [x] **Explainable Reasoning**: "What Would Change My Mind" panel with actionable conditions.
- [x] **Source Attribution**: Grounded SEBI filing IDs and verified disclosure excerpts.
- [x] **Personalization**: Demonstrated 3 different verdicts on identical market inputs.
- [x] **Degraded Data Handling**: Graceful fallback mode for missing evidence feeds with adjusted confidence scores.
- [x] **Automated Showcase Demo**: Built-in 1-click interactive demo scenario.

---

## 🚀 Quickstart Guide

### Prerequisites
- Python 3.10+
- Node.js 18+

### 1. Backend Setup
```bash
cd backend
py -m pip install -r requirements.txt
py -m uvicorn main:app --host 127.0.0.1 --port 8000
```
*API will run at `http://127.0.0.1:8000` (`/health`, `/stocks`, `/profiles`, `/analyze`)*

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
*Dashboard will run at `http://127.0.0.1:5173`*

### 3. Running Automated Tests
```bash
cd backend
py -m pytest
```

---

## 🔮 Future Real-Data Integrations
- **Brokerage API Hooks**: Zerodha Kite Connect, Upstox API for live portfolio sync.
- **SEBI Real-time EDGAR Feeds**: Live XML/JSON scraping of exchange disclosures.
- **Options Greeks Engine**: Real-time Implied Volatility (IV) skew and open interest (OI) analysis.
