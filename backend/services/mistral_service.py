import os
import httpx
from typing import Optional
from pathlib import Path

def _load_env():
    # Look for .env in current and parent directories
    possible_paths = [
        Path(__file__).resolve().parent.parent / ".env",
        Path(__file__).resolve().parent / ".env",
        Path.cwd() / ".env",
        Path.cwd() / "backend" / ".env"
    ]
    for p in possible_paths:
        if p.exists():
            try:
                with open(p, "r", encoding="utf-8-sig") as f:
                    for line in f:
                        line = line.strip()
                        if line and not line.startswith("#") and "=" in line:
                            k, v = line.split("=", 1)
                            os.environ[k.strip()] = v.strip()
                break
            except Exception:
                pass

_load_env()

class LLMService:
    """
    Mistral AI Cloud Inference Service:
    Executes live analytical cross-agent debate between Market, Evidence, and Mirror agents.
    """
    MISTRAL_BASE_URL = "https://api.mistral.ai/v1"

    @classmethod
    def get_api_key(cls) -> str:
        _load_env()
        return os.environ.get("MISTRAL_API_KEY", "").strip()

    @classmethod
    def get_model(cls) -> str:
        _load_env()
        return os.environ.get("MISTRAL_MODEL", "mistral-small-latest").strip()

    @classmethod
    async def generate_debate_argument(
        cls,
        agent_name: str,
        stock: str,
        context: str,
        timeout: float = 60.0
    ) -> Optional[str]:
        api_key = cls.get_api_key()
        model = cls.get_model()
        if not api_key:
            return None

        try:
            headers = {
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            }
            payload = {
                "model": model,
                "messages": [
                    {
                        "role": "system",
                        "content": f"You are the {agent_name} in MIRROR, an AI Decision Twin financial intelligence platform. Give 1 sharp, professional analytical argument (max 22 words) challenging or supporting the other agents. Do not use quotes."
                    },
                    {
                        "role": "user",
                        "content": f"Target Stock: {stock}. Your Real-time Analysis Context: {context}. Give your immediate analytical statement:"
                    }
                ],
                "temperature": 0.4,
                "max_tokens": 50
            }
            async with httpx.AsyncClient(timeout=timeout) as client:
                res = await client.post(f"{cls.MISTRAL_BASE_URL}/chat/completions", headers=headers, json=payload)
                if res.status_code == 200:
                    data = res.json()
                    content = data["choices"][0]["message"]["content"].strip()
                    if content:
                        return content.replace('"', '').replace('**', '').strip()
        except Exception as e:
            print(f"[Mistral API Notice] {agent_name} live call error: {e}")
            return None

        return None

    @classmethod
    async def generate_verdict_synthesis(
        cls,
        stock: str,
        stock_price: float,
        stock_change_pct: float,
        risk_profile: str,
        market_opp: float,
        investor_suit: float,
        decision_gap: float,
        fomo_risk: float,
        sector_exposure: float,
        timeout: float = 60.0
    ) -> Optional[dict]:
        """
        Calls Mistral AI directly to synthesize the final personalized investment verdict,
        headline, explanation, and tailored conditions to change.
        """
        api_key = cls.get_api_key()
        model = cls.get_model()
        if not api_key:
            return None

        try:
            headers = {
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            }
            prompt = (
                f"You are the Chief AI Decision Synthesizer in MIRROR, an institutional Decision Twin platform.\n"
                f"Target Stock: {stock} (Live Price: ₹{stock_price:.2f}, 24h Change: {stock_change_pct:+.2f}%)\n"
                f"Investor Profile: {risk_profile.upper()}\n"
                f"Market Opportunity Score: {market_opp:.1f}/100\n"
                f"Investor Suitability Score: {investor_suit:.1f}/100\n"
                f"Decision Gap: {decision_gap:.1f} points\n"
                f"Investor Sector Exposure: {sector_exposure:.1f}%\n"
                f"Investor FOMO Risk Score: {fomo_risk:.1f}/100\n\n"
                f"Respond in valid JSON only with exactly these keys:\n"
                f'{{"verdict": "BUY WITH CAUTION" | "WAIT FOR CONFIRMATION" | "AVOID FOR NOW" | "MONITOR", '
                f'"verdict_headline": "<Short 2-4 word punchy title>", '
                f'"verdict_explanation": "<Concise 1-2 sentence tailored verdict synthesizing market opportunity vs user portfolio limits. Under 30 words.>", '
                f'"conditions_to_change": ["<Condition 1>", "<Condition 2>", "<Condition 3>"]}}'
            )
            payload = {
                "model": model,
                "messages": [
                    {
                        "role": "system",
                        "content": "You are a professional financial AI engine synthesizing final investment decisions. Always output strict JSON only with no markdown wrapping or explanations."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                "temperature": 0.3,
                "max_tokens": 200
            }
            async with httpx.AsyncClient(timeout=timeout) as client:
                res = await client.post(f"{cls.MISTRAL_BASE_URL}/chat/completions", headers=headers, json=payload)
                if res.status_code == 200:
                    import json
                    data = res.json()
                    raw = data["choices"][0]["message"]["content"].strip()
                    # Strip any markdown code blocks if returned
                    if raw.startswith("```"):
                        raw = raw.split("\n", 1)[1]
                        if raw.endswith("```"):
                            raw = raw.rsplit("```", 1)[0]
                    parsed = json.loads(raw.strip())
                    return parsed
        except Exception as e:
            print(f"[Mistral Live Verdict Synthesis Error]: {e}")
            return None

        return None



