import "./App.css";
import Header from "./components/Header";
import Creatorbody from "./components/Creatorbody";
import Podcastcontainer from "./components/Podcastcontainer";
import Sideheader from "./components/Sideheader";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isSideHeaderVisible, setIsSideHeaderVisible] = useState(false);

  const toggleSideBar = () => {
    setIsSideHeaderVisible(!isSideHeaderVisible);
  };

  return (
    <div className="App">
      <Header toggleSideBar={toggleSideBar} />
      {/* <Sideheader /> */}
      {isSideHeaderVisible ? (
        <Sideheader toggleSideBar={toggleSideBar} />
      ) : null}

      <Creatorbody></Creatorbody>
      <Podcastcontainer></Podcastcontainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
