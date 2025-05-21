import React from 'react';
import MenuList from './MenuList';
import MenuInput from './MenuInput';
import { getData } from '../utils/data';

class MenuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: getData()
    }
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddMenuHandler = this.onAddMenuHandler.bind(this);
  }

  onDeleteHandler(id) {
    const menus = this.state.menus.filter(menu => menu.id !== id);
    this.setState({ menus });
  }

  onAddMenuHandler({ name, price, imageUrl }) {
   this.setState((prevState) => {
     return {
       menus: [
         ...prevState.menus,
         {
           id: +new Date(),
           name,
           price,
           imageUrl,
         }
       ]
     }
   });
 }

  render() {
     return (
      <div className="menu-app">
        <h1>Warung Padang</h1>
        <h2>Tambah Menu</h2>
        <MenuInput 
          addMenu = {this.onAddMenuHandler}
        />

        <h2>Daftar Menu</h2>
        <MenuList
            menus = {this.state.menus}
            onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }


}

export default MenuApp;