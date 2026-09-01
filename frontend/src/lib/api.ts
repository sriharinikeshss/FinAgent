import type { AnalysisResponse, StockOption, UserProfile } from '../types';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

export async function fetchHealth(): Promise<{ status: string; service: string }> {
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) throw new Error('Health check failed');
  return res.json();
}

export async function fetchStocks(): Promise<StockOption[]> {
  try {
    const res = await fetch(`${API_BASE}/stocks`);
    if (!res.ok) throw new Error('Failed to load stocks');
    const data = await res.json();
    return data.stocks || [];
  } catch (err) {
    console.warn('Using fallback stocks list', err);
    return [
      { symbol: 'RELIANCE', name: 'Reliance Industries Ltd', sector: 'Energy & Conglomerate', price: 2985.40, change_pct: 2.45 },
      { symbol: 'TCS', name: 'Tata Consultancy Services', sector: 'Information Technology', price: 3840.15, change_pct: 0.85 },
      { symbol: 'INFY', name: 'Infosys Limited', sector: 'Information Technology', price: 1495.60, change_pct: -0.65 },
      { symbol: 'HDFCBANK', name: 'HDFC Bank Limited', sector: 'Banking & Finance', price: 1540.80, change_pct: 1.70 },
    ];
  }
}

export async function fetchProfilePresets(): Promise<Record<string, UserProfile>> {
  try {
    const res = await fetch(`${API_BASE}/profiles`);
    if (!res.ok) throw new Error('Failed to load profiles');
    const data = await res.json();
    return data.profiles || {};
  } catch (err) {
    console.warn('Using fallback profile presets', err);
    return {
      conservative: {
        risk_profile: 'conservative',
        portfolio_sector_exposure: 42,
        portfolio_concentration: 35,
        fomo_risk: 78,
        label: 'Conservative Investor',
        description: 'Capital preservation priority, sensitive to drawdown risk, elevated behavioral FOMO vulnerability.'
      },
      moderate: {
        risk_profile: 'moderate',
        portfolio_sector_exposure: 24,
        portfolio_concentration: 20,
        fomo_risk: 45,
        label: 'Moderate Investor',
        description: 'Balanced growth and risk control, diversified sector allocations.'
      },
      aggressive: {
        risk_profile: 'aggressive',
        portfolio_sector_exposure: 12,
        portfolio_concentration: 15,
        fomo_risk: 25,
        label: 'Aggressive Investor',
        description: 'High risk tolerance, low current sector saturation, disciplined momentum execution.'
      }
    };
  }
}

export async function analyzeStock(
  stock: string,
  userProfile: UserProfile,
  degradedMode: boolean = false
): Promise<AnalysisResponse> {
  const res = await fetch(`${API_BASE}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      stock,
      user_profile: userProfile,
      degraded_mode: degradedMode
    })
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData.detail || 'Analysis request failed');
  }

  return res.json();
}
