import Login from "./components/log-in/Login";
import { useState } from "react";
import { LoginContext } from "./components/contexts/LoginContext";
import "./styles.css";
import Profile from "./components/profile/Profile";

export default function App() {
  const [profile, setProfile] = useState(false);
  const [mail, setMail] = useState("");
  return (
    <div className="App">
      <LoginContext.Provider value={{ mail, setMail, setProfile }}>
        {profile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}
