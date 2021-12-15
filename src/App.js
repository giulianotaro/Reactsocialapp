import Header from "./components/Header";
import Footer from "./components/Footer";
/* import AddIva from "./components/AddIva" */

function App() {
  const name = "ReactSocialApp";
  const nav = [

    { link: "/home", label: "Home" },
    { link: "/friends", label: "Friends" },
    { link: "/messages", label: "Messages" },

  ];



  return (
  

    <div>
      <Header name={name} links={nav} />
      <Footer />
    {/*   <AddIva price={1000} vat={22} /> */}
    </div>
  );
}

export default App;
