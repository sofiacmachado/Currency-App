import React from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './themoneymoney.png';
import './App.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="navbar-brand">
                    <button class="btn btn-outline-success d-flex" type="submit"><img className='logo' alt='the money money' src={logo}/></button>
                    </li>
                    <li class="nav-item">
                    <button class="btn btn-outline-success d-flex" type="submit">link</button>
                    </li>
                    <li class="nav-item">
                    <button class="btn btn-outline-success d-flex" type="submit">link</button>
                    </li>
                </ul>
                <button class="btn btn-outline-success d-flex" type="submit">Sign Up</button>
                <button class="btn btn-outline-success d-flex" type="submit">Log In</button>
                </div>
            </div>
            </nav>
        )
    }
}

/* <Router>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Movie Finder</Link>
</nav>
<Switch>
  <Route path="/" exact component={Home} />
  <Route path="/movie/:id" component={Movie} />
  <Route component={NotFound} />
</Switch>
</Router> */

export default Navbar;