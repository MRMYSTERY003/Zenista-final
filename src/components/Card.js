import React from 'react'
import "./Card.css"
import Popup from 'reactjs-popup';

function Card(props) {

  return (
    <div>

    <Popup trigger= {open => (
      <button className="button">Rules</button>
    )} on={['hover', 'focus']} position="top center">
        {close => (
          <div className='t-content'>
            <h2>Rules</h2> 
            <div className='rules'>
              <li>{props.r1}</li>
              <li>{props.r2}</li>
              <li>{props.r3}</li>
              <li>{props.r4}</li>
              <li>{props.r5}</li>
            </div>

            <a className="close" onClick={close}>
              &times;
            </a>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default Card