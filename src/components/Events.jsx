import React from 'react'
import Eventbox from './Eventbox'
import fimgae1 from'../images/sh7.svg'
import fimgae2 from'../images/qu.svg'
import fimgae3 from'../images/ha.svg'
import fimgae4 from'../images/de.svg'
import fimgae5 from'../images/po.svg'




function Events() {
  return (
    <div id = 'events'>
        <h1>EVENTS</h1>
        <div className='a-container'>
            <Eventbox image = {fimgae1} title = "SHARK TANK" text = "some content" r1 = "dont use any mobile phone"  r2 = "rule1" r3 = "rule1" r4 = "rule1" r5 = "rule1"/>
            <Eventbox image = {fimgae2} title = "QUIZ" text = "some content"/> 
            <Eventbox image = {fimgae3} title = "HACKTHON" text = "some content"/>
        </div>
        <div className='a-container'>
            <Eventbox image = {fimgae4} title = "DEBATE" text = "some content"/>
            <Eventbox image = {fimgae5} title = "POT POURRI" text = "some content"/>
        </div>
    </div>
  )
}

export default Events;