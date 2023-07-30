import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark lh-lg sticky-top">
            <div className="container d-flex justify-content-center fw-bold">
                <Link className="navbar-brand" to="/">News Summary</Link>
            </div>
        </nav>
    );
}
export default Header;