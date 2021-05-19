import SideBar from "../../components/SideBar/SideBar";
import Profile from "../../components/Profile/Profile";
import { Link } from "react-router-dom";
import { useState } from "react";
import bear from "../../images/bear.svg";
import map from '../../images/map.svg';
import * as kidApi from "../../utilities/kids-api";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

const DashboardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .buttonAndImg {
    display: flex;
    flex-direction: column;
  }

  ul {
    padding: 0;
    width: 100%;
    list-style-type: none;
  }

  .play {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px solid #ffd600;
    padding-bottom: 40px;
    width: 97%;
  }

  h1 {
    text-align: center;
  }
`;

const linkStyle = {
  color: "white",
  padding: "20px 60px",
  fontFamily: "Quicksand",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: "2.25rem",
  textAlign: "center",
  fontFamily: "'Quicksand'",
  borderRadius: "10px",
  border: "none",
  backgroundColor: "#4f83ff",
  boxShadow: "3px 3px 0 #0f45c3",
  margin: "0",
  textDecoration: "none",
};

export default function Dashboard({ kids, setKids }) {
  const [formData, setFormData] = useState({ name: "", level: 0 });

  function handleSubmit(evt) {
    evt.preventDefault();
    kidApi.create(formData);
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <StyledDiv>
      <SideBar />
      <DashboardSection>
        <div className="dashboardHeading">
          <h1>Your Dashboard</h1>
          <div className="play">
            <img src={bear} alt="bear" />
            <div className="buttonAndImg">
              <img src={map} alt="map" />
              <Link to="/game" style={linkStyle}>
                Let's Play
              </Link>
            </div>
          </div>
        </div>

        <ul>
          {kids.map((kid) => {
            return (
              <Profile
                name={kid.name}
                coins={kid.coins}
                level={kid.level}
                key={kid._id}
              />
            );
          })}
        </ul>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label>Name</label>
            <input
              onChange={handleChange}
              name="name"
              value={formData.name}
              placeholder="(required)"
              minLength="1"
              required
            />
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
