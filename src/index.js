import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "./sass/index.scss";

import { WalletStateProvider } from "./components/Context/WalletStateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WalletStateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WalletStateProvider>
);
