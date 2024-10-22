import React from 'react'

function Schedule() {
  return (
    <div className='w-100 mb-5 pb-4'style={{backgroundColor:'rgb(241 241 241)'}}>
      <div className="row w-100">
     <div className='px-md-5'>
         <div className='px-md-5 mx-md-2'>
              <div  className='d-flex justify-content-between mx-3 pt-2 border-bottom border-secondary '>
                            <h4 style={{color:'#404040'}} className='stxt p-2'>Tonight on HBO</h4>
                            <a href="" style={{textDecoration:'none',color:'#2bb6df'}}><h5 className='stxt d-none d-md-inline'>SEE FULL SCHEDULE ></h5></a>
                 
                        </div>
                        <div id='sch' className="row ms-3 ">
                            <div style={{borderLeft:'1px solid grey'}} className="col-md-4 p-2 mt-3  px-md-5  ">
     
     <span>The Penguin - S1:E4 - Cent'anni</span>
     <br />
     
     <span className='mt-2'>8:56 PM EDT</span>
     
     
          </div>
          <div style={{borderLeft:'1px solid grey'}}  className="col-md-4 mt-3 p-2   ">
             <span>Real Time with Bill Maher - S22:E31 - October 18</span><br />
             <span className='mt-2'>10:00 PM EDT</span>
          </div>
          <div style={{borderLeft:'1px solid grey'}}  className="col-md-4 mt-3 p-2 ">
             <span>It's Florida, Man - S1:E1 - Toes</span><br />
             <span className='mt-2'>11:00 PM EDT</span>
          </div>
                            </div>
                            <div>
                            <a href="" style={{textDecoration:'none',color:'#2bb6df'}}><h5 className='stxt ms-4  pt-3 d-md-none d-bock'>SEE FULL SCHEDULE ></h5></a>
                            </div>


         </div>
     </div>

 </div>
      
 </div>
    
  )
}

export default Schedule
