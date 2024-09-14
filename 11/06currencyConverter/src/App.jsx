import { useState } from 'react'
import {InputBox}  from './components'      
// index file gets called by default so no need to write './components/index'
import  useCurrencyInfo from './hooks/useCurrencyInfo'
//import  {useCurrencyInfo} from './hooks/useCurrencyInfo' (dont use curly braces)

function App() {

const [amount, setAmount]=useState(0)
const [from, setFrom]=useState('usd')
const [to, setTo]=useState('inr')
const [convertedAmount,setConvertedAmount]=useState(0)

const currencyInfo=useCurrencyInfo(from)


// const options=Object.keys(currencyInfo)
// Get the list of currency options from the fetched data
const options = currencyInfo ? Object.keys(currencyInfo)  : []    ////cgpt


///swap button
const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)//1st  cgpt
    setConvertedAmount(amount)//2nd cgpt
    
}

//displays final result
const Convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
}

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/1668246/pexels-photo-1668246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    }}
>
    <div className="w-full">
        {/* max-w-md */}
        <div className="w-full  mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"> 
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    Convert()                   ////////
                   
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount={amount}            /////////(using properites of InputBox.jsx)

                        onAmountChange={(value) => setAmount(value)}  // Pass the handler to change amount /////cpt

                        currencyOptions={options}
                        onCurrencyChange={(currency)=>{
                            setFrom(currency)           ////cgpt
                        }}
                        selectCurrency={from}
                        
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}            /////////(using properites of InputBox.jsx)
                        currencyOptions={options}
                        onCurrencyChange={(currency)=>{
                            setTo(currency)
                        }}
                        selectCurrency={to}
                        amountDisable
                        
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
);
  
}

export default App





