from pydantic import BaseModel

class AuthenticateRequest(BaseModel):
    name: str
    pin_number: str

class BankTransferRequest(BaseModel):
    sender_name: str
    recipients_name: str
    amount: float