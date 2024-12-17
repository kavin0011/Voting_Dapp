import React, { useState } from 'react';
import '../Styles/Hero.css';
import demo from '../Assets/youtubedemo.png';
import sec from '../Assets/Security.png';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export const Hero = ({ Parties, account, getAllParties, getVoterInfo, voterInfo,contract,update_voterInfo}) => {
  const navigate = useNavigate();
  const [voterIdInput, setVoterIdInput] = useState(''); // State for voter ID input
  const [isVoterVerified, setIsVoterVerified] = useState(false); // State to track if the voter is verified

  console.log("check", { account }.account);

  const handleVoteClick = async () => {
    await getAllParties();
    const checkDataAvailability = () => {
      if (Parties) {
        navigate('/voterpage');
      } else {
        setTimeout(checkDataAvailability, 100); // Poll every 100ms until data is ready
      }
    };
    checkDataAvailability();
  };

  const handleVoterIdChange = (e) => {
    setVoterIdInput(e.target.value);
  };

  const notify=()=>toast.error("voter not registered !");
  let isverified = true;
  let voterinfo
  const handleVerifyVoter = async () => {


    // const getVoterInfo = async (currentVoterId) => {
    //   try {
        // console.log(currentVoterId);
        try{

         voterinfo = await contract.methods.getVoterDetails(voterIdInput).call();
        update_voterInfo(voterIdInput);
      }
      catch(e){
          isverified = false;
          // toast.error("Voter Id Not registered !");
        }
          // if(voterInfo){

          //   // setVoterInfo(voterInfo); // Store the voter information
          // }else{
          //   return false;
          // }

          // setVoterID('Voter not registered');
          // console.log('Voter Info:', voterInfo);
      // } catch (error) {
      //     console.error('Error fetching voter details:', error);
      // }
  // };
    //  isverified = await getVoterInfo(voterIdInput); // Fetch voter info based on input voter ID
     if(!voterinfo){
       notify();
       return;
     }
    if (voterinfo) {
      setIsVoterVerified(true); // Set the verification flag if voter info is found
    } else {
      toast.error('Invalid Voter ID. Please try again.'); // Display an error if voter not found
    }
  };

  const handleRegisterForm = async () => {
    navigate('/publicRegister'); // Adjust the path based on your route setup
  };

  return (
    <div className='hero-section'>
      <Toaster/>
      <div className='Hero-container1'>
        <div className='container1-sub1'>
          <div className='Total-users'>
            <div className='TotalUserPlacer'>
              <div className='Total-usersdiv1'></div>
              <div className='Total-userdiv2'>
                <p className='Total-userdiv2-p1'> Total Users</p>
                <p className='Total-userdiv2-p2'>1.4 Billion</p>
              </div>
            </div>
          </div>

          <div className='Register'>
            <div className='Register-placer'>
              <div className='Register-div1'>
                <p>Into the World Of Blockchain</p>
                <button className='RegisterNow' onClick={handleRegisterForm}>Register</button>
              </div>
              <div className='Register-div2'>
                <img src={sec} className='secimg' alt='Security'></img>
              </div>
            </div>
          </div>
        </div>
        
        <div className='container1-sub2'>
          <h1 className="container1-sub2-title-text">
            Experience
            <span className="logosof-container1-sub2">
              <p className='logosof-container1-sub2-text'>Welcome to your Blockchain Voting Platform</p>
            </span>
            <br />
            <span className="container1-sub2-italic-text">the future</span> of Voting
          </h1>
        </div>
        
        <div className='container1-sub3'>
          <p className='container1-sub3-p'>Empowering democratic elections with<br /><span className='container1-sub3-p-span'>blockchain technology.</span></p>
          <div className='Arrow-placer'><div className='Arrow' /></div>
          
          {/* Voter ID Input and Button */}
          {!isVoterVerified && (
          <div className="voter-id-container">
            <input 
              type="text" 
              placeholder="Enter Voter ID" 
              value={voterIdInput} 
              onChange={handleVoterIdChange} 
              className="voter-id-input"
            />
            <button onClick={handleVerifyVoter} className="verify-button">Verify Voter ID</button>
          </div>)}

          {/* Conditionally render the "Vote Now" button only if voter is verified */}
          {isVoterVerified && (
            <button className='vote-button' onClick={handleVoteClick}>Vote Now</button>
          )}
        </div>
      </div>
      
      <div className='Hero-container2'>
        <div className="vote-demo-card">
          <img src={demo} alt="Voting Demo" className="background-image" />
          <div className="overlay-text">
            <div className="main-text">
              <p>United<br /> India 2024</p>
            </div>
            <div className="vertical-line" />
            <div className="sub-text">
              <p>Watch a Quick<br /> Demo OF How To Vote</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
