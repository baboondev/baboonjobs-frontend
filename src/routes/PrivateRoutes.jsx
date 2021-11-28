import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Publish from "../pages/Publish/Publish";
import Job from "../pages/Job/Job";
import Header from "../layout/Header/Header";

const PrivateRoutes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/publish" component={Publish} />
      <Route exact path="/job/:id" component={Job} />
      <Redirect to="/publish" />
    </Switch>
  </Router>
);

export default PrivateRoutes;
