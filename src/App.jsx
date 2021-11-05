import "./App.scss";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Signup from "./view/Signup";
import Login from "./view/Login";
import SignupDetail from "./view/SignupDetail";
import Welcome from "./view/Welcome";
import Main from "./view/Main";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup_detail" component={SignupDetail} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
