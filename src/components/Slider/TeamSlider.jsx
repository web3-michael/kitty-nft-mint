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
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/Gnostics.png',
      name:'The SchrodingerMan', 
      designation:'Co-founder, Solidity Dev',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/Goran.png',
      name:'Goran', 
      designation:'Co-founder, Technical Advisor',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/gonthier.png',
      name:'Gonthier Mickael', 
      designation:'Marketing Advisor',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/fudfighter.png',
      name:'FUD Fighter', 
      designation:'Marketing Advisor',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/jarjar.png',
      name:'Jar Jar', 
      designation:'PR and Community Management',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
    },
    {
      src:'/images/andrew.png',
      name:'Andrew', 
      designation:'Public Relation & Advisor',
      facebookHref:'/',
      linkedinHref:'/',
      whatsappHref:'/'
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
            whatsappHref={item.whatsappHref}
          />
        </Section>
      ))}
    </Slider>
  )
}
