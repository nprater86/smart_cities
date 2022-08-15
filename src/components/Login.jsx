import React, { useState } from 'react';

const Login = () => {
    function onSubmitHandler(e) {
        e.preventDefault();
    }

    return (

    <div>
        <h1 className="display-4 text-center mt-5">Welcome to Smart Cities!</h1>
        <div className="w-50 m-auto p-5 border rounded text-start mt-5">
            <h1 className="display-6 mb-4">Login</h1>
                <form onSubmit={e => onSubmitHandler(e)}>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input className="form-control" name="email" type="text" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input className="form-control" name="password" type="text" />
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                        <input className="btn btn-primary" type="submit" value="Register" />
                    </div>
                    <div className="d-flex justify-content-end">
                        <a href="/registration">Not a member? Register here.</a>
                    </div>
                </form>
        </div>
    </div>
    );
}

export default Login;