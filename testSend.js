< !DOCTYPE html >

<html>
<head>
  <script src="node_modules/web3/dist/web3.js" type="text/javascript">
  </script>
    <script src="node_modules/truffle-contract/dist/truffle-contract.js" type="text/javascript">
    </script>
</head>


<body>

<script>
var web3;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

var EthereumSession = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_myInt",
				"type": "uint256"
			}
		],
		"name": "setTheInt",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTheInt",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

var ethereumSessionInstance = EthereumSession.at("0xB9F48219FE2e7343a3F7cB6Ca19751d0855622aD");

web3.eth.defaultAccount = web3.eth.accounts[0];

ethereumSessionInstance.setTheInt(4546);

//wait until the transaction is mined.
console.log(ethereumSessionInstance.getTheInt());

//Truffle-Contract

var provider = new Web3.providers.HttpProvider("http://localhost:7545");
			var EthereumSessionTruffle = TruffleContract({
				[
					{
						"constant": false,
						"inputs": [
							{
								"name": "_myInt",
								"type": "uint256"
							}
						],
						"name": "setTheInt",
						"outputs": [],
						"payable": false,
						"stateMutability": "nonpayable",
						"type": "function"
					},
					{
						"constant": true,
						"inputs": [],
						"name": "getTheInt",
						"outputs": [
							{
								"name": "",
								"type": "uint256"
							}
						],
						"payable": false,
						"stateMutability": "view",
						"type": "function"
					}
				]

				});
EthereumSessionTruffle.setProvider(provider);
var esTruffleInstance = null;
EthereumSessionTruffle.at("0xa6ceaac576ff14931c0f6d2f5fd8f546a4c0d128").then(instance => {
	esTruffleInstance = instance;
	console.log(instance);
	return instance.setTheInt(4545);
}).then(function() {
	return esTruffleInstance.getTheInt();
}).then(result => { console.log(result);});




		</script>

</body>
</html>