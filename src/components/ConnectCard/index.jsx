import React from "react";
import { Link } from "react-router-dom";
import Section from "../Section";

import { useWeb3Modal } from "@web3modal/react";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { useConnect } from 'wagmi'
import { mainnet } from "wagmi/chains";

import { useWalletState } from "../Context/WalletStateProvider";

export default function ConnectCard({ updateModal }) {
  const {walletState, setWalletState} = useWalletState();
  
  const { open } = useWeb3Modal();
  const connector = new MetaMaskConnector({
    chains: [mainnet],
    options: {
      shimDisconnect: true,
    },
  })

  const { connect } = useConnect()

  return (
    <Section className="cs-wallet_secton text-center">
      <Section tag="h2" className="cs-font_22 text-uppercase cs-normal cs-m0">
        Connect Wallet
      </Section>
      <Section className="cs-height_25 cs-height_lg_25" />
      <ul className="cs-list cs-style1 cs-mp0">
        <li>
          <Link
            to="/"
            onClick={() => {
              connect({connector});
              updateModal(false);
              setWalletState("Metamask")
            }}
          >
            <img src="/images/metamask.svg" alt="Logo" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/coinbase.svg" alt="Logo" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/images/trustwallet.svg" alt="Logo" />
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => {
              open();
              updateModal(false);
              setWalletState("WalletConnect")
            }}
          >
            <img src="/images/walletconnect.svg" alt="Logo" />
          </Link>
        </li>
      </ul>
    </Section>
  );
}
