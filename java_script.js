// app.js
document.addEventListener('DOMContentLoaded', async function () {
    const setOutcomeBtn = document.getElementById('setOutcomeBtn');
    const outcomeDisplay = document.getElementById('outcomeDisplay');

    // Connect to the local Ethereum node (replace with your own provider)
    const web3 = new Web3('http://localhost:8545');

    // Replace with the deployed contract address and ABI
    const contractAddress = '0x1234567890123456789012345678901234567890';
    const contractABI = [
        // ... (paste the ABI here)
    ];

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    setOutcomeBtn.addEventListener('click', async function () {
        const outcome = prompt('Enter the outcome (e.g., 1 or 0):');

        try {
            // Call the setOutcome function in the smart contract
            const result = await contract.methods.setOutcome(outcome).send({ from: 'your_wallet_address' });

            // Display the outcome
            outcomeDisplay.textContent = `Outcome set successfully. Transaction Hash: ${result.transactionHash}`;
        } catch (error) {
            console.error('Error:', error);
            outcomeDisplay.textContent = 'Error setting outcome.';
        }
    });
});
