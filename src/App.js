//import logo from './logo.svg';
import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           { 2 + 2 /* Edit <code>src/App.js</code> and save to reload. */}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import { useState } from 'react'; // import useState to: Returns a stateful value, and a function to update it.
import { useEffect } from 'react'; // import useEffect to: Accepts a function that contains imperative, possibly effectful code.


const App = () => {
  const name ='Jane';
  const isNameShowing = true;
  
  const Person = (props) => { // use props to custom data
    return (
      <>
        <h1>Name: John</h1>
        <h2>Last Name: Doe</h2>
        <h2>Age : {props.age} </h2>
      </>
    )
  }
  // useState area 
  const [counter, setCounter] = useState(0); // hook 
  // useEffect area 
  useEffect(() => {
    //alert('Reload') // reload webpage will show the alert message 
    // never change state like this: counter = 100 is not a normal variable and this will break because never modify state manually , never mutate the state 
    // use own function, in this case is setCounter 
    
    // setCounter(100);  // this will be an infinite loop - bad things happen
    // need a good function to avoid this 
    alert("You've changed the counter to " + counter)
  }, [counter]);

  return (
  <div clasName="App">
    <h1>Hello, { isNameShowing ? name : "..." } ! </h1>
    { name ? (
    <>
      <p>Simple example with React and data: components, state and props ... </p>
      <h1> <Person /> react element is like an empty div </h1>
      <Person age = {1000}/>
    </>
    ) : (
      <>
      <h1> else element is like an empty div to wrap around many tags </h1>
      <h2> there is no name:</h2>
      </>
    )}

    <p>counter example :</p>
    {// handle events ...
    /* <button onClick={() => {alert('clicked')}}> - </button> */ 
    } 
    <button onClick={() => {setCounter((prevCount) => prevCount -1 )}}> - </button>
    <h1>{counter}</h1>
    <button onClick={() => {setCounter((prevCount) => prevCount +1 )}}> + </button>

 </div>
  );
}
export default App;
