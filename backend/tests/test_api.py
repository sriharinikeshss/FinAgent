import pytest
from starlette.testclient import TestClient
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from main import app

client = TestClient(app)

def test_health():
    res = client.get("/health")
    assert res.status_code == 200
    assert res.json()["status"] == "healthy"

def test_stocks_and_profiles():
    res_stocks = client.get("/stocks")
    assert res_stocks.status_code == 200
    assert len(res_stocks.json()["stocks"]) >= 4

    res_profiles = client.get("/profiles")
    assert res_profiles.status_code == 200
    assert "conservative" in res_profiles.json()["profiles"]
    assert "moderate" in res_profiles.json()["profiles"]
    assert "aggressive" in res_profiles.json()["profiles"]

def test_conservative_investor_reliance():
    payload = {
        "stock": "RELIANCE",
        "user_profile": {
            "risk_profile": "conservative",
            "portfolio_sector_exposure": 42.0,
            "portfolio_concentration": 35.0,
            "fomo_risk": 78.0
        },
        "degraded_mode": False
    }
    res = client.post("/analyze", json=payload)
    assert res.status_code == 200
    data = res.json()
    
    assert data["market_opportunity_score"] == 82.0
    assert data["investor_suitability_score"] == 38.0
    assert data["decision_gap"] == 44.0
    assert data["gap_classification"] == "HIGH GAP"
    assert data["verdict"] == "WAIT FOR CONFIRMATION"
    assert len(data["evidence_sources"]) >= 2
    assert len(data["debate_messages"]) >= 3
    assert len(data["conditions_to_change"]) >= 3

def test_moderate_investor_reliance():
    payload = {
        "stock": "RELIANCE",
        "user_profile": {
            "risk_profile": "moderate",
            "portfolio_sector_exposure": 24.0,
            "portfolio_concentration": 20.0,
            "fomo_risk": 45.0
        },
        "degraded_mode": False
    }
    res = client.post("/analyze", json=payload)
    assert res.status_code == 200
    data = res.json()
    
    assert data["market_opportunity_score"] == 82.0
    assert data["investor_suitability_score"] == 62.0
    assert data["decision_gap"] == 20.0
    assert data["gap_classification"] == "LOW GAP"
    assert data["verdict"] == "MONITOR"

def test_aggressive_investor_reliance():
    payload = {
        "stock": "RELIANCE",
        "user_profile": {
            "risk_profile": "aggressive",
            "portfolio_sector_exposure": 12.0,
            "portfolio_concentration": 15.0,
            "fomo_risk": 25.0
        },
        "degraded_mode": False
    }
    res = client.post("/analyze", json=payload)
    assert res.status_code == 200
    data = res.json()
    
    assert data["market_opportunity_score"] == 82.0
    assert data["investor_suitability_score"] == 78.0
    assert data["decision_gap"] == 4.0
    assert data["gap_classification"] == "LOW GAP"
    assert data["verdict"] == "BUY WITH CAUTION"

def test_degraded_data_mode():
    payload = {
        "stock": "RELIANCE",
        "user_profile": {
            "risk_profile": "conservative",
            "portfolio_sector_exposure": 42.0,
            "portfolio_concentration": 35.0,
            "fomo_risk": 78.0
        },
        "degraded_mode": True
    }
    res = client.post("/analyze", json=payload)
    assert res.status_code == 200
    data = res.json()
    
    assert data["is_degraded"] is True
    assert data["evidence_agent"]["status"] == "degraded"
    assert data["evidence_agent"]["classification"] == "unavailable"
    assert len(data["evidence_sources"]) == 0
    assert data["confidence_quality"] < 70
