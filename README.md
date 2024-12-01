# Modern React Node.js Application

This is a modern web application built with React frontend and Node.js backend.

## Project Structure

```
├── frontend/           # React frontend application
│   ├── public/         # Public assets
│   ├── src/           # Source files
│   │   ├── components/ # React components
│   │   ├── App.js     # Main App component
│   │   └── index.js   # Entry point
│   └── package.json   # Frontend dependencies
│
├── backend/            # Node.js backend application
│   ├── src/           # Source files
│   │   ├── routes/    # API routes
│   │   └── index.js   # Entry point
│   └── package.json   # Backend dependencies
│
└── README.md          # Project documentation
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

The application will be available at `http://localhost:3000`