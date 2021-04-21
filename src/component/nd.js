import React from 'react';
import {Route, BrowserRouter as Router, Switch, Link} 
from "react-router-dom";
import App from "../App"

function Nd() {
  const [capitalInput, setCapitalValue] = React.useState("");
  const [yearsInput, setYearsValue] = React.useState("");
  
  var handleCapitalChange = (e) => {
    setCapitalValue(e.target.value);
  }

  var handleYearsChange = (e) => {
    setYearsValue(e.target.value);
  }

  var spintrest = 0.08;
  var equation_1 = capitalInput * spintrest;
  var spvalue = equation_1 * yearsInput;

  return (
    <div className="App">
      <div className = "box">
      <header className="App-header">

      <h1>{spvalue}</h1>
        <form>
          <input placeholder="Capital" value={capitalInput} onChange={handleCapitalChange}/>
        </form>
        <form>
          <input placeholder="Years Held" value={yearsInput} onChange={handleYearsChange}/>
        </form>
        <Router>
        <button><Link to="/App">Back</Link></button>
  
        <Switch>
          <Route path="/App" component = {App} />
          </Switch>
        </Router>
      </header>
      </div>
    </div>

   
  );
}

export default Nd;
