🌾 Farm Fresh App
A full-stack web application for browsing farm-fresh products, adding items to a cart, and placing orders.

🗂️ Project Structure

farm-se-fresh-mini/
├── backend/ # Express API with MongoDB
├── frontend/ # React frontend with Context-based Cart
└── README.md

🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/Singhdev65/farm-se-fresh-mini.git
cd farm-se-fresh-mini

2️⃣ Backend Setup

cd backend
npm install

⚙️ Create .env File
Create a .env file inside the backend directory and add the following:

MONGO_URI=mongodb://localhost:27017/farmfresh
PORT=5000

🌱 Seed the Database

node seed.js
This will populate MongoDB with initial product data.

▶️ Start Backend Server

npm run dev
Server will run at: http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev

Frontend will start at: http://localhost:5173 (default Vite port)
