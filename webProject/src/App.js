const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Total of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course =  'Half stack application development';
  const parts = [
    
    {
      name: 'Fundamentals of React', 
      exercises: 10
    },

    {
      name: 'Using props to pass data', 
      exercises: 7
    },

    {
      name: 'State of a component',
      exercises: 14
    },

  ]
    return (
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />

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
