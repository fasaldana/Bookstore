import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav-container">
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </div>
  );
}
