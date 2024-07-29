import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://openexchangerates.org/api/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
        console.log(data)
    },[currency])
    console.log(data)
    return data;

}

export default useCurrencyInfo