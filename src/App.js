import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Post from "./component/Post";

function App() {
   return (
      <Router>
         <div className="App">
            <NavBar />
            <div className="container">
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/About" component={About} />
                  <Route exact path="/Contact" component={Contact} />
                  <Route exact path="/:post_id" component={Post} />
                  <Route component={Home} />
               </Switch>
            </div>
         </div>
      </Router>
   );
}

export default App;
