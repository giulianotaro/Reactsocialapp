import { InData } from "./../inData ";
import styles from "./MessagePreview.module.scss";

const MessagePreview = (props) => {
  const data = props.data || {
    text: `What?`,
    date: new Date(),
    sender: `User`,
  };

  return (
    <div className={styles.message}>
      <h5>{data.sender}</h5>
      <InData data={data} />
      <p>{data.text}</p>
    </div>
  );
};

export { MessagePreview };
