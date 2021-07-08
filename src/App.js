import './App.css';
import Form from './Form';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Home';
import Update from "./Update";
function App() {
  
  return (
   
<Router>
<div className="app">
<div className="App">
 
 <switch>                
     <Route path="/" component={Home} exact/>
     <Route path="/Form" component={Form} exact/>
     <Route path="/update/:id" component={Update} exact/>
   </switch>
 
  </div>
</div>
    </Router>
    
 
  );
}

export default App;
