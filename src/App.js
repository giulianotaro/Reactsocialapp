import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";

import Home from "./pages/Home";

const INIT_STATE = {
  name: "ReactSocialApp",
  nav: [
    { link: "/", label: "Home" },
    { link: "/new-post", label: "Create new post" },
    { link: "/messages", label: "Messages" },
    { link: "/friends", label: "Friends" },
  ],
  friendsPreview: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change-name":
      return { ...state, name: "Feisbell" };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  return (
    <div>
      <Header name={state.name} links={state.nav} />

      <button onClick={() => dispatch({ type: "change-name" })}>
        Cambia nome
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<CreatePost />} />
        <Route path="/messages" element={<h3>Messages</h3>} />
        <Route path="/friends" element={<h3>Friends</h3>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;