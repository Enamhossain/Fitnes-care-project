import React from 'react';
import './Fitness.css';


// product part
const Fitness = (props) => {
     console.log(props.card)
    // const {info,handleAddToCart} = props;
     const {name,img,Time,Age,details} =props.card
    return (
        <div>
    <div className="col">
    <div className="card Card-main">
       <img src={img} className='card-img-top' alt="" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{details}</p>
        <h3 className="card-text">For Age:{Age}</h3>
        <h3 className="card-text">Time required:{Time}</h3>
      </div>
      <button className="btn btn-primary">
       <h4>Add To List</h4>
  </button>
    </div>
    
  </div>
 
 </div>

        
    );
};

export default Fitness;