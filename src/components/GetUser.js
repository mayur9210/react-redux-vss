import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery'

export default class GetUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {person: []};
  }

  componentDidMount() {
    this.UserList();
  }

  UserList() {
    return $.getJSON('https://randomuser.me/api/')
      .then((data) => {
        this.setState({ person: data.results });
      });
  }

  render() {
    const persons = this.state.person.map((item, i) => {
      return <div  key={item.id}>
        <h1>{item.name.first} {item.name.last}</h1>

        <img src={item.picture.large}/><br/>
        <h3> {item.location.city} {item.location.state}</h3>
        <h3> {item.location.postcode}</h3>
        <span>{item.cell}, {item.email}</span><br/>


      </div>
    });

    return <div id="layout-content" className="layout-content-wrapper">
      <div className="panel-list">{ persons }</div>
    </div>
  }
}

