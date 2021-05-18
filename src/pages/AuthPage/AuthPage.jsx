import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import styled from "styled-components";
const Main = styled.div`
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
  background-color: #E6964B;
  font-size: 3vmin;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  border: .1vmin solid var(--tan-2);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Main>
      <h1>AuthPage</h1>
      {showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
      <Button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</Button>
    </Main>
  );
}