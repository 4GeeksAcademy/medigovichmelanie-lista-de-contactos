import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <i className="fas fa-address-book me-2"></i>
                    Contact Manager
                </Link>
            </div>
        </nav>
    );
};