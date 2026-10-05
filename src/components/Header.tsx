import { NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__wordmark">
          Gabriel Arias
        </NavLink>
        <nav className="header__nav" aria-label="Site navigation">
          <NavLink to="/work" className="header__link">work</NavLink>
          <NavLink to="/animation" className="header__link">animation</NavLink>
          <NavLink to="/about" className="header__link">about</NavLink>
        </nav>
      </div>
    </header>
  );
}
