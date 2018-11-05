import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';


class MeetupDetails extends Component {
  constructor(props){
    super(props);
    this.state = {
      details:""
    }
  }
componentDidMount(){
  this.getMeetup();
}


getMeetup(){
  let meetupId = this.props.match.params.id;
  Axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
  .then(responce => {
    this.setState({details: responce.data}, () => {
       console.log(this.state);
    })
  })
  .catch(err => console.log(err));
}

  render(){
    return(
      <div>
      <br />
      <Link className="btn grey" to="/">Back</Link>
      <h1>{this.state.details.name}</h1>
      <ul className="collection">
        <li className="collection-item">City: {this.state.details.city}</li>
        <li className="collection-item">Address: {this.state.details.address}</li>

      </ul>
      <Link className="btn" to={`/meetups/edit/${this.state.details.id}`}>Edit</Link>
      </div>
  )
    }
  }


 export default MeetupDetails;
