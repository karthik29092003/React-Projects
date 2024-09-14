


import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // Initialize with empty object to avoid crashes

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
        );
        const result = await response.json(); // Correctly parse JSON response
        setData(result[currency]);  // Correctly set the data for 'currency'
        console.log(result[currency]); // Log the fetched data to check if it's correct
      } catch (error) {
        console.error("Error fetching currency data:", error); // Added error handling
      }
    };

    fetchCurrencyInfo();
  }, [currency]);

  return data;  // Return the fetched currency data
}

export default useCurrencyInfo;







// import { useEffect, useState } from "react";


// /// our hook returns data
// function useCurrencyInfo(currency){

// /// when someone uses this custom hook , can calls API
// // if we use useEffect hook, we don't need to create another function to call API
// /// automatically fetch gets called

// const [data,setData]=useState({})                ////// we pass empty object so that it wont crash if no fetch call comes

// useEffect(()=>{
                            
//     fetch(` https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
//     .then((res)=>res.json)
//     .then((res)=>setData(res[currency]))        /////// if we store json data in a normal variable we can't update values in UI so 'useState' hook is used 
//                                                 ///////  res.currency is same as res[currency] in JS
//      console.log(data)

// },[currency])

// console.log(data)

// return data 



// }

// export default useCurrencyInfo


 
