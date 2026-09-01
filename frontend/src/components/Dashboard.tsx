import React from 'react';

export default function Dashboard() {
  return (
    <div className="max-w-[container-max] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
      {/* Market Overview (Spans 8 columns) */}
      <section className="md:col-span-8 glass-card rounded-xl p-card-padding flex flex-col gap-stack-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-secondary rounded-full"></div>
            <h2 className="font-headline-md text-headline-md text-on-surface">NIFTY 50 Overview</h2>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_horiz</span>
        </div>
        <div className="flex items-end gap-4 mb-4">
          <span className="font-headline-xl text-headline-xl text-on-surface">22,453.20</span>
          <span className="font-body-lg text-body-lg text-error flex items-center mb-1">
            <span className="material-symbols-outlined">arrow_drop_down</span>
            -124.50 (-0.55%)
          </span>
        </div>
        {/* Placeholder for Chart */}
        <div className="w-full h-64 bg-surface-container-low rounded-lg border border-outline-variant relative overflow-hidden flex items-center justify-center">
          <p className="font-label-md text-label-md text-on-surface-variant absolute z-10">Multi-Colored Line Chart Visualization Area</p>
          {/* Abstract chart representation using CSS */}
          <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(135deg, rgba(144, 74, 71, 0.2) 0%, rgba(62, 33, 46, 0.2) 100%)' }}></div>
        </div>
      </section>

      {/* Consensus Engine (Spans 4 columns) */}
      <section className="md:col-span-4 glass-card rounded-xl p-card-padding flex flex-col gap-stack-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-tertiary rounded-full"></div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Consensus Engine</h2>
          </div>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">more_horiz</span>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-stack-lg">
          {/* Gauge Graphic Placeholder */}
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center rounded-full border-4 border-surface-container-highest">
            <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-primary border-b-surface-container-highest border-l-surface-container-highest transform rotate-45"></div>
            <div className="text-center">
              <span className="block font-headline-lg text-headline-lg text-primary">68%</span>
              <span className="block font-label-md text-label-md text-on-surface-variant uppercase">Bullish Bias</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-surface-container p-3 rounded-lg">
              <span className="block font-label-md text-label-md text-on-surface-variant mb-1">Technicals</span>
              <span className="font-headline-sm text-headline-sm text-secondary">Strong Buy</span>
            </div>
            <div className="bg-surface-container p-3 rounded-lg">
              <span className="block font-label-md text-label-md text-on-surface-variant mb-1">Sentiment</span>
              <span className="font-headline-sm text-headline-sm text-outline">Neutral</span>
            </div>
          </div>
        </div>
      </section>

      {/* Watchlist (Spans 12 columns) */}
      <section className="md:col-span-12 glass-card rounded-xl p-card-padding flex flex-col gap-stack-md mt-stack-md">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-full"></div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Proprietary Watchlist</h2>
          </div>
          <button className="font-label-md text-label-md text-primary border border-primary px-4 py-1.5 rounded-lg hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors cursor-pointer">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">Asset</th>
                <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase text-right">Price</th>
                <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase text-right">24h Change</th>
                <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">MAAFIS Signal</th>
                <th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant uppercase">Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
                <td className="py-4 px-4 font-body-lg text-body-lg font-semibold text-on-surface">RELIANCE</td>
                <td className="py-4 px-4 font-body-md text-body-md text-right">2,850.30</td>
                <td className="py-4 px-4 font-body-md text-body-md text-right text-green-700" style={{ color: '#166534' }}>+1.2%</td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 rounded-full font-label-md text-label-md signal-bullish">Bullish</span>
                </td>
                <td className="py-4 px-4 font-body-md text-body-md text-on-surface-variant">4.2M</td>
              </tr>
              <tr className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors bg-secondary-container bg-opacity-10">
                <td className="py-4 px-4 font-body-lg text-body-lg font-semibold text-on-surface">HDFCBANK</td>
                <td className="py-4 px-4 font-body-md text-body-md text-right">1,432.10</td>
                <td className="py-4 px-4 font-body-md text-body-md text-right text-error">-2.1%</td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 rounded-full font-label-md text-label-md signal-bearish">Bearish</span>
                </td>
                <td className="py-4 px-4 font-body-md text-body-md text-on-surface-variant">12.5M</td>
              </tr>
              <tr className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
                <td className="py-4 px-4 font-body-lg text-body-lg font-semibold text-on-surface">INFY</td>
                <td className="py-4 px-4 font-body-md text-body-md text-right">1,620.00</td>
                <td className="py-4 px-4 font-body-md text-body-md text-right text-on-surface-variant">0.0%</td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 rounded-full font-label-md text-label-md signal-neutral">Neutral</span>
                </td>
                <td className="py-4 px-4 font-body-md text-body-md text-on-surface-variant">3.1M</td>
              </tr>
              <tr className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
                <td className="py-4 px-4 font-body-lg text-body-lg font-semibold text-on-surface">TCS</td>
                <td className="py-4 px-4 font-body-md text-body-md text-right">3,980.50</td>
                <td className="py-4 px-4 font-body-md text-body-md text-right text-green-700" style={{ color: '#166534' }}>+0.8%</td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-1 rounded-full font-label-md text-label-md signal-bullish">Bullish</span>
                </td>
                <td className="py-4 px-4 font-body-md text-body-md text-on-surface-variant">2.8M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
