import React, { useState } from 'react'

const Increment = () => {   

    const [numb,setNumb] = useState(0);

    // setNumb(10);

  return (
    <div className='d-flex'>

        <button onClick={()=>{setNumb(numb-10)}}>-10</button>
    <button onClick={()=>{
        
        if(numb<=0){
            setNumb(0);
        }
        else{
            setNumb(numb-1)
        }

    
    }


        }>-</button>

    <div>{numb}</div>
    <button onClick={()=>{setNumb(numb+1)}}>+</button>
    <button onClick={()=>{setNumb(numb+10)}}>+10</button>
    </div>
  )
}

export default Increment