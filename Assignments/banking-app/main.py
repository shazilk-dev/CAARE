from fastapi import FastAPI, HTTPException
from models import AuthenticateRequest, BankTransferRequest
from database import get_user_by_name
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/ui", response_class=HTMLResponse)
async def get_ui():
    with open("static/index.html", "r", encoding="utf-8") as f:
        return f.read()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Banking App API!"}

@app.post("/authenticate")
def authenticate_user(request: AuthenticateRequest):
    user = get_user_by_name(request.name)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if user["pin_number"] != request.pin_number:
        raise HTTPException(status_code=401, detail="Invalid PIN")
    
    return {
        "message": "Authentication successful",
        "name": user["name"],
        "bank_balance": user["bank_balance"]
    }
    

@app.post("/bank-transfer")
def bank_transfer(request: BankTransferRequest):
    sender = get_user_by_name(request.sender_name)
    receiver = get_user_by_name(request.recipients_name)

    if not sender:
        raise HTTPException(status_code=404, detail="Sender not found")
    
    if not receiver:
        raise HTTPException(status_code=404, detail="Recipient not found")
    
    if request.amount <= 0:
        raise HTTPException(status_code=400, detail="Amount must be positive")
    
    if sender["bank_balance"] < request.amount:
        raise HTTPException(status_code=400, detail="Insufficient balance")

    # Perform transfer
    sender["bank_balance"] -= request.amount
    receiver["bank_balance"] += request.amount

    return {
        "message": "Transfer successful",
        "sender": sender["name"],
        "sender_balance": sender["bank_balance"],
        "recipient": receiver["name"],
        "recipient_balance": receiver["bank_balance"],
        "amount_transferred": request.amount
    }