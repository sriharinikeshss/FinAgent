import asyncio
from typing import List
from models.schemas import MirrorAgentOutput, UserProfile

class MirrorAgent:
    """
    MIRROR Agent (The AI Decision Twin):
    Unlike market agents, the Mirror Agent assesses the INVESTOR's readiness,
    portfolio risk exposure, concentration vulnerabilities, and psychological/FOMO triggers.
    """
    async def analyze(self, stock: str, user_profile: UserProfile) -> MirrorAgentOutput:
        await asyncio.sleep(0.04)
        
        risk = user_profile.risk_profile.lower()
        sector_exp = user_profile.portfolio_sector_exposure
        concentration = user_profile.portfolio_concentration
        fomo = user_profile.fomo_risk
        
        # Determine risks
        portfolio_risk = "high" if (sector_exp > 35 or concentration > 30) else ("medium" if (sector_exp > 20 or concentration > 18) else "low")
        behavioral_risk = "high" if fomo > 65 else ("medium" if fomo > 35 else "low")
        fomo_level = "high" if fomo > 70 else ("medium" if fomo > 40 else "low")
        
        reasoning: List[str] = []
        
        # Calculate suitability score based on profile
        if risk == "conservative":
            # Baseline suitability for conservative investor on high momentum / elevated sector exposure
            base_suitability = 38.0
            if sector_exp > 35:
                reasoning.append(f"High sector exposure ({sector_exp:.0f}% in this sector) exceeds conservative prudential limit (max 20%).")
            if concentration > 25:
                reasoning.append(f"Top portfolio concentration at {concentration:.0f}% presents high drawdown sensitivity.")
            if fomo > 60:
                reasoning.append(f"Elevated behavioral FOMO risk ({fomo:.0f}/100) indicates high vulnerability to chasing momentum peaks.")
            reasoning.append("Capital preservation profile requires wider margin of safety and confirmed price base.")
            confidence = 74.0
            suitability = 38.0
        elif risk == "moderate":
            base_suitability = 62.0
            reasoning.append(f"Moderate sector allocation ({sector_exp:.0f}%) allows measured position sizing.")
            if concentration > 20:
                reasoning.append(f"Portfolio concentration at {concentration:.0f}% warrants staggered accumulation rather than lump-sum entry.")
            reasoning.append(f"Behavioral FOMO risk is controlled at {fomo:.0f}/100.")
            reasoning.append("Profile supports opportunistic exposure if technical confirmation is met.")
            confidence = 80.0
            suitability = 62.0
        else:  # aggressive
            base_suitability = 78.0
            reasoning.append(f"Low sector saturation ({sector_exp:.0f}%) provides ample portfolio headroom for momentum exposure.")
            reasoning.append(f"Controlled concentration ({concentration:.0f}%) and low FOMO bias ({fomo:.0f}/100) support calculated tactical entry.")
            reasoning.append("High risk tolerance accommodates near-term volatility swings.")
            confidence = 86.0
            suitability = 78.0

        return MirrorAgentOutput(
            agent="mirror",
            investor_suitability=suitability,
            behavioral_risk=behavioral_risk,
            portfolio_risk=portfolio_risk,
            fomo_level=fomo_level,
            confidence=confidence,
            reasoning=reasoning,
            sparkline=[40, 45, 52, 50, 48, suitability - 5, suitability]
        )
