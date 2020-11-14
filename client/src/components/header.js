import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>PHON<span className="title">EDIT</span></h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/reviews" className="links">
              REVIEWS
            </Link>
          </li>
          <li>
            <Link to="/blog" className="links">
             BLOG
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);