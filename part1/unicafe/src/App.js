import { useState } from 'react'

const Header = () => (<h1>Give Feedback</h1>);

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
)


const Statistics = (good, neutral, bad, all, avergage, positive) => {
  return(
    <div>
      <h2>Statistics</h2>

    <div>
      <Statistics text="good" value={good}/>  
      <Statistics text="neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>
      <Statistics text="all" value={all}/>
      <Statistics text="average" value={avergage}/>
      <Statistics text="positive" value={positive}/>

    </div>  
    
    </div>

    )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all=good + neutral + bad
  const avergage = (good - bad) / all
  const positive = good / all

  //const  [avergage, setAverage] = useState(0)

  const setToValueGood = (newValue) => {
    console.log("value now", newValue)
    setGood(newValue)
  }
  const setToValueNeutral = (newValue) => {
    console.log("value now", newValue)
    setNeutral(newValue)
  }

  const setToValueBad= (newValue) => {
    console.log("value now", newValue)
    setBad(newValue)
  }

  return (
    <div>
      <Header />

      <Button handleClick={() => setToValueGood(good + 1)} text= " Good "/>
      <Button handleClick={() => setToValueNeutral(neutral + 1 )} text= " Neutral "/>
      <Button handleClick={() => setToValueBad(bad + 1)} text= " Bad "/>
      
      <h2>Statistics</h2>

      <Statistics
        good={good} 
        bad={bad}
        neutral={neutral}
        all={all}
        avergage={avergage}
        positive={positive}
        />
   

    </div>
  )
}

/**
 *    <Statistics
        good={good} 
        bad={bad}
        neutral={neutral}
        all={all}
        avergage={avergage}
        positive={positive}
        />
 */
export default App