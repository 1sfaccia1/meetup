import React, {Component} from 'react';
import Axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component {
  constructor(){
    super();
    this.state = {
      meetups:[]
    }
  }

componentDidMount(){
  this.getMeetups();
}

  getMeetups(){
    Axios.get('http://localhost:3000/api/meetups')
    .then(responce => {
      this.setState({meetups: responce.data}, () => {
        // console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }
  render(){
    const meetupItems = this.state.meetups.map((meetup,i) => {
      return(
        <MeetupItem key={meetup.id} item={meetup} />
      )
    })
    return(
      <div>
        <h1>Meetups</h1>
        <ul className="collection">
          {meetupItems}
        </ul>
      </div>
    )
  }
}

export default Meetups;
