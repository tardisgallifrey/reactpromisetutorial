import { useState, useEffect } from 'react';
//We write Promises as a new Object builder
//where resolve and reject are two callback functions
//given as paramters to the constructor of Promise in an anonymous function

//In reality: new Promise( functionName(resolve, reject) )

//Promises are written as global objects to this class or function

let promise1 = new Promise(function (resolve) {

        //So, we can only include a resolve function or a reject function
        //for the executor function.  A reject will still occur and needs to 
        //be handled, but not here.
        setTimeout(() => {
            resolve('foo');
        }, 1000);
    });

    //To use a Promise in a functional component,
    //useState and useEffect is required.
    //
    //It has to be written with async/await
    //Class Components default to asynchronous, functions to not
    //and cannot have asynchronous calls in them (exception: useState, useEffect)

export function PromiseInaFunction(props){

    //create state variable, state setter function name only needed
    //In this case, default to empty object {}
    const [myString, setMyString] = useState( {} );

    //call useEffect,
    //we aren't useing the output of useEffect, so we 
    //don't need let something = useEffect()
    useEffect(() => {
        //we pass an anonymous function to useEffect
        //we do need it named so that we may call it 
        //immmediately
        //so, OutPutString is assigned an anonymous async/await function
        const OutPutString = async () => {

            //Our "target", so to speak of our function is our promise
            //object from above.
            //We chain it to add more to the 'value' of the promise
            await promise1.then((value)=>{ return value + '.bar and '})
                            .then( (value)=>{ return value + ' again '})
                            .then( (value)=>{ return value + ' and again.'})
                            .then(value => { setMyString( {val: value}) })  //set state variable with string object
                            .catch( (error)=> console.log(error) );

        }
        //Above code is function declaration

        //Now, call the function, run the async/await and gather promise output value in state variable
        OutPutString();

        //As we do only need this to run once,
        //without updates, we can leave dependency array empty
        }, [])

        return(
            <div>
                <p>{myString.val}</p>
            </div>
        )

}