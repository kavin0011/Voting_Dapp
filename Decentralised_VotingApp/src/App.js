// import './App.css';
// import Footer from './Components/Footer';
// import Home from './Components/Home';
// function App() {
//   return (
//     <div className="App">
//       <Home/>

//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import {useEffect,useState} from 'react'
import { VotingPage } from './Components/VotingPage';
import PublicRegister from './Components/PublicRegister';
import PartyRegistrationForm from './Components/PartyRegisterForm';
import toast, { Toaster } from 'react-hot-toast';

import ABI from "./ABI/voteabi"
import Web3 from 'web3' 
function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [voterID, setVoterID] = useState(''); // Store voter ID
  const [voterInfo, setVoterInfo] = useState(null); // Store voter data from contract
  const [Parties,setParties] = useState(null);

  const [partyDetails, setPartyDetails] = useState({
        name: '',
        email:'',
        leader: '',
        partydescreption: '',
        image_hash: '',
        ideology: ''
      });

      const [isRegistrationPhase, setIsRegistrationPhase] = useState(false);
      const [isVotingPhase, setIsVotingPhase] = useState(false);
      const [isAfterVotingPhase, setIsAfterVotingPhase] = useState(false);
  const [voterDetails, setVoterDetails] = useState({
    name: '',
    aadhar: '',
    nationality:'',
    voterId: ''
  });

  const [result,setresult] = useState(null);
  const CONTRACT_ADDRESS ="0xfc673341470CA61D32a50a7f410ca08e15be6CF1";
  
  // useEffect(() => {

    const registerationover = () => toast.error('The Registeration phase is over !');

//     let notificationTimer;

// const registerationover = () => {
//   if (!notificationTimer) {
//     toast.error('The Registration phase is over!');
//     notificationTimer = setTimeout(() => {
//       notificationTimer = null; // Reset after a delay
//     }, 3000); // Limit to one toast every 3 seconds
//   }
// };

    const loadWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setWeb3(web3Instance);
          setAccount(accounts[0]);
          const votingContract = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS);
          setContract(votingContract);

          const contractInstance = new web3Instance.eth.Contract(
            ABI,
            CONTRACT_ADDRESS
          );
          setContract(contractInstance); // Store the contract instance
          // getVoterInfo(accounts[0], contractInstance);


          // const registrationPhase = await contract.methods.isRegistrationPhase().call();
          // const votingPhase = await contract.methods.isVotingPhase().call();
          // const afterVotingPhase = await contract.methods.isAfterVotingPhase().call();

          // console.log(registrationPhase+"!!!");
          // console.log(votingPhase+"!!!");
          // console.log(afterVotingPhase+"!!!");
          // setIsRegistrationPhase(registrationPhase);
          // setIsVotingPhase(votingPhase);
          // setIsAfterVotingPhase(afterVotingPhase);
          // console.log(isRegistrationPhase);


          // toast.success('Connected to MetaMask');
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
          console.log("not connected");
          // toast.error('Could not connect to MetaMask');
        }
      } else {
        // toast.error('Please install MetaMask!');
        console.log("install metamask");
      }
    };
    // loadWeb3();
    // },[])
    console.log("connected");
    console.log({web3});
    console.log({account}.account);
    console.log({contract});


     // Fetch voter information using the connected account

  //    const getVoterInfo = async (currentVoterId) => {
  //     try {
  //       console.log(currentVoterId);
  //         const voterInfo = await contract.methods.getVoterDetails(currentVoterId).call();
  //         if(voterInfo){
  //           setVoterInfo(voterInfo); // Store the voter information
  //         }else{
  //           return false;
  //         }

  //         // setVoterID('Voter not registered');
  //         console.log('Voter Info:', voterInfo);
  //     } catch (error) {
  //         console.error('Error fetching voter details:', error);
  //     }
  // };
  
  // const getVoterInfo = async (account, contractInstance) => {
  //   try {
  //     const voterData = await contractInstance.methods.voters(account).call();

  //     // Check if the voter is registered and display the voter ID
  //     if (voterData && voterData.voterid) {
  //       setVoterID(voterData.voterid);
  //     } else {
  //     }
  //   } catch (error) {
  //     console.error('Error fetching voter info:', error);
  //     setVoterID('Error fetching voter data');
  //   }

  //   console.log({voterID});
  // };


  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    if (voterDetails.aadhar && voterDetails.name&&voterDetails.nationality&& voterDetails.voterId) {  // Make sure the state is not empty
      registerVoter();
    }
  }, [voterDetails]);
  // useEffect(() => {
  //   if (voterDetails.aadhar) {  // Only trigger if data is present
  //     registerVoter();
  //   }
  // }, [voterDetails]);

  const registerVoter = async(voterdetails) => {
    console.log(voterdetails);
    const registrationPhase = await contract.methods.isRegistrationPhase().call();
    if(!registrationPhase){
       registerationover();
      return;
    }
    const { name, aadhar, nationality, voterId } = voterdetails;
    // console.log({name}.name);
    console.log("hi");
    console.log(aadhar);
    try {
      await contract.methods
        .registerVoter(name, aadhar, nationality, voterId)
        .send({ from: account });
      // toast.success('Voter registered successfully');
      console.log("Voter registered succesfully");
    } catch (error) {
      console.error('Error registering voter:', error);
      console.log("Failed to register");
      // toast.error('Failed to register voter');
    }
  };


  // Fetch all registered parties
  const getAllParties = async () => {
    try {
      const partiesList = await contract.methods.getAllParties().call();
      console.log(partiesList);
      setParties(partiesList);
    } catch (error) {
      console.error('Error fetching parties:', error);
      // toast.error('Failed to fetch parties');
    }
  };

  //  Register a new party
  const registerParty = async (partydetails) => {

    const registrationPhase = await contract.methods.isRegistrationPhase().call();
    if(!registrationPhase){
      registerationover();
      return;
    }

    const {name,email,leader,partydescreption,image_hash,ideology} = partydetails;
    console.log(email);
    try {
      await contract.methods
        .registerParty(name, image_hash, leader, email, ideology)
        .send({ from: account });
        console.log("Party_Registered_succesfully");
      // toast.success('Party registered successfully');
    await getAllParties(); // Refresh the list
    } catch (error) {
      console.error('Error registering party:', error);
      // toast.error('Failed to register party');
    }
  };

  //cast vote
  const castVote = async (party_id) => {
        try {
          await contract.methods.castVote(parseInt(party_id), voterID).send({ from: account });
          toast.success('Voted');

          console.log("vote casted.");
          getAllParties(); // Refresh the list to show updated votes
        } catch (error) {
          console.error('Error casting vote:', error);
          // toast.error('Failed to cast vote');
          console.log("failed to cast vote");
        }
      };
    
      //Get Result
      const GetResult= async()=>{
        try{
          const Result = await contract.methods.getElectionResults().call();
          // return "It works";
          setresult(Result);
        }catch(e){
          console.log("Error in fetching",e);
        }
      }


      const update_voterInfo=(id)=>{
        setVoterID(id);
      }
    

  return (
    <div>
       <Toaster />
    <Router>
      <Routes>
        <Route path="/" element={<Home Parties={Parties} account={account} 
                                        getAllParties={getAllParties}
                                        GetResult={GetResult}
                                        result={result}
                                        isRegistrationPhase={isRegistrationPhase}
                                        isVotingPhase={isVotingPhase}
                                        isAfterVotingPhase={isAfterVotingPhase}
                                        voterInfo={voterInfo}
                                        contract={contract}
                                        update_voterInfo={update_voterInfo}/>} />
        <Route path="/voterpage" element={
          <VotingPage Parties = {Parties} castVote={castVote} getAllParties={getAllParties} isRegistrationPhase={isRegistrationPhase} contract={contract}/>} /> {/* Define the route */}
        <Route path="/publicRegister" element={<PublicRegister registerVoter={registerVoter} 
                      setVoterDetails={setVoterDetails} isRegistrationPhase={isRegistrationPhase}/>}/>
        <Route path="/PartyRegister" element={<PartyRegistrationForm registerParty={registerParty}
                      setPartyDetails={setPartyDetails} isRegistrationPhase={isRegistrationPhase}/>}/>
      </Routes>
    </Router>
</div>
  );
}

export default App;
