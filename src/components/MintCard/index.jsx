import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Section from "../Section";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useAccount } from "wagmi";
import abi from "../../util/ABI.js";

export default function MintCard() {
  const [counter, setCounter] = useState(0);
  const { address} = useAccount();
  const handelSubtract = () => {
    if (counter > 0) {
      setCounter(counter - 1);
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
    args:[address, counter],
    value: `${70000000000000000 * counter}`,
  });
  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
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
          <Section className="cs-list_right">1 / 3000 Minted</Section>
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
                onClick={() => setCounter(counter + 1)}
              >
                <Icon icon="material-symbols:add-rounded" />
              </button>
            </Section>
          </Section>
        </li>
        <li>
          <Section className="cs-list_left">Total Price</Section>
          <Section className="cs-list_right">{counter * 0.07} ETH</Section>
        </li>
      </ul>
      <Section className="cs-height_25 cs-height_lg_25" />
      <button
        className="cs-btn cs-btn_filed cs-accent_btn text-center text-uppercase w-100"
        disabled={!write || isLoading}
        onClick={() => write()}
      >
        <span>{isLoading ? "Minting..." : "Mint Now"}</span>
      </button>
      {isSuccess && (
        // <div>
        //   Successfully minted your NFT!
        //   <div>
        //     <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
        //   </div>
        // </div>
        console.log("DOnezooooo", `https://etherscan.io/tx/${data?.hash}`)
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
      <Section className="cs-height_15 cs-height_lg_15" />
      <Section tag="p" className="cs-m0 text-center">
        Minting Live
      </Section>
    </Section>
  );
}
