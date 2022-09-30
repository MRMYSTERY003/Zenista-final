import React from 'react'
import Comments from './Comments'

function Accordion() {
  return (
    <div>
        <h1 className='acc-head'>FAQ's</h1>
        <Comments ques = "this is question" ans = "this is answer" />
        <Comments ques = "this is question" ans = "this is answer" />
    </div>
  )
}

export default Accordion