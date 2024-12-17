import React from 'react'
import '../Styles/Systemwork.css'
import System from '../Assets/VotingSystemWork.png'
export default function Systemwork() {
  return (
    <div className='systemworkbody'>
        <div className='system-container-1'>
            <img src={System} alt='systemicon'/>
        </div>
        <div className='system-container-2'>
            <div className='system-container-text'>How Does Our</div>
            <div className='system-container-text'>Voting System</div>
            <div className='system-container-text'>Work?</div>
        </div>
    </div>
  )
}