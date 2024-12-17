import '../Styles/PartyRegisterForm.css';
import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const PartyRegistrationForm = ({ registerParty, setPartyDetails}) => {
  const [partyName, setPartyName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [partyEmail, setPartyEmail] = useState('');
  const [partyDescription, setPartyDescription] = useState('');
  const [partyIdeology, setPartyIdeology] = useState('');
  const [partyFlag, setPartyFlag] = useState(null); // For image preview
  const [ipfs, setIpfs] = useState(''); // Store IPFS URL after upload
  const [loading, setLoading] = useState(false); // Track upload status

  const notifyRegistrationOver = () => toast.error('The Registration phase is over!');
  const notifyFieldsRequired = () => toast.error('All fields need to be filled !');

  const hRegister = async () => {
    // Check if all fields are filled
    // console.log("empty field");
    if (!partyName || !leaderName || !partyEmail || !partyDescription || !partyIdeology || !ipfs) {
      notifyFieldsRequired(); // Notify if any field is empty
      // alert("Empty field");
      return;
    }

    // Check if registration phase is active
    // if (!isRegistrationPhase) {
    //   notifyRegistrationOver();
    //   return;
    // }

    // Set party details
    const partyDetails = {
    name: partyName,
    email: partyEmail,
    leader: leaderName,
    partydescreption: partyDescription,
    image_hash: ipfs,
    ideology: partyIdeology,
  };

  // Pass `partyDetails` directly to `registerParty`
  registerParty(partyDetails);
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log('No file selected');
      return;
    }

    const imageURL = URL.createObjectURL(file); // Preview image
    setPartyFlag(imageURL);

    setLoading(true); // Start loading indicator

    try {
      const PINATA_API_KEY = 'ff8bb0e5c012e5a4aa32';
      const PINATA_SECRET_API_KEY = '9652e162fe06ba0ceb91cc1289f025969a90b03c1a3ecfe7c293ea11997ad441';

      const formData = new FormData();
      formData.append('file', file);

      const response = await axios({
        method: 'post',
        url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
        data: formData,
        maxBodyLength: 'Infinity',
        headers: {
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_SECRET_API_KEY,
          'Content-Type': 'multipart/form-data',
        },
      });

      const IPFSHash = response.data.IpfsHash;
      setIpfs(IPFSHash); // Store IPFS hash in state
      console.log('IPFS Hash:', IPFSHash); // Log the hash for verification
    } catch (error) {
      console.error('Failed to upload image:', error);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className='formDiv'>
      {/* <Toaster /> */}
      <div className='form-container'>
        <h1 className='form-title'>Party Registration</h1>
        <div className='form-content'>
          {/* Left Side Inputs */}
          <div className='form-left'>
            <label className='form-label'>Party Name</label>
            <input
              type='text'
              required
              placeholder='Enter Party Name'
              value={partyName}
              onChange={(e) => setPartyName(e.target.value)}
              className='form-input'
              disabled={loading} // Disable during image upload
            />

            <label className='form-label'>Leader Name</label>
            <input
              type='text'
              placeholder='Enter Leader Name'
              value={leaderName}
              onChange={(e) => setLeaderName(e.target.value)}
              className='form-input'
              disabled={loading} // Disable during image upload
            />

            <label className='form-label'>Party Flag</label>
            <div className='image-upload-container'>
              <div className='image-preview'>
                {partyFlag && <img src={partyFlag} alt='Uploaded' className='image' />}
                {loading && (
                  <div className='loading-overlay'>
                    <div className='spinner'></div>
                    <p>Uploading...</p>
                  </div>
                )}
              </div>
              <label htmlFor='upload-input' className='upload-btn'>
                Upload Image
              </label>
              <input
                id='upload-input'
                type='file'
                accept='image/*'
                onChange={handleImageUpload}
                className='file-input'
                disabled={loading} // Disable during upload
              />
            </div>
          </div>

          {/* Right Side Inputs */}
          <div className='form-right'>
            <label className='form-label'>Party Email</label>
            <input
              type='email'
              placeholder='Enter email'
              value={partyEmail}
              onChange={(e) => setPartyEmail(e.target.value)}
              className='form-input'
              disabled={loading} // Disable during image upload
            />

            <label className='form-label'>Party Description</label>
            <textarea
              placeholder='Enter Description'
              value={partyDescription}
              onChange={(e) => setPartyDescription(e.target.value)}
              className='form-textarea'
              disabled={loading} // Disable during image upload
            />

            <label className='form-label'>Party Ideology</label>
            <textarea
              placeholder='Enter Ideology'
              value={partyIdeology}
              onChange={(e) => setPartyIdeology(e.target.value)}
              className='form-textarea'
              disabled={loading} // Disable during image upload
            />
          </div>
        </div>
        <button
          className='register-btn'
          onClick={hRegister}
          // disabled={loading || !ipfs || !partyName || !leaderName || !partyEmail || !partyDescription || !partyIdeology} // Disable until all fields are filled
        >
          Register Party
        </button>
      </div>
    </div>
  );
};

export default PartyRegistrationForm;
