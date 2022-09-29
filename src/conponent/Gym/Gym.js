import React, {useEffect, useState } from 'react';
import Fitness from '../Fitness/Fitness';
import logo from '../../logo.png'
// import '../logo.png'
import './Gym.css'
const Gym = () => {
    const [card,setgymcard] = useState([])
     
    useEffect(() =>{
         fetch('fitness.json')
        .then(res => res.json())
        .then (data => setgymcard(data))
       }, [])
    return (
        <div>
         <div className='w-25 m-5'>
         <img className='w-25 mx-5 logo-img' src={logo} alt="" />
         <h1 className='text-success'>Fitness Care</h1>
         </div>
        <div className='gym-container '>
      
            <div className="main-container row row-cols-1 row-cols-md-2 g-4 container">
               {
                card.map(card =><Fitness 
                    key = {card.id}
                    card = {card}
                
                ></Fitness>)
               }
            </div>
            <div className='side-card bg-success mb-2 p-5'>
                  <div>
                     <div >
                        <h1>Zahid Hassain</h1>
                         <h4>Syney,Austraila</h4>
                     </div>

                  </div>
                   <div className='mt-5'>
                    <div className='d-flex bg-white p-2'>
                    <h3>75kg <small className='h5'>Waight</small></h3>
                    <h3>6.5kg <small className='h5'>Height</small></h3>
                    <h3>25yrs <small className='h5'>Age</small></h3>    
                    </div>
                    

                      
                   </div>

            </div>
        </div>
    </div>
    );
};

export default Gym;