import './App.css';

import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import Signup from './view/Signup';
import Login from './view/Login';
import SignupDetail from './view/SignupDetail';
import Welcome from './view/Welcome';

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/signup_detail" component={SignupDetail} />
      <Route path="/welcome" component={Welcome} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
