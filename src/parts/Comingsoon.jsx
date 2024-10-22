import React from 'react'
import Slider from "react-slick";

function Comingsoon() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:2,
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
    <div className='row w-100 py-5 mb-5'>
        <h1 className='text-center py-5' style={{color:'#404040'}}>Coming soon to HBO</h1>
        <div className="col-1"></div>
        <div className="col-10">
        <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://static.hbo.com/2023-04/smallerKnightOfTheSevenKingdoms_16x9.jpg?w=160%20160w,%20https://static.hbo.com/2023-04/smallerKnightOfTheSevenKingdoms_16x9.jpg?w=320%20320w,%20https://static.hbo.com/2023-04/smallerKnightOfTheSevenKingdoms_16x9.jpg" alt="" width={'100%'} />

          <div className='pt-2' ><span  style={{opacity:0.7,fontSize:'13px'}}>COMING SOON</span></div>
          <h6 style={{fontWeight:800}}>A Knight of the Seven Kingdoms: The Hedge Knight</h6>
          <div>
            <span style={{opacity:0.7}}>A century before the events of Game of Thrones, there was Ser Duncan the Tall and his squire, Egg. </span>
          </div>
        </div>
        <div>
         <img src="https://static.hbo.com/2024-09/the-franchise-s1-ka-1920.jpg" width={'100%'} alt="" />
         <div className='pt-2' ><span  style={{opacity:0.7,fontSize:'13px'}}>COMING SOON</span></div>
          <h6 style={{fontWeight:800}}>A Knight of the Seven Kingdoms: The Hedge Knight</h6>
          <div>
            <span style={{opacity:0.7}}>A century before the events of Game of Thrones, there was Ser Duncan the Tall and his squire, Egg. </span>
          </div>
        </div>
       
      </Slider>
    </div>
        </div>
        <div className="col-1"></div>
    </div>
      
    </>
  )
}

export default Comingsoon
