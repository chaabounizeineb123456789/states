import React, { Component } from 'react';
import '../App.css';

//import './App.css';

class Box extends Component {
  state={count:0 ,
  count2:2}
  next(){
  	this.setState({count: this.state.count+1,})
  	this.setState({count2: this.state.count2*2,})
  }
  next1(nbr){
  	this.setState({count: nbr})
  	this.setState({count2: nbr*nbr,})
  }
 

  
  render() {
     return(

      <div>
        <button onClick={()=>this.next1(0)}>0</button>
        <button onClick={()=>this.next1(1)}>1</button>      
        <button onClick={()=>this.next1(2)}>2</button>
        <button onClick={()=>this.next1(3)}>3</button>
        <button onClick={()=>this.next1(4)}>4</button>
        <button onClick={()=>this.next1(5)}>5</button>
        <button onClick={()=>this.next1(6)}>6</button>
        <button onClick={()=>this.next1(7)}>7</button>
        <button onClick={()=>this.next1(8)}>8</button>
        <button onClick={()=>this.next1(9)}>9</button>
       <p>the factorial of {this.state.count}is:{this.state.count2} </p>
      
      </div>




    );
  }
}

export default Box;







