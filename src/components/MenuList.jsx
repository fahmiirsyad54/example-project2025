import React from 'react';
import MenuItem from './MenuItem';
 
function MenuList({ menus, onDelete }) {
 return (
   <div className="menu-list">
     {
       menus.map((menu) => (
         <MenuItem 
          key={menu.id} 
          id={menu.id}
          onDelete={onDelete}
          {...menu}
        />
       ))
     }
   </div>
 );
}
 
export default MenuList;