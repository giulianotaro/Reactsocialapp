import { useState } from "react";
import styles from "./LoginPages.module.scss";

const LoginPages = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [button, setButton] = useState({});

  return (
    <div className={styles.Login}>
      <form>
        <div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="user"
            id="user"
            type="text"
            placeholder="username"
            required
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="pass"
            id="pass"
            type="text"
            placeholder="Password"
          />

          <button type="submit" onClick={() => setButton(button(true))}>
            ACCEDI
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPages;