import React from "react";
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <menu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </menu>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

export default App;
