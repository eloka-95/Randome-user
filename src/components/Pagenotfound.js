import React from 'react';
import { Link } from 'react-router-dom';
const Pagenotfound = () => {
    return (
        <div>
            <h1> 404</h1>
            <p> page not found <Link to={"/"}>Go back</Link></p>
        </div>
    );
};

export default Pagenotfound;