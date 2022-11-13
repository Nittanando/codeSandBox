import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
export default function Login() {
  const { setMail, setProfile } = useContext(LoginContext);

  return (
    <div>
      <h2>Log in</h2>

      <label>Email:</label>
      <input
        type="text"
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      <br />
      <br />
      <label>Password:</label>
      <input type="password" />
      <br />
      <br />

      <button onClick={() => setProfile(true)}>Submit</button>
    </div>
  );
}
