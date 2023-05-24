import "./App.css";
import Product from "./components/Product";
import data from "./db.json";
import {useState} from 'react'
function App() {
  let Total = data.reduce((acc,curr)=>{
    return acc +(Number(curr.price)*Number(curr.quantity));
  },0)
  // console.log(typeof(Total),Total)
  let [total, setTotal]= useState(Number(Total))

  const handleQty=(id, payload)=>{

        let price = data.filter((ele)=>{
          return ele.id==id;
        })[0].price;

        setTotal((prev)=>{
          return prev+(Number(price*payload))
        })
        console.log(total)

  }
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {
          data.map((ele)=>{
            return(
              <Product name={ele.name} price={ele.price} quantity={ele.quantity} id={ele.id} handleQty={handleQty} key={ele.id} />
            )
          })
        }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
     { "the total of the Cart  : "+  total}
      </h1>
    </div>
  );
}

export default App;
