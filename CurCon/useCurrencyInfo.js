import {useEffect,useState} from "react";


function useCurrencyInfo(currency)
{


    const[data, setData]=useState({})

    useEffect( ()=>
        {
        fetch()
        .then((response)=>response.json())
        .then ((response)=> setData(res[currency]))

        },[currency])
    return data
}

export default useCurrencyInfo;