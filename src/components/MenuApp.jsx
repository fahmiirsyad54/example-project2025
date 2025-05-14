import React from 'react';
import MenuList from './MenuList';
import { getData } from '../utils/data';
 
function MenuApp() {
 const menus = getData();
 
 return (
   <div className="menu-app">
     <h1>Daftar Menu</h1>
     <MenuList menus={menus} />
   </div>
 );
}
 
export default MenuApp;