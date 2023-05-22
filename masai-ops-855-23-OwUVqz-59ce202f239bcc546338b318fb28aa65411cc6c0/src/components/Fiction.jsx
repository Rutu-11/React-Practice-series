import fiction from '../fiction.json'
console.log(fiction)
export default function Fiction() {
  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title' id='title'>Fictional Books</h1>

      <div className="books-container">
       {
        fiction.map((ele,ind)=>{
          return (
            <div key={ele.year}>
              <img src={ele.img} alt="" />
              <h5>{ele.title} <span>({ele.year})</span></h5>
              <div>
                <span>{ele.author}</span>
                
              </div>
              <h4>Price : {ele.price}</h4>
            </div>
          )
        })
       }
      </div>
    </div>
  );
}
