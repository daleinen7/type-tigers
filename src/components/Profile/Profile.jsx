import styled from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #FFD600;
`;
export default function Profile({name, coins, level}) {
  return(
    <StyledListItem>
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
      <div className="avatar">
        <h2>Avatar</h2>
      </div>
      <div className="tracker">
        <h2>Tracker</h2>
      </div>
    </StyledListItem>
  )
}