import '../App.css';
import React,{useState} from 'react';
import {Route, BrowserRouter as Router, Switch, Link} 
from "react-router-dom";
import App from "../App"
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

function Sp() {
  const [capitalInput, setCapitalValue] = React.useState("");
  const [yearsInput, setYearsValue] = React.useState("");
  
  const handleCapitalChange = (e) => {
    setCapitalValue(e.target.value);
    e.preventDefault();
  }

  const handleYearsChange = (e) => {
    setYearsValue(e.target.value);
    e.preventDefault();
  }

  const submitHandler = (e) => {
    e.preventDefault();
}

  const intrest = 0.08;
  const equation_1 = capitalInput * intrest;
  const value = equation_1 * yearsInput;
  const balance = + capitalInput + value;
  const profit = value;
  const percent = profit / capitalInput * 100;
  const roundedBalance = Math.round(balance * 100) / 100;
  const roundedPercent = Math.round(percent * 100) / 100;
  const roundedProfit = Math.round(profit * 100) / 100;

  const [show,setShow]=useState(false)
  const [hide,setShoww]=useState(true)

  return (

    <Router>

      {hide?<div className="App"><div className="investmentbox">
      
      <h1>S&P 500 Index</h1>
      <h2>Yearly Intrest: 8%</h2>
      
      <ul id="growing-search-freebie">
		  <li>
			<div class="growing-search">
        <form>
        <div class="input">
          <input placeholder="Amount" value={capitalInput} onChange={handleCapitalChange} type="text" name="search"/>
        </div>
        </form>
        </div>
		  </li>
      </ul>
        <ul id="growing-searchh-freebie">
		    <li>
			  <div class="growing-searchh">
        <form>
        <div class="input">
          <input placeholder="Years Held" value={yearsInput} onChange={handleYearsChange} onSubmit={submitHandler} type="text" name="search"/>
        </div>
        </form>
        </div>
		  </li>
      </ul>
        {
<button class="b5" onClick={()=>setShow(true)}>Enter</button>
}

    {show?<div className="resultbox">
      {
      show?<h1>Total Balance: ${roundedBalance}</h1>:null}
      {
      show?<h1>Total Invested: ${capitalInput}</h1>:null
      }
      {
      show?<h1 id="h11">Total Profit: ${roundedProfit} ({roundedPercent}%)</h1>:null
      }
      <TradingViewEmbed
        widgetType={widgetType.SYMBOL_OVERVIEW}
        widgetConfig={{
          colorTheme: "dark",
          width: "640",
          height: "380",
          gridLineColor: "rgba(242, 242, 242, 1)",
          trendLineColor: "rgba(2, 176, 2, 1)",
          fontColor: "rgba(216, 216, 216, 1)",
          underLineColor: "rgba(64, 255, 2, 0.06)",
          borderradius: "5px",
          "symbols": [
            [
              "OANDA:SPX500USD|12M"
            ]
          ],
        }}
      />
    <h1 className="bottomtext2">    
    All the data is based of the historic 10 year
    average of the security. This
    information is not pure financial advice.
    Please invest responsibly!
    </h1>
    </div>
    :null}
      <div class="backbutton"><button onClick={()=>setShoww(false)} class="b4"><Link exact to="/App">Back</Link></button></div>

          </div>
    <h1 className="bottomtext1">
    All the data is based of the historic 10 year
    average of the security. This
    information is not pure financial advice.
    Please invest responsibly!
    </h1>
          </div>
          :null}
       
           <Switch>
          <Route path="/Home" component = {App} />
          </Switch>
        </Router>
    );
}
export default Sp;