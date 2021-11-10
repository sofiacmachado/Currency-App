import React from 'react';
import { Link } from "react-router-dom";
import logo from './themoneymoney1.png';
import './App.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm justify-content-center">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item align-self-center">
                    <Link to='/CurencyConverter'>
                        <button className="btn btn-navbar" type="submit">Currency Converter</button>
                    </Link>
                    </li>
                    <li className="nav-item align-self-center ">
                    <Link to='/TableCurrency'>
                        <button className="btn btn-navbar" type="submit">Exchange Rates</button>
                    </Link>
                    </li>
                    <li className="nav-item align-self-center ">
                    <button className="btn btn-navbar" type="submit">Money Transfer Tips</button>
                    </li>
                    <li className="navbar-brand mx-5 align-self-center">
                    <button className="btn" type="submit"><img className='logo' alt='the money money' src={logo}/></button>
                    </li>
                    <li className="nav-item align-self-center">
                        <button className="btn btn-navbar" type="submit">Sign Up</button>
                    </li>
                    <li className="nav-item align-self-center">
                        <button className="btn btn-navbar" type="submit">Log In</button>
                    </li>
                </ul>
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