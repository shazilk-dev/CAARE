users = [
    {"name": "Shazil", "pin_number": "1234", "bank_balance": 5000},
    {"name": "Ali", "pin_number": "5678", "bank_balance": 3000},
    {"name": "Abdullah", "pin_number": "9012", "bank_balance": 2000}
]


def get_user_by_name(name: str):
    for user in users:
        if user["name"] == name:
            return user
        
    return None