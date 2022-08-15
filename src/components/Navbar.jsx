import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';
import Logo from '../images/logo.png';

const NavBar = props => {
    const userContext = useContext(UserContext);
    const history = useHistory();

    function handleLink(e,url){
        e.preventDefault();
        history.push(url);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <img src={Logo} />
                        <a className="navbar-brand" href="/dashboard">Smart Cities</a>
                    </div>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={ e => handleLink(e, "/dashboard") }>Dashboard</a>
                        </li>
                        {
                            userContext.user.isAdmin ?
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={ e => handleLink(e, "/datamanager") }>Data Manager</a>
                            </li> :
                            ''
                            
                        }
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={ e => handleLink(e, "/leaderboard") }>Leaderboard</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;