import React, { useState } from "react";
import "../css/counter.css"

function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(1);
  const [maxVal, setMax] = useState(1000);
  // storing max value
  const [storeMax, setStoreMax] = useState(1000);

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
        setCount(prevCount => prevCount + 1);
    }
    else {
        console.log('Max Reached');
    }
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
	  <div><div class="split left">
		  <h1 class="headings"></h1>
	  </div>
	  <div class="split right">
		  <h1 class="headings">Counter</h1>
		  <div class="centered">
		<div id="counter">
			<button
				id="decrement-btn"
				className="btn"
				title="Decrement"
				onClick={handleDecrement}
			>
				-
			</button>

			<input
				type="number"
				title="Counter value"
				id="counter-in"
				value={count}
				onChange={handleChange}
			></input>

			<button
				id="increment-btn"
				className="btn"
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