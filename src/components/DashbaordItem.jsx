import { useHistory } from "react-router-dom";

const DashBoardItem = (props) => {
  const history = useHistory();

  const likeHandler = () => {
    //incrment like by 1
    //send axios to backend
  };

  const unLikeHandler = () => {
    //decrement like by 1
    //send axios to backend
  };

  const projectClickHandler = (e, id) => {
    e.preventDefault();
    history.push("/projects/" + String(id));
  }

  return (
    <>
      <div className="d-flex align-items-center gap-5 border rounded p-3">
        <div className="d-flex flex-column align-items-center">
          <div className="vote" onClick={likeHandler}><i className="fa-solid fa-chevron-up"></i></div>
          <h1 className="display-6">{props.likes}</h1>
          <div className="vote" onClick={unLikeHandler}><i className="fa-solid fa-chevron-down"></i></div>
        </div>
        <div>
          <h1 className="display-6"><a href="#" className="text-decoration-none text-dark" onClick={ (e) => projectClickHandler(e, props.id) }>{props.name}</a></h1>
          <p className="lead">{props.description}</p>
        </div>
      </div>
    </>

  );
};

export default DashBoardItem;
