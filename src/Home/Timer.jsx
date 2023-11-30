import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return(
     
        <div className='timer'>
         
          <span>Time : {date.toLocaleTimeString()}</span>
          <span>Date : {date.toLocaleDateString()}</span>
        </div>
      
      
      );
      
    
}

export default DateTime;
