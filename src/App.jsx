import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogDetails from "./components/Pages/BlogDetails";
import Home from "./components/Pages/Home";
import Home2 from "./components/Pages/Home2";
import Home3 from "./components/Pages/Home3";
import Spacing from "./components/Spacing";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet,goerli } from "wagmi/chains";

const chains = [mainnet,goerli];
const projectId = "d9914d65e833c8cb44de178573bd447f";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>

        <Header />

        <Spacing lg="80" md="80" />

        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/home2" element={<Home />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}

export default App;
