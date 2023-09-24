import React from 'react'
import  Lineitems  from './Lineitems'

const Listitems = ({items,handleChange,handleDelete}) => {
  return (
    <ul>
        {items.map((item)=>(
            <Lineitems
               item={item}
               handleChange = {handleChange}
               handleDelete = {handleDelete}
               key={item.id}
            />
          ))}
      </ul>
  )
}
export default Listitems
