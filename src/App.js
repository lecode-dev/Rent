import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Switch>
          <Route path='/' exact/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
