import { useEffect, useReducer } from "react";
import { httpPOST } from "../../libs/http";
import Modal from "./../Modal";
import styles from "./CreatePost.module.scss";

const initPost = {
  formPostObj: {
    author: "",
    text: "",
    date: new Date().toISOString(),
    photo: "",
  },
  isModalVisible: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update_form":
      return {
        ...state,
        formPostObj: { ...state.formPostObj, [action.key]: action.payload },
      };
    case "modal":
      return { ...state, isModalVisible: action.payload };
    default:
      return state;
  }
};

const CreatePost = () => {
  const [state, dispatch] = useReducer(reducer, initPost);

  const handleSendBtn = (event) => {
    event.preventDefault();
    httpPOST("/posts", state.formPostObj);
    dispatch({ type: "modal", payload: !state.isModalVisible });
  };

  useEffect(() => {
    dispatch({ type: "modal", payload: false });
  }, [state.formPostObj]);

  return (
    <div className={styles.createPost}>
      <form>
        <div className={styles.__author}>
          <input
            value={state.formPostObj.author}
            onChange={(e) =>
              dispatch({
                type: "update_form",
                key: "author",
                payload: e.target.value,
              })
            }
            name="author"
            id="author"
            type="text"
            placeholder="Author"
            required
          />
          <input
            value={state.formPostObj.photo}
            onChange={(e) =>
              dispatch({
                type: "update_form",
                key: "photo",
                payload: e.target.value,
              })
            }
            name="img"
            id="img"
            type="text"
            placeholder="Img URL"
          />
        </div>
        <textarea
          value={state.formPostObj.text}
          onChange={(e) =>
            dispatch({
              type: "update_form",
              key: "text",
              payload: e.target.value,
            })
          }
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" onClick={handleSendBtn}>
          SEND
        </button>
        {state.isModalVisible && (
          <Modal bgColor="lightskyblue" text="Il post è stato aggiunto" />
        )}
      </form>
    </div>
  );
};

export default CreatePost;
