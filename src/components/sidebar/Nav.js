import { Link } from 'react-router-dom';
import './Nav.css'  
function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <h3> Home</h3>
        </Link>
        <Link to="/All-stocks">
          <li>Stock Management</li>
        </Link>
        <Link to="/all-subcategories">
          <li>SubCategory Management</li>
        </Link>
        <Link to="/all-products">
          <li>Products Management</li>
        </Link>
        Movement Management:
        <ul>
          <Link to="/AddSupplyReception">
            <li>Supply Reception</li>
          </Link>
          <Link to="/AddToOtherStore">
            <li>To Other Stores</li>
          </Link>
          <Link to="/AddInternalProduction">
            <li>InternalProduction</li>
          </Link>
          <Link to="/AddDestruction">
            <li>Destruction </li>
          </Link>
        </ul>
      </ul>
    </nav>
  );
}
export default Nav;
