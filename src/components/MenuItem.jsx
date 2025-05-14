import React from 'react';
import MenuItemBody from './MenuItemBody';
import MenuItemImage from './MenuItemImage';
 
function MenuItem({ imageUrl, name, price }) {
 return (
   <div className="menu-item">
     <MenuItemImage imageUrl={imageUrl} />
     <MenuItemBody name={name} price={price} />
   </div>
 );
}
 
export default MenuItem;