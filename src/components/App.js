import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (

      <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li class="active"><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/users">User</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/">Sample</Link></li>
          </ul>
        </nav>
        <span>{this.props.children}</span>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
