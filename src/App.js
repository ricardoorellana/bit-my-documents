import RLogin, { RLoginButton } from '@rsksmart/rlogin'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { useState } from 'react';
import './App.css';

import { NavBar } from './components/navbar/Navbar';

import wallet from './assets/wallet.svg';
import svFlag from './assets/sv-flag.svg'

// construct rLogin pop-up in DOM
const rLogin = new RLogin({
  cachedProvider: false, // change to true to cache user's wallet choice
  providerOptions: { // read more about providers setup in https://github.com/web3Modal/web3modal/
    walletconnect: {
      package: WalletConnectProvider, // setup wallet connect for mobile wallet support
      options: {
        rpc: {
          31: 'https://public-node.testnet.rsk.co' // use RSK public nodes to connect to the testnet
        }
      }
    }
  },
  supportedChains: [31] // enable rsk testnet network
})

function App() {
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)

    // display pop up
  const connect = () => rLogin.connect()
    .then(({ provider }) => { // the provider is used to operate with user's wallet
      setProvider(provider)
      // request user's account
      provider.request({ method: 'eth_accounts' }).then(([account]) => setAccount(account))
    })

  return (
    <div className="App">
      <NavBar>
        <div className="wallet-container">
          <img src={wallet} />
          <RLoginButton onClick={connect}> {!account ? 'Conectar wallet': account}</RLoginButton>
          <img src={svFlag} />
        </div>
      </NavBar>
    </div>
  );
}

export default App;