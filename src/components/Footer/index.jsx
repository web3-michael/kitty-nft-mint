import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Cta from '../Cta'
import Section from '../Section'
import './footer.scss'

export default function Footer() {
  return (
    <Section tag='footer' className="cs-footer_wrap cs-bg" style={{backgroundImage:'url(/images/footer_bg_1.png)'}}>
      <Section className="container">
        <Cta/>
      </Section>
      <Section tag='footer' className="cs-footer text-center">
        <Section className="container">
          <Section className="cs-height_100 cs-height_lg_70" />
          <Section className="cs-footer_logo">
            <img src="/images/logo_footer_black.svg" alt="logo" className="cs-hide_dark" height = "100" width="300"/>
            <img src="/images/logo_footer_wh.svg" alt="logo" className="cs-hide_white" />
          </Section>
          <Section className="cs-height_25 cs-height_lg_25" />
          <Section className="cs-social_btns cs-center">
            <Link to="/" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:twitter" />            
            </Link>
            <Link to="/" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:instagram" />
            </Link>
            <Link to="/" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:youtube" />
            </Link>
            <Link to="/" className="cs-center cs-primary_color cs-accent_bg_hover cs-light_bg cs-white_color_hover">
              <Icon icon="fa6-brands:whatsapp" />              
            </Link>
          </Section>
        </Section>
        <Section className="cs-height_45 cs-height_lg_25" />
        <Section className="container">
          <Section className="cs-copyright text-center">Copyright © 2022. All Rights Reserved by <span className="cs-primary_font cs-primary_color">Kitty Dinger</span></Section>
        </Section>
        <Section className="cs-height_25 cs-height_lg_25" />
      </Section>
    </Section>
  )
}
