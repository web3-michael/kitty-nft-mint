import { Icon } from '@iconify/react';
import React from 'react'
import Slider from "react-slick";
import Section from '../Section';
import Team from '../Team';

export default function TeamSlider({sliderItemBg, sliderItemVariant}) {
  const data = [
    {
      src:'/images/Briantoshi.png',
      name:'Briantoshi Nakamoto', 
      designation:'Co-founder, Product Development',
      twitterHref: 'https://twitter.com/BriantoshiKitty',
    
    },
    {
      src:'/images/Gnostics.png',
      name:'The SchrodingerMan', 
      twitterHref: 'https://theschrodinger.com/',
      designation:'Co-founder, Solidity Dev',
  
    },
    {
      src:'/images/Goran.png',
      name:'Goran', 
      designation:'Co-founder, Technical Advisor',
      twitterHref: 'https://twitter.com/Goranx10',
  
    },
    {
      src:'/images/gonthier.png',
      name:'Gonthier Mickael', 
      twitterHref: 'https://twitter.com/MickaelGonthier',
      designation:'Marketing Advisor',

    },
    {
      src:'/images/fudfighter.png',
      name:'FUD Fighter', 
      twitterHref: 'https://twitter.com/SaitamaAngel',
      designation:'Marketing Advisor',
   
    },
    {
      src:'/images/jarjar.png',
      name:'Jar Jar', 
      twitterHref: 'https://twitter.com/JarSchrodinger',
      designation:'PR and Community Management',

    },
    {
      src:'/images/andrew.png',
      name:'Andrew', 
      twitterHref: 'https://twitter.com/AcdcCrypto',
      designation:'Public Relation & Advisor',
    
    },
  ]
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="material-symbols:chevron-left-rounded" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="material-symbols:chevron-right-rounded" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className='cs-gap-24 cs-awwow_style_1'>
      {data.map((item, index)=> (
        <Section key={index}>
          <Team 
            variant={sliderItemVariant}
            bgUrl={sliderItemBg}
            src={item.src}
            name={item.name}
            designation={item.designation}
            facebookHref={item.facebookHref}
            linkedinHref={item.linkedinHref}
            twitterHref={item.twitterHref}
            whatsappHref={item.whatsappHref}
          />
        </Section>
      ))}
    </Slider>
  )
}
