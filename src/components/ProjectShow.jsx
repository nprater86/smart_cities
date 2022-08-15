import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from 'axios';

const ProjectShow = (props) => {
  const [project, setProject] = useState({
    id: 1,
    name: "Bridge Repair",
    category: "Transport",
    description: "The bridge near the hospital needs repair. Currently, emergency vehicles need to pass over the bridge but cannot due to the storm damage from last winter."
  });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    // axios.get("http://localhost:8080/api/projects/" + id)
    //   .then(res => {
    //     setProject(res);
    //   })
    //   .catch(err => console.error(err));
  },[])

  function editHandler(e) {
    e.preventDefault();

    history.push("/projects/" + id + "/edit");
  }

  return (
    <>
      <div className="mt-5">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h1 className="display-4 m-0">{project.name}</h1>
          <a href="#" onClick={ (e) => editHandler(e) }>Edit</a>
        </div>
        <p className="lead">{project.description}</p>
      </div>
    </>

  );
};

export default ProjectShow;
