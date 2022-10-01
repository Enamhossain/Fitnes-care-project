import React, { useEffect,useState } from 'react';

const Cart = (props) => {
    const {cart} = props
   let total = 0;
   for (const card of cart ){
      total = total + parseInt(card.Time)
   }
    const [time,setTime]=useState([])
   const handleBreakTime=(e) =>{
    let time=e.target.innerText
    setTime(time)
    console.log(time)
 
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
                     <button className="btn btn-dark p-3">
                          <h3>ActivityComplete</h3>
                     </button>
                   
                     </div>
    );
};

export default Cart;