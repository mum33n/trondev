import './App.css';
import Navbar from './components/Navbar';
import ConnectWalletPage from './components/ConnectWalletPage';
import { useWalletContext } from './providers/walletProvider';


function App() {
  const{walletAddress}=useWalletContext()
  return (
    <div className='bg-slate-800 h-[100vh]'>
      <Navbar/>
      {!walletAddress && <ConnectWalletPage/>}
      
    </div>
  );
}

export default App;
