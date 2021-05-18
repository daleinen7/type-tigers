import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import Game from "../Game";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        <>
          <h1>Type Tigers</h1>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route to="/auth">
              {!user 
              ? <AuthPage setUser={setUser} />
              : <Redirect to="/game"/>
              }     
            </Route>
            <Redirect to="/game" />
          </Switch>
        </>
    </main>
  );
}
