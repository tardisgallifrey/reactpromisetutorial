import React from "react";

    //function to return Promise value as an object
    //prepared for setState
    //can't use setState here.  Doesn't exist yet.
    function result(value){
        return {val: value};
    }

    function error_out(error){
        console.log(error);
    }

//To use promise correctly, with class and/or rendering, do it this way
//We create a new Promise object named getPromise
let getPromise = new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve("This is the promise value string from getPromise in FunctionPromise.");
      }, 2000)
  })


//This is a class, non-async method, it works
export class FunctionPromise extends React.Component {
  //to return any value of a promise and RENDER it, 
  //the component must have state; so class or function with useState

  constructor(){
    super()
    this.state = {} //set state variable as an object
  }

  //Do the promise work in this method
  componentDidMount() {

    //This promise call uses regular external functions
    //Caveat: the parameters still must be written as lambda or anonymous
    //ELSE the value and error remain undefined
    //THEREFORE: the value and error constants are generated by the THEN
    //or by the promise

    //While this is Javascript legal, one should see that doing so is
    //very, very redundant.  But, it may have some use somewhere

    //the callback function declarations must be written outside the class
    getPromise.then((value)=>this.setState(result(value)), (error)=>error_out(error));

  }

  //Now we can render the val item from the state object
  render () {

    
    if (!this.state.val) return null
    return <div>{this.state.val}</div>
  }
}