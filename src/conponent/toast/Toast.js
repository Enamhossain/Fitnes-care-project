 
 import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
  const Toest = () => {
   let  notify = () => toast("congratulation,You are complate All Task !");  
    return (
      <div>
        <button onClick={notify}className="btn btn-dark p-3">
                          <h3>Activit complete</h3>
                     </button>
         <ToastContainer/>
      </div>
    );
  }
  
  export default Toest; 