import React from 'react';

const Cart = (props) => {
    const {cart} = props
   let total = 0;
   for (const card of cart ){
      total = total + parseInt(card.Time)
   }
    return (
       <div>
             <div className=''>
                        <h3 className='fs-2 mt-5 mx-2'>Exercise Details</h3>
                        <div>
                           <h3>Exercise Time:{total}s </h3>
                        </div>
                        <div>
                            <h3>Break Time :</h3>
                        </div>
                    </div>
                     <button className="btn btn-dark p-3">
                          <h3>ActivityComplete</h3>
                     </button>
                   
                     </div>
    );
};

export default Cart;