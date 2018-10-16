import React from 'react';
import { Link } from "react-router-dom";

const Navigation = props => {
    return (
        <ul className="navigation">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            {/* <li> <Link to={{
                to: '/contact',
                state: { extraData: 'This is redirected from contact' }
            }}>contact</Link> </li> */}
            <li> <Link to="/topics">Topics</Link> </li>
            <li> <Link to="/auth">Auth</Link> </li>
        </ul>
    );
}

export default Navigation;