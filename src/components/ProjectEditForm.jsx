import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useParams } from "react-router";
import axios from 'axios';

const ProjectForm = props => {
    const { id } = useParams();
    const [category, setCategory] = useState();
    const [categoryError, setCategoryError] = useState();
    const [name, setName] = useState("Bridge Repair");
    const [nameError, setNameError] = useState();
    const [description, setDescription] = useState("The bridge near the hospital needs repair. Currently, emergency vehicles need to pass over the bridge but cannot due to the storm damage from last winter.");
    const [descriptionError, setDescriptionError] = useState();
    const userContext = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        // axios.get('http://localhost:8080/api/projects/' + id)
        //     .then(res => {
        //         setCategory(res.data.categroy);
        //         setName(res.data.name);
        //         setDescription(res.data.description);
        //     })
    }, []);

    function onSubmitHandler(e){
        e.preventDefault();
        let formErrors = false;
        setCategoryError(undefined);
        setNameError(undefined);
        setDescriptionError(undefined);

        //validations
        if(!category){
            setCategoryError("Please choose a category.");
            formErrors = true;
        }

        if(name.length < 3){
            setNameError("Project name must be at least 3 characters.");
            formErrors = true;
        }

        if(description.length < 20){
            setDescriptionError("Project description must be at least 20 characters.");
            formErrors = true;
        }


        if(!formErrors){
            const updatedProject = { category, name, description };

            console.log(updatedProject);

            // axios.put('http://localhost:8080/api/projects/' + id, updatedProject)
            //     .then(res => {
            //         console.log(res);
            //         history.push("/dashboard");
            //     })
            //     .catch(err=>console.error(err))

            history.push("/dashboard");
        }
    }

    function cancelHandler(e) {
        e.preventDefault();

        history.goBack();
    }

    return (
        <>
            <div className="w-50 m-auto p-5 border rounded text-start mt-5">
                <h1 className="display-6 mb-4">Edit a Project</h1>
                <form onSubmit={e => onSubmitHandler(e)}>
                    <div className="row mb-3">
                        <div className="col-4">
                            <label className="col-form-label">Project Category</label>
                        </div>
                        <div className="col-6">
                            <select className="form-select" onChange={ (e) => setCategory(e.target.value) } id="category">
                                <option value="">Choose a category...</option>
                                <option value="1">Housing</option>
                                <option value="2" selected>Transport</option>
                                <option value="3">Sustainability</option>
                                <option value="4">Culture and Nature</option>
                                <option value="5">Natural Disasters</option>
                                <option value="6">Environment</option>
                            </select>
                            {
                                categoryError ?
                                <small><p className="text-danger">{ categoryError }</p></small> :
                                ''
                            }
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input className="form-control" type="text" onChange={ (e) => setName(e.target.value)} value={name} />
                        {
                                nameError ?
                                <small><p className="text-danger">{ nameError }</p></small> :
                                ''
                        }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description:</label>
                        <textarea className="form-control" rows="10" style={{ resize: "none" }} onChange={ (e) => setDescription(e.target.value) } value={description}></textarea>
                        {
                                descriptionError ?
                                <small><p className="text-danger">{ descriptionError }</p></small> :
                                ''
                        }
                    </div>
                    <div className="d-flex justify-content-end mb-3 gap-3">
                        <input className="btn btn-primary" type="submit" value="Edit Project" />
                        <button className="btn btn-danger" onClick={ (e) => cancelHandler(e) }>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProjectForm;