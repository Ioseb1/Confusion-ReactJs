import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

function App() {
  return (
    // My first coding in ReactJS starts here. Wish me luck!!!. Imedia gamomiva
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
