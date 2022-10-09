import { ethers } from 'ethers';

const provider = new ethers.providers.AlchemyProvider("maticmum", "ZQj-nU8kvcKv1pY1ypI2bLNbZAy4mAT-");

export const useProvider = () => {
  return {
    provider,
    connected: window.ethereum._state.accounts && window.ethereum._state.accounts.length > 0
  }
}