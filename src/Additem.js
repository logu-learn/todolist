import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

 export const Additem = ({newItem,setnewItem,handleSubmit}) => {
   const inputRef = useRef()
  return (
     <form className='addForm' onSubmit={handleSubmit}>
        <input type="text"
               ref={inputRef}
               autoFocus
               id="additem"
               required
               placeholder='Add Item'
               value={newItem}
               onChange={(e)=>setnewItem(e.target.value)}
         >
        </input>       
        <button
               type="submit"
               aria-label="Add Item"
               onClick={()=>inputRef.current.focus()}
        >
            <FaPlus/>
        </button>
     </form>
  )
}

