import { useDispatch } from 'react-redux';
import { checkin } from '../features/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkin() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [validationErrors, setValidationErrors] = useState({
    username: false,
    email: false
  });
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (!username) {
      return setValidationErrors({
        username: true,
        email: false
      });
    }
    if (!email) {
      return setValidationErrors({
        username: false,
        email: true
      });
    }
    setValidationErrors({
      username: false,
      email: false
    });
    dispatch(
      checkin({
        username,
        email
      })
    );
    navigateTo('/');
  };
  return (
    <div className="form-container">
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            style={validationErrors.username ? { borderColor: 'red' } : null}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={validationErrors.email ? { borderColor: 'red' } : null}
          />
        </div>
      </form>
      <button type="submit" onClick={clickHandler}>
        Checkin
      </button>
    </div>
  );
}
