import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { googleSignIn, user} = UserAuth();
    const navigateUser = useNavigate();
    const handleGoogleSignIn = async () =>{
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error) //modify this to dispaly error on UI
        }
    }

        // control's user redirect when they actually signed in 
        useEffect(()=>{
            if(user != null){
                navigateUser("/account")
            }
        }, [user]);

    return(
        
        <div className="login">
        <Helmet>
            <title>randomuser login page</title>
            <meta name='description' content='ramdomuser login page  '/>
            <link rel='canonical' href='/login' />
        </Helmet>
            <div className='login-wrapper'>
                <GoogleButton onClick={  handleGoogleSignIn }/>
            </div>
        </div>
    );
};

export default Login;