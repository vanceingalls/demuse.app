import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';
import { useProvider } from '../hooks/useProvider';

function MetamaskButton() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const {provider, connected} = useProvider();
  
  useEffect(() => {
    (async () => {
      console.log(`balance@${address}: ${await provider.getBalance(address, "latest")}`);
      console.log(`balance of signer: ${balance}`);
    })();
  }, [address, balance, provider]);

  useEffect(() => {
    
  }, [address, balance]);

  const accountChangedHandler = async (newAccount: ethers.providers.JsonRpcSigner) => {
    setAddress(await newAccount.getAddress());
    setBalance(ethers.utils.formatEther(await newAccount.getBalance()));
  }

  const connect = useCallback(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    if (window.ethereum) {
      provider.send("eth_requestAccounts", []).then(async () => {
        await accountChangedHandler(provider.getSigner());
      });
    } else {
      alert("Please Install Metamask!!!");
    }
  }, []);

  if (connected) {
    return <div>Connected</div>
  }

  return (
    <button onClick={connect}>Connect Metamask</button>
  )
}

export default MetamaskButton;
