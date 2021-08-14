import Index from "./components/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleJob from "./components/SingleJob";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/single" component={SingleJob} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
