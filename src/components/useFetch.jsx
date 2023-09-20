import { useState, useEffect } from "react";
 const UseFetch = (url) => {
    const [data , setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState();

useEffect(()=>
{ 
    const abortCont = new AbortController();
setTimeout(()=> {
    fetch(url, {signal : abortCont.signal})
    .then(res => {
        if (!res.ok) {
                throw Error('could not fetch the data for the  resources')
        }
        return res.json();
    })
    .then (data =>{
        setData(data)
        setIsPending(false)
        setError()
    } )
    .catch(err => {
        if(err.name ==='AbortError'){
            console.log('aborted')
        }
        else {
            setIsPending(false);
            setError(err.message);
        }
    })
}, 1000);
 return ()=> abortCont.abort();
},
[url] )

    return {data , isPending , error};
}
 
export default  UseFetch;