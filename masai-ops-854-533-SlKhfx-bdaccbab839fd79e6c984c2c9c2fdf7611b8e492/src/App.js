import "./App.css";

import Counter from "./components/Counter";
import InputComp from "./components/InputComp";
function App() {
  return (
    <div className="App">
      <div data-testid="counter">
        <Counter/>
        <InputComp/>
      </div>
    </div>
  );
}

export default App;
