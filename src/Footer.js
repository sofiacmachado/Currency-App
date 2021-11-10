import React from 'react';
import logo from './themoneymoney1.png';
import instagramlogo from './instagramlogo.png';
import facebooklogo from './facebooklogo.png';
import twitterlogo from './twitterlogo.png';
import './App.css';

class Footer extends React.Component {
    render() {
        return (
        <footer className="footer">
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center ">
                        <p className="menu mt-5">
                            <img className='logo logofooter mt-4' alt='the money money' src={logo}/>
                            <button className='btn btn-footer'>Terms of Service</button>
                            <button className='btn btn-footer'>Privacy</button>
                            <button className='btn btn-footer'>FAQ</button>
                            <button className='btn btn-footer'>About Us</button>
                            <button className='btn btn-socialmedia mt-4'><img className='instagramlogo socialmedia' alt='instagram' src={instagramlogo}/></button>
                            <button className='btn btn-socialmedia mt-4'><img className='facebooklogo socialmedia' alt='facebook' src={facebooklogo}/></button>
                            <button className='btn btn-socialmedia mt-4'><img className='twitterlogo socialmedia' alt='twitter' src={twitterlogo}/></button>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center pt-5">
                        <p className="copyright">
                        Copyright © 2021 All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;