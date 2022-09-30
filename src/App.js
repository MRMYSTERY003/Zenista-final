import React from 'react'
import Nav from './components/nav';
import Header from './components/Header';
import Events from './components/Events';
import Offer from './components/Offer';
import Ourteam from './components/Ourteam';
import Accordion from './components/Accordion';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Events/>
      <Offer/>
      <Ourteam/>
      <Accordion/>
    </div>
  );
}

export default App;
