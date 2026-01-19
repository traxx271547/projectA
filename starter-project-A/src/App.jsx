import { useState } from "react";
import "./App.css";
import Auth from "./component/Auth.jsx";

function App() {
  const [isLoggedin, setLoggedin] = useState(false);
  

  return (
    <>
    {isLoggedin ? <p>Welcome Anwar</p> : <Auth />}
      
    </>
  );
}

export default App;
