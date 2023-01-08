import React from 'react';
import { Link } from 'react-router-dom';
import Girl from '../image/prince-akachi-RcqKOjX0ZHE-unsplash.jpg'
import { Helmet } from 'react-helmet-async';
const Home = () => {
    
    return (

        <main className="home">
        <Helmet>
            <title>randomuser home page</title>
            <meta name='description' content='ramdomuser home page or welcome home page for guest user '/>
            <link rel='canonical' href='/home' />
        </Helmet>
            <div className='home-text'>
                <h3><span>W</span>elcome To Random</h3>
                <p>kindly click the button to view our user</p>
                <Link to={"/login"}>Login</Link>
            </div>
            <div className='home-img'>
                <img src={Girl} alt="black child"/>
            </div>
        </main>
    );
}
export default Home;