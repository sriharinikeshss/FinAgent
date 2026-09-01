import React from 'react';

export default function Profile() {
  return (
    <div className="p-margin-edge max-w-[container-max] w-full mx-auto">
      <div className="mb-stack-lg">
        <h2 className="font-headline-xl text-headline-xl text-primary">System Profile &amp; Performance</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Operator ID: AEGIS-77X | Status: Optimal</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Agent Identity Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-card-padding shadow-sm col-span-12 md:col-span-4 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-full border-4 border-primary p-1 mb-4 relative">
            <img alt="Aegis Core Avatar" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA224tbXcb6Wa5d6jcG5tAoV5YWpmbkLcbHOVnPEroCg03lUSf-W8nXewJlHBnZIahAII4k_ktPP0SK19Q8LG5oQJ1qxY0Wth0mwFBZee5uWy48yn-EBLEGQGcQ3b3JyRcHHMvsvUUxTN55ikEuQDmoCYnYkisIsnyLk_jwG_pBr9Uk44KEW1V_tfoCb6_Lh5Og8n_W_6XBtrUaRYoMJHXniE4Lln9IWFbuLvVdbHt9p3p2W1IyTa0I9A" />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-secondary rounded-full border-2 border-surface-container-lowest"></div>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface">Aegis Core</h3>
          <p className="font-label-md text-label-md text-secondary mt-1 uppercase">Tier 1 Analyst</p>
          <div className="w-full mt-6 space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-surface-variant">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Specialization</span>
              <span className="font-label-md text-label-md text-on-surface">Macro-Economics</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-surface-variant">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Deployment</span>
              <span className="font-label-md text-label-md text-on-surface">Cloud-Edge Hybrid</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-body-sm text-body-sm text-on-surface-variant">Uptime</span>
              <span className="font-label-md text-label-md text-on-surface">99.998%</span>
            </div>
          </div>
        </div>
        {/* Metrics Grid */}
        <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-gutter">
          {/* Metric 1: Latency */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-card-padding shadow-sm col-span-2 sm:col-span-1 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-tertiary rounded-sm"></div>
                <h4 className="font-label-md text-label-md text-on-surface-variant uppercase">Response Latency</h4>
              </div>
              <span className="material-symbols-outlined text-outline-variant cursor-pointer">more_horiz</span>
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-2">
                <span className="font-headline-xl text-headline-xl text-on-surface">24</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">ms</span>
              </div>
              <div className="w-full bg-surface-variant h-1 mt-3 rounded-full overflow-hidden">
                <div className="bg-tertiary h-full w-[15%]"></div>
              </div>
              <p className="font-label-md text-label-md text-tertiary mt-2">Optimal Range (&lt; 50ms)</p>
            </div>
          </div>
          {/* Metric 2: Accuracy */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-card-padding shadow-sm col-span-2 sm:col-span-1 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-secondary rounded-sm"></div>
                <h4 className="font-label-md text-label-md text-on-surface-variant uppercase">Prediction Accuracy</h4>
              </div>
              <span className="material-symbols-outlined text-outline-variant cursor-pointer">more_horiz</span>
            </div>
            <div className="mt-4">
              <div className="flex items-baseline gap-2">
                <span className="font-headline-xl text-headline-xl text-on-surface">94.2</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">%</span>
              </div>
              <div className="w-full bg-surface-variant h-1 mt-3 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[94%]"></div>
              </div>
              <p className="font-label-md text-label-md text-secondary mt-2 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span> +2.1% WoW
              </p>
            </div>
          </div>
          {/* Radar Chart Area (Visual Placeholder) */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-card-padding shadow-sm col-span-2 relative h-64 overflow-hidden group">
            <div className="absolute top-card-padding left-card-padding z-10">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-sm"></div>
                <h4 className="font-label-md text-label-md text-on-surface uppercase">Cognitive Bias Radar</h4>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="w-48 h-48 rounded-full border border-surface-variant relative">
                <div className="absolute inset-4 rounded-full border border-surface-variant"></div>
                <div className="absolute inset-8 rounded-full border border-surface-variant"></div>
                {/* Axis lines */}
                <div className="absolute inset-0 w-full h-full" style={{ background: 'conic-gradient(from 0deg, transparent 0deg 89deg, var(--color-surface-variant) 90deg 91deg, transparent 91deg 179deg, var(--color-surface-variant) 180deg 181deg, transparent 181deg 269deg, var(--color-surface-variant) 270deg 271deg, transparent 271deg)', clipPath: 'circle(50% at 50% 50%)' }}></div>
                {/* Data Polygon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full text-primary fill-current opacity-20" viewBox="0 0 100 100">
                    <polygon points="50,10 80,40 70,80 30,90 20,30" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-4 z-10 bg-surface-container-lowest p-2 rounded shadow-sm border border-outline-variant">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span><span className="font-label-md text-[10px]">Optimism</span></div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary"></span><span className="font-label-md text-[10px]">Recency</span></div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-tertiary"></span><span className="font-label-md text-[10px]">Confirmation</span></div>
            </div>
          </div>
        </div>
        {/* Performance Log Table */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-card-padding shadow-sm col-span-12 mt-stack-md">
          <div className="flex justify-between items-center mb-stack-md border-b border-surface-variant pb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-on-surface rounded-sm"></div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Inference Log</h3>
            </div>
            <button className="font-label-md text-label-md text-primary hover:text-primary-container px-3 py-1 border border-primary rounded hover:bg-primary-fixed transition-colors cursor-pointer">Export CSV</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-surface-variant">
                  <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">Timestamp</th>
                  <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">Query Type</th>
                  <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">Latency (ms)</th>
                  <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">Confidence</th>
                  <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-body-sm">
                <tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors">
                  <td className="py-3 px-4 text-on-surface font-label-md">14:02:55.102</td>
                  <td className="py-3 px-4 text-primary font-medium">Sentiment Analysis (AAPL)</td>
                  <td className="py-3 px-4 text-on-surface-variant">22</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span>98%</span>
                      <div className="w-16 h-1 bg-surface-variant rounded-full"><div className="h-full bg-secondary w-[98%] rounded-full"></div></div>
                    </div>
                  </td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-surface-container text-on-surface-variant text-[10px] font-label-md rounded uppercase tracking-wider border border-outline-variant">Success</span></td>
                </tr>
                <tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors">
                  <td className="py-3 px-4 text-on-surface font-label-md">14:01:12.044</td>
                  <td className="py-3 px-4 text-primary font-medium">Risk Modeling (Portfolio A)</td>
                  <td className="py-3 px-4 text-error font-medium">145</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span>82%</span>
                      <div className="w-16 h-1 bg-surface-variant rounded-full"><div className="h-full bg-tertiary w-[82%] rounded-full"></div></div>
                    </div>
                  </td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-surface-container text-error text-[10px] font-label-md rounded uppercase tracking-wider border border-error-container">Delayed</span></td>
                </tr>
                <tr className="border-b border-surface-variant hover:bg-surface-container-low transition-colors">
                  <td className="py-3 px-4 text-on-surface font-label-md">13:55:01.991</td>
                  <td className="py-3 px-4 text-primary font-medium">Technicals (BTC/USD)</td>
                  <td className="py-3 px-4 text-on-surface-variant">18</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span>99%</span>
                      <div className="w-16 h-1 bg-surface-variant rounded-full"><div className="h-full bg-primary w-[99%] rounded-full"></div></div>
                    </div>
                  </td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-surface-container text-on-surface-variant text-[10px] font-label-md rounded uppercase tracking-wider border border-outline-variant">Success</span></td>
                </tr>
                <tr className="hover:bg-surface-container-low transition-colors">
                  <td className="py-3 px-4 text-on-surface font-label-md">13:42:10.005</td>
                  <td className="py-3 px-4 text-primary font-medium">Macro Forecast (Q3)</td>
                  <td className="py-3 px-4 text-on-surface-variant">45</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span>91%</span>
                      <div className="w-16 h-1 bg-surface-variant rounded-full"><div className="h-full bg-secondary w-[91%] rounded-full"></div></div>
                    </div>
                  </td>
                  <td className="py-3 px-4"><span className="px-2 py-1 bg-surface-container text-on-surface-variant text-[10px] font-label-md rounded uppercase tracking-wider border border-outline-variant">Success</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
