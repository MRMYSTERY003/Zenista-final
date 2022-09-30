import React from 'react'
import Eventbox from './Eventbox'
import fimgae1 from'../images/sh6.svg'
import fimgae2 from'../images/qu.svg'
import fimgae3 from'../images/ha.svg'
import fimgae4 from'../images/de.svg'
import fimgae5 from'../images/po.svg'



function Events() {
  return (
    <div id = 'events'>
        <h1>EVENTS</h1>
        <div className='a-container'>
            <Eventbox image = {fimgae1} title = "SHARK TANK" text = "first second third fouth sixth seventh eaights ningth thenth eleventh twelth thertent forun 5th sixteen seventeen eaighteen nineteen twente twentone twentwo twentthere "/>
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