import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import NotFound from "./notFound/NotFound";
import Home from "./home/Home";
function App() {
  return (
    <Router>
      <div className="row">
        <div className="col">
          <Navbar />
        </div>
        <div className="col">
          <Switch>
            <Route path={"/"}>
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
