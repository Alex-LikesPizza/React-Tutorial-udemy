import moneyImg from "../assets/investment-calculator-logo.png";
function Header() {
  return (
    <div id="header">
      <img src={moneyImg}></img>
      <h1>Investment Calculator</h1>
    </div>
  )
}

export default Header