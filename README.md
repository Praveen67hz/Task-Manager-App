# 📋 Task Manager - Full Stack Assessment

A full-stack Task Management application built as part of a technical assessment. The application allows users to log in as a guest, manage tasks with full CRUD operations, and supports dynamic theming (Dark/Light mode) with a customizable accent color picker.

🔗 **Live Demo:** 
- **Frontend:** [https://task-manager-app.vercel.app](https://task-manager-app.vercel.app)
- **Backend API:** [https://task-manager-backend.onrender.com](https://task-manager-backend.onrender.com)

---

## 🚀 Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **State & Routing:** React Hooks, Next.js Routing
- **Theming:** `next-themes` (Dark/Light mode, persistent storage)

### Backend
- **Framework:** NestJS
- **ORM:** Prisma (v7)
- **Database:** PostgreSQL (hosted on Neon)
- **Adapter:** `@prisma/adapter-pg` for optimal connection pooling

---

## ✨ Key Features

- 🔐 **Guest Login:** Seamless entry to the application without requiring user registration.
- ➕ **Full CRUD Operations:** Create, Read, Update, and Delete tasks instantly.
- 🌙 **Dark Mode Support:** Toggle between Light and Dark themes with persistence across page refreshes.
- 🎨 **Theme Color Picker:** Choose from 7 accent colors (Amber, Blue, Pink, etc.) that persist in `localStorage`.
- 🖥️ **Responsive Design:** Fully functional on desktop, tablet, and mobile devices.
- 🔗 **API Integration:** Frontend communicates with the NestJS backend via a configured Axios client.

---

## 📂 Project Structure


task-manager-app/
├── backend/                # NestJS Backend
│   ├── prisma/             # Database schema and migrations
│   ├── src/
│   │   ├── tasks/          # Tasks Module (Controller, Service, DTOs)
│   │   └── prisma.service.ts # Database connection handler
│   └── .env                # Environment variables (DATABASE_URL)
│
├── frontend/               # Next.js Frontend
│   ├── src/
│   │   ├── app/            # App Router (Login, Dashboard pages)
│   │   ├── components/     # Reusable UI components (ThemeToggle, TaskList)
│   │   ├── context/        # React Context for Theme Color state
│   │   ├── lib/            # Axios API client configuration
│   │   └── providers/      # Theme wrapper providers
│   └── .env.local          # Environment variables (NEXT_PUBLIC_API_URL)
│
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
🛠️ Local Setup & Installation
To run this project locally, follow these steps:

Prerequisites
Node.js (v18 or later)

Git

1. Clone the Repository
bash
git clone https://github.com/Praveen67hz/Task-Manager-App.git
cd Task-Manager-App
2. Set up the Backend
bash
cd backend
npm install
# Create a .env file and add your DATABASE_URL
npm run server
The backend will run on http://localhost:3001.

3. Set up the Frontend
bash
cd ../frontend
npm install
# Create a .env.local file and add NEXT_PUBLIC_API_URL=http://localhost:3001
npm run dev
The frontend will run on http://localhost:3000.

📄 Part 2: Product Understanding Document
The written analysis for the "Caseload" screen workflow and suggested UX improvements is included in the submission as a PDF file.

📝 License
This project was created solely for assessment purposes.
