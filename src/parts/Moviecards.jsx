import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Moviecards() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
     <div className=' pt-4 pb-md-5 pb-0 '>
        <h1 className='text-center  pt-2  mb-md-5 mb-0'>Stream the Latest</h1>
        <div className='mx-md-5 pb-5'>
             <div className='mx-md-5 pb-4'>
                 <div className="slider-container mx-md-5 pt-3 px-5 ">
                  <Slider {...settings}>
                    <div>
                      <img src="https://static.hbo.com/2024-09/the-franchise-s1-ka-1920.jpg"style={{borderRadius:'2px'}} width={'100%'} alt="" />
                      
                        <span>AVAILABLE NOW</span>
                        <h5>The Franchise</h5>
                        <span style={{textAlign:'justify'}}>The Franchise follows the crew of an unloved franchise movie fighting for their place in a savage and unruly cinematic universe.</span>
                     
                    </div>
                    <div>
                    <img src="https://static.hbo.com/2024-09/money-electric-the-bitcoin-mystery-ka-1920.jpg"style={{borderRadius:'2px'}} width={'100%'} alt="" />
                      
                      <span>AVAILABLE NOW</span>
                      <h5>Money Electric: The Bitcoin Mystery</h5>
                      <span style={{textAlign:'justify'}}>In Money Electric: The Bitcoin Mystery, intrepid filmmaker Cullen Hoback dives into the origins of Bitcoin and the identity of its creator, Satoshi Nakamoto. </span>


                    </div>
                    <div>
                    <img src="https://static.hbo.com/2024-08/the-penguin-s1-version-C-ka-1920.jpg"style={{borderRadius:'2px'}} width={'100%'} alt="" />
                      
                      <span>AVAILABLE NOW</span>
                      <h5>The Penguin</h5>
                      <span style={{textAlign:'justify'}}>
                      Starring Colin Farrell as Oz Cobb (aka The Penguin), the eight-episode HBO Original limited series from DC Studios continues the epic crime saga that filmmaker Matt Reeves began with the global blockbuster The Batman.</span>
                    </div>
                    <div>
                    <img src="https://static.hbo.com/2024-08/my-brilliant-friend-s4-ka-1920.jpg"style={{borderRadius:'2px'}} width={'100%'} alt="" />
                      
                      <span>AVAILABLE NOW</span>
                      <h5>My Brilliant Friend</h5>
                      <span style={{textAlign:'justify'}}>Based on the best-selling novels by Elena Ferrante, My Brilliant Friend follows Elena Greco and Raffaella “Lila” Cerullo. Their story covers over 60 years, exploring the mystery  </span>
                    </div>
                    <div>
                    <img src="https://static.hbo.com/2024-08/wise-guy-david-chase-and-the-sopranos-ka-1920.jpg"style={{borderRadius:'2px'}} width={'100%'} alt="" />
                      
                      <span>AVAILABLE NOW</span>
                      <h5>WISE GUY David Chase and The Sopranos</h5>
                      <span style={{textAlign:'justify'}}>
                      In Wise Guy David Chase and The Sopranos, acclaimed filmmaker Alex Gibney delves deep into the psyche of The Sopranos creator and writer, David Chase, to illuminate his life and </span>
                    </div>
                    <div>
                    <img src="https://static.hbo.com/2024-07/chimp-crazy-s1-ka-1920.jpg"style={{borderRadius:'2px'}} width={'100%'} alt="" />
                      
                      <span>AVAILABLE NOW</span>
                      <h5>Chimp Crazy</h5>
                      <span style={{textAlign:'justify'}}>
                      Former nurse-turned-exotic-animal-broker Tonia Haddix, who refers to herself as the “Dolly Parton of chimps,” spends her days caring for animals in captivity. However, her limitless love for one chimpanzee spins into </span>
                    </div>
                    <div>
                    <img src="https://static.hbo.com/2024-07/industry-s3-ka-1920.jpg"style={{borderRadius:'2px'}} width={'100%'} alt="" />
                      
                      <span>AVAILABLE NOW</span>
                      <h5>Industry</h5>
                      <span style={{textAlign:'justify'}}>
                      Industry gives an insider’s view of the black box of high finance by following a group of young bankers as they forge their identities within the pressure cooker environment and sex and drug-fueled blitz of international bank Pierpoint & Co’s London office</span>
                    </div>
                    <div>
                    <img src="https://static.hbo.com/2024-07/elizabeth-taylor-the-lost-tapes-ka-1920_0.jpg"style={{borderRadius:'2px'}} width={'100%'} alt="" />
                      
                      <span>AVAILABLE NOW</span>
                      <h5>Elizabeth Taylor: The Lost Tapes</h5>
                      <span style={{textAlign:'justify'}}>The Franchise follows the crew of an unloved franchise movie fighting for their place in a savage and unruly cinematic universe.</span>
                    </div>
                    <div>
                    <img src="https://static.hbo.com/2024-07/hard-knocks-training-camp-bears-ka-1920.jpg"style={{borderRadius:'2px'}} width={'100%'} alt="" />
                      
                      <span>AVAILABLE NOW</span>
                      <h5>The Franchise</h5>
                      <span style={{textAlign:'justify'}}>The Franchise follows the crew of an unloved franchise movie fighting for their place in a savage and unruly cinematic universe.</span>
                    </div>
                  </Slider>
                </div>
             </div>
        </div>
     </div>

    </>
  )
}

export default Moviecards
