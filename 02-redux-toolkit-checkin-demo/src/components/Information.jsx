import { useSelector } from 'react-redux';

export default function Information() {
  const user = useSelector((state) => state.user.value);
  const { username, email } = user;
  return (
    <div className="information">
      <h1>Information</h1>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
}
