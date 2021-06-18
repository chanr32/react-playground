import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Book from "./Book";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/book" exact component={Book} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
