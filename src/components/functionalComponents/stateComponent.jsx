import React from "react";
// import '../stateComponent.css';
import '../.././stateComponent.css';
class StateComponents extends React.Component{  //parent-rc child=stateComponent
    constructor(){
        super()
        this.state={
            name1:"M",
            exp1:"MangoDb",
            name2:"E",
            exp2:"Express",
            name3:"R",
            exp3:"React",
            name4:"N",
            exp4:"Node",
        }
    }
     changeState=(params)=>{
         //console.log("MEAN once MERN is completed")    //useState should be used when we come to oops      
        this.setState((prevState)=>({
            name1:"m"
        }))   
    }
    render(){
        return(
            <div>
                <h1>Expansion of MERN</h1>
                <h2>{this.state.name1} stands for {this.state.exp1}</h2>
                <h2>{this.state.name2} stands for {this.state.exp2}</h2>
                <h2>{this.state.name3} stands for {this.state.exp3}</h2>
                <h2>{this.state.name4} stands for {this.state.exp4}</h2>
                <h3>I am changing the state of the {this.state.name} to {this.changeState()}</h3>
               {/* <button onClick >Click here to see mouseover operation</button>
                <button onClick={this.changeState()}>click me to change the state</button> */}
            </div>
        )

    }
}
export default StateComponents;