import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Newspaper,
  FileText,
  UserCheck,
  Zap,
  AlertTriangle,
  Sparkles,
  Shield,
  Scale,
  Rocket,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Play,
  Radio,
  Layers
} from 'lucide-react';
import type {
  AnalysisResponse,
  StockOption,
  UserProfile,
  RiskProfileType
} from './types';
import { analyzeStock, fetchProfilePresets, fetchStocks } from './lib/api';

export default function App() {
  const [selectedStock, setSelectedStock] = useState<string>('RELIANCE');
  const [selectedRisk, setSelectedRisk] = useState<RiskProfileType>('conservative');
  const [stocks, setStocks] = useState<StockOption[]>([]);
  const [presets, setPresets] = useState<Record<string, UserProfile>>({});
  const [degradedMode, setDegradedMode] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [analyzingAgents, setAnalyzingAgents] = useState<{ [key: string]: boolean }>({
    market: false,
    sentiment: false,
    evidence: false,
    mirror: false
  });
  const [isDemoRunning, setIsDemoRunning] = useState<boolean>(false);
  const [demoStep, setDemoStep] = useState<number>(0);
  const [expandedSection, setExpandedSection] = useState<string | null>('mind');

  // Fetch initial stocks and presets
  useEffect(() => {
    async function init() {
      const [fetchedStocks, fetchedPresets] = await Promise.all([
        fetchStocks(),
        fetchProfilePresets()
      ]);
      setStocks(fetchedStocks);
      setPresets(fetchedPresets);
    }
    init();
  }, []);

  // Run analysis trigger
  const runAnalysis = useCallback(async (
    stockSymbol = selectedStock,
    riskType = selectedRisk,
    degraded = degradedMode
  ) => {
    setLoading(true);
    setAnalyzingAgents({ market: true, sentiment: true, evidence: true, mirror: true });

    try {
      const currentProfile = presets[riskType] || {
        risk_profile: riskType,
        portfolio_sector_exposure: riskType === 'conservative' ? 42 : riskType === 'moderate' ? 24 : 12,
        portfolio_concentration: riskType === 'conservative' ? 35 : riskType === 'moderate' ? 20 : 15,
        fomo_risk: riskType === 'conservative' ? 78 : riskType === 'moderate' ? 45 : 25
      };

      const result = await analyzeStock(stockSymbol, currentProfile, degraded);
      setAnalysis(result);
    } catch (err) {
      console.error('Analysis error:', err);
    } finally {
      setAnalyzingAgents({ market: false, sentiment: false, evidence: false, mirror: false });
      setLoading(false);
    }
  }, [selectedStock, selectedRisk, degradedMode, presets]);

  // Trigger when stock or risk changes (if not in automated demo)
  useEffect(() => {
    if (Object.keys(presets).length > 0 && !isDemoRunning) {
      runAnalysis(selectedStock, selectedRisk, degradedMode);
    }
  }, [selectedStock, selectedRisk, degradedMode, presets, isDemoRunning, runAnalysis]);

  // Demo Runner
  const handleRunDemoScenario = async () => {
    setIsDemoRunning(true);
    setSelectedStock('RELIANCE');

    const steps: RiskProfileType[] = ['conservative', 'moderate', 'aggressive'];
    
    for (let i = 0; i < steps.length; i++) {
      const stepRisk = steps[i];
      setDemoStep(i + 1);
      setSelectedRisk(stepRisk);
      await runAnalysis('RELIANCE', stepRisk, false);
      await new Promise((r) => setTimeout(r, 2600));
    }

    setDemoStep(4);
    await new Promise((r) => setTimeout(r, 2000));
    setIsDemoRunning(false);
  };

  const currentStockData = stocks.find((s) => s.symbol === selectedStock) || {
    symbol: selectedStock,
    name: 'Reliance Industries Ltd',
    price: 2985.40,
    change_pct: 2.45
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-blue-100">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">MIRROR</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 px-2 py-0.5 rounded-md">
                AI Decision Twin
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              "Before predicting the market, understand the investor."
            </p>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-4">
          {/* Stock Selector */}
          <div className="flex items-center gap-2 bg-slate-100/90 border border-slate-200 rounded-xl p-1 shadow-inner">
            <span className="text-xs font-semibold text-slate-500 pl-2">Stock:</span>
            <select
              value={selectedStock}
              onChange={(e) => setSelectedStock(e.target.value)}
              disabled={isDemoRunning}
              className="bg-white text-slate-800 text-sm font-semibold rounded-lg px-3 py-1.5 border border-slate-200 shadow-xs outline-none focus:ring-2 focus:ring-blue-500/30 cursor-pointer"
            >
              {stocks.length > 0 ? (
                stocks.map((stk) => (
                  <option key={stk.symbol} value={stk.symbol}>
                    {stk.symbol} — ₹{stk.price.toFixed(2)} ({stk.change_pct > 0 ? '+' : ''}{stk.change_pct}%)
                  </option>
                ))
              ) : (
                <>
                  <option value="RELIANCE">RELIANCE — ₹2985.40 (+2.45%)</option>
                  <option value="TCS">TCS — ₹3840.15 (+0.85%)</option>
                  <option value="INFY">INFY — ₹1495.60 (-0.65%)</option>
                  <option value="HDFCBANK">HDFCBANK — ₹1540.80 (+1.70%)</option>
                </>
              )}
            </select>
          </div>

          {/* Investor Profile Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100/90 border border-slate-200 rounded-xl p-1 shadow-inner">
            <button
              onClick={() => setSelectedRisk('conservative')}
              disabled={isDemoRunning}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                selectedRisk === 'conservative'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              Conservative
            </button>
            <button
              onClick={() => setSelectedRisk('moderate')}
              disabled={isDemoRunning}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                selectedRisk === 'moderate'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              Moderate
            </button>
            <button
              onClick={() => setSelectedRisk('aggressive')}
              disabled={isDemoRunning}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                selectedRisk === 'aggressive'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Rocket className="w-3.5 h-3.5" />
              Aggressive
            </button>
          </div>

          {/* Degraded Mode Toggle */}
          <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
            <button
              onClick={() => setDegradedMode(!degradedMode)}
              className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-all ${
                degradedMode
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title="Toggle graceful degradation of Evidence Feed"
            >
              <Radio className={`w-3.5 h-3.5 ${degradedMode ? 'text-amber-600 animate-pulse' : 'text-emerald-500'}`} />
              <span>Evidence Feed:</span>
              <span className={`font-semibold ${degradedMode ? 'text-amber-700' : 'text-emerald-600'}`}>
                {degradedMode ? 'Unavailable' : 'Active'}
              </span>
            </button>
          </div>

          {/* Refresh / Re-analyze */}
          <button
            onClick={() => runAnalysis()}
            disabled={loading || isDemoRunning}
            className="flex items-center gap-1.5 bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-sm hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Analyze New
          </button>
        </div>
      </header>

      {/* Main Grid Workspace */}
      <main className="flex-1 p-6 max-w-[1680px] w-full mx-auto grid grid-cols-12 gap-6">
        {/* LEFT COLUMN: Navigation & Core Status (Cols 1-3) */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          {/* Agent Status Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Agent Status</h3>
              <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                4 Active
              </span>
            </div>

            <div className="space-y-3">
              {/* Market Agent Status */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Market Agent</div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {analyzingAgents.market ? 'Analyzing...' : analysis?.market_agent.classification.toUpperCase() || 'Bullish'}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2 py-1 rounded-md">
                  {analysis?.market_agent.score || 85}/100
                </span>
              </div>

              {/* Sentiment Agent Status */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    <Newspaper className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Sentiment Agent</div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {analyzingAgents.sentiment ? 'Analyzing...' : analysis?.sentiment_agent.classification.toUpperCase() || 'Positive'}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2 py-1 rounded-md">
                  {analysis?.sentiment_agent.score || 72}/100
                </span>
              </div>

              {/* Evidence Agent Status */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${degradedMode ? 'bg-amber-100 text-amber-700' : 'bg-amber-100 text-amber-700'} flex items-center justify-center font-bold`}>
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Evidence Agent</div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {degradedMode ? 'Degraded Data' : analyzingAgents.evidence ? 'Searching Corpus...' : analysis?.evidence_agent.classification.toUpperCase() || 'Supportive'}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2 py-1 rounded-md">
                  {degradedMode ? 'N/A' : `${analysis?.evidence_agent.score || 65}/100`}
                </span>
              </div>

              {/* Mirror Agent Status */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-purple-50/70 border border-purple-100 hover:border-purple-200 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-200 text-purple-800 flex items-center justify-center font-bold">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-purple-950 flex items-center gap-1">
                      Mirror Agent
                      <Sparkles className="w-3 h-3 text-purple-600" />
                    </div>
                    <div className="text-[11px] text-purple-700 font-medium capitalize">
                      {selectedRisk} Twin Active
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-purple-900 bg-white border border-purple-200 px-2 py-1 rounded-md">
                  {analysis?.investor_suitability_score || 38}/100
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>Parallel Sync: asyncio.gather</span>
              <span className="text-slate-600 font-semibold">{analysis?.latency_metrics.parallel_agent_seconds || '0.07'}s total</span>
            </div>
          </div>

          {/* Session Metrics */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Session Risk Metrics</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-[11px] font-semibold text-slate-500">Sector Exposure</div>
                <div className="text-lg font-black text-slate-800 mt-0.5">
                  {analysis?.user_profile.portfolio_sector_exposure || 42}%
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">Concentration Limit 20%</div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="text-[11px] font-semibold text-slate-500">Behavioral FOMO</div>
                <div className={`text-lg font-black mt-0.5 ${
                  (analysis?.user_profile.fomo_risk || 0) > 60 ? 'text-rose-600' : 'text-slate-800'
                }`}>
                  {analysis?.user_profile.fomo_risk || 78}/100
                </div>
                <div className="text-[10px] text-slate-400 font-medium mt-1">Impulse Vulnerability</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
              <div className="flex items-center justify-between text-xs font-bold text-blue-900 mb-1">
                <span>Confidence Quality</span>
                <span>{analysis?.confidence_quality || 60}%</span>
              </div>
              <div className="w-full bg-blue-200/60 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-700"
                  style={{ width: `${analysis?.confidence_quality || 60}%` }}
                />
              </div>
              <p className="text-[11px] text-blue-700 font-medium mt-2 leading-relaxed">
                {analysis?.confidence_quality_explanation || 'Moderate agent agreement and verified evidence coverage across all filings.'}
              </p>
            </div>
          </div>

          {/* Inspirational Tagline Box */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 p-5 text-white shadow-md relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="text-2xl font-serif text-blue-300/60 mb-1">“</div>
            <p className="text-sm font-medium text-slate-200 italic leading-relaxed">
              The market isn't the only thing you need to analyze. A good market opportunity does not automatically mean it is a good decision for every investor.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-blue-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              MIRROR AI Twin Framework
            </div>
          </div>
        </div>

        {/* CENTER COLUMN: THE CORE CENTERPIECE (Cols 4-8) */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          {/* Visual Centerpiece Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 relative overflow-hidden">
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Decision Twin Intelligence
              </span>
              <h2 className="text-xl font-black text-slate-900 mt-2">
                {currentStockData.name} ({selectedStock})
              </h2>
            </div>

            {/* THE CENTERPIECE RADIAL / FLOW VISUAL */}
            <div className="relative py-4 flex flex-col items-center">
              {/* TOP: Market Opportunity */}
              <motion.div
                key={`market-${analysis?.market_opportunity_score}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-xs bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 text-center shadow-xs"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 flex items-center justify-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Market Opportunity
                </div>
                <div className="text-4xl font-black text-emerald-600 tracking-tight my-1">
                  {analysis?.market_opportunity_score || 82}
                  <span className="text-base font-semibold text-emerald-400">/100</span>
                </div>
                <div className="text-[11px] font-medium text-emerald-700">
                  {analysis?.market_agent.classification.toUpperCase()} • Momentum & Filings
                </div>
              </motion.div>

              {/* CENTER: The Decision Gap (Hero Highlight) */}
              <div className="my-4 relative flex flex-col items-center">
                <div className="w-0.5 h-6 bg-gradient-to-b from-emerald-300 to-rose-300" />
                
                <motion.div
                  key={`gap-${analysis?.decision_gap}-${selectedRisk}`}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className={`px-6 py-3.5 rounded-2xl border-2 shadow-lg flex flex-col items-center ${
                    (analysis?.decision_gap || 0) > 40
                      ? 'bg-rose-50/90 border-rose-400/80 text-rose-900 shadow-rose-500/10'
                      : (analysis?.decision_gap || 0) > 20
                      ? 'bg-amber-50/90 border-amber-400/80 text-amber-900 shadow-amber-500/10'
                      : 'bg-emerald-50/90 border-emerald-400/80 text-emerald-900 shadow-emerald-500/10'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider">
                    <Zap className="w-4 h-4 fill-current" />
                    Decision Gap
                  </div>
                  <div className="text-3xl font-black tracking-tight my-0.5">
                    {analysis?.decision_gap ?? 39}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/80 border border-current">
                    {analysis?.gap_classification || 'HIGH GAP'}
                  </span>
                </motion.div>

                <div className="w-0.5 h-6 bg-gradient-to-b from-rose-300 to-purple-300" />
              </div>

              {/* BOTTOM: Investor Suitability */}
              <motion.div
                key={`investor-${analysis?.investor_suitability_score}-${selectedRisk}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-xs bg-purple-50/80 border border-purple-200 rounded-2xl p-4 text-center shadow-xs"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-purple-700 flex items-center justify-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5" />
                  Investor Suitability
                </div>
                <div className="text-4xl font-black text-purple-700 tracking-tight my-1">
                  {analysis?.investor_suitability_score ?? 43}
                  <span className="text-base font-semibold text-purple-400">/100</span>
                </div>
                <div className="text-[11px] font-medium text-purple-800 capitalize">
                  {selectedRisk} Profile ({analysis?.user_profile.portfolio_sector_exposure}% Sector Exp.)
                </div>
              </motion.div>
            </div>

            {/* Verdict Callout Banner */}
            <motion.div
              key={`verdict-${analysis?.verdict}`}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-6 p-4 rounded-xl bg-slate-900 text-white shadow-md border border-slate-800"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Synthesized Decision Verdict
                </span>
                <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                  analysis?.verdict === 'BUY WITH CAUTION'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30'
                    : analysis?.verdict === 'MONITOR'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'
                }`}>
                  {analysis?.verdict || 'WAIT FOR CONFIRMATION'}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {analysis?.verdict_explanation || 'The market appears attractive, but your current portfolio exposure and behavioral risk create a significant Decision Gap.'}
              </p>
            </motion.div>
          </div>

          {/* What Would Change My Mind Panel */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === 'mind' ? null : 'mind')}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/60 transition-colors"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-slate-900">What Would Change My Mind?</span>
              </div>
              {expandedSection === 'mind' ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {expandedSection === 'mind' && (
              <div className="px-5 pb-5 pt-1 space-y-2 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-2">
                  Conditions required for the AI Twin to upgrade suitability and confirm action:
                </p>
                {analysis?.conditions_to_change.map((condition, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{condition}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Evidence Grounding Sources */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-600" />
                <h3 className="text-sm font-bold text-slate-900">Evidence Used</h3>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                {degradedMode ? 'Feed Disabled' : `${analysis?.evidence_sources.length || 3} Grounded Documents`}
              </span>
            </div>

            {degradedMode ? (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1">
                <div className="flex items-center gap-2 font-bold text-xs">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  EVIDENCE FEED UNAVAILABLE
                </div>
                <p className="text-xs text-amber-700">
                  Analysis is running under graceful degradation mode. Missing filings are not fabricated; confidence is adjusted.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5">
                {analysis?.evidence_sources.map((src, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 transition-all text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-800 line-clamp-1">{src.title}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-md shrink-0">
                        {src.doc_type}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed line-clamp-2">
                      "{src.excerpt}"
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60 text-[10px] text-slate-400">
                      <span>Filing ID: {src.filing_id || 'SEBI-DOC-2024'}</span>
                      <span>Relevance: {(src.relevance_score * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Detailed Agent Analysis & Debate & Demo (Cols 9-12) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Agent Debate & Conflict Detection */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  ⚔ Live Agent Debate
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-md">
                  Mistral Small LLM
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                  analysis?.conflict_level === 'high'
                    ? 'bg-rose-50 text-rose-700 border-rose-200'
                    : analysis?.conflict_level === 'medium'
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  Conflict: {(analysis?.conflict_level || 'medium').toUpperCase()}
                </span>
              </div>
            </div>

            {analysis?.conflict_detected && (
              <div className="mb-3 p-3 bg-amber-50/90 border border-amber-200/90 rounded-xl text-xs text-amber-950 font-medium leading-relaxed">
                <div className="font-bold text-amber-800 text-[11px] mb-0.5">⚠ CROSS-AGENT DISAGREEMENT DETECTED:</div>
                {analysis.conflict_summary}
              </div>
            )}

            {/* Timeline Debate Entries */}
            <div className="space-y-3.5 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
              {analysis?.debate_messages.map((msg, idx) => (
                <div key={idx} className="relative pl-8 text-xs">
                  <div className={`absolute left-2 top-2.5 w-3.5 h-3.5 rounded-full border-2 bg-white shadow-xs ${
                    msg.polarity === 'bullish' ? 'border-emerald-500 bg-emerald-50' :
                    msg.polarity === 'bearish' ? 'border-amber-500 bg-amber-50' : 'border-purple-600 bg-purple-50'
                  }`} />
                  
                  <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                    <span className={`flex items-center gap-1.5 ${
                      msg.agent_name.includes('MARKET') ? 'text-emerald-800' :
                      msg.agent_name.includes('EVIDENCE') ? 'text-amber-800' : 'text-purple-900'
                    }`}>
                      {msg.agent_name}
                      <span className="text-[9px] font-medium text-slate-400">({msg.agent_type})</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{msg.timestamp}</span>
                  </div>

                  <div className={`p-3 rounded-xl border leading-relaxed shadow-2xs ${
                    msg.agent_name.includes('MARKET') ? 'bg-emerald-50/40 border-emerald-100 text-slate-800' :
                    msg.agent_name.includes('EVIDENCE') ? 'bg-amber-50/40 border-amber-100 text-slate-800' :
                    'bg-purple-50/50 border-purple-100 text-slate-800 font-medium'
                  }`}>
                    "{msg.message}"
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Autonomous Debate Synthesis</span>
              <span className="text-slate-600 font-semibold">Real-time Cross-Critique</span>
            </div>
          </div>

          {/* Interactive Live Demo Scenario Box */}
          <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-sky-400 fill-sky-400" />
                <h3 className="text-sm font-bold text-white">Live Demo Scenario</h3>
              </div>
              <span className="text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30 px-2 py-0.5 rounded-full">
                Hackathon Showcase
              </span>
            </div>

            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Watch identical market conditions produce 3 completely different personalized decisions based on the investor profile:
            </p>

            <button
              onClick={handleRunDemoScenario}
              disabled={isDemoRunning}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs shadow-md shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              {isDemoRunning ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Running Scenario (Step {demoStep}/3)...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Run MIRROR Scenario
                </>
              )}
            </button>

            {/* Scenario Step Visualizer */}
            <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className={`p-2 rounded-lg border transition-all ${
                selectedRisk === 'conservative'
                  ? 'bg-blue-500/20 border-blue-400 text-white font-bold'
                  : 'bg-slate-800/50 border-slate-700 text-slate-400'
              }`}>
                <div>1. Conservative</div>
                <div className="text-[9px] text-rose-400 font-semibold mt-0.5">Wait / Gap: 44</div>
              </div>
              <div className={`p-2 rounded-lg border transition-all ${
                selectedRisk === 'moderate'
                  ? 'bg-blue-500/20 border-blue-400 text-white font-bold'
                  : 'bg-slate-800/50 border-slate-700 text-slate-400'
              }`}>
                <div>2. Moderate</div>
                <div className="text-[9px] text-amber-400 font-semibold mt-0.5">Monitor / Gap: 20</div>
              </div>
              <div className={`p-2 rounded-lg border transition-all ${
                selectedRisk === 'aggressive'
                  ? 'bg-blue-500/20 border-blue-400 text-white font-bold'
                  : 'bg-slate-800/50 border-slate-700 text-slate-400'
              }`}>
                <div>3. Aggressive</div>
                <div className="text-[9px] text-emerald-400 font-semibold mt-0.5">Buy / Gap: 4</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

