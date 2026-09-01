import os
import httpx
from typing import Optional

class LLMService:
    """
    Mistral AI Cloud Inference Service:
    Executes live analytical cross-agent debate between Market, Evidence, and Mirror agents.
    """
    MISTRAL_API_KEY = os.environ.get("MISTRAL_API_KEY", "gOYLxl4KvyjTWjEaWIgFdv9GZThrBgqh")
    MISTRAL_BASE_URL = "https://api.mistral.ai/v1"
    MISTRAL_MODEL = "mistral-small-latest"

    @classmethod
    async def generate_debate_argument(
        cls,
        agent_name: str,
        stock: str,
        context: str,
        timeout: float = 6.0
    ) -> Optional[str]:
        if not cls.MISTRAL_API_KEY:
            return None

        try:
            headers = {
                "Authorization": f"Bearer {cls.MISTRAL_API_KEY}",
                "Content-Type": "application/json"
            }
            payload = {
                "model": cls.MISTRAL_MODEL,
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
                        # Clean up formatting
                        return content.replace('"', '').replace('**', '').strip()
        except Exception as e:
            print(f"[Mistral API Notice] {agent_name} live call fallback: {e}")
            return None

        return None


