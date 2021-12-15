
import React from "react";

class FruitAdd extends React.Component{
constructor(props){
super(props);
this.state={fruit:"",fruitArray:[]};
this.Addfruit=this.Addfruit.bind(this)
}
Addfruit(){
      let list=document.getElementById("list")
    let newfruit=document.getElementById("fruitInput");
    this.setState({fruit:newfruit.value});
  this.state.fruitArray.push(newfruit.value);

 
}

    render(){
        return(
 <div>
    <h3>add fruit</h3>
    <h2>{this.state.fruit}</h2>
    <input id="fruitInput"></input>   
  <button onClick={this.Addfruit}>add</button>
  <ul id="list">
    {this.state.fruitArray.map((item,sIndex)=>{
          return <li key={sIndex}>{item}</li>
    })}
  </ul>
 </div>       
        )
    }
}
export default FruitAdd;