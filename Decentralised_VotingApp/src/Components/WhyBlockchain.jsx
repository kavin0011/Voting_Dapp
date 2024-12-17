import React from 'react'
import img from '../Assets/lastimg.png'
import '../Styles/WhyBlockchain.css'
export default function WhyBlockchain() {
  return (
    <div className='choosebody'>
        <div className='choose-container-1'>
            <div className='choose-container-1-head'>Why Choose Our BlockChain Voting System?</div>
            <div className='choose-container-1-text'>The future of secure and transparent voting</div>
        </div>
        <div className='choose-container-2'>
            <img src={img} alt='lastimg' className='lastimgcss'/>
        </div>
    </div>
  )
}