import React from 'react';

export default function ResearchReport() {
  return (
    <div className="p-gutter max-w-[container-max] mx-auto overflow-x-hidden">
      {/* Header Section */}
      <div className="mb-stack-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-tertiary-container/10 text-tertiary font-label-md text-label-md rounded border border-tertiary/20">TICKER: HDFCBANK</span>
            <span className="px-2 py-1 bg-secondary-container/10 text-secondary font-label-md text-label-md rounded border border-secondary/20">NSE: LARGE CAP</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-1">Deep Dive Structural Analysis</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Generated: 2023-10-27 14:00 UTC | Confidence: High</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-colors flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">download</span> Export PDF
          </button>
          <button className="px-4 py-2 rounded bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm cursor-pointer">
            Execute Trade Strategy
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md">
        {/* Executive Rationale (Span 8) */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-card-padding shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <div className="flex justify-between items-start mb-stack-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">lightbulb</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Executive Rationale</h3>
            </div>
            <button className="text-outline hover:text-on-surface cursor-pointer"><span className="material-symbols-outlined">more_horiz</span></button>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
            HDFC Bank demonstrates robust structural integrity post-merger, despite near-term NIM compression. The core deposit growth trajectory aligns with historical averages, mitigating liquidity concerns raised in the previous quarter. Strategic loan book rebalancing towards higher-yield retail segments is evident in recent filings.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-surface-container-low rounded-lg border border-surface-container">
              <p className="font-label-md text-label-md text-outline mb-1">PRICE TARGET (12M)</p>
              <div className="flex items-end gap-2">
                <span className="font-headline-lg text-headline-lg text-on-surface font-bold">₹1,850</span>
                <span className="font-body-sm text-body-sm text-secondary-fixed-dim bg-secondary-fixed-dim/10 px-2 py-0.5 rounded text-[12px] mb-1 flex items-center">
                  <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +15.2%
                </span>
              </div>
            </div>
            <div className="p-4 bg-surface-container-low rounded-lg border border-surface-container">
              <p className="font-label-md text-label-md text-outline mb-1">CONVICTION SCORE</p>
              <div className="flex items-center gap-3">
                <span className="font-headline-lg text-headline-lg text-primary font-bold">8.4</span>
                <span className="font-label-md text-label-md text-on-surface-variant">/ 10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Analysis (Span 4) */}
        <div className="md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant p-card-padding shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-error"></div>
          <div className="flex justify-between items-start mb-stack-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-error">warning</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Risk Matrix</h3>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="pb-3 border-b border-surface-container">
              <div className="flex justify-between items-center mb-1">
                <span className="font-label-md text-label-md text-on-surface font-bold">NIM Compression</span>
                <span className="font-label-md text-label-md text-error bg-error/10 px-2 py-0.5 rounded">HIGH</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                <div className="bg-error h-1.5 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </li>
            <li className="pb-3 border-b border-surface-container">
              <div className="flex justify-between items-center mb-1">
                <span className="font-label-md text-label-md text-on-surface font-bold">Regulatory Friction</span>
                <span className="font-label-md text-label-md text-tertiary bg-tertiary/10 px-2 py-0.5 rounded">MED</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                <div className="bg-tertiary h-1.5 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center mb-1">
                <span className="font-label-md text-label-md text-on-surface font-bold">Asset Quality</span>
                <span className="font-label-md text-label-md text-outline bg-outline/10 px-2 py-0.5 rounded">LOW</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5">
                <div className="bg-outline h-1.5 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* Grounded Evidence (Span 12) */}
        <div className="md:col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant p-card-padding shadow-sm mt-stack-sm relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
          <div className="flex items-center gap-2 mb-stack-md">
            <span className="material-symbols-outlined text-secondary">fact_check</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Grounded Evidence &amp; Citations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Citation 1 */}
            <div className="p-4 bg-surface-variant/30 rounded-lg border border-surface-variant hover:border-secondary/50 transition-colors cursor-pointer group">
              <div className="flex items-start justify-between mb-2">
                <span className="font-label-md text-label-md bg-secondary/10 text-secondary px-2 py-1 rounded border border-secondary/20 font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">assured_workload</span> SEBI FILING
                </span>
                <span className="font-label-md text-label-md text-outline">Oct 15, 2023</span>
              </div>
              <h4 className="font-body-md text-body-md font-semibold text-on-surface mb-2 group-hover:text-secondary transition-colors">Q2 Shareholding Pattern Disclosure</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Foreign Institutional Investor (FII) holding stabilized at 52.4%, indicating waning sell-off pressure post-merger adjustments. Mutual Fund exposure increased by 120bps.</p>
              <div className="mt-3 flex items-center gap-2 text-secondary font-label-md text-label-md">
                View Source Document <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
            {/* Citation 2 */}
            <div className="p-4 bg-surface-variant/30 rounded-lg border border-surface-variant hover:border-secondary/50 transition-colors cursor-pointer group">
              <div className="flex items-start justify-between mb-2">
                <span className="font-label-md text-label-md bg-tertiary/10 text-tertiary px-2 py-1 rounded border border-tertiary/20 font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">show_chart</span> NSE DATA
                </span>
                <span className="font-label-md text-label-md text-outline">Oct 26, 2023</span>
              </div>
              <h4 className="font-body-md text-body-md font-semibold text-on-surface mb-2 group-hover:text-tertiary transition-colors">Derivative Positioning &amp; OI Build-up</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Significant Put writing observed at 1500 and 1480 levels for the Nov expiry, suggesting strong technical support. PCR ratio skewed slightly bullish at 1.15.</p>
              <div className="mt-3 flex items-center gap-2 text-tertiary font-label-md text-label-md">
                View Options Chain <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
