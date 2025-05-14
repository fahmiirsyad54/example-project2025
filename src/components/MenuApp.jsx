import React from 'react';
import MenuList from './MenuList';
import { getData } from '../utils/data';

class MenuApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: getData()
    }
  

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const menus = this.state.menus.filter(menu => menu.id !== id);
    this.setState({ menus });
  }

  render() {
     return (
      <div className="menu-app">
        <h1>Daftar Menu</h1>
        <MenuList
            menus = {this.state.menus}
            onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default MenuApp;