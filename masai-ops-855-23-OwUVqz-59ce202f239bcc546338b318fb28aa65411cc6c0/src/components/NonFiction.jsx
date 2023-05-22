import nonFiction from '../nonfiction.json'
export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
       {
        nonFiction.map((ele,ind)=>{
          return (
            <div key={ele.year}>
              <img src={ele.img} alt="" />
              <h4>{ele.title}<span>({ele.year})</span> </h4>
              <h5>{ele.author}</h5>
              <h5>Year : {ele.year}</h5>
            </div>
          )
        })
       }
      </div>
    </div>
  );
}
