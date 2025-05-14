import React from 'react';
 
function MenuItemImage({ imageUrl }) {
 return (
   <div className="menu-item__image">
     <img src={imageUrl} alt="menu avatar"/>
   </div>
 );
}
 
export default MenuItemImage;