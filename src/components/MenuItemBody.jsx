import React from 'react';
 
function MenuItemBody({ name, price }) {
 return (
   <div className="menu-item__body">
     <h3 className="menu-item__title">{name}</h3>
     <p className="menu-item__username">Rp. {price}</p>
   </div>
 );
}
 
export default MenuItemBody;