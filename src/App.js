import "./App.css";
import ATM from "./components/ATM";
import { useDispatch, useSelector } from "react-redux";
import { toggleAtm } from "./redux/atmSlice";
function App() {
  const dispatch = useDispatch();
  const { showAtm } = useSelector((state) => state.atm);
  const handleAtm = () => {
    dispatch(toggleAtm());
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAtm}>
          {showAtm ? "Close ATM" : "Start ATM"}
        </button>
        {showAtm && <ATM />}
      </header>
    </div>
  );
}

export default App;
