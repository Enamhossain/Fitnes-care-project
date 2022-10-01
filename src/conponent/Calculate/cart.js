import React, { useEffect,useState } from 'react';
import Toest from '../toast/Toast';
import AutohideExample from '../toast/Toast';


const Cart = (props) => {
    const {cart} = props
    const [data,setData]=useState([])
   let total = 0;
   for (const card of cart ){
      total = total + parseInt(card.Time)
   }
  
    const [time,setTime]=useState([])
    
   const handleBreakTime=(e) =>{
    let somoy=e.target.innerText
    
    let newTime =[...data,somoy] 
    setTime(somoy)
     console.log(somoy)
    console.log(newTime)
    localStorage.setItem('breakTime',JSON.stringify(newTime))
     
  }
 
    return (
       <div>
          <div>
                <h3>Add A Break</h3>
                <div className='d-flex bg-white p-2 '>
                        <button onClick={(e) =>handleBreakTime(e)}  className='me-3 bg-success'>10s</button>
                        <button onClick={(e) =>handleBreakTime(e)} className='me-3'>20s</button>
                        <button onClick={(e) =>handleBreakTime(e)} className='me-3'>30s</button>
                        <button onClick={(e) =>handleBreakTime(e)} className='me-3'>40s</button>
                        
                    </div>

                    </div>
                 <div className=''>
                        <h3 className='fs-2 mt-5 mx-2'>Exercise Details</h3>
                        <div>
                           <h3>Exercise Time:{total}s </h3>
                        </div>
                        <div>
                            <h3>Break Time :{time} </h3>
                        </div>
                    </div>
                     <Toest></Toest>
                   
                     </div>
    );
};

export default Cart;