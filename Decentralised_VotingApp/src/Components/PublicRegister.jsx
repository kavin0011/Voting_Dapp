import '../Styles/PublicRegister.css';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const PublicRegister = ({registerVoter, setVoterDetails}) => {
  // State variables for input fields
  const [name, setName] = useState('');
  const [adharNumber, setAdharNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [voterId, setVoterId] = useState('');

  // const notify = () => toast.error('The Registeration phase is over !');
  const requiredField= () => toast.error('All Fields are Required!');
  const handlechange = async () => {

    if(!name||!adharNumber||!nationality||!voterId){
      requiredField();
      return;
    }
    // if(!isRegistrationPhase){
      //   notify();
      //   return;
      // }
      console.log("HI");
      const voterdetails={name: name,aadhar: adharNumber, nationality:nationality, voterId:voterId};
      registerVoter(voterdetails);

    }
  //  setVoterDetails({name: name,aadhar: adharNumber, nationality:nationality, voterId:voterId});
  //  await setVoterDetails({ name, adharNumber,nationality,voterId});
  // setVoterDetails(
  //   name, adharNumber, nationality, voterId 
  // );
  //  registerVoter();
    // setVoterDetails((prevDetails) => ({
    //   ...prevDetails,
    //   name,
    //   aadhar: adharNumber,
    //   nationality,
    //   voterId
    // }));

  // };
  return (
    <div className='formDiv'>
      {/* <Toaster /> */}
      <div className="form-container">
        <h1 className="form-title">Public Registration</h1>
        <div className="form-content">
          {/* Left Side Inputs */}
          <div className="form-left">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />

            <label className="form-label">Adhar Number</label>
            <input
              type="text"
              placeholder="Enter Adhar Number"
              value={adharNumber}
              onChange={(e) => setAdharNumber(e.target.value)}
              className="form-input"
            />
          </div>

          {/* Right Side Inputs */}
          <div className="form-right">
            <label className="form-label">Nationality</label>
            <input
              type="text"
              placeholder="Enter Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="form-input"
            />

            <label className="form-label">Voter ID</label>
            <input
              type="text"
              placeholder="Enter Voter ID"
              value={voterId}
              onChange={(e) => setVoterId(e.target.value)}
              className="form-input"
            />
          </div>
        </div>
        <button className="register-btn" onClick={handlechange}>Register</button>
      </div>
    </div>
  );
};

export default PublicRegister;
