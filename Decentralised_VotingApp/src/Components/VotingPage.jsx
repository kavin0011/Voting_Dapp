import React from 'react';
import '../Styles/VotingPage.css';
import toast, { Toaster } from 'react-hot-toast';

// Function to construct IPFS URL from hash
const getIpfsUrl = (hash) => {
  return `https://gateway.pinata.cloud/ipfs/${hash}`;
};


export const VotingPage = ({ Parties, castVote,isVotingPhase,contract}) => {
  
  const CastVote = async (p_id) => {
    // if (isRegistrationPhase&&!isVotingPhase) {
    //   beforevotingphase();
    //   return;
    // }
    // if (!isRegistrationPhase&&!isVotingPhase) {
    //   Aftervotingphase();
    //   return;
    // }
    const check = await contract.methods.isVotingPhase().call();
    if(!check){
      toast.error("This is not the voting phase !");
      return;
    }
     castVote(p_id);

  };


  // const beforevotingphase = () => toast.error('The voting phase is not Started !');
  // const Aftervotingphase = () => toast.error('The voting phase is not Started !');

  
  // Conditional rendering if Parties is empty
  if (!Parties || Parties.length === 0) {
    return <p>Loading party data...</p>;
  }

  return (
    <div className='VotingPagePlacer'>
      <Toaster />
      <h1 className='VotingPage-Heading'>Election Voting</h1>
      <p className='VotingPage-SubHeading'>Select Your Candidate</p>
      <div className='VotingPage-Flag-Placer'>
        <div className='VotingPage-Flag-Placer1'>
          {Parties.map((party) => (
            <div className='VotingPage-card' key={party.id}>
              <div className='VotingPage-Flag'>
                <img 
                  src={getIpfsUrl(party.symbol)} 
                  alt='Flag' 
                  className='VotingPage-Flag-Image' 
                />
              </div>
              <div className='Content-Placer'>
                <p className='VotingPage-Flag-Name'>Party Name: {party.name || 'No name available'}</p>
                <p className='VotingPage-Flag-Leader'>Leader: {party.leader || 'No leader'}</p>
                {/* <p className='VotingPage-Flag-Moto'>Moto</p> */}
                {/* <p className='VotingPage-Flag-para'>{party.partyMotive || 'No motive available'}</p> */}
                <button className='Vote-Button' onClick={() => CastVote(party.id)}>Vote</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// 0
// : 
// 0
// : 
// 0n
// 1
// : 
// ""
// 2
// : 
// ""
// 3
// : 
// ""
// 4
// : 
// ""
// 5
// : 
// ""
// 6
// : 
// 0n
// id
// : 
// 0n
// leader
// : 
// ""
// leaderEmail
// : 
// ""
// name
// : 
// ""
// partyMotive
// : 
// ""
// symbol
// : 
// ""
// voteCount
// : 
// 0n
// __length__
// : 
// 7