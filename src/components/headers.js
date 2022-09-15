import React from 'react';
import { Link } from 'react-router-dom';
import './headers.css';

function headers() {
  return (
    <div className="Headers">
      <h2>Bookstore CMS</h2>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              BOOKS
            </Link>
          </li>
          <li>
            <Link to="/category">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        Profile
      </div>
    </div>
  );
}

export default headers;
