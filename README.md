# 🪞 MIRROR: Multi-Agent Autonomous Financial Intelligence System

> **IEEE Robotics & Automation Society · VIT Chennai Student Chapter**  
> **HACKVERSE: INTO THE WEB — Sprint 1 (24-Hour Hackathon 2026)**  
> **Problem Statement: PS-01 — Multi-Agent Autonomous Financial Intelligence System for Retail Investors**

---

## 🎯 Executive Summary & Problem Context

India added over **130 million new retail investors in four years (80% under 30)**, yet SEBI's 2024 disclosures reveal that **89% of retail F&O traders lose capital**. 

Retail failure is **not a data availability problem**—NSE price feeds, SEBI corporate filings, and analyst disclosures are all publicly accessible. It is an **infrastructure and decision-intelligence gap**:
- Institutional hedge funds deploy parallel analyst squads across technicals, fundamentals, sentiment, and macro risk before allocating capital.
- Retail investors get a noisy price chart and ungrounded social media tips.

**MIRROR** bridges this gap. It is an autonomous multi-agent intelligence platform that ingests real-time NSE market feeds, queries grounded SEBI Regulation 30 regulatory filings, vectors user behavioral risk signals (FOMO, sector concentration, loss aversion), and synthesizes a **personalized, explainable, and cited investment verdict in under 60 seconds**.

---

## 🏛️ System Architecture & 11-Step Process Pipeline

```
[ 1. LOGIN / AUTHENTICATE ] ───► [ 2. CALIBRATE USER PROFILE ] ───► [ 3. LOAD ACTIVE PORTFOLIO ]
                                                                               │
                                                                               ▼
[ 6. ANALYZE TECHNICALS ] ◄─── [ 5. STREAM REAL-TIME NSE ] ◄─── [ 4. SELECT TARGET ASSET ]
           │                                   │                               │
           ▼                                   ▼                               ▼
    [ Market Agent ]                  [ Sentiment Agent ]              [ Evidence Agent ]
 (Momentum/EMA/Vol Surge)             (News/Macro Polarity)           (SEBI Reg 30/Q4 Filings)
           │                                   │                               │
           └─────────────────────────┬─────────────────────────────────────────┘
                                     │
                                     ▼
                          [ 7. MIRROR DECISION ENGINE ]
                                     │
           ┌─────────────────────────┴─────────────────────────┐
           ▼                                                   ▼
[ 8. USER PORTFOLIO HEADROOM ]                     [ 9. BEHAVIORAL FOMO BIAS ]
 (Sector Limit & Concentration)                     (Impulse Volatility Score)
           │                                                   │
           └─────────────────────────┬─────────────────────────────────────────┘
                                     │
                                     ▼
                 [ 10. DECISION GAP ENGINE: |Opp - Suit| ]
                                     │
                                     ▼
                [ 11. LIVE MISTRAL AI VERDICT SYNTHESIS ]
                 (BUY WITH CAUTION | WAIT FOR CONFIRMATION)
```

---

## 🚀 Key Features & Capabilities

### 1. ⚡ Free Real-Time NSE Market Feed (Zero Synthetic Mock Prices)
- Direct integration with real-time exchange quotes for listed equities (**RELIANCE**, **TCS**, **INFY**, **HDFCBANK**).
- Streams live LTP, 24h change %, volume surge anomalies, 20D EMAs, RSI-14, and MACD crossover states with an in-memory resilient cache.

### 2. 🤖 Mistral AI Cloud LLM Multi-Agent Debate Layer
- Powered by **`mistral-small-latest`** directly via Mistral AI Cloud API (`timeout=60.0s`).
- Dispatches parallel prompt invocations to orchestrate structured, non-blocking debate dialogues between **Market Agent**, **Evidence Agent**, and **Mirror Agent**.
- **Live Decision Verdict Synthesis:** Mistral AI evaluates the mathematical Decision Gap against user portfolio limits to generate bespoke, non-synthetic verdicts (*"BUY WITH CAUTION"*, *"WAIT FOR CONFIRMATION"*, *"AVOID FOR NOW"*).

### 3. 📑 Grounded SEBI Regulatory RAG Engine
- Grounded in audited **SEBI Regulation 30 Material Disclosures**, annual audited reports, and Q4 earnings transcripts.
- Every claim surfaces document type, filing timestamp, relevance score, and verifiable text citations.

### 4. 🪞 Decision Gap Formula & Behavioral Modeling
- Mathematical synthesis calculating divergence between raw market opportunity and individual portfolio suitability:
  $$\text{Market Opportunity} = (0.45 \cdot \text{Market}) + (0.25 \cdot \text{Sentiment}) + (0.30 \cdot \text{Evidence})$$
  $$\text{Investor Suitability} = \text{Base Suitability} - \text{Sector Penalty} - \text{FOMO Penalty}$$
  $$\text{Decision Gap} = |\text{Market Opportunity} - \text{Investor Suitability}|$$

### 5. 🛡️ Graceful Degraded-Mode Fail-Safe
- One-click SEBI feed disruption toggle.
- When filings become unavailable, the system transparently degrades confidence quality (from 85% to 58%), re-weights analytical agents, flags unverified claims, and warns the user without pipeline failure or hallucination.

### 6. 📊 Institutional Fintech Terminal & High-Density Chart Canvas
- **Deep Navy Aesthetic (`#0c1427`)** with a 28-candle dynamic viewport, dashed crosshairs, floating OHLC HUD pill, and timeframe reactivity (`1D`, `1W`, `1M`, `1Y`, `ALL`) linked across Candlestick Charts, Valuation Multiples, and Market Depth Order Books.
- **Glassmorphic Auth Gateway:** Dedicated landing frontpage with live ticker tape, username/password authentication, random persona class allocator, and instant 1-click demo personas.

---

## 📋 Comprehensive PS-01 Compliance Matrix

| PS-01 Requirement / Dependency | Implementation Detail | Status |
| :--- | :--- | :---: |
| **1. Live/Real-time Market Feed** | Live Yahoo Finance NSE equity quotes with volume anomalies, 20D EMA, RSI, MACD. | 🟢 **100% Satisfied** |
| **2. Regulatory Disclosure Corpus** | Grounded SEBI Regulation 30 filings, CAPEX disclosures, and earnings excerpts. | 🟢 **100% Satisfied** |
| **3. Vector Retrieval / Semantic Search** | Chunked RAG pipeline matching queries to cited regulatory documents with relevance scoring. | 🟢 **100% Satisfied** |
| **4. Multi-Agent Parallel Orchestration** | `asyncio.gather` non-blocking parallel execution of 4 autonomous agents in `< 0.1s`. | 🟢 **100% Satisfied** |
| **5. User Behavioral Profiling** | Vectorized capture of sector concentration %, risk tolerance, and FOMO impulse vulnerability. | 🟢 **100% Satisfied** |
| **6. Dynamic Real-time UI & Traces** | React 19 + Framer Motion + Tailwind CSS with live agent traces, conflict meters, and HUD overlay. | 🟢 **100% Satisfied** |
| **7. Multi-Metric Performance Logging** | Tracks 5 live telemetry dials: Parallel Latency, Quality Index, Decision Gap, Portfolio Risk, and Conflict Tier. | 🟢 **100% Satisfied** |
| **8. Degraded-Data Handling** | Gracefully handles offline filings by down-weighting confidence to 58% and displaying visual alerts. | 🟢 **100% Satisfied** |
| **9. Comparative User Demonstration** | Built-in 1-Click Multi-Persona scenario proving 3 opposite verdicts on the exact same stock. | 🟢 **100% Satisfied** |

---

## 🏗️ Multi-Agent Persona Architecture

