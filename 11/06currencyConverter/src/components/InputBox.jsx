import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId() // generates unique id

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex w-full ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          style={{ color: 'black', fontSize: '16px' }}
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5" 
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select
          className="rounded-lg px-1 py-1 bg-white text-black cursor-pointer outline-none"
          style={{ fontSize: '16px', backgroundColor: 'white', color: 'black', fontWeight: '500' }}  ////////// Added better styling for contrast and readability
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;












// import React,{useId} from 'react'


// function InputBox({
//   label,
//   amount,                                          //amount user entered
//   onAmountChange,        
//   onCurrencyChange,
//   currencyOptions = [],                            //data from json
//   selectCurrency = "usd",                          // current selected currency
//   amountDisable = false,                           //
//   currencyDisable = false,                         //
  
//   className = "",                                   // if user want to add his own CSS
// }) {
 
//     const amountInputId = useId()        ///generates unique id

//   return (
//     //   <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//     <div className={`bg-white p-3 rounded-lg text-sm flex w-full ${className}`}> 
//           <div className="w-1/2">
//               <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
//                   {label}                   
//  {/*   OPTIMIZATION(it is ok if we not use this here)   
//    using {label} is fine but (it changes every time) we can optimise it by useId hook 
//    ** dont use for generating keys in loops
//    */}
//               </label>
//               <input
//                  style={{ color: 'blue', fontSize: '16px' }}  //// text color
//                   id={amountInputId}
//                   className="outline-none w-full bg-transparent py-1.5"
//                   type="number"
//                   placeholder="Amount"
//                 //   disabled={amountDisable}
//                   value={amount}
//                   //if user has'nt entered value function crashes so checker (&& ...)is used that checks if value is there
//                   // Number is bcz JS takes values as number(in events) but our input is number
//                   onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} 
//               />
//           </div>
//           <div className="w-1/2 flex flex-wrap justify-end text-right">
//               <p className="text-black/40 mb-2 w-full">Currency Type</p>
//               <select
//                   className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//                   value={selectCurrency}
//                   onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
//                   disabled={currencyDisable}
//               >
                  
//                       {/* Looping through currencies
//                        when you loop in JSX use 'key'
//                        bcz react thinks doing same thing again and again
//                       (if you want performance in looping give keys)
//                       */}
//                       {
//                        currencyOptions.map((currency)=>{
//                         // better then index take 'currency' (take 'ids' if your doing through DataBases)

//                         // cgpt added return
//                        return <option key={currency} value={currency}>                                           
//                        {currency}
//                     </option>
//                        }
//                        )
//                       }
              
//               </select>
//           </div>
//       </div>
//   );
// }

// export default InputBox;
