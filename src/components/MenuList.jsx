import React from 'react';
import MenuItem from './MenuItem';
 
function MenuList({ menus }) {
 return (
   <div className="menu-list">
     {
       menus.map((menu) => (
         <MenuItem key={menu.id} {...menu} />
       ))
     }
   </div>
 );
}
 
export default MenuList;