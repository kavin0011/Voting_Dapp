import React, { useState } from 'react';
import '../Styles/Results.css';
import toast, { Toaster } from 'react-hot-toast';

const Result = ({ GetResult, contract }) => {
  // State to hold the result data
  const [result, setResult] = useState(null); // Store RESULT in state
  const [isWinner, setIsWinner] = useState(false);

  const isVotingCompleted = () => toast.error('Voting is not completed!');

  const handleClick = async () => {
    try {
      const RESULT = await contract.methods.getElectionResults().call();
      setResult(RESULT); // Update the result state with fetched data
      setIsWinner(true); // Set winner state to true
      console.log(RESULT);
    } catch (e) {
      console.log(e);
      isVotingCompleted(); // Show toast error if voting is not completed
    }
  };

  return (
    <div className="main_box">
      <Toaster />
      <button className="result_button" onClick={handleClick}>
        Get Result
      </button>

      {/* Only render result display if result data is available */}
      {isWinner && result && (
        <div className="result_display">
          <h2>Winner Details</h2>
          {/* <p><strong>Party ID:</strong> parseInt({result.winnerPartyId})</p> */}
          <p><strong>Party Name:</strong> {result.winnerName}</p>
          {/* <p><strong>Vote Count:</strong> {result.winnerVoteCount}</p> */}
        </div>
      )}
    </div>
  );
};

export default Result;
