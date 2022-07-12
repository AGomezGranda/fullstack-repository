import { useState } from "react";

const Display = (counter) => <div> {counter} </div>
const Button = (onClick, text) =>  <button onClick={onClick}> {text} </button>

const App = () => {
  const [counter, setCounter] = useState(0);

  const sumaUno = () => { setCounter(counter + 1) };
  const restarUno = () => {setCounter(counter -1)}
  const reset = () => { setCounter(0) };
  

  return (
    <div>
      <Display counter={counter} />

      <Button onClick={sumaUno} text="suma"/>
      <Button onClick={restarUno} text="resta" />
      <Button onClick={reset} text="cero"/>
    </div>
    
  )
}

export default App