import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import './index.css'
import { useState } from "react";
function App() {
  const [btnText, setBtnText] = useState('Show Non-Fiction Books')
  
  const handleToggle = ()=>{
    if(btnText=='Show Non-Fiction Books'){
        setBtnText("'Show Fiction Books'")
    }
    else{
      setBtnText('Show Non-Fiction Books')
    }
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handleToggle}>{btnText}</button>

      <div data-testid="conditional-container">
        {
          btnText == 'Show Non-Fiction Books'?<Fiction/>:
          <NonFiction/>
        }

        
      </div>
    </div>
  );
}

export default App;
