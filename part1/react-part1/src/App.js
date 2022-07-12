const Hello = (props) => {
  const fechaNacimiento = () =>{
    const now = new Date().getFullYear();
    return now - props.age;
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>
        You were born in {fechaNacimiento()}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App