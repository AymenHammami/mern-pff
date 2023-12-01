import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Subscription() {

    const [prices, setPrices] = useState([]);
  
    useEffect( () =>{
      fetchPrices();
    }, []);

    const fetchPrices = async () => {
    const res = await fetch('/api/subs/prices');
    const data = await res.json();
  
    setPrices(data.data);
  };

  const createSession = async (priceId) => {
    const res = await fetch('/api/subs/session',
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ priceId }),
     }
   );
   const data = await res.json();
   window.location.href = data.url;
  };
   
 


  return (
    <main className=''>
        <div className='flex h-[75vh] items-center justify-center self-center gap-4'>
            {prices.map((price) => {
    
              return <div className='w-60 p-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden'>
                <div className='bg-slate-600 flex rounded-lg items-center justify-center h-44 shadow-md'>
                    <div className='border-4 border-white rounded-full w-32 h-32 flex items-center justify-center shadow-md '>
                    <div className='text-white text-2xl '>{price.unit_amount / 100} DT</div>
                    </div>
                </div>
                <div className='mt-3 font-semibold text-lg'>{price.nickname}</div>
                <div>
                  <p className='mt-1'>Lorem ipsum dolor sit amet. Eos illo minus et itaque ipsa non accusantium expedita  </p>
                </div>
                
                <button onClick={() => createSession(price.id)} className='mt-3 bg-blue-600 text-white rounded-lg p-1 uppercase hover:opacity-95'>buy now</button>
              </div>
              
            
            })}
        </div>
    </main>
  )
}
