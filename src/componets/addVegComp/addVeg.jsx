
import React from "react";

class VegAdd extends React.Component{
constructor(props){
super(props);
this.state={veg:"",vegArray:[]};
this.AddVeg=this.AddVeg.bind(this)
this.ChangeInput=this.ChangeInput.bind(this)
}
AddVeg(){
    this.setState({veg:this.state.veg});
  this.state.vegArray.push(this.state.veg);

 
}
ChangeInput(event){
  this.state.veg=event.target.value
}

    render(){
        return(
 <div>
    <h3>add vegtable</h3>
    <h2>{this.state.veg}</h2>
    <input id="vegInput" onChange={this.ChangeInput}></input>   
  <button onClick={this.AddVeg}>add</button>
  <ul id="list">
    {this.state.vegArray.map((item,sIndex)=>{
          return <li key={sIndex}>{item}</li>
    })}
  </ul>
 </div>       
        )
    }
}
export default VegAdd;