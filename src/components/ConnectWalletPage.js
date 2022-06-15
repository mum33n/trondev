import React from 'react'
import { BsWallet } from 'react-icons/bs'

function ConnectWalletPage() {
  return (
    // <div className='bg-white md:w-1/2 mx-auto mt-20 shadow-md rounded p-10'>
    <div className='text-white mt-20 p-10'>
        <div className='font-bold mt-20 text-5xl'>Web3 Payments Simplified</div>
        <div className='mt-5'>
            Make fast and secured payments using with ease using social media/web2 usernames
        </div>
        <div className='mt-5'>
            <button className='flex items-center gap-2 bg-red-600 py-3 px-5 rounded'><BsWallet/> Connect Wallet</button>
        </div>
    </div>
  )
}

export default ConnectWalletPage