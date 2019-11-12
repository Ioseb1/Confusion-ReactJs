import React, { Component }from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'; 
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,
      //selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    }

    return (
      // My first coding in ReactJS starts here. Wish me luck!!!. Imedia gamomiva    
      <div>
        <Header />
        <Switch>
          <Route path="/Home" component={HomePage} />
          <Route exact path="/Menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/Home" />
        </Switch>
        <Footer />
      </div>
    );
    //Extract the details of selected dish on Line 34
  }
}

export default Main;
