import { Link } from 'react-router-dom';
// import { FaUser } from 'react-icons/fa';
import './headers.css';

function Headers() {
  return (
    <header className="header">
      <nav className="nav">
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/category">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
      <span>
        {/* <FaUser /> */}
      </span>
    </header>
  );
}

export default Headers;
