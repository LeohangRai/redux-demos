import { useDispatch } from 'react-redux';
import { checkout } from '../features/user';

export default function Checkout() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(checkout());
  };
  return (
    <div>
      <button onClick={clickHandler}>Checkout</button>
    </div>
  );
}
