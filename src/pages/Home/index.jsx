import styles from "./Home.module.scss";
import { useState } from "react";
import { FriendPreview } from "../../components/FriendPreview";
import { MessagePreview } from "../../components/MessagePreview";
import {Post} from "../../components/Post";


const friends = [
  { name: `Chandler`, photo: `https://randomuser.me/api/portraits/men/14.jpg` },
  { name: `Monica`, photo: `https://randomuser.me/api/portraits/women/19.jpg` },
  { name: `Ross`, photo: `https://randomuser.me/api/portraits/men/35.jpg` },
];

const messages = [
  { text: `What?`, date: new Date(), sender: `Chandler` },
  { text: `Omg`, date: new Date(), sender: `Joy` },
  { text: `Ok, see you later`, date: new Date(), sender: `Phoebe` },
  { text: `Hello`, date: new Date(), sender: `Agata` },
  { text: `Oh.`, date: new Date(), sender: `Stuart` },
  { text: `Wooow`, date: new Date(), sender: `Lady` },
];

const posts = [
  {
    author: "user",
    text: "Today at Palermo city",
    date: new Date(),
    photo: "https://images.unsplash.com/photo-1577188947090-95007502b22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
  },
  {
    author: "user",
    text: "Hello friend!",
    date: new Date(),
  },
];

const Home = () => {


const [friendsPreview, setFriendsPreview] = useState(friends);
const [allPosts, setAllPosts] = useState(posts);
const [messagesPreview, setMessaggesPreview] = useState(messages);



  return (
    <section className={styles.home}>
      <h3>Benvenuto utente</h3>
      <div className={styles.grid}>
        <aside>
          {friendsPreview.map((friend, index) => (
            <FriendPreview key={index} data={friend} />
          ))}
        </aside>
        <main>{allPosts.map((post, index) => (
            <Post key={index} data={post} />
          ))}</main>
        <aside> {messagesPreview.map((message, index) => (
            <MessagePreview key={index} data={message} />
          ))}</aside>
      </div>
    </section>
  );
};

export default Home;
