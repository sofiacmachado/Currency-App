import React from 'react';

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
                    <li class="nav-item">
                    <button class="btn btn-outline-success d-flex" type="submit">Home</button>
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

export default Navbar;