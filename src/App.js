import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import './App.css';

const App = () => {
  return (

      <div className="App">
            <AuthContextProvider>    
              <NavScrollExample />
            </AuthContextProvider>
           
      </div>
  )}

export default App;
