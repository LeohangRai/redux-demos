import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/logo.png';
import { checkout } from '../features/user';

export default function NavBar() {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate('/');
  };
  const user = useSelector((state) => state.user.value);
  const checkoutHandler = (e) => {
    useDispatch(checkout());
    navigate('/checkin');
  };
  return (
    <nav>
      <div className="navbar-logo" onClick={navigateToHomePage}>
        <img src={logo} alt="logo" />
        <p>Redux Demo</p>
      </div>
      <div className="navigation-buttons">
        <div>
          <Link to="/">Home</Link>
          {user.email && <Link to="/information">Information</Link>}
          {!user.email && <Link to="/checkin">Checkin</Link>}
          {user.email && <Link onClick={checkoutHandler}>Checkout</Link>}
        </div>
      </div>
    </nav>
  );
}
