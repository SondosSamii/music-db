import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./home";
import Artist from "./artist";
import NotFound from "./not-found";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Redirect to="music-db" />}></Route>
        <Route path="/music-db" component={Home}></Route>
        <Route path="/artist/:id" component={Artist}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
