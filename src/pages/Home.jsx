import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
function Home() {
  return (
    <div className='w-100 wrap' style={{marginTop:'55px'}} >
      <img src="https://static.hbo.com/2024-05/house-of-the-dragon-s2-ka-1920.jpg" id='hotd'  className='w-100' alt="" />
      <div id='hotdinfo' className='p-2 p-md-0'>
        <span  style={{fontWeight:'80',fontSize:'14px'}}>AVAILABLE NOW</span>
        <h1 style={{fontWeight:'900',fontSize:'45px'}} className='mt-md-1'>House Of the Dragon</h1>
        <p>Based on George R.R. Martin's Fire & Blood,House Of Dragon is Set 200 Years before the events of Game Of Thrones and Tell the story of house Targaryen</p>
        
         <div className='d-flex flex-column flex-md-row mb-2 mb-md-0'>
            <button className='btn rounded-0 text-light p-2' style={{backgroundColor:'#2bb0d8',fontSize:' 0.7875rem',lineHeight:' 1.075rem',fontWeight:'700'}}><FontAwesomeIcon icon={faPlay} className='me-1' />WATCH THE TRAILER</button>
            <button className='btn rounded-0 text-light p-2 ms-md-3 mt-2 mt-md-0' style={{backgroundColor:'#2bb0d8',fontSize:' 0.7875rem',lineHeight:'1.075rem',fontWeight:'700'}}>FIND OUT MORE</button>
         </div>
      
      </div>
 
    </div>
  )
}

export default Home
