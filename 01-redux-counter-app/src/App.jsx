import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const { incrementCount, decrementCount } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="card">
      <p>{count}</p>
      <button onClick={() => decrementCount(1)}>Decrement</button>
      <button onClick={() => incrementCount(1)}>Increment</button>
    </div>
  );
}

export default App;
