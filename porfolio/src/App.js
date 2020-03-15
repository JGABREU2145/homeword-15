import React from 'react';
import Nav from "./components/Nav/Nav";
import BodyContainer from "./components/BodyContainer/BodyContainer"
import Footer from "./components/Footer/Footer";
import linkedinIcon from "./assets/images/icons8-linkedin-48.png";
import githubIcon from "./assets/images/icons8-github-50.png"
import pic from "./assets/images/Justin.jpg"


function App() {
  return (
    <div>
      <Nav />
      <BodyContainer pic={pic}/>
      <Footer liIcon={linkedinIcon} ghIcon={githubIcon}/>
    </div>
  )
}

export default App;
