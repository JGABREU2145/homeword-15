import React from 'react';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import linkedinIcon from "./assets/images/icons8-linkedin-48.png";
import githubIcon from "./assets/images/icons8-github-50.png"

function App() {
  return (
    <div>
      <Nav />
      <Footer liIcon={linkedinIcon} ghIcon={githubIcon}/>
    </div>
  )
}

export default App;
