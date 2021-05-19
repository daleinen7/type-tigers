import piggie from '../../images/piggie.svg';
import styled from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #FFD600;
  button {
    width: 150px;
    height: 40px;
    margin-left: 10px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    font-family: "Quicksand";
    border-radius: 10px;
    border: none;
    background-color: #4f83ff;
    box-shadow: 3px 3px 0 #0f45c3;
  }
  .grade {
    display: flex;
    flex-wrap: wrap;
    width: 400px;
  }
`;
export default function Profile({name, coins, level}) {
  return(
    <StyledListItem>
      <div className="avatar">
        <img src={piggie} alt="piggie" />
      </div>
      <div className="player">
        <h2>{name}</h2>
        <p>pic goes here?</p>
        <p>Coins: {coins}</p>
        <p>Level: {level}</p>
      </div>
      <div className="grade">
        <button>Pre K</button>
        <button>Kindergarden</button>
        <button>Grade 1</button>
        <button>Grade 2</button>
        <button>Grade 3</button>
        <button>Grade 4+</button>
      </div>
    </StyledListItem>
  )
}