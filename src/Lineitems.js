import React from 'react'
import {FaTrash} from "react-icons/fa"

const Lineitem = ({item,handleChange,handleDelete}) => {
  return (
    <li key={item.id} className="item">
            <input type="checkbox"
                     checked={item.checked}
                     onChange={()=>handleChange(item.id)}
            >
            </input>
            <label style ={(item.checked)? {textDecoration: 'line-through'}:null}
                   onDoubleClick={()=>handleChange(item.id)}>
            {item.item}
            </label><br></br>
            <FaTrash
               onClick = {()=>handleDelete(item.id)}
               role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
    </li>
  )
}

export default Lineitem;
