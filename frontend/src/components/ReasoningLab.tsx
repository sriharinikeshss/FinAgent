import React from 'react';

export default function ReasoningLab() {
  return (
    <div className="p-gutter md:p-margin-edge max-w-[container-max] mx-auto w-full">
      <div className="mb-stack-lg flex justify-between items-end">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-sm">Multi-Agent Reasoning Lab</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Real-time parallel processing and synthesis of market data.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-surface-container border border-outline-variant rounded text-on-surface font-label-md flex items-center gap-2 hover:bg-surface-container-high transition cursor-pointer">
            <span className="material-symbols-outlined text-sm">pause</span> Pause Agents
          </button>
          <button className="px-4 py-2 bg-primary text-on-primary rounded font-label-md flex items-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition cursor-pointer">
            <span className="material-symbols-outlined text-sm">refresh</span> Force Sync
          </button>
        </div>
      </div>

      {/* Bento Grid: Parallel Agents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md mb-stack-lg">
        {/* Technical Agent (Primary Color Focus) */}
        <div className="glass-card rounded-xl p-card-padding relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <div className="flex justify-between items-start mb-stack-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary bg-primary-fixed p-1 rounded">query_stats</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Technical Agent</h3>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">more_horiz</span>
          </div>
          <div className="space-y-stack-md">
            <div className="flex justify-between items-center border-b border-surface-container pb-2">
              <span className="font-label-md text-label-md text-on-surface-variant">RSI (14)</span>
              <span className="font-body-md text-body-md font-semibold text-primary">72.4 <span className="material-symbols-outlined text-sm text-error align-middle">arrow_downward</span></span>
            </div>
            <div className="flex justify-between items-center border-b border-surface-container pb-2">
              <span className="font-label-md text-label-md text-on-surface-variant">MACD</span>
              <span className="font-body-md text-body-md font-semibold text-secondary">Bullish Cross</span>
            </div>
            <div className="mt-4">
              <span className="font-label-md text-label-md text-primary block mb-1">Reasoning Stream:</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container p-3 rounded border border-outline-variant/30 font-mono text-xs h-24 overflow-y-auto">
                &gt; Analyzing moving averages...<br />
                &gt; 50-day crossing above 200-day.<br />
                &gt; Golden cross confirmed.<br />
                &gt; Volume profile supports breakout at $245 level. Resistance anticipated at $260.
              </p>
            </div>
          </div>
        </div>

        {/* Fundamental Agent (Secondary Color Focus) */}
        <div className="glass-card rounded-xl p-card-padding relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
          <div className="flex justify-between items-start mb-stack-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary bg-secondary-fixed p-1 rounded">account_balance</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Fundamental Agent</h3>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary">more_horiz</span>
          </div>
          <div className="space-y-stack-md">
            <div className="flex justify-between items-center border-b border-surface-container pb-2">
              <span className="font-label-md text-label-md text-on-surface-variant">P/E Ratio</span>
              <span className="font-body-md text-body-md font-semibold text-on-surface">45.2</span>
            </div>
            <div className="flex justify-between items-center border-b border-surface-container pb-2">
              <span className="font-label-md text-label-md text-on-surface-variant">Q3 Revenue</span>
              <span className="font-body-md text-body-md font-semibold text-primary">+12% YoY <span className="material-symbols-outlined text-sm align-middle">arrow_upward</span></span>
            </div>
            <div className="mt-4">
              <span className="font-label-md text-label-md text-secondary block mb-1">Reasoning Stream:</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container p-3 rounded border border-outline-variant/30 font-mono text-xs h-24 overflow-y-auto">
                &gt; Parsing 10-Q filing...<br />
                &gt; Operating margins improved by 200bps.<br />
                &gt; Cash flow remains strong.<br />
                &gt; Forward guidance slightly tempered due to macro headwinds in European markets.
              </p>
            </div>
          </div>
        </div>

        {/* Sentiment Agent (Tertiary Color Focus) */}
        <div className="glass-card rounded-xl p-card-padding relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-tertiary"></div>
          <div className="flex justify-between items-start mb-stack-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-1 rounded">forum</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Sentiment Agent</h3>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-tertiary">more_horiz</span>
          </div>
          <div className="space-y-stack-md">
            <div className="flex justify-between items-center border-b border-surface-container pb-2">
              <span className="font-label-md text-label-md text-on-surface-variant">Social Volume</span>
              <span className="font-body-md text-body-md font-semibold text-on-surface">High (8.5k/hr)</span>
            </div>
            <div className="flex justify-between items-center border-b border-surface-container pb-2">
              <span className="font-label-md text-label-md text-on-surface-variant">News Polarity</span>
              <span className="font-body-md text-body-md font-semibold text-error">Slightly Negative</span>
            </div>
            <div className="mt-4">
              <span className="font-label-md text-label-md text-tertiary block mb-1">Reasoning Stream:</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container p-3 rounded border border-outline-variant/30 font-mono text-xs h-24 overflow-y-auto">
                &gt; Scraping FinTwit &amp; Reddit...<br />
                &gt; Retail sentiment extremely bullish.<br />
                &gt; Institutional news flow focuses on regulatory risks.<br />
                &gt; Divergence detected between retail and institutional sentiment scores.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Orchestrator Synthesis */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-card-padding shadow-sm relative">
        <div className="absolute -top-3 left-6 bg-primary text-on-primary px-3 py-1 rounded-full font-label-md text-xs shadow-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">memory</span> Orchestrator Output
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          <div className="md:col-span-2">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Synthesized Strategy: Hold with Trailing Stop</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
              The Orchestrator detects conflicting signals. While the <span className="text-primary font-semibold">Technical Agent</span> indicates a strong breakout, the <span className="text-tertiary font-semibold">Sentiment Agent</span> highlights rising institutional caution. The <span className="text-secondary font-semibold">Fundamental Agent</span> remains neutral. 
            </p>
            <div className="bg-surface-container-low p-4 rounded border border-outline-variant/50">
              <p className="font-body-sm text-body-sm text-on-surface font-mono">
                Action: Maintain current position.<br />
                Stop Loss: Adjust to $238.50.<br />
                Confidence Score: 68%
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border-l border-outline-variant/30 pl-stack-lg">
            <div className="text-center mb-4">
              <span className="font-label-md text-label-md text-on-surface-variant block uppercase tracking-wider">Consensus Score</span>
              <span className="font-headline-xl text-headline-xl text-primary font-bold">6.8<span className="text-headline-sm text-on-surface-variant">/10</span></span>
            </div>
            <button className="w-full py-2 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition cursor-pointer">
              Execute Recommendation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
