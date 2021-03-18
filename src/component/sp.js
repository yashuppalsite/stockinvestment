import React,{useState} from 'react';

function Sp() {
  const [capitalInput, setCapitalValue] = React.useState("");
  const [yearsInput, setYearsValue] = React.useState("");
  
  const handleCapitalChange = (e) => {
    setCapitalValue(e.target.value);
  }

  const handleYearsChange = (e) => {
    setYearsValue(e.target.value);
  }

  const spintrest = 0.08;
  const equation_1 = capitalInput * spintrest;
  const spvalue = equation_1 * yearsInput;
  const spbalance = +capitalInput + +spvalue;
  const spprofit = spvalue;
  const sppercent = spprofit/capitalInput * 100;

  const [show,setShow]=useState(false)

  return (
  <div className = "App">
    <div className = "box1">
      
      <h1>S&P 500 Index</h1>
      <h2>Yearly Intrest: 8%</h2>

        <form>
          <input placeholder="Capital" value={capitalInput} onChange={handleCapitalChange}/>
        </form>
        <form>
          <input placeholder="Years Held" value={yearsInput} onChange={handleYearsChange}/>
        </form>
        {
      <button onClick={()=>setShow(true)} >Show</button>
        }
    </div>
        {show?<div className="boxx">
      {
      show?<h1>Total Balance: ${spbalance}</h1>:null}
      {
      show?<h1>Total Invested: ${capitalInput}</h1>:null
      }
      {
      show?<h1>Total Profit: ${spprofit} ({sppercent}%)</h1>:null
      }
    </div>:null}
    </div>
 );
}
export default Sp;
