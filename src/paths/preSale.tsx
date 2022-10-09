import { useEffect } from 'react';
import MetamaskButton from '../components/MetamaskButton';
import { useProvider } from '../hooks/useProvider';

function PreSale() {
  const {provider, connected} = useProvider();
  useEffect(() => {
    (async () => {
      const ethereum = (window as any).ethereum;

      if (!connected) {
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log('accounts', accounts);
  
      const walletAddress = accounts[0]    // first account in MetaMask
      const signer = provider.getSigner(walletAddress);
      console.log('signer', signer);
    })();
    
  }, [connected, provider]);

  return (
    <div>
      <h2>Pre Sale</h2>
      <MetamaskButton />
    </div>
  );
}

export default PreSale;
