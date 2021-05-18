import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styled from "styled-components";
const Login = styled.div`
  color: black;
  background: #FCF3E5;
  font-family: 'Quicksand';
  justify-content: center;
`;
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

export default function LogIn({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <Login>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <Button type="submit">LOG IN</Button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </Login>
  );
}