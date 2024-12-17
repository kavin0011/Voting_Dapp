// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Voting {
    address private owner;
    uint public registrationEndTime;
    uint public votingEndTime;
    uint public partyCount = 0;
    uint public voterCount = 0;

    struct Party {
        uint id;
        string name;
        string symbol;
        string leader;
        string leaderEmail;
        string partyMotive;
        uint voteCount;
    }

    struct Voter {
        uint id;
        string name;
        string aadhar;
        string nationality;
        string voterid;
        bool hasVoted;
        uint votedPartyId;
    }

    mapping(uint => Party) public parties;
    mapping(string => Voter) public voters;
    mapping (string => bool) public checkpartyname;

    constructor() {
        owner = msg.sender;
        registrationEndTime = block.timestamp + 4 minutes;
        votingEndTime = registrationEndTime + 3 minutes;
    }

    // Events
    event PartyRegistered(uint id, string name);
    event VoterRegistered(uint id, string name, address voterAddress);
    event VoteCast(address voter, uint partyId);

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    modifier onlyDuringRegistration() {
        require(block.timestamp < registrationEndTime, "Registration phase is over");
        _;
    }

    modifier onlyDuringVoting() {
        require(block.timestamp >= registrationEndTime && block.timestamp < votingEndTime, "Not in voting phase");
        _;
    }

    modifier onlyAfterVoting() {
        require(block.timestamp >= votingEndTime, "Voting phase is not yet over");
        _;
    }

    // Register a party
    function registerParty(
        string memory _name,
        string memory _symbol,
        string memory _leader,
        string memory _leaderEmail,
        string memory _partyMotive
    ) public onlyDuringRegistration {
        require(!checkpartyname[_name],"The Party name has already been registered");
        parties[partyCount] = Party(
            partyCount,
            _name,
            _symbol,
            _leader,
            _leaderEmail,
            _partyMotive,
            0
        );
        checkpartyname[_name] = true;
        partyCount++;
        emit PartyRegistered(partyCount, _name);
    }

    // Register a voter
    function registerVoter(
        string memory _name,
        string memory _aadhar,
        string memory _nationality,
        string memory voter_id
    ) public onlyDuringRegistration {
        require(keccak256(abi.encodePacked(voters[voter_id].voterid)) != keccak256(abi.encodePacked(voter_id)), "Voter is already registered");
        voters[voter_id] = Voter(
            voterCount,
            _name,
            _aadhar,
            _nationality,
            voter_id,
            false,
            0
        );
        voterCount++;
        emit VoterRegistered(voterCount, _name, msg.sender);
    }

    //Vote
    function castVote(uint _partyId, string memory voter_id) public onlyDuringVoting {
        Voter storage voter = voters[voter_id];

        // Check if the voter is registered
        require(bytes(voter.voterid).length > 0, "Voter is not registered");
        require(!voter.hasVoted, "You have already voted");
        require(_partyId >= 0 && _partyId < partyCount, "Invalid party ID");

        voter.hasVoted = true;
        voter.votedPartyId = _partyId;
        parties[_partyId].voteCount++;

        emit VoteCast(msg.sender, _partyId);
    }

    // Get the list of all registered parties
    function getAllParties() public view returns (Party[] memory) {
        Party[] memory allParties = new Party[](partyCount);
        for (uint i = 0; i < partyCount; i++) {
            allParties[i] = parties[i];
        }
        return allParties;
    }

    // Election results
    function getElectionResults() public view onlyAfterVoting returns (uint winnerPartyId, string memory winnerName, uint winnerVoteCount) {
        uint maxVotes = 0;
        for (uint i = 0; i < partyCount; i++) {
            if (parties[i].voteCount > maxVotes) {
                maxVotes = parties[i].voteCount;
                winnerPartyId = parties[i].id;
                winnerName = parties[i].name;
                winnerVoteCount = maxVotes;
            }
        }
    }

    // Check if registration phase is active
    function isRegistrationPhase() public view returns (bool) {
        return block.timestamp < registrationEndTime;
    }

    // Check if voting phase is active
    function isVotingPhase() public view returns (bool) {
        return block.timestamp >= registrationEndTime && block.timestamp < votingEndTime;
    }

    // Check if voting is over and results are available
    function isAfterVotingPhase() public view returns (bool) {
        return block.timestamp >= votingEndTime;
    }

    // Get voter details by voter ID
    function getVoterDetails(string memory voter_id) public view returns (
        uint id,
        string memory name,
        string memory aadhar,
        string memory nationality,
        string memory voterid,
        bool hasVoted,
        uint votedPartyId
    ) {
        Voter memory voter = voters[voter_id];
        
        // Check if the voter exists
        require(bytes(voter.voterid).length > 0, "Voter does not exist");

        return (
            voter.id,
            voter.name,
            voter.aadhar,
            voter.nationality,
            voter.voterid,
            voter.hasVoted,
            voter.votedPartyId
        );
    }

}
