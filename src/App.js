import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} 
from "react-router-dom";
import Sp from "./component/sp"
import Nd from "./component/nd"
import Stock from "./component/stock"


function App() {
  return (
    <div className="App">
       <div className = "box">
      <header className="App-header">
          <h2>How Much Investments Can Give You!</h2>
       
      <Router>
      <div>
      <div class="dropdown">
      <button class="dropbtn">ETF</button>
      <div class="dropdown-content">
        <Link exact to="/S&P500">S&P 500</Link>
        <Link to="/NASDAQ">NASDAQ</Link>
        <Link to="/STOCK">Stocks</Link>
      </div>
      </div>
      <div class="dropdown">
      <button class="dropbtn">Crypto</button>
      <div class="dropdown-content">
        <Link to="/S&P500">S&P 500</Link>
        <Link to="/NASDAQ">NASDAQ</Link>
        <Link to="/STOCK">Stocks</Link>
      </div>
      </div>
      <div class="dropdown">
      <button class="dropbtn">Stocks</button>
      <div class="dropdown-content">
        <Link to="/S&P500">S&P 500</Link>
        <Link to="/NASDAQ">NASDAQ</Link>
        <Link to="/STOCK">Stocks</Link>
      </div>
      </div>
      </div>
  
      <Switch>
          <Route exact path="/S&P500" component={Sp} />
          <Route exact path="/NASDAQ" component={Nd} />
          <Route exact path="/STOCK" component={Stock} />
      </Switch>
    </Router>
      </header>
    </div>
    </div>
  );
}


export default App;
