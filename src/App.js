import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} 
from "react-router-dom";
import Sp from "./component/sp";
import Nd from "./component/nd";
import React,{useState} from 'react';



function App() {
   const [hide,setShow]=useState(true)
   const [show,setShoww]=useState(false)  


  return (
    <Router>
      {hide?<div className="App">
        <div className = "homebox">

            <h1 className="h1">How Much Investments Can Give You!</h1>
            <h3>Made By Yash Uppal!</h3>
            
          <div className="dropdown">
          <button className="dropbtn1">Stock ETF's</button>
          <div className="dropdown-listt"> 
          <Link></Link>
          </div>
          <div className="dropdown-list"> 
            <Link onClick={()=>setShow(false)} exact to="/ARKInnovation">ARK Innovation</Link>
            <Link onClick={()=>setShow(false)} exact to="/TechSector">Tech Sector</Link>
            <Link onClick={()=>setShow(false)} exact to="/Gold">Gold</Link>
            <Link onClick={()=>setShow(false)} exact to="/CleanEnergy">Clean Energy</Link>
            <Link onClick={()=>setShow(false)} exact to="/RealEstate">Real Estate</Link>
            <Link onClick={()=>setShow(false)} exact to="/Finance">Finance</Link>
            <Link onClick={()=>setShow(false)} exact to="HealthCare">Health Care</Link>
          </div>
          </div>
        <div className="dropdown">
        <button className="dropbtn2">Crypto</button>
        <div className="dropdown-listt"> 
          <Link></Link>
          </div>
        <div className="dropdown-list1"> 
          <Link onClick={()=>setShow(false)} exact to="/Bitcoin">Bitcoin</Link>
          <Link onClick={()=>setShow(false)} exact to="/Ethereum">Ethereum</Link>
          <Link onClick={()=>setShow(false)} exact to="/Litecoin">Litecoin</Link>
          <Link onClick={()=>setShow(false)} exact to="/Ripple">Ripple</Link>
          <Link onClick={()=>setShow(false)} exact to="/Cardano">Cardano</Link>
          <Link onClick={()=>setShow(false)} exact to="/BinanceCoin">Binance Coin</Link>
          <Link onClick={()=>setShow(false)} exact to="/DogeCoin">Doge Coin</Link>
          </div>
          </div>
        <div className="dropdown">
        <button className="dropbtn3">Index Funds</button>
        <div className="dropdown-listt"> 
          <Link></Link>
          </div>
        <div className="dropdown-list2"> 
          <Link onClick={()=>setShow(false)} exact to="/S&P500">S&P 500</Link>
          <Link onClick={()=>setShow(false)} exact to="/NASDAQ">NASDAQ</Link>
          <Link onClick={()=>setShow(false)} exact to="/DOW">Dow Jones</Link>
          <Link onClick={()=>setShow(false)} exact to="/NYSE">NYSE</Link>
          <Link onClick={()=>setShow(false)} exact to="/TorontoExchange">Toronto Exchange</Link>
          <Link onClick={()=>setShow(false)} exact to="/TotalMarket">Total Market</Link>
          <Link onClick={()=>setShow(false)} exact to="/GrowthStocks">Growth Stocks</Link>
          </div>
          </div>

        <div class="wrapper"><button class="b6" onClick={()=>setShoww(true)}>Stocks</button></div>
   
        {show?<div className="stocksbox">
        <h2>Stocks</h2>
	      <div class = "row">
        <div class = "tesla">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "apple">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "microsoft">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "netflix">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "amazon">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "facebook">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "alibaba">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "nike">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "coke">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "mcdonalds">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "starbucks">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "disney">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "shopify">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "nivida">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "amd">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "adobe">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "google">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "twitter">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "pepsi">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "mmm">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "AAL">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Amex">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "At">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "BOC">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Berkshire">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Bestbuy">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Boeing">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Chipotle">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Comcast">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Costco">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Dominos">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Exxon">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Fedex">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "General">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Goldman">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "IBM">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Intel">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "JNJ">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "JPMorgan">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Lulu">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Mastercard">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Oracle">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Paypal">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Procter">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Salesforce">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Snap">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Square">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Target">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Toyota">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Ups">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Verizon">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Visa">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Walmart">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>
        <div class = "Wix">
        <Link onClick={()=>setShoww(false)} onClick={()=>setShow(false)} to="/S&P500"></Link>
        </div>

        </div>
        </div>:null}
        </div>
        </div>
        :null}
         <Switch>
          <Route path="/S&P500" component={Sp} /> 
          <Route path="/NASDAQ" component={Nd} />
      </Switch>
    
      </Router>
  );
}

export default App;
