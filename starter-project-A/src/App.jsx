import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const name = "Anwar";
  const isLoggedIn = false;
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [update, setUpdate] = useState(true)

  function Welcome(props) {
    return <h1>{props.name}</h1>;
  }

  

  function Confirm() {
    return (<>
    <input value = {inputValue} onChange = {(e) => setInputValue(e.target.value)}/>
    <button onClick = {() => handleUpdate}>Confirm</button>
    </>)
  }

  function Counter() {
    const [count, setCount] = useState(0);
    return (
      <>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Click here</button>
      </>
    );
  }

  function handleAdd(){
    setList([...list, inputValue]);
    setInputValue("");
    
  }
  function handleDelete(index){
    const newList = list.filter((item,i) => i != index)
    setList(newList)
  }
  function handleUpdate(){
    const updatedList = list.filter((item, index) =>
    index === editIndex ? inputValue : item);
    setInputValue("")
    setEditIndex(null)
    setList(updatedList)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>{name}</p>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {isLoggedIn ? <Welcome name="Anwar" /> : <Counter />}
      <br/>
      <input value = {inputValue} onChange = {(e) => setInputValue(e.target.value)}/>
      
      <button onClick={handleAdd}>Add</button>
      
      {list.map((item, index) => (
        <div>
        <p key = {index}>{item}</p>
        <button onClick = {() => handleDelete(index)}>Delete</button>
        
        {update ? <button onClick = {() => {setUpdate(false);
          setEditIndex(index);
        }}>Update</button> : <Confirm/>}
        </div>
      ))}
    </>
  );
}

export default App;
