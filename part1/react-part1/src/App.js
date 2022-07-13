import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
)

const Display = props => <div> <p>{props.value}</p> </div>

const App = () => {
  const [value, setValue] = useState(0) 
  
  const setToValue = (newValue) => {
    console.log("value now", newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(value + 1000)} text= " + 1000"/>
      <Button handleClick={() => setToValue(0)} text= "RESET"/>
      <Button handleClick={() => setToValue(value + 1)} text= " + 1"/>
    </div>
  )

}

export default App