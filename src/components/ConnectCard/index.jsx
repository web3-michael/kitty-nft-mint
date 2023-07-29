import React from "react";
import { Link } from "react-router-dom";
import Section from "../Section";
import { useWeb3Modal } from '@web3modal/react'

export default function ConnectCard({updateModal}) {

  const { open, close } = useWeb3Modal()

  return (
    
    <Section className="cs-wallet_secton text-center">
      <Section tag="h2" className="cs-font_22 text-uppercase cs-normal cs-m0">
        Connect Wallet
      </Section>
      <Section className="cs-height_25 cs-height_lg_25" />
      <ul className="cs-list cs-style1 cs-mp0">
        <li>
          <Link to="/">
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
          <Link to="/" onClick={() => {
            open()
            updateModal(false)

          }}>
            <img src="/images/walletconnect.svg" alt="Logo" />
          </Link>
        </li>
      </ul>

    </Section>
  );
}
