from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models.schemas import StockAnalysisRequest, AnalysisResponse
from services.data_service import DataService
from services.decision_engine import DecisionEngine

app = FastAPI(
    title="MIRROR Intelligence Engine",
    description="Multi-Agent AI Decision Twin for Retail Investors",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = DecisionEngine()

@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "MIRROR Intelligence Engine",
        "version": "1.0.0"
    }

@app.get("/stocks")
def list_stocks():
    return {
        "stocks": DataService.get_all_stocks()
    }

@app.get("/profiles")
def list_profile_presets():
    return {
        "profiles": DataService.get_profile_presets()
    }

@app.post("/analyze", response_model=AnalysisResponse)
async def analyze_stock(request: StockAnalysisRequest):
    try:
        response = await engine.analyze(request)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Analysis engine error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
