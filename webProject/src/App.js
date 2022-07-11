const Header = (props) => {
  console.log(props)
  return(
    <h2>{props.course}</h2>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <div>
      <p>{props.part1} {props.exercise1}</p>
      <p>{props.part2} {props.exercise2}</p>
      <p>{props.part3} {props.exercise3}</p>
    </div>
    
    )
}

const Total = (props) => {
  console.log(props)
  return(
  <div>
    <h3>Number fo exercises: {props.result}</h3>
  </div>
  )
}

const App = () => {

  const course = 'Half stack application development';
  
  const part1 = {
    name: 'Fundamentals of React',
    exercise1: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercise2: 7,
  } 
  
  const part3 = {
    name: 'State of a component',
    exercise3: 14,
  }
  
  return (
    <div>
      <Header course={course}/>
      
      <Content part1={part1.name} exercise1={part1.exercise1} part2={part2.name} exercise2={part2.exercise2} part3={part3.name} exercise3={part3.exercise3}/>
     
      <Total result={part1.exercise1 + part2.exercise2 + part3.exercise3}/>
    </div>
  )
}

export default App;

/*
Crear una componente en JS, en este caso un div

  () => {
    <div>
      <p>Hola Mundo!</p>
    </div>
    }

  Sin embargo no está asignado a ninguna variable
  por lo que no se puede usar en el DOM

  Por lo tanto, es necesario asignarlo a una variable
  
  cont App = ...

*/

/*
    Teniendo en cuanta las caracteristicas de nuestro componente
    Como la funcion consiste en una expresión sencilla, debemos usar
    la palabra reservada 'return' para devolver el valor del componente.


*/
