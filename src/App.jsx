import './App.css';

import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import Signup from './view/Signup';
import Login from './view/Login';
import SignupDetail from './view/SignupDetail';
import Welcome from './view/Welcome';

function App() {
  return (
    
    <BrowserRouter>
      <Route exact path="/">
      <Login />
    </Route>
    <Route exact path="/signup">
      <Signup />
      </Route>
      <Route exact path="/signup_detail">
      <SignupDetail />
    </Route>
    </BrowserRouter>
  );
}

export default App;
