import React from 'react';
import Listitems  from './Listitems';

// const Content = () => {
//     function content(){
//     const name = ["logesh","kiran","janani","garu","chandri"];
//     const int = Math.floor(Math.random()*5);
//     return(name[int]);
//    }

  
//     const handleclick2= (e)=>{
//       console.log(e.target);
//    }

//    const [count, setcount] = useState(0);

//    function increment(){
//      setcount((precount) => {return precount+1} )
//    }

//    function decrement(){
//     setcount((precount) => {return precount-1})
//   }
//   return (
//     <>
//     <p id="content">Myself {content()} </p>
//     <button onClick={(e)=>handleclick2(e)}> Click me</button><br></br><br></br>
//     <button onClick={() => decrement()}>-</button>
//     <span>{count}</span>
//     <button onClick={() => increment()}>+</button>
//     <br></br>
//     </>
//   )
// }
// export default Content;

 const Content = ({items,handleChange,handleDelete}) => {
       
 return (
    <main>
      {(items.length)?
      <Listitems
          items={items}
          handleChange = {handleChange}
          handleDelete = {handleDelete}
      />
      : <p style = {{ textAlign: 'center'}}> Your list is Empty</p>}
    </main>
  )
}
export default Content;
