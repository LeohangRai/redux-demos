import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const user = useSelector((state) => state.user.value);
  const { username } = user;
  return (
    <div>
      <NavBar />
      <div className="home">
        <h1>Hello {username || 'stranger'}</h1>
      </div>
    </div>
  );
}
