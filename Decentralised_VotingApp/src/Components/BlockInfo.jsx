import React from 'react';
import '../Styles/BlockInfo.css'; // Import the CSS file for styles
import secure from '../Assets/verified.png'
import bitcoin from '../Assets/bitcoin.png'
import blockchain from '../Assets/blockchain.png'
import reality from '../Assets/reality.png'
import adv from '../Assets/advertisement.png'

const IconButtons = () => {
  return (
    <>
    <div>
        <img src={adv} className='blockinfo-1'/>
    </div>
    </>
  );
};

export default IconButtons;
