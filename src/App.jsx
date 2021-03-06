import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./view/Signup";
import Login from "./view/Login";
import SignupDetail from "./view/SignupDetail";
import Welcome from "./view/Welcome";
import Main from "./view/Main";
import MyPage from "./view/MyPage";
import { UserProvider } from "./provider/UserProvider";
import PostWrite from "./view/PostWrite";
import PostDetail from "./view/PostDetail";
import UserDetail from "./view/UserDetail";
import Chat from "./view/Chat";
import Messages from "./view/Messages";

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
          <Route path="/post_write" component={PostWrite} />
          <Route path="/post_detail" component={PostDetail} />
          <Route path="/user_detail" component={UserDetail} />
          <Route path="/chat" component={Chat} />
          <Route path="/messages" component={Messages} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
