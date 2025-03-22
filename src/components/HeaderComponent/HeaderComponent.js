import { Link } from "react-router-dom"

import Logo from "../../images/logo.png"

import "./HeaderComponent.css"

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light rift-nav-bar">
            <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Rift-Insurance-Logo" className="img-fluid" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>                  
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">Contact</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" href="#">Action</Link>
                            <Link className="dropdown-item" href="#">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" href="#">Something else here</Link>
                        </div>
                    </li>              
                </ul>
            </div>
            </nav>
    )
}

export default HeaderComponent