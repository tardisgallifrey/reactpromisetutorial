import React from "react";

//Source of this method to return and render values 
//in a promise: https://github.com/capaj/react-promise

//To use promise correctly, with class and/or rendering, do it this way
//We create a new Promise object named getPromise
//Form the promise in an object variable way
let getPromise = new Promise(function(resolve, reject) {

      //All our promise does at this point is resolve to a simple string after a timeout
      setTimeout(function() {
          resolve("This is the string from getPromise in class PromiseComponent.");
      }, 1000)
  })


//This is a class, non-async method, it works
export class PromiseComponent extends React.Component {
  //to return any value of a promise and RENDER it, 
  //the component must have state; so class or function with useState
  //useState has problems, though.  Gotta figure it out.

  constructor(){
    super()
    this.state = {} //set state variable as an object
  }

  //Do the promise work in this method
  componentDidMount() {


    //This uses an anonymous function in the parameters

    //The true way this looks is: getPromise.then(result, error)
    //result and error are callback functions and are PARAMETERS of the THEN method

    getPromise.then((value) => {
      this.setState({val: value}) //Right here, we append an item to the object with a name and a string
      }, 
      (error)=>{console.log(error)}
    );
  }

  //Now we can render the val item from the state object
  render () {
    if (!this.state.val) return null
    return <div>{this.state.val}</div>
  }
}



