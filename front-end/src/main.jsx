import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlPoxQ6oQHTwNzHhAHdsui9ftWjT5m-xg",
  authDomain: "fullstack-site-86ab2.firebaseapp.com",
  projectId: "fullstack-site-86ab2",
  storageBucket: "fullstack-site-86ab2.firebasestorage.app",
  messagingSenderId: "653460471066",
  appId: "1:653460471066:web:253ce8ffdcdc28c32180a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
