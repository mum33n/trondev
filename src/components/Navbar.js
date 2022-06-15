import React, {useEffect} from 'react'
import { BsWallet } from 'react-icons/bs'
import { useWalletContext } from '../providers/walletProvider'

function Navbar() {
  const {walletAddress, setWallet, connectWallet}=useWalletContext()
  const addressShorten=(address)=>{
    return(`${address.slice(0,3)}...${address.slice(-3)}`)
  }

// useEffect(()=>{
//   if(window?.tronWeb.defaultAddress){
//     setWallet(window.tronWeb.defaultAddress.base58)
//   }
// })

  return (
    <div className='flex p-5 items-center justify-between bg-slate-900'>
        <a href='/' className='text-white font-bold text-2xl'><h1><span className='text-red-500'>TRON</span>PAY</h1></a>
        <div>
            {walletAddress && <button className='text-white bg-red-500 px-6 rounded shadow-md hover:bg-red-600 py-2 items-center flex gap-2'> {addressShorten(walletAddress)} </button>}
            {!walletAddress && <button onClick={connectWallet} className='text-white bg-red-500 px-8 rounded shadow-md hover:bg-red-600 py-3 items-center flex gap-2'><BsWallet/> Connect </button>}
        </div>
    </div>
  )
}

export default Navbar