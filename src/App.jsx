import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import HomePage from "./components/Homepage";
import "./App.css";
import Login from "./components/LoginPage";
import Signup from "./components/SignUpPage";
import Profile from "./components/ProfilePage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router basename="/Login-form/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
