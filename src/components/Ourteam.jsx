import React from 'react'
import Profilebox from './Profilebox'
import fimgae1 from'../images/pro.jpg'
import principal from '../images/persons/principal.jpg'
import hod from '../images/persons/hod.jpg'



function Ourteam() {
  return (
    <div className='profilels'>
        <h1>OUR TEAM</h1>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>PRINCIPAL</h2>
            </div>
            <div className='pro-img'>
                
                <Profilebox image = {principal} title = "PRINCIPAL" text = "contact details "/>
            </div>
        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>ECE HOD</h2>
            </div>
            <div className='pro-img'>
                <Profilebox image = {hod} title = "Dr. RAJA" text = "contact details "/>
            </div>
        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>Conveners</h2>
            </div>
            <div className='pro-img'>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
            </div>
        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>Organizers</h2>
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
            </div>
        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>Technical Support</h2>
            </div>
            <div className='pro-img-3'>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
            </div>
        </div>

        <div className='pro-container'>
            <div className='pro-head'>
                <h2>Web Developers</h2>
            </div>
            <div className='pro-img'>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
            </div>
        </div>
       
    </div>
  )
}

export default Ourteam