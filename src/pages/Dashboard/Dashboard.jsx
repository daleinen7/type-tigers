import SideBar from '../../components/SideBar/SideBar';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import bear from '../../images/bear.svg';
import * as kidApi from '../../utilities/kids-api';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
`;

const DashboardSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .play {
    display: flex;
    justify-content: space-evenly;  
    align-items: center;
  }
  button {
    width: 270px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 2.25rem;
    text-align: center;
    font-family: "Quicksand";
    border-radius: 10px;
    border: none;
    background-color: #4f83ff;
    box-shadow: 3px 3px 0 #0f45c3;
    margin: 0;
  }

  h1 {
    text-align: center;
  }
`

const linkStyle = {
  color: 'white',
  padding: '20px 60px', 
  fontFamily: 'Quicksand',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '2.25rem',
  textAlign: 'center',
  fontFamily: "'Quicksand'",
  borderRadius: '10px',
  border: 'none',
  backgroundColor: '#4f83ff',
  boxShadow: '3px 3px 0 #0f45c3',
  margin: '0',
  textDecoration: 'none'
}

export default function Dashboard({kids, setKids}) {

  const[formData, setFormData] = useState({name: '', level: 0});

  function handleSubmit(evt) {
    evt.preventDefault();
    kidApi.create(formData);
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  useEffect(() => {
    getKids();
  }, []);
  
  async function getKids() {
    const allKids = await kidApi.getAll();
    setKids(allKids);
  }

  return (
    <StyledDiv>
      <SideBar/>
      <DashboardSection>
        <h1>Your Dashboard</h1>
        <div className="play">
          <img src={bear} alt="bear" />
          <Link to='/game' style={linkStyle}>Let's Play</Link>
        </div>

        <ul>
          {kids.map(kid => {
            return (
            <li key={kid._id}>
              {kid.name}
              {kid.level} | 
              {kid.coins}
            </li>)
          })}
        </ul>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label>Name</label>
            <input onChange={handleChange} name="name" value={formData.name} placeholder="(required)" minLength="1" required />
          </div>
          <div>
            <label>Level</label>
            <select name="level" onChange={handleChange}>
              <option value={0}>Level Zero</option>
              <option value={1}>Level One</option>
              <option value={2}>Level Two</option>
            </select>
          </div>
          <button type="submit">ADD</button>
        </form>
        </DashboardSection>
    </StyledDiv>
  );
}