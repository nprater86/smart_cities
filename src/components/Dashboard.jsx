import DashBoardItem from "./DashbaordItem";
import { useEffect, useState } from "react";
import axios from 'axios';

const DashBoard = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Bridge Repair",
      category: "Transport",
      likes: 25,
      description: "The bridge near the hospital needs repair. Currently, emergency vehicles need to pass over the bridge but cannot due to the storm damage from last winter."
    },
    {
      id: 2,
      category: "Culture and Nature",
      name: "New inclusive community playground",
      likes: 22,
      description: "Build a new playground in the town center to make an open and inclusive envorinment for parents and children. Currently no one goes there."
    },
    {
      id: 3,
      category: "Sustainability",
      name: "Recycling bin upgrades",
      likes: 21,
      description: "Upgrade recycling bins to allow for additional items to be recycled."
    },
    {
      id: 4,
      category: "Environment",
      name: "Building living wall on town hall",
      likes: 14,
      description: "Construct a green living plant wall on the side of town hall. This will not only make it look pretty, but will support local bees."
    },
    {
      id: 5,
      category: "Housing",
      name: "Upgrade affordable housing",
      likes: 5,
      description: "Build a new playground in the town center to make an open and inclusive envorinment for parents and children. Currently no one goes there."
    },
  ]);

  useEffect(() =>{
    //axios call to get list of projects
    // axios.get('http://localhost:8080/api/projects')
    //   .then(res => {
    //     setProjects(res);
    //   })
    //   .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <div>
        <h1 className="display-4 mb-5 mt-5"> Community Projects</h1>
        <div className="d-flex flex-column gap-4">
          {
            projects.map( (project, i) => 
              <DashBoardItem key={i} id={project.id} name={project.name} category={project.category} likes={project.likes} description={project.description} />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
