import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import Game from "../Game";
import Dashboard from "../Dashboard/Dashboard";
import NavBar from "../../components/NavBar/NavBar";
import * as kidApi from "../../utilities/kids-api";
import styled from "styled-components";
const Main = styled.div`
  color: black;
  background: #fcf3e5;
  font-family: "Quicksand";
  justify-content: center;
`;
export default function App() {
  const [user, setUser] = useState(getUser());
  const [kids, setKids] = useState([]);
  const [activeKid, setActiveKid] = useState(kids.length ? kids[0] : null);

  useEffect(() => {
    getKids();
  }, []);

  async function getKids() {
    const allKids = await kidApi.getAll();
    setKids(allKids);
  }
  
  return (
    <Main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/dashboard">
              <Dashboard kids={kids} setKids={setKids} />
            </Route>
            <Redirect to="/dashboard" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </Main>
  );
}
