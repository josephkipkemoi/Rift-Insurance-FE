import { Link } from "react-router-dom"
import "./HeaderComponent.css"

const HeaderComponent = () => {
    return (
        <header>
             <h1>
                <Link to="/">Rift Insurance</Link>
            </h1>
            <nav>               
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/testimonials">Testimonials</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="/about-us">About Us</Link>
            </nav>
            <nav className="rift-login">
                <Link href="#">Login</Link>
            </nav>
        </header>
    )
}

export default HeaderComponent