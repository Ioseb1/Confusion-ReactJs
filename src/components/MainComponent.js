import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent'; 
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// These are used as a redux store
//import { DISHES } from '../shared/dishes';
//import { COMMENTS } from '../shared/comments';
//import { LEADERS } from '../shared/leaders';
//import { PROMOTIONS } from '../shared/promotions';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    
    //this.state = {
      // Moved to redux reducer.js
    //}
  }

  render() {
    const HomePage = () => {
      return (
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithID = ({match}) => {
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0] } 
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10)) }
        />
      );
    }

    return (
      // My first coding in ReactJS starts here. Wish me luck!!!. Imedia gamomiva    
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithID}/>
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
    //Extract the details of selected dish on Line 34
  }
}

export default withRouter((connect(mapStateToProps)(Main)));
