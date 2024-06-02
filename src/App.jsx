import { useState } from 'react';
import Input from './component/Input';
import useCurrency from './hooks/useCurrency';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [converted, setConverted] = useState(0);

    const currencyInfo = useCurrency(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        // Fixing the state update logic in swap function
        setFrom(to);
        setTo(from);
        // No need to set converted here, it's not clear what you're trying to achieve
    };

    const convert = () => {
        // Calculate and set the converted value
        setConverted(amount * currencyInfo[to]);
    };

    return (
        <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat backdrop-blur-lg'
            style={{ backgroundImage: `url('https://images.pexels.com/photos/22940322/pexels-photo-22940322/free-photo-of-person-walking-with-flashlight-among-rocks-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
            <div className='w-full'>
                <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5  bg-white/30'>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}>
                        <div className='w-full mb-1'>
                        <Input
    label="From"
    amount={amount}
    currencyOptions={options} // Corrected prop name
    onAmountChange={(value) => setAmount(value)} 
    onCurrencyChange={(currency) => setFrom(currency)} 
    selectedCurrency={from} // Corrected prop name
/>

                        </div>

                        <div className='relative w-full h-0.5'>
                            <button
                                type='button'
                                className='absolute left-1/2 translate-x-1 translate-y-1 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5'
                                onClick={swap}
                            >swap</button>
                        </div>

                        <div className='w-full mt-1 mb-4'>
                        <Input
    label="To"
    amount={converted} // Pass the converted value as amount here
    currencyOptions={options}
    onCurrencyChange={(currency) => setTo(currency)}
    selectedCurrency={to}
/>

    

                        </div>

                        <button type='submit'
    className='w-full border-2 border-white rounded-lg bg-green-600 text-white px-4 py-3'
>convert {from.toUpperCase()} to {to.toUpperCase()}</button>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default App;
