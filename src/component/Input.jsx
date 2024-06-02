import React, { useState, useEffect, useId } from 'react';

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    className = "",
    currencyDisabled = false,
}) {
    const [inputValue, setInputValue] = useState(amount);
    const amountId = useId();

    // Update the inputValue state when the amount prop changes
    useEffect(() => {
        setInputValue(amount);
    }, [amount]);

    const handleAmountChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onAmountChange && onAmountChange(Number(value));
    };

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountId} className='text-black/40 mb-2 inline-block'>
                    {label}
                </label>

                <input
                    type="number"
                    id={amountId}
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='amount'
                    disabled={amountDisabled}
                    value={inputValue}
                    onChange={handleAmountChange}
                />
            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>currency type</p>
                <select
                    className='rounded-lg p-1 bg-grey-100 cursor-pointer outline-none'
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Input;
