import "../App.css";
// import Controler from "./Controller";
// import Login from "../Pages/Login";
import BaseRouter from "../routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <BaseRouter />
      </Router>
      
    </>
    //   <div className="App">
    //   <div className="text">H</div>
    //   <div className="text">o</div>
    //   <div className="text">m</div>
    //   <div className="text">l</div>
    //   <div className="text">y</div>
          
        

    // </div>
  );
}

export default App;
