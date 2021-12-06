import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

const PublicRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Redirect to="/signin" />
    </Switch>
  </Router>
)

export default PublicRoutes
