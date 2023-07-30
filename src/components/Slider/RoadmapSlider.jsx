import { Icon } from '@iconify/react';
import React from 'react'
import Slider from "react-slick";
import Section from '../Section';
import CardStype2 from '../Card/CardStype2'

export default function RoadmapSlider() {
  const data = [
    {
      phase:'Phase 1', 
      title:'Q1 2022',
      subtitle:
      `
      • NFT Launch
      • Chainlink integration
      • KittUp Wallet Audit
      `,
    },{
      phase:'Phase 2', 
      title:'Q2 2022',
      subtitle:`
      • Marketing Campaign
      • Tier 1-2 Cex listings
      • Partnerships`,
    },{
      phase:'Phase 3', 
      title:'Q3 2022',
      subtitle:`
      • Kittmanji Tournament
      • Staking USDT Distribution
      • Times Square Billboard
      `,
    },{
      phase:'Phase 4', 
      title:'Q4 2022',
      subtitle:`
      • Wikipedia Page
      • Kittchain (Layer 2 Blockchain)
      • Global Outreach
      `,
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
        breakpoint: 1285,
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
        breakpoint: 575,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings} className='cs-gap-24 cs-awwow_style_1 cs-type1'>
      {data.map((item, index)=> (
        <Section key={index}>
          <CardStype2 
            cardNumber={index+1}
            phase={item.phase}
            title={item.title}
            subtitle={item.subtitle.split('\n').map((sentence, sentenceIndex) => (
              <p key={sentenceIndex}>{sentence}</p>
            ))}
          />
        </Section>
      ))}
    </Slider>
  )
}
