import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import './index.css';

class App extends Component {
  render() {
    const currentTime = new Date().getHours();
    var timeLang = '';
    if(currentTime > 0 && currentTime <= 12){
      timeLang = 'Good Morning';
    }else if(currentTime > 12 && currentTime <= 18){
      timeLang = 'Good Afternoon';
    }else if(currentTime > 18 && currentTime <= 24){
      timeLang = 'Good Evening'
    }

    const content = {
      title: 'Title',
      subject: 'subject',
      author: 'bryce',
    }

    const test = "test";

    return (
      <div>
        <AppContent test/>
        <div>
          <h1 className='header'>Hello, World!</h1>
          <h2>{timeLang}</h2>
        </div>
        <AppFooter/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));