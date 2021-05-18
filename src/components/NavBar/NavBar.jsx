import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import styled from "styled-components";
const Button = styled.button`
  margin: 1vmin;
  font-family: 'Quicksand';
  padding: 1vmin;
  color: var(--white);
  background-color: #7566E5;
  font-size: 3vmin;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  border: .1vmin solid var(--tan-2);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/orders"><Button>Practice</Button></NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{backgroundColor: '#FAD451'}} to="/game"><Button>Game</Button></NavLink>
      &nbsp; | &nbsp;
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/orders/new"><Button>Sign Up</Button></NavLink>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}