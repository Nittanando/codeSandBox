import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export default function Profile() {
  const { mail } = useContext(LoginContext);

  return (
    <div>
      <h2>userMail: {mail}</h2>
    </div>
  );
}
