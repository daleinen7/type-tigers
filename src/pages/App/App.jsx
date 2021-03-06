import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import Game from "../Game";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import NavBar from "../../components/NavBar/NavBar";
import * as kidApi from "../../utilities/kids-api";
import styled from "styled-components";
import axios from "axios";
const Main = styled.div`
  color: black;
  background: #fcf3e5;
  font-family: "Quicksand";
  justify-content: center;
`;
export default function App() {
  const [user, setUser] = useState(getUser());
  const [kids, setKids] = useState([]);
  const [activeKid, setActiveKid] = useState(kids.length ? 0 : 0);
  const [story, setStory] = useState();

  useEffect(() => {
    getKids();
    getStories();
  }, []);

  async function getStories() {
    axios({
      method: "get",
      url: `http://localhost:3001/api/stories/0`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((response) => setStory(response.data[0].words));
  }

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
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/game">
              <Game
                kids={kids}
                getKids={getKids}
                setKids={setKids}
                activeKid={activeKid}
                story={story}
              />
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
