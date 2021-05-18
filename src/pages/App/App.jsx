import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import Game from "../Game";
import Account from "../Account/AccountPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <h1>Type Tigers</h1>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Redirect to="/account" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
