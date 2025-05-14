import React from 'react';
import MenuItemBody from './MenuItemBody';
import MenuItemImage from './MenuItemImage';
import DeleteButton from './DeleteButton';
 
function MenuItem({ imageUrl, name, price, id, onDelete }) {
 return (
   <div className="menu-item">
     <MenuItemImage imageUrl={imageUrl} />
     <MenuItemBody name={name} price={price} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
export default MenuItem;