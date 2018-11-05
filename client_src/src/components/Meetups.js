import React, {Component} from 'react';
import axios from 'axios';

class Meetups extends Component {
  constructor(){
    super();
    this.state = {
      meetups:[]
    }
  }

  getMeetups(){
    axios.get('/user?ID=12345');
  }
  render(){
    return(
      <div>
        <h1>Meetups</h1>
      </div>
    )
  }
}

export default Meetups;
