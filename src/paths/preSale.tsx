import MetamaskButton from '../components/MetamaskButton';
// import contract from "../contracts/Presale.json"
import PreSaleForm from '../components/preSaleForm';

// const usePresaleMint = () => {
//   console.log(JSON.stringify(contract.abi));
// }

function PreSale() {
  return (
    <div>
      <h2>Pre Sale</h2>
      <MetamaskButton />
      <PreSaleForm />
    </div>
  );
}

export default PreSale;
