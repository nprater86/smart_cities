import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

const Registration = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [city, setCity] = useState();
  const [cities, setCities] = useState([]);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/cities")
      .then(res => {
        setCities(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err))
  }, [])

  //onSubmitHandler will send post request to /api/users to create a new user
  function onSubmitHandler(e) {
    e.preventDefault();

    const newUser = { firstName, lastName, email, username, password, confirmPassword, city: {id: city} };

    console.log(newUser);

    axios.post("http://localhost:8080/api/users", newUser)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }

  return (
    <>
    {
      loaded && 
      <div>
        <h1 className="display-4 text-center mt-5">Welcome to Smart Cities!</h1>
        <div className="w-50 m-auto p-5 border rounded text-start mt-5">
          <h1 className="display-6 mb-4">Register</h1>
          <Form onSubmit={e => onSubmitHandler(e)}>
            <div className="mb-3">
              <label className="form-label">First Name:</label>
              <Input className="form-control" type="text" onChange={ (e) => setFirstName(e.target.value) } validations={[required]}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name:</label>
              <Input className="form-control" type="text" onChange={ (e) => setLastName(e.target.value) }/>
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <Input className="form-control" type="email" onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            <div className="mb-3">
              <label className="form-label">User Name:</label>
              <Input className="form-control" type="text" onChange={ (e) => setUsername(e.target.value) }/>
            </div>
            <div className="row mb-3">
              <div className="col-2">
                <label className="col-form-label">City</label>
              </div>
              <div className="col-6">
                <select className="form-select" id="city" onChange={ (e) => setCity(e.target.value) }>
                  { cities.map((city, i) => 
                    <option key={i} value={ city.id }>{city.city}, {city.country}</option>
                  )}
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <Input className="form-control" type="password" onChange={ (e) => setPassword(e.target.value) }/>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password:</label>
              <Input className="form-control" type="password" onChange={ (e) => setConfirmPassword(e.target.value) }/>
            </div>
            <div className="d-flex justify-content-end mb-3">
              <Input className="btn btn-primary" type="submit" value="Register" />
            </div>
            <div className="d-flex justify-content-end">
              <a href="/login">Already Registered? Log in here.</a>
            </div>
          </Form>
        </div>
      </div>
    }
    </>
  );
}

export default Registration