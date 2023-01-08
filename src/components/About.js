import React from 'react';
import { Helmet } from 'react-helmet-async';

function About(props) {
    return (
        <div className='about'>
        <Helmet>
            <title>randomuser about page</title>
            <meta name='description' content='This section explain the task i need to complete in this project'/>
            <link rel='canonical' href='/about' />
        </Helmet>
            <h1>Random</h1>
            <p>Random project is an Altschool Africa exam project
            in which the student is expected to Set a firebase hosting and authentication using the Google Authentication method,
             and set up backend pagination using randomuser.me paginated API URLs.
              Show the necessary navigation and its disabled state. 
              Show accessibility state as well. Show SEO for each page,
               show a navigation menu at the top of each page,
             implement Error boundary and provide a page to test it,
              404 page, and proper UI designs.
            </p>
        </div>
    );
}

export default About;