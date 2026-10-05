import { Link } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  return (
    <div className="notfound">
      <p className="notfound__code">404</p>
      <p className="notfound__message">Page not found.</p>
      <Link to="/" className="notfound__link">← back to home</Link>
    </div>
  );
}
