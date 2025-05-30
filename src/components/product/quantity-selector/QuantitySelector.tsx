'use client';

import { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
    quantity: number;
}

export const QuantitySelector = ({quantity}: Props) => {

    const [count, setCount] = useState(quantity);

  const onQuantityChanged = (delta: number) => {
    setCount(prevCount => {
      const newCount = prevCount + delta;
      if (newCount < 1) return prevCount;
      return newCount;
    });
  }

  return (
    <div className="flex">
        <button className='cursor-pointer' title="Decrease quantity" onClick={() => onQuantityChanged(-1)}>
            <IoRemoveCircleOutline size={30}/>
        </button>

        <span className='w-20 mx-3 px-5 bg-gray-100 text-center rounded'>
            {count}
        </span>

        <button className='cursor-pointer' title="Increase quantity" onClick={() => onQuantityChanged(+1)}>
            <IoAddCircleOutline size={30}/>
        </button>
    </div>
  )
}
