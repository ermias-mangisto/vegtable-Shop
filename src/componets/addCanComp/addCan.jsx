import React from "react";

class CanAdd extends React.Component{
constructor(props){
super(props);
this.state={can:"",canArray:[]};
this.Addcan=this.Addcan.bind(this)
}
Addcan(){
      let list=document.getElementById("list")
    let newcan=document.getElementById("canInput");
    this.setState({can:newcan.value});
  this.state.canArray.push(newcan.value);

 
}

    render(){
        return(
 <div>
    <h3>add can</h3>
    <h2>{this.state.can}</h2>
    <input id="canInput"></input>   
  <button onClick={this.Addcan}>add</button>
  <ul id="list">
    {this.state.canArray.map((item,sIndex)=>{
          return <li key={sIndex}>{item}</li>
    })}
  </ul>
 </div>       
        )
    }
}
export default CanAdd;