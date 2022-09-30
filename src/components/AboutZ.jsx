import React from 'react'
import video from '../video/zen2.mp4'

function AboutZ() {
  return (
    <div className="about-bg">
      <h1> here is the video</h1>
      <video width="1080" height="720" autoplay="true" loop="true" >
        <source src={video} type="video/mp4"/>
      </video>
    </div>
  )
}

export default AboutZ