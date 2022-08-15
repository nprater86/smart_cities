import React, { useState } from 'react';

const Registration = () => {
  //onSubmitHandler will send post request to /api/members to create a new user
  function onSubmitHandler(e) {
    e.preventDefault();
  }

  return (

    <div>
      <h1 className="display-4 text-center mt-5">Welcome to Smart Cities!</h1>
      <div className="w-50 m-auto p-5 border rounded text-start mt-5">
        <h1 className="display-6 mb-4">Register</h1>
        <form onSubmit={e => onSubmitHandler(e)}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input className="form-control" name="email" type="text" />
          </div>
          <div className="row mb-3">
            <div className="col-2">
              <label className="col-form-label">City</label>
            </div>
            <div className="col-4">
              <select className="form-select" name="city" id="city">
                <option value="1">New York, USA</option>
                <option value="2">London, UK</option>
                <option value="3">Chicago, USA</option>
                <option value="4">Tokyo, Japan</option>
                <option value="5">Hong Kong, China</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input className="form-control" name="password" type="text" />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password:</label>
            <input className="form-control" name="confirmPassword" type="text" />
          </div>
          <div className="d-flex justify-content-end mb-3">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
          <div className="d-flex justify-content-end">
            <a href="/login">Already Registered? Log in here.</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration