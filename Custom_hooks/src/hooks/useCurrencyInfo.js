import { useEffect,useState } from "react";



function useCurrencyInfo(currency){

    const [data, setData] = useState({})
    
    //for triggering lifecycle of componenet we use useffect
    //automatically fetch will call here
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        
        //We have to convert API into JSON formate
        .then(() => res.json())

        //now hold that converted API by returning one value using usestate
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])


    console.log(data);
     
    return data 
}


// return function that made changes 

export default useCurrencyInfo;