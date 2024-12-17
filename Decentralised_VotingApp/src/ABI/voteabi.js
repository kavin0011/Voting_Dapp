// const vote = [
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "id",
//                 "type": "uint256"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "string",
//                 "name": "name",
//                 "type": "string"
//             }
//         ],
//         "name": "PartyRegistered",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": false,
//                 "internalType": "address",
//                 "name": "voter",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "partyId",
//                 "type": "uint256"
//             }
//         ],
//         "name": "VoteCast",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": false,
//                 "internalType": "uint256",
//                 "name": "id",
//                 "type": "uint256"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "string",
//                 "name": "name",
//                 "type": "string"
//             },
//             {
//                 "indexed": false,
//                 "internalType": "address",
//                 "name": "voterAddress",
//                 "type": "address"
//             }
//         ],
//         "name": "VoterRegistered",
//         "type": "event"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "_partyId",
//                 "type": "uint256"
//             },
//             {
//                 "internalType": "string",
//                 "name": "voter_id",
//                 "type": "string"
//             }
//         ],
//         "name": "castVote",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "name": "checkpartyname",
//         "outputs": [
//             {
//                 "internalType": "bool",
//                 "name": "",
//                 "type": "bool"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "getAllParties",
//         "outputs": [
//             {
//                 "components": [
//                     {
//                         "internalType": "uint256",
//                         "name": "id",
//                         "type": "uint256"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "name",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "symbol",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "leader",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "leaderEmail",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "string",
//                         "name": "partyMotive",
//                         "type": "string"
//                     },
//                     {
//                         "internalType": "uint256",
//                         "name": "voteCount",
//                         "type": "uint256"
//                     }
//                 ],
//                 "internalType": "struct Voting.Party[]",
//                 "name": "",
//                 "type": "tuple[]"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "getElectionResults",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "winnerPartyId",
//                 "type": "uint256"
//             },
//             {
//                 "internalType": "string",
//                 "name": "winnerName",
//                 "type": "string"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "winnerVoteCount",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "name": "parties",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "id",
//                 "type": "uint256"
//             },
//             {
//                 "internalType": "string",
//                 "name": "name",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "symbol",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "leader",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "leaderEmail",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "partyMotive",
//                 "type": "string"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "voteCount",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "partyCount",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "_name",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "_symbol",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "_leader",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "_leaderEmail",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "_partyMotive",
//                 "type": "string"
//             }
//         ],
//         "name": "registerParty",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "_name",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "_aadhar",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "_nationality",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "voter_id",
//                 "type": "string"
//             }
//         ],
//         "name": "registerVoter",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "registrationEndTime",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "voterCount",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "name": "voters",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "id",
//                 "type": "uint256"
//             },
//             {
//                 "internalType": "string",
//                 "name": "name",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "aadhar",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "nationality",
//                 "type": "string"
//             },
//             {
//                 "internalType": "string",
//                 "name": "voterid",
//                 "type": "string"
//             },
//             {
//                 "internalType": "bool",
//                 "name": "hasVoted",
//                 "type": "bool"
//             },
//             {
//                 "internalType": "uint256",
//                 "name": "votedPartyId",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "votingEndTime",
//         "outputs": [
//             {
//                 "internalType": "uint256",
//                 "name": "",
//                 "type": "uint256"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     }
// ]


const vote = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "PartyRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "partyId",
				"type": "uint256"
			}
		],
		"name": "VoteCast",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "voterAddress",
				"type": "address"
			}
		],
		"name": "VoterRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_partyId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "voter_id",
				"type": "string"
			}
		],
		"name": "castVote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "checkpartyname",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllParties",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "leader",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "leaderEmail",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "partyMotive",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					}
				],
				"internalType": "struct Voting.Party[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getElectionResults",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "winnerPartyId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "winnerName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "winnerVoteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "voter_id",
				"type": "string"
			}
		],
		"name": "getVoterDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "aadhar",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nationality",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "voterid",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "hasVoted",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "votedPartyId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isAfterVotingPhase",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isRegistrationPhase",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isVotingPhase",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "parties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "leader",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "leaderEmail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "partyMotive",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "partyCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_leader",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_leaderEmail",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_partyMotive",
				"type": "string"
			}
		],
		"name": "registerParty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_aadhar",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nationality",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "voter_id",
				"type": "string"
			}
		],
		"name": "registerVoter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registrationEndTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "voterCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "aadhar",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nationality",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "voterid",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "hasVoted",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "votedPartyId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingEndTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


export default vote;