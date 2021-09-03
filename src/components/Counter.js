import React, { useState } from "react";
import "../css/counter.css"

function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(1);
  // Set max value
  const [maxVal, setMax] = useState(1000);
  // storing max value
  const [storeMax, setStoreMax] = useState(1000);
  // Start Initial Value
  const [initialVal, setInitialVal] = useState(1);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if(value <= maxVal){
        setCount(Number(value));
    }
    else{
        setCount(Number(maxVal));
		alert("Can't increase further");
    }
  };

  // Create handleIncrement event handler
  const handleIncrement = () => {
    if(count < maxVal){
        setCount(count + 1);
    }
    else {
        console.log('Max Reached');
    }
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
	  <div><div class="split left">
		  <h1 class="headings">Initialzer</h1>
		  	<div class="alertboxset">

			  <div class="alert alert-info" role="alert">You can Set Initial Value and Max Value by default it is set to 1 and 1000</div>
			  </div>
			<div class="initial">
			
				<input
					id="initial-input"
					onChange={(e) => 
						e.target.value <= maxVal? setInitialVal(Number(e.target.value)): alert("Initial Value should be Less then Max Value")
					}
					value={initialVal}
					type="number"
					placeholder="Enter initial value"
				></input>
				<button
					className="btn"
					onClick={() => setCount(initialVal)}
				>
					Set Initial Value
				</button>
			</div>

			<div class="initial">
				<input
					id="max-val-input"
					onChange={(e) => 
						e.target.value >= initialVal?setStoreMax(Number(e.target.value)):alert("Max Value should be greater then Initial Value")
					}
					value={storeMax}
					type="number"
					placeholder="Enter maximum value"
				></input>
				<button className="btn" onClick={() => setMax(storeMax)}>
					Set Maximum Value
				</button>
			</div>
	  </div>
	  <div class="split right">
		  <h1 class="headings">Counter</h1>
		  <div class="alertboxset">
<div class="alert alert-info" role="alert">Use Counter Here. It will Start form Initial Value upto Max Value</div>
</div>
		  <div class="centered">
		<div class="counter">
			<button
				id="decrement"
				className="btn"
				title="Decrement"
				onClick={handleDecrement}
			>
				-
			</button>

			<input
				type="number"
				title="Counter value"
				class="counterinput"
				value={count}
				onChange={handleChange}
			></input>

			<button
				id="increment"
				className="btnplus"
				title="Increment"
				onClick={handleIncrement}
			>
				+
			</button>
		</div>
		</div>
		</div>
		</div>
  );
}

export default Counter;