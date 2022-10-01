import React, {useEffect, useState } from 'react';
import Fitness from '../Fitness/Fitness';
import logo from '../../logo.png'
// import '../logo.png'
import './Gym.css'
import Cart from '../Calculate/cart';
const Gym = () => {
    const [card,setgymcard] = useState([])
     const [cart, setCart] = useState([])
     
    useEffect(() =>{
         fetch('fitness.json')
        .then(res => res.json())
        .then (data => setgymcard(data))
       }, [])


       const handleAddToCart = (card) =>{
         const newcart =[...cart,card]
          setCart(newcart)
       }

      
    return (
        <div>
         <div className='w-25 m-5'>
         <img className='w-25 mx-5 logo-img' src={logo} alt="" />
         <h1 className='text-success'>Fitness Care</h1>
         </div>
        <div className='gym-container '>
      
            <div className="main-container row row-cols row-cols-md-1 row-cols-lg-3 g-4 ">
               {
                card.map(card =><Fitness 
                    key = {card.id}
                    card = {card}
                    handleAddToCart = {handleAddToCart}
                ></Fitness>)
               }
            </div>
            <div className='side-card  mb-2 p-5 '>
                  <div>
                     <div >
                        <h1>Enam Hassain</h1>
                         <h4>Feni,Bangladesh</h4>
                     </div>

                  </div>
                   <div className='mt-5 '>
                    <div className='d-flex bg-white p-2'>
                    <h3>75kg <small className='h5'>Waight</small></h3>
                    <h3>6.5kg <small className='h5'>Height</small></h3>
                    <h3>25yrs <small className='h5'>Age</small></h3>    
                    </div>
                  
                     <Cart cart = {cart}></Cart>
                   
                   </div>

            </div>
        </div>
    </div>
    );
};

export default Gym;