import './App.scss';

import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import Signup from './view/Signup';
import Login from './view/Login';
import SignupDetail from './view/SignupDetail';
import Welcome from './view/Welcome';
import Recruit from './view/Recruit';

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/signup_detail" component={SignupDetail} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/recruit" component={Recruit} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
