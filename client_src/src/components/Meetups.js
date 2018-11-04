import React, {Component} from 'react';
import Axios from 'axios';

class Meetups extends Component {
  constructor(){
    super();
    this.state = {
      meetups:[]
    }
  }

  getMeetups(){
    Axios.get('')
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
