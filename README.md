# 🧩 MongoDB Practice Project

A simple Node.js + Express backend project to practice connecting and using **MongoDB** with **Mongoose** and modern **ES6 JavaScript**.

---

## 🚀 Features

- Connects to MongoDB using Mongoose  
- Uses modular ES6 file structure (`config`, `routes`, `models`)  
- Supports basic API routes for user management  
- Environment variable support with **dotenv**  
- Clean, beginner-friendly setup  

---

## 🛠️ Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **Mongoose**  
- **dotenv**

---

## ⚙️ Installation

1. Clone this repository :
```bash
git clone https://github.com/your-username/mongodb-practice.git
cd mongodb-practice
```

2. Install the dependancies :
```bash
npm install
```

3. Create a `.env` file and add :
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
```

4. Start the server :
```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/users | Get all users |
| POST | /api/users/add | Create new user |