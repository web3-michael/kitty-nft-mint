import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Section from "../Section";
import "./mintCard.css";

import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useAccount, useContractRead } from "wagmi";


import abi from "../../util/ABI.js";

export default function MintCard() {
  const [counter, setCounter] = useState(1);
  const { address } = useAccount();

  const handelSubtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const handleIncrement = () => {
    if (counter < 12) {
      setCounter(counter + 1);
    }
  };

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "0x46084F00dD87B2f50c1E898399241E760D2284E3",
    abi: abi,
    functionName: "mint",
    args: [address, counter],
    value: `${70000000000000000 * counter}`,
  });
  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const ReadData = useContractRead({
    address: "0x84aAAc4aEb115D01Cf339F8EBaCc96a397cDfEC5",
    abi: abi,
    functionName: "totalSupply",
  });
  
  return (
    <Section className="cs-mint_secton">
      <Section
        tag="h2"
        className="cs-font_22 text-uppercase cs-normal cs-m0 text-center"
      >
        Collect your NFTs
      </Section>
      <Section className="cs-height_25 cs-height_lg_25" />
      <Section className="cs-mint_avatar text-center">
        <img src="/images/kdnft.png" alt="" height="200" width="200" />
      </Section>
      <Section className="cs-height_50 cs-height_lg_30" />
      <ul className="cs-list cs-style2 cs-mp0 cs-primary_color cs-primary_font">
        <li>
          <Section className="cs-list_left">Remaining</Section>
          <Section className="cs-list_right">{`${ReadData.data?.toString()} / 3000 Minted`}</Section>
        </li>
        <li>
          <Section className="cs-list_left">
            Quantity / <span className="cs-accent_color">0.07 ETH</span>
          </Section>
          <Section className="cs-list_right">
            <Section className="cs-quantity">
              <button
                className="cs-quantity_btn cs-center"
                onClick={handelSubtract}
              >
                <Icon icon="ic:round-minus" />
              </button>
              {counter}
              <button
                className="cs-quantity_btn cs-center"
                onClick={handleIncrement}
              >
                <Icon icon="material-symbols:add-rounded" />
              </button>
            </Section>
          </Section>
        </li>
        <li>
          <Section className="cs-list_left">Total Price</Section>
          <Section className="cs-list_right">
            {(counter * 0.07).toFixed(3)} ETH
          </Section>
        </li>
      </ul>
      <Section className="cs-height_25 cs-height_lg_25" />
      <button
        className="cs-btn cs-btn_filed cs-accent_btn text-center text-uppercase w-100"
        disabled={!write || isLoading }
        onClick={() => write()}
      >
        <span>{isLoading ? "Minting..." : "Mint Now"}</span>
      </button>
      <Section className="cs-height_25 cs-height_lg_25" />
      {isSuccess && (
        <div className="success">
          Successfully minted your NFT!
          <div className="ether-link">
            <a href={`https://etherscan.io/tx/${data?.hash}`}>
              Go To Etherscan
            </a>
          </div>
        </div>
      )}
      <Section className="cs-height_25 cs-height_lg_25" />
      {(isPrepareError || isError) && (
        <div className="error">Error: {(prepareError || error)?.message.split('.')[0]}</div>
      )}
      {/* <Section className="cs-height_15 cs-height_lg_15" />
      <Section tag="p" className="cs-m0 text-center">
        Minting Live
      </Section> */}
    </Section>
  );
}

// (
//   <div className="success">
//     Successfully minted your NFT!
//     <div className="ether-link">
//       <a href={`https://etherscan.io/tx/${data?.hash}`}>Go To Etherscan</a>
//     </div>
//   </div>
// )
