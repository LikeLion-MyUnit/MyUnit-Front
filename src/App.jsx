import "./App.scss";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Signup from "./view/Signup";
import Login from "./view/Login";
import SignupDetail from "./view/SignupDetail";
import Welcome from "./view/Welcome";
import Main from "./view/Main";
import MyPage from "./view/MyPage";
import { UserProvider } from "./provider/UserProvider";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signup_detail" component={SignupDetail} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/mypage" component={MyPage} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
