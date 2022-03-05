
export let myRemotePromise = new Promise(function (resolve) {

    //So, we can only include a resolve function or a reject function
    //for the executor function.  A reject will still occur and needs to 
    //be handled, but not here.
    setTimeout(() => {
        resolve("This is my Promise.  There are many like it, but this is mine.");
    }, 1000);
});