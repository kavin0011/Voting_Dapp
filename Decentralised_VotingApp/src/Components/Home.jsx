import { Hero } from './Hero';
import TransparencyBanner from './Transparency';
import IconButtons from './BlockInfo';
import Systemwork from './Systemwork';
import PartyRegistrationForm from './PartyRegisterForm';
import { VotingPage } from './VotingPage';
import Robot from './Robot';
import WhyBlockchain from './WhyBlockchain';
import Footer from './Footer';
import PublicRegister from './PublicRegister';
import Result from './Result';

function Home({Parties,account,getAllParties,GetResult,result,isRegistrationPhase,isVotingPhase,isAfterVotingPhase,getVoterInfo,voterInfo,contract,update_voterInfo}) {
  return (
    <div className="App">
      <Hero Parties={Parties} account={account} getAllParties={getAllParties} getVoterInfo={getVoterInfo} voterInfo={voterInfo} contract={contract} update_voterInfo={update_voterInfo}/>
      <IconButtons/>
      <TransparencyBanner/>
      <Systemwork/>
      <WhyBlockchain/>
      <Result GetResult={GetResult} result={result} contract={contract}/>
      <Footer/>
      {/* <PartyRegistrationForm/> */}

    </div>
  );
}

export default Home;
