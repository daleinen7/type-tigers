import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <NavLink exact activeStyle={{backgroundColor: 'yellow'}} to="/game">Game</NavLink>
      {user && (<span>Welcome, {user.name}</span>)}
      {user ? (<Link to="/game" onClick={handleLogOut}>Log Out</Link>):<Link to="/auth">Login</Link>  }
    </nav>
  );
}