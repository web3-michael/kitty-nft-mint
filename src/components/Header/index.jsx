import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Modal from "../Modal";
import ModeSwitch from "../ModeSwitch";
import Section from "../Section";
import "./header.scss";
import { useWeb3Modal } from "@web3modal/react";

import { useAccount, useDisconnect } from "wagmi";

import { useWalletState } from "../Context/WalletStateProvider";

export default function Header() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect()
  const { open } = useWeb3Modal();
  const { walletState } = useWalletState();

  if (isConnected) {
    return (
      <>
        <Section
          tag="header"
          className="cs-site_header cs-style1 cs-sticky-header cs-primary_color"
        >
          <Section className="cs-main_header">
            <Section className="container">
              <Section className="cs-main_header_in">
                <Section className="cs-main_header_left">
                  <Link to="/" className="cs-site_branding cs-accent_color">
                    <img
                      src="/images/logo_black.svg"
                      alt="Logo"
                      className="cs-hide_dark"
                    />
                    <img
                      src="/images/logo_white.svg"
                      alt="Logo"
                      className="cs-hide_white"
                    />
                  </Link>
                </Section>
                <Section className="cs-main_header_center">
                  <Section className="cs-nav">
                    <ul
                      className="cs-nav_list"
                      style={{ display: `${mobileToggle ? "block" : "none"}` }}
                    >
                      <li className="menu-item">
                        <ScrollLink
                          to="hero"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          Home
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          About
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="roadmap"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          Roadmap
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="team"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          Team
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="faq"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          FAQ
                        </ScrollLink>
                      </li>
                    </ul>
                    <span
                      className={
                        mobileToggle
                          ? "cs-munu_toggle cs-toggle_active"
                          : "cs-munu_toggle"
                      }
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                  </Section>
                </Section>
                <Section className="cs-main_header_right">
                  <Section className="cs-toolbox">
                    <ModeSwitch />
                    {walletState === "WalletConnect" ? (
                      <Section
                        tag="span"
                        className="cs-btn cs-btn_filed cs-accent_btn"
                        onClick={open}
                      >
                        <Section tag="span">
                          {address.substring(0, 4) +
                            "..." +
                            address.substring(
                              address.length - 4,
                              address.length + 1
                            )}
                        </Section>
                      </Section>
                    ) : (
                      <Section
                        tag="span"
                        className="cs-btn cs-btn_filed cs-accent_btn"
                        onClick={disconnect}
                      >
                        <Section tag="span">
                          {address.substring(0, 4) +
                            "..." +
                            address.substring(
                              address.length - 4,
                              address.length + 1
                            )}
                        </Section>
                      </Section>
                    )}
                  </Section>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </>
    );
  } else {
    return (
      <>
        <Section
          tag="header"
          className="cs-site_header cs-style1 cs-sticky-header cs-primary_color"
        >
          <Section className="cs-main_header">
            <Section className="container">
              <Section className="cs-main_header_in">
                <Section className="cs-main_header_left">
                  <Link to="/" className="cs-site_branding cs-accent_color">
                    <img
                      src="/images/logo_black.svg"
                      alt="Logo"
                      className="cs-hide_dark"
                    />
                    <img
                      src="/images/logo_white.svg"
                      alt="Logo"
                      className="cs-hide_white"
                    />
                  </Link>
                </Section>
                <Section className="cs-main_header_center">
                  <Section className="cs-nav">
                    <ul
                      className="cs-nav_list"
                      style={{ display: `${mobileToggle ? "block" : "none"}` }}
                    >
                      <li className="menu-item">
                        <ScrollLink
                          to="hero"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          Home
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          About
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="roadmap"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          Roadmap
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="team"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          Team
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          to="faq"
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          onClick={() => setMobileToggle(false)}
                        >
                          FAQ
                        </ScrollLink>
                      </li>
                    </ul>
                    <span
                      className={
                        mobileToggle
                          ? "cs-munu_toggle cs-toggle_active"
                          : "cs-munu_toggle"
                      }
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                  </Section>
                </Section>
                <Section className="cs-main_header_right">
                  <Section className="cs-toolbox">
                    <ModeSwitch />
                    <Modal modalType="connect" btnText="Connect" btnIcon />
                  </Section>
                </Section>
              </Section>
            </Section>
          </Section>
        </Section>
      </>
    );
  }
}
