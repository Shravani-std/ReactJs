import React from 'react'
import { useId } from 'react';

function Input( {
    
        //take lable for from and to, for to display amount
        label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false,

        // take default and if what to add something new in component then we can simply add ${classname} having css of this component
        className = "" 

        
    }){
        //so in our currency case there are no. of currency are available so for multiple value if we want to choose unique then we can use useID
        // offers an accessible solution for managing unique identifiers in components that are consisten between server and client
        const amountInputId = useId()

    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
                <input 
                    id={amountInputId}
                    className='outline-none w-full bg-transparent py-1.5'
                    type='number'
                    placeholder='Amount'
                    disabled = {amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>

                <p className='text-black/40 mb-2 W-full'>Currency Type</p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && oncuechange(e.target.value)}
                    disabled={currencyDisable}>
                        
                        {currencyOptions.map((currency) => {
                            
                            <option key ={currency} value={currency}>{currency}</option> 
                        })}

                    </select>
            </div>
        </div>
    );
}

export default Input

