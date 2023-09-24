import React from 'react';
import './Footer.css';

// const Footer = () => {
// const year = new Date();
//   return (
//     <>
//     <footer id="footer">Copyright &copy;{year.getFullYear()} </footer>
//     </>
//   );
// }

const Footer =({length}) =>{
   
   return (
  <>
    <footer id="footer">{length} List {length === 1 ? "item" : "items"}</footer>
  </>
   );
   }
  
export default Footer;