import React from 'react';

class Footer extends React.Component {
    render() {
        return (
        <footer class="footer">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <h2 class="footer-heading"> <img src="/media/the_money_money.png" alt="The Money Money" width="500" height="600" /></h2>
                        <p class="menu">
                            <button>Home</button>
                            <button>Agent</button>
                            <button>About</button>
                            <button>Listing</button>
                            <button>Blog</button>
                            <button>Contact</button>
                        </p>
                        <ul class="footer-social p-0">
                            <li class=""><button title="" data-original-title="Twitter"><i class="fa-brands fa-twitter"></i></button></li>
                            <li class=""><button title="" data-original-title="Facebook"><i class="fa-brands fa-facebook-f"></i></button></li>
                            <li class=""><button title="" data-original-title="Instagram"><i class="fa-brands fa-instagram"></i></button></li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-12 text-center">
                        <p class="copyright">
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