import React, { useEffect, useState } from "react";
import Nav from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Work from "./components/work.jsx";
import Contact from "./components/contact.jsx";
import Services from "./components/services.jsx";
import Footer from "./components/footer.jsx";
import ModalInfo from "./components/modalInfo.jsx";
import { workInfo } from "./files/workinfo.jsx";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Work", href: "#work", current: false },
  { name: "Service", href: "#service", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [nav, updateNav] = useState(navigation);
  const [modal, setModal] = useState(false);
  const [infos, setInfo] = useState(workInfo);
  const [modalInfo, setModalInfo] = useState(null);

  function toggleActive(e) {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === e.target.innerHTML, // Note the typo
    }));
    updateNav(updatedNavigation);
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {modal && (
        <ModalInfo
          modal={modal}
          setModal={setModal}
          modalInfo={modalInfo}
          setModalInfo={setModalInfo}
          infos={infos}
          setInfo={setInfo}
        />
      )}
      <Nav
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleActive={toggleActive}
        nav={nav}
        classNames={classNames}
      />
      <Home />
      <About />
      <Skills />
      <Work
        modal={modal}
        setModal={setModal}
        setModalInfo={setModalInfo}
        infos={infos}
        setInfo={setInfo}
      />
      <Services />
      <Contact />
      <Footer
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleActive={toggleActive}
        nav={nav}
        classNames={classNames}
      />
    </>
  );
}

export default App;