```
                    ┌──────────────────────────────┐
                    │      TARGET STOCK QUERY      │
                    └──────────────┬───────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
┌──────────────────┐      ┌──────────────────┐      ┌──────────────────┐
│   MARKET AGENT   │      │ SENTIMENT AGENT  │      │  EVIDENCE AGENT  │
│  (Technicals)    │      │  (News / Macro)  │      │(SEBI Filings RAG)│
│ • RSI / MACD     │      │ • Headwinds      │      │ • Reg 30 Filings │
│ • Volume Surges  │      │ • Headline Bias  │      │ • Capex Audits   │
│ • Price Velocity │      │ • Macro Flow     │      │ • Auditor Notes  │
└────────┬─────────┘      └────────┬─────────┘      └────────┬─────────┘
         │                         │                         │
         └─────────────────────────┼─────────────────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────┐
                    │         MIRROR AGENT         │
                    │   (User Profile & Twin)      │
                    │ • Portfolio Concentration    │
                    │ • Sector Exposure Ceiling    │
                    │ • FOMO Behavioral Bias       │
                    └──────────────┬───────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────┐
                    │     LLM DEBATE SYNTHESIS     │
                    │     (Mistral Cloud API)      │
                    └──────────────────────────────┘
```

---

## 🛠️ Tech Stack & Dependencies

### Backend
- **Framework:** FastAPI (Python 3.10+)
- **LLM Engine:** Mistral AI Cloud API (`mistral-small-latest`) with `httpx` async client
- **Market Data Feed:** `yfinance` (Free Live Real-Time NSE Quotes)
- **Concurrency:** Native `asyncio` parallel task gather
- **Data Validation:** Pydantic v2 schemas

### Frontend
- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (Institutional Dark/Light Terminal themes)
- **Motion & Visuals:** Framer Motion animation engine + Lucide React icon library
- **Charts:** Custom 28-Candle High-Density Canvas with live crosshair & OHLC HUD pill

---

## 🚦 Quickstart Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/sriharinikeshss/FinAgent.git
cd FinAgent
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
python -m uvicorn main:app --host 127.0.0.1 --port 8000 --reload
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev -- --host 127.0.0.1 --port 5173
```

### 4. Open in Browser
Visit **`http://127.0.0.1:5173`** to access the Fintech Portal.

---

## 🧑‍💻 User Execution & Judging Walkthrough

1. **Step 1 — Authenticate & Calibrate Profile:**  
   Sign in or register an investor identity on the landing page (e.g., `Aarav Mehta`, `Conservative Profile`) with dynamic portfolio allocation.
2. **Step 2 — Inspect Terminal & Real-Time Exchange Data:**  
   Observe the live price of `RELIANCE` (₹1,302.30), explore the 28-candle chart, switch timeframes (`1D`, `1W`, `1M`, `1Y`, `ALL`), and review key valuation multiples.
3. **Step 3 — Open User Holdings Tree:**  
   Click **`Holdings (3)`** to view the user profile structure tree and active portfolio composition.
4. **Step 4 — Track the 11-Step Process Pipeline:**  
   Click **`Process Pipeline (11 Steps)`** to verify execution tracing from login to live Mistral AI decision synthesis.
5. **Step 5 — Run Multi-Persona Comparison:**  
   Click **`▶ Run Multi-Persona Scenario`** to watch the identical `RELIANCE` stock produce **3 distinct verdicts**:
   - *Conservative:* **WAIT FOR CONFIRMATION**
   - *Moderate:* **MONITOR & STAGGER**
   - *Aggressive:* **BUY WITH CAUTION**
6. **Step 6 — Simulate Degraded Mode:**  
   Click **`SEBI Feed: Active`** $\rightarrow$ switch to **`Unavailable`**. Observe the confidence quality recalibrate from **85%** to **58%** with transparent user notifications.

---

## 👥 Team Ignelix
Developed for **HACKVERSE: INTO THE WEB 2026** by **Team Ignelix**. Open source under the MIT License.
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
