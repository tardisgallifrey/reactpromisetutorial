import { PromiseComponent } from "./promisecomponent";            //class component with anonymous function result/error params
import { AnotherPromise } from "./anotherpromise";                //class component with lambda result/error params
import { FunctionPromise } from "./functionpromise";              //class component with separate result/error function
import { PromiseInaFunction } from "./promiseinafunction";        //Rendering a value from a Promise using a function
import { RemoteClassPromise } from "./remoteclasspromise";        //a class component using remote Promise
import { RemoteFunctionPromise } from "./remotefunctionpromise";  //a function component using remote Promise
import Foo from './foo';

function App() {
  return (
    <div>
      <h1>Promises, promises</h1>
      <PromiseComponent />
      <AnotherPromise />
      <FunctionPromise />
      <PromiseInaFunction />
      <RemoteClassPromise />
      <RemoteFunctionPromise />
      <Foo />
    </div>
  );
}

export default App;
