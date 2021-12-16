import { InData } from "./../inData ";
import styles from "./Post.module.scss";

const Post = (props) => {
  const data = props.data || {
    author: "user",
    text: "",
    date: new Date(),
    photo:
      "https://images.unsplash.com/photo-1577188947090-95007502b22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
  };

  return (
    <article className={styles.post}>
      <h3>{data.author}</h3>
      <InData data={data} />
      <p>{data.text}</p>

      {data.photo ? <img src={data.photo} alt={data.author} /> : <></>}
    </article>
  );
};

export { Post };
