import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Girl from '../image/prince-akachi-RcqKOjX0ZHE-unsplash.jpg'
const Home = () => {
    
    return (

        <main className="home">
            <div className='home-text'>
                <h3><span>W</span>elcome To Random</h3>
                <p>kindly click the button to view our user</p>
                <Link to={"/login"}>Login</Link>
            </div>
            <div className='home-img'>
                <img src={Girl} alt="female image"/>
            </div>
        </main>
    );
}
export default Home;