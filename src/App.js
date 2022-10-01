import React from 'react'
import Nav from './components/nav';
import Header from './components/Header';
import Events from './components/Events';
import Offer from './components/Offer';
import Ourteam from './components/Ourteam';
import Accordion from './components/Accordion';
import Particle2 from './components/Particle';


function App() {
  return (
    <div className="App"> 
      <Particle2/>
      <Nav/>
      <Header/>
      <Events/>
      <Offer/>
      <Ourteam/>
      {/* <Popup/> */}
      <Accordion/>

    </div>
  );
}

export default App;
