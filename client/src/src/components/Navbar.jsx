 import React from 'react';
 import './Navbar.css';
 import website_Logo                 from '../assets/logo.svg';
 import search_icon                  from  '../assets/search.svg';
 import user                         from  '../assets/user.svg';
 import cart                         from  '../assets/cart.svg';
 import {useState}                   from 'react';
 import {useDispatch, useSelector}   from 'react-redux';
 import {searchProducts}             from '../store/searchProducts.js';
 import Getlocation                  from '../pages/getlocation.jsx';  
 import AddToCart                    from '../pages/AddToCart.jsx';

 function Navbar() {
      const [search, setSearch] = useState("");
      const [price, setPrice]   = useState(false);
      const [cartOpen, setCartOpen] = useState(false);
      let dispatch = useDispatch();
      let products = useSelector((state)=> state.searchProducts);
      const handleSearch = (e) => {
         let value = e.target.value;
         setSearch(value);
         dispatch(searchProducts(value));
      };

      const cartItems = useSelector(
         (state) => state.cart.items
     );
      const cartCount = cartItems.reduce(
         (total, item) => total + item.price * item.quantity,
          0
     );
   return (
    <>
    <div className='navBar'>
       <div className='navBar-content'>
           <div className='website-logo'>
              <div><img src={website_Logo}/></div>
              <div className='brand-name'><h3>farmEra</h3><p>fresh from Nature</p></div>
           </div>
           <div className='current-address' style={{overflowY : "scroll", scrollbarWidth : 'none'}} ><h3>Delivery in 8 minutes</h3><Getlocation/></div>
           <div><div className='search-bar'><div className='search-icon'><img src={search_icon}/></div><input type='text' placeholder='Search for' value={search} onChange={handleSearch} /></div></div>
           <div className='user'><img src={user}/></div>
           <div><button className='btn' onClick={() => setCartOpen(true)} ><img src={cart} style={{height : "28px"}}/><p style={{fontSize :'12px'}}>My cart{cartCount > 0 && <p style={{fontSize : "18px"}}>{cartCount}</p>}</p></button></div>
       </div>
    </div>
     {cartOpen && (
    <AddToCart
        closeCart={() => setCartOpen(false)}
         />
            )}
    </>
   )
 }
 
 export default Navbar