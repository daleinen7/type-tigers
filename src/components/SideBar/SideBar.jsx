import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background: #A4BFFF;
  min-height: 100vh;
  width: 322px;
  border-radius: 0 30px 30px 0;

  ul{
    padding: 0;
    display: flex;
    flex-direction: column;
    margin-top: 68px;
    list-style-type: none;
    
    li {
      margin-bottom: 50px;
    }

    a {
      text-decoration: none;
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 2.5rem;
      line-height: 2.6rem;
      color: #001340;
    }
  }
`;
export default function SideBar() {
  return(
    <StyledDiv>
      <ul>
        <li>
          <Link to='/dashboard'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            Shop
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            Settings
          </Link>
        </li>
      </ul>
    </StyledDiv>
  )
}