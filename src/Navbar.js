import React from 'react';
import { Link } from "react-router-dom";
import logo from './themoneymoney1.png';
import './App.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm">
                <div className="navbar-left" id="navbarSupportedContent">
                    <ul className="navbar-nav" id="navbarMenuSmall">
                        <li className="nav-item d-flex">
                        <Link to='/CurencyConverter'>
                            <button className="btn btn-navbar" type="submit">Currency Converter</button>
                        </Link>
                        </li>
                        <li className="nav-item d-flex">
                        <Link to='/TableCurrency'>
                            <button className="btn btn-navbar" type="submit">Exchange Rates</button>
                        </Link>
                        </li>
                        <li className="nav-item d-flex">
                        <Link to='/CurrencyCharts'>
                        <button className="btn btn-navbar" type="submit">Currency Charts</button>
                        </Link>
                        </li>
                    </ul>
                </div>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>   
                </button> */}
                <span className="navbar-brand navbar-collapse collapse justify-content-center">
                    <img className='logo' alt='the money money' src={logo}/>
                </span>
                        
                <div className="navbar-collapse collapse navbar-right" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <button className="btn btn-navbar" type="submit">Sign Up</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-navbar" type="submit">Log In</button>
                        </li>
                    </ul>
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