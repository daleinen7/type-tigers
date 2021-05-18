import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import Game from "../Game";
import Dashboard from "../Dashboard/Dashboard";
import Practice from "../Practice/Practice";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
const Main = styled.div`
  color: black;
  background: #FCF3E5;
  font-family: 'Quicksand';
  justify-content: center;
`;
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <Main className="App">
      {user ? (
        <>
          <h1>Type Tigers</h1>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/practice">
              <Practice />
            </Route>
            <Redirect to="/orders" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </Main>
  );
}
