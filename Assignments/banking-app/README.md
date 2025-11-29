# SecureBank - Banking API

A modern banking application built with FastAPI, featuring secure authentication and fund transfer capabilities.

## Features

- **User Authentication** - Secure PIN-based login system
- **Fund Transfers** - Real-time money transfers between accounts
- **Balance Management** - Automatic balance updates and validation
- **Modern UI** - Professional web interface with responsive design

## Tech Stack

- **Backend:** FastAPI (Python)
- **Frontend:** HTML, CSS, JavaScript
- **Icons:** Font Awesome

## Project Structure

```
banking-app/
├── main.py           # FastAPI application and routes
├── models.py         # Pydantic data models
├── database.py       # In-memory user database
├── static/
│   └── index.html    # Web interface
└── README.md
```

## Installation

1. **Clone the repository**

   ```bash
   cd banking-app
   ```

2. **Create virtual environment**

   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment**

   ```bash
   # Windows
   .\venv\Scripts\Activate.ps1

   # Linux/Mac
   source venv/bin/activate
   ```

4. **Install dependencies**
   ```bash
   pip install fastapi uvicorn
   ```

## Usage

1. **Start the server**

   ```bash
   uvicorn main:app --reload
   ```

2. **Access the application**
   - Web UI: http://127.0.0.1:8000/ui
   - API Docs: http://127.0.0.1:8000/docs
   - Root: http://127.0.0.1:8000/

## API Endpoints

### Authentication

```http
POST /authenticate
Content-Type: application/json

{
  "name": "Shazil",
  "pin_number": "1234"
}
```

**Response:**

```json
{
  "message": "Authentication successful",
  "name": "Shazil",
  "bank_balance": 5000
}
```

### Bank Transfer

```http
POST /bank-transfer
Content-Type: application/json

{
  "sender_name": "Shazil",
  "recipients_name": "Ali",
  "amount": 500
}
```

**Response:**

```json
{
  "message": "Transfer successful",
  "sender": "Shazil",
  "sender_balance": 4500,
  "recipient": "Ali",
  "recipient_balance": 3500,
  "amount_transferred": 500
}
```

## Demo Accounts

| Name     | PIN  | Initial Balance |
| -------- | ---- | --------------- |
| Shazil   | 1234 | $5,000          |
| Ali      | 5678 | $3,000          |
| Abdullah | 9012 | $2,000          |

## Testing Flow

1. Login with **Shazil** (PIN: 1234)
2. Transfer **$500** to **Ali**
3. Logout and login with **Ali** (PIN: 5678)
4. Verify balance increased to **$3,500**

## Error Handling

- Invalid credentials → 401 Unauthorized
- User not found → 404 Not Found
- Insufficient balance → 400 Bad Request
- Invalid amount → 400 Bad Request

## Development

**Run with auto-reload:**

```bash
uvicorn main:app --reload
```

**Check code structure:**

```bash
# View all files
tree /F
```

## License

This project is created for educational purposes.

## Author

GIAIC - Quarter 04 - Class 06 Assignment
