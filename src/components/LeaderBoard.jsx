import { useState } from "react";
import LeaderBoardItem from "./LeaderBoardItem";
const LeaderBoard = () => {
  const [selected, setSelected] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setSelected(e.target.innerText);
  } 

  return (
    <>
      <ul className="nav justify-content-center mt-5">
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={handleClick}>Housing</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={handleClick}>Transport</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={handleClick}>Sustainablity</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={handleClick}>Culture and Nature</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={handleClick}>Natural Disasters</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={handleClick}>Environment</a>
        </li>
      </ul>
      <div>
        {
            selected === '' ? '' : <LeaderBoardItem name={selected} />
        }
        
      </div>
    </>
  );
};

export default LeaderBoard;
