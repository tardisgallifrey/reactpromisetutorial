import React from "react";

//To use promise correctly, with class and/or rendering, do it this way
//We create a new Promise object named getPromise
let getPromise = new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve("This is the promise value string from getPromise in AnotherPromise.");
      }, 2000)
  })


//This is a class, non-async method, it works
export class AnotherPromise extends React.Component {
  //to return any value of a promise and RENDER it, 
  //the component must have state; so class or function with useState
  //useState has problems, though.  Gotta figure it out.

  constructor(){
    super()
    this.state = {} //set state variable as an object
  }

  //Do the promise work in this method
  componentDidMount() {

    //This promise call uses lambda functions
    getPromise.then((value) => this.setState({val: value}), (error) => console.log(error));

  }

  //Now we can render the val item from the state object
  render () {

    
    if (!this.state.val) return null
    return <div>{this.state.val}</div>
  }
}