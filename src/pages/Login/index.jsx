import { useReducer } from "react";
import styles from "./Login.module.scss";

const initialForm = {
  username: "",
  password: "",
};

/* const Button = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      username,
      password,
    });
  }; */

function reducer(state, action) {
  switch (action.type) {
    case "update_input":
      return {
        ...state,
        [action.key]: action.value,
      };
    case "input_none":
      return { ...state, 
      value:false};

    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(reducer, initialForm);

  return (
    <form className={styles.Login}>
      <input
        value={state.username}
        onChange={(e) =>
          dispatch({
            type: "update_input",
            value: e.target.value,
            key: "username",
          })
        }
        placeholder="Username"
        required
      />
      <input
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "update_input",
            value: e.target.value,
            key: "password",
          })
        }
        placeholder="Password"
        required
      />

      <button
        onClick={() => {
          alert("OK, ACCESSO EFFETTUATO.");
        }}
      >
        Accedi
      </button>
    </form>
  );
}

export default Login;
