import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const [button,setbutton] = useState(false)
  return (
    <>
     <Nav 
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      style={{position:'fixed',top:'0',zIndex:'999',backgroundColor:'white',width:'100%'}} >
  
       
          <Nav.Item className=' me-md-3 ms-md-5 mt-1 ps-md-5 py-1'>
            <div className='d-flex'>
              <button onClick={()=>setbutton(!button)} className='px-3 border-0 ms-2 d-md-none'>{!button?<FontAwesomeIcon icon={faBars} />:<FontAwesomeIcon icon={faX} />}</button>
  
              <Nav.Link href="/home"><img src="https://www.hbo.com/img/hbo-logo-blk.svg" width={63} alt="" /></Nav.Link>
            </div>
          </Nav.Item>
         <div className='d-md-flex d-none'>
            <Nav.Item className='py-3'>
              <Link to={'/'} className='navitm ms-3' > SERIES
              </Link>
            
            </Nav.Item>
            <Nav.Item className='py-3 '>
              
            <Link to={'/'} className='navitm ms-3' >  MOVIES</Link>
            
            
            </Nav.Item>
            <Nav.Item className='py-3 '>
            <Link to={'/'} className='navitm ms-3' >   NEW & LAST CHANCE</Link>
             
            </Nav.Item>
            <Nav.Item className='py-3 '>
            <Link to={'/'} className='navitm ms-3' >  SCHEDULE</Link>
           
            </Nav.Item>
            <Nav.Item className='py-3 '>
            <Link to={'/'} className='navitm ms-3' >   FREE EPISODES</Link>
            
            </Nav.Item>
            <Nav.Item className='py-3 '>
            <Link to={'/'} className='navitm ms-3' >  MORE</Link>
             
            </Nav.Item>
         </div>
       
       <div className=' btns ms-auto me-md-5 p-2  '>
        <div className='btn p-2  rounded-0 signin'>
          SIGN IN
        </div>
        <button className='btn rounded-0 ms-1 me-md-5 py-1   signup'> <span  className='pe-1 txt'>SIGN UP FOR</span><img width={'50px'} className='mb-1 ' src="https://www.max.com/img/max-h-w-l.svg" alt="" /></button>
       </div>



      {button && <div className=' border-top  d-md-none pe-4 w-100' style={{height:'100vh'}}>
            <Nav.Item className='py-2  border-bottom border-dark w-100 ms-3 '>
              <Link to={'/'} className='navitm ' style={{opacity:0.7}} > SERIES
              </Link>
            
            </Nav.Item>
            <Nav.Item className='py-2  border-bottom border-dark w-100 ms-3 '>
              
            <Link to={'/'} className='navitm ' style={{opacity:0.7}} >  MOVIES</Link>
            
            
            </Nav.Item>
            <Nav.Item className='py-2  border-bottom border-dark w-100 ms-3 '>
            <Link to={'/'} className='navitm ' style={{opacity:0.7}} >   NEW & LAST CHANCE</Link>
             
            </Nav.Item>
            <Nav.Item className='py-2  border-bottom border-dark w-100 ms-3 '>
            <Link to={'/'} className='navitm ' style={{opacity:0.7}} >  SCHEDULE</Link>
           
            </Nav.Item>
            <Nav.Item className='py-2  border-bottom border-dark w-100 ms-3 '>
            <Link to={'/'} className='navitm ' style={{opacity:0.7}} >  DOCUMENTARIES</Link>
            
            </Nav.Item>
            <Nav.Item className='py-2  border-bottom border-dark w-100 ms-3 '>
            <Link to={'/'} className='navitm ' style={{opacity:0.7}} >   SPECIALS</Link>
            
            </Nav.Item>
            <Nav.Item className='py-2  border-bottom border-dark w-100 ms-3 '>
            <Link to={'/'} className='navitm 'style={{opacity:0.7}} >   SPORTS</Link>
            
            </Nav.Item>
            <Nav.Item className='py-2  border-bottom border-dark w-100 ms-3 '>
            <Link to={'/'} className='navitm ' style={{opacity:0.7}} >   PODCASTS</Link>
            
            </Nav.Item>
            <Nav.Item className='py-2  border-bottom border-dark w-100 ms-3 '>
            <Link to={'/'} className='navitm ' style={{opacity:0.7}}>   FREE EPISODES</Link>
            
            </Nav.Item>
            <Nav.Item className='py-2    w-100 ms-3 '>
            <Link to={'/'} className='navitm 'style={{opacity:0.7}} >  MAX</Link>
             
            </Nav.Item>
            
         </div>}
    
      
    </Nav>
    </>
  )
}

export default Header
