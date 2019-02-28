import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import Friend from './Friend';

class App extends Component {
  constructor() {
    super();
    this.state={
      friends: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({friends: res.data}))
    .catch(err => console.long(err + 'wrong'));
  }

// is git working

 

  render() {
    return (
      <div className="App">
        {this.state.friends.map((friend)=>{
        return(
          <Friend friend={friend} key={friend.id}/>
        );
      })}
      </div>
    );
  }
}

export default App;
