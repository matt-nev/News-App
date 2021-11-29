import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Rightsidenews from './News/Rightsidenews';
import Leftsidenews from './News/Leftsidenews';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'everything',
        query: 'domains=apnews.com'
      },
      news2: {
        type: 'everything',
        query: 'domains=fark.com&language=en'
      },
      news3: {
        type: 'everything',
        query: 'domains=cnn.com&language=en'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper orange darken-1 text-align: center">
              <a href="/" className="bran-logo center">Mo and Matt's Magnificent News</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s12 m4 l2">
            <Rightsidenews news={this.state.news3}/>
          </div>
          <div className="col s12 m4 l8">
            <News news={this.state.news1} />  
          </div>      
          <div className="col s12 m4 l2">
            <Leftsidenews news={this.state.news2} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
