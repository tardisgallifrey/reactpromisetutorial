import React from "react";
import { myRemotePromise } from "./apromise";

//This is the same class as PromiseComponent,
//but here, the promise is defined in another file


//This is a class, non-async method, it works
export class RemoteClassPromise extends React.Component {
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

    //myRemotePromise is in the file apromise.js
    myRemotePromise.then((value) => {
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