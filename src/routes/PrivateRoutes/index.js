import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import JobDetail from '../../components/JobDetail'

import JobForm from '../../components/JobForm'
import Navbar from '../../components/Navbar'
import Jobs from '../../pages/Jobs'
import JobsAccepted from '../../pages/JobsAccepted'
import JobsPublished from '../../pages/JobsPublished'

const PrivateRoutes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/jobs-published" component={JobsPublished} />
      <Route exact path="/offers" component={JobsAccepted} />
      <Route exact path="/publish" component={JobForm} />
      <Route exact path="/job/:id" component={JobDetail} />
      <Redirect to="/jobs" />
    </Switch>
  </Router>
)

export default PrivateRoutes
