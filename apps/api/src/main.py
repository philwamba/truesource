from fastapi import FastAPI

app = FastAPI(title="TrueSource API", version="0.1.0")

@app.get("/health")
def health():
    return {"ok": True}

@app.get("/")
def root():
    return {"service": "truesource-api", "version": "0.1.0"}
