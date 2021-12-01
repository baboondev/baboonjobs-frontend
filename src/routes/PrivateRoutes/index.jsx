import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Header from "../../layout/Header";
import Job from "../../pages/Job";
import Jobs from "../../pages/Jobs";
import Publish from "../../pages/Publish";

const PrivateRoutes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Jobs} />
      <Route exact path="/jobs-published" component={Jobs} />
      <Route exact path="/jobs-accepted" component={Jobs} />
      <Route exact path="/job/:id" component={Job} />
      <Route exact path="/publish" component={Publish} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default PrivateRoutes;
