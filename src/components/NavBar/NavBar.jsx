import { Link, NavLink } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import styled from "styled-components";
const Button = styled.button`
  margin: 1vmin;
  font-family: "Quicksand";
  padding: 1vmin;
  color: var(--white);
  background-color: #7566e5;
  font-size: 3vmin;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  border: 0.1vmin solid var(--tan-2);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`;
const Nav = styled.div`
  font-family: "Quicksand";
  color: white;
  background-color: #3370ff;
`;
export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Nav>
      <div>Type Tigers</div>
      <NavLink exact activeStyle={{ backgroundColor: "yellow" }} to="/game">
        Game
      </NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{ backgroundColor: "yellow" }} to="/account">
        Account
      </NavLink>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </Nav>
  );
}
