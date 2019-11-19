import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'; 
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
<<<<<<< HEAD
=======
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
>>>>>>> fix-detached-HEAD
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,
<<<<<<< HEAD
      //selectedDish: null
=======
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
>>>>>>> fix-detached-HEAD
    }
  }


  render() {
    const HomePage = () => {
      return (
<<<<<<< HEAD
        <Home />
=======
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithID = ({match}) => {
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] } 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
        />
>>>>>>> fix-detached-HEAD
      );
    }

    return (
      // My first coding in ReactJS starts here. Wish me luck!!!. Imedia gamomiva    
      <div>
        <Header />
        <Switch>
<<<<<<< HEAD
          <Route path="/Home" component={HomePage} />
          <Route exact path="/Menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/Home" />
=======
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithID}/>
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
>>>>>>> fix-detached-HEAD
        </Switch>
        <Footer />
      </div>
    );
    //Extract the details of selected dish on Line 34
  }
}

export default Main;
