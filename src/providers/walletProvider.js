import React, {createContext, useContext, useState}  from 'react'

// const TronWeb = require('tronweb')
// const HttpProvider = TronWeb.providers.HttpProvider;
// const fullNode = new HttpProvider("https://api.trongrid.io");
// const solidityNode = new HttpProvider("https://api.trongrid.io");
// const eventServer = new HttpProvider("https://api.trongrid.io");
// const tronWeb = new TronWeb(fullNode,solidityNode,eventServer);

const walletProvider=createContext()
const tronWeb=window.tronLink


function WalletProvider({children}) {
    const [walletAddress, setWallet]=useState()
    // console.log(tronWeb)
    async function connectWallet(){
        await tronWeb.request({
            method: 'tron_requestAccounts',
            // params: [{
            //     eth_accounts: {}
            // }]
        })
        setWallet(tronWeb.defaultAddress.base58)
    }
  return (
    <walletProvider.Provider value={{walletAddress,setWallet, connectWallet}}>
        {children}
    </walletProvider.Provider>
  )
}

export default WalletProvider
export const useWalletContext=()=>useContext(walletProvider)