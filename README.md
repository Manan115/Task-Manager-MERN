# 📝 Task Manager (MERN Stack)

A full-stack **Task Management Web App** built with the **MERN** stack — MongoDB, Express.js, React, and Node.js. This app allows users to register, log in, and manage their tasks with priority, deadlines, and completion tracking.

---

## 🔥 Features

- ✅ Create, Update, Delete Tasks
- 📅 Set Due Date & Priority
- 👤 User Authentication (JWT + Bcrypt)
- 🧾 Persistent Task Management
- 💡 Intuitive UI with Tailwind CSS
- 📱 Fully Responsive (Mobile-Friendly)

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- Bcrypt (Password Hashing)
- CORS + dotenv

---

## 📁 Folder Structure

# Task-Manager

task-manager/
│
├── vite-project/ # React Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── tailwind.config.js
│
├── server/ # Express Backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middleware/
│ └── server.js
│
├── .env
└── README.md
---

## 🛠️ Installation Instructions

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Clone the Repository

``bash
git clone https://github.com/your-username/task-manager-mern.git
cd task-manager-mern

### Backend Setup 
cd server
npm install
touch .env

### .env onfiguration 
PORT=4000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanager
JWT_SECRET=your_jwt_secret

### Frontend Setup
cd ../vite-project
npm install
npm run dev
Visit: http://localhost:5173

# 📦 API Reference

##🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user

## 📋 Task Routes (Protected)
Method	Endpoint	Description
GET	/api/tasks/	Get all tasks
POST	/api/tasks/	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task

