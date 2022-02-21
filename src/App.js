import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"

function App() {
const myState  = useSelector((state)=>state.changeTheNumber);
const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/decrement counter</h1>
      <h4>using React and redux</h4>

      <div className='quantity'>

        <button><a className='minus' onClick={()=>dispatch(decNumber())} > <span>-</span> </a></button>
        <input className='quantity_input' type='text' value={myState}></input>
        <button><a className='plus' onClick={()=>dispatch(incNumber(5))} > <span>+</span> </a></button>

      </div>
    </div>
  );
}

export default App;
