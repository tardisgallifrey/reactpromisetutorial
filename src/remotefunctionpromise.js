import { useState, useEffect } from 'react';
import { myRemotePromise } from './apromise';

export function RemoteFunctionPromise(props){

    const [myString, setMyString] = useState( {} );

    useEffect(() => {
        
        const OutPutString = async () => {

            await myRemotePromise.then(value => { setMyString( {val: value}) })
                            .catch( (error)=> console.log(error) );

        }
        
        OutPutString();

        }, [])

        return(
            <div>
                <p>{myString.val}</p>
            </div>
        )

}