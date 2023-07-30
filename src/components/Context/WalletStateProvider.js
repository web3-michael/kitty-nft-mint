import { createContext, useContext, useState } from "react";

const WalletContext = createContext();

const useWalletState = () => useContext(WalletContext);

const WalletStateProvider = ({ children }) => {
    const [walletState, setWalletState] = useState();
  
    return (
      <WalletContext.Provider value={{ walletState, setWalletState}}>
        {children}
      </WalletContext.Provider>
    );
  };

export { WalletStateProvider, useWalletState};