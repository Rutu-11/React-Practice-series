import React from "react";

class ClassComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            name:'Joy'
        }
    }
         increment = ()=>{
            this.setState((prev)=>({
                count: prev.count+1,
                count: prev.count+2,  // increament by 2 bzs this is the lataest opertion performed
                name: prev.name=='Jiya'? 'Jay':"Jiya"
            }))
        }
         decrement = ()=>{
            this.setState((prev)=>({
                count:prev.count-2
            }))
        }
    

    

    render(){
        console.log(this.state.count)
        return(
            <div style={{width:"40%", margin:"40px auto", boxShadow:"0 0 10px black", height:"300px" }} >
                <h1>Class Counter</h1>
                <h5>{"count : "+ this.state.count}</h5>
                <p>{this.state.name}</p>
                <button onClick={this.increment}>+ </button> &emsp; &#160;
                <button disabled={this.state.count<=0} onClick={()=>{this.decrement(-1)}}>-</button>
            </div>
        )
    }
}

export default ClassComp;