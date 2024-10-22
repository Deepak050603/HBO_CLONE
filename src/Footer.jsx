import React from 'react'

function Footer() {
  return (
    <div id='ftr'className='text-light w-100 text-center'>
      <img className=' mt-4' src="https://www.hbo.com/img/hbo-logo-footer.svg" alt="" />
      <div className='mt-4'>
        <a className='flink' href="">ABOUT</a>
        <a   className='flink ms-3' href="">GET HBO</a>
        <a  className='flink ms-3' href="">HELP</a>
        <a  className='flink ms-3' href="">SHOP</a>
        <a  className='flink ms-3' href="">CAREERS</a>
        <a  className='flink ms-3' href="">HBO INSPIRES</a>
        <a  className='flink ms-3' href="">HOW TO WATCH MAX</a>
      </div>
      <div className=' mt-4'>
        <a className='flink2 ms-4' href="">Privacy Policy</a>
        <a className='flink2 ms-4' href="">Terms of Use</a>
        <a className='flink2 ms-4' href="">Ad Choices</a>
        <a className='flink2 ms-4' href="">Cookie Setting</a>

      </div>
      <div className=' d-flex flex-column py-3'>
        <span className='fp'>© 2024 Home Box Office, Inc. All Rights Reserved.</span>
       <span className='fp mt-1'> This website may contain mature content</span>
      </div>
    </div>
  )
}

export default Footer
