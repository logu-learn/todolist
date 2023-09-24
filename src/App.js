import React from 'react';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';
import { Additem } from './Additem';
import { Searchitem } from './Searchitem';
import { useEffect } from 'react';
import Apirequest from './Apirequest';


const App = () => {
    const API_URL = "http://localhost:3500/items"
    // const API_URL ="https://jsonplaceholder.typicode.com/todos"
 
const [items, setItems] = useState([])
const [newItem, setnewItem] = useState('')
const [search,setsearch] = useState('')
const [fetchError,setfetchError] = useState(null)
const [isLoading,setisLoading] = useState(true)

useEffect(()=>{
  const fetchitems = async () =>{
    try{
         const response = await fetch(API_URL)
         if(!response.ok) throw Error("Data not received");
         const listitems = await response.json()
         setItems(listitems)
         console.log(listitems)
         setfetchError(null)
    }
    catch(err){
        setfetchError(err.message)
    }finally{
      setisLoading(false)
    }
  }
  setTimeout (()=>{(async ( ) => await fetchitems())()},200)
},[])

const addItem = async (item)=>{
    const id = items.length ?  items[items.length-1].id +1 : 1;
    const addnewItem = {id,checked: false, item}
    const listitems = [...items,addnewItem]
    setItems(listitems)  
 const postOptions = {
    method: "POST",
    headers:{
      'Content-Type':'application/json'
            },
    body:JSON.stringify(addnewItem)
  }
const result= await Apirequest(API_URL,postOptions)
if(result) setfetchError(result)
} 
 
const handleChange =async(id)=>{
const listitems= items.map(
  (item) =>
    item.id === id ? {...item,checked:!item.checked} : item
    )
  setItems(listitems)
const myitem = listitems.filter((item)=>item.id===id )
const updateOptions = {
  method: "PATCH",
  headers:{
    'Content-Type':'application/json'
          },
  body:JSON.stringify({checked: myitem[0].checked})
}
const reqURL = `${API_URL}/${id}`
const result= await Apirequest(reqURL,updateOptions)
if(result) setfetchError(result)
  } 

const handleDelete = async (id) => {
const listitems = items.filter((item)=>
item.id!=id )
setItems(listitems)
const deleteoptions = {method:'DELETE'}
const reqURL = `${API_URL}/${id}`
const result= await Apirequest(reqURL,deleteoptions)
if(result) setfetchError(result)
}

const handleSubmit = (e)=>
{
  e.preventDefault()
  console.log("submitted")
  if(!newItem) return;
  addItem(newItem)
  setnewItem('')
}
  return (
    <div className="App">
    <Header/>
    <Additem
      newItem={newItem}
      setnewItem={setnewItem}
      handleSubmit={handleSubmit}
    /><br></br>
    <Searchitem
       search = {search}
       setsearch={setsearch}
    />
    <main>
      {isLoading && <p style = {{ textAlign: 'center'}}>Loading items...</p>}
      {fetchError && <p style = {{ textAlign: 'center'}} >{`Error:${fetchError}`}</p>}
      {!isLoading && !fetchError && <Content
       items={items.filter((item) =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
       handleChange = {handleChange}
       handleDelete = {handleDelete}
    />}
    </main>
    <Footer
     length={items.length}
    />
    </div>
    )
}
export default App;