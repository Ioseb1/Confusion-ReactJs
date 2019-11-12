import React, { Component }from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return ( 
      // My first coding in ReactJS starts here. Wish me luck!!!. Imedia gamomiva

      // Using react router to navigate views where user clicks to
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
