import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state ={
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        
        return {
            hasError: true
        }
    }

    render() {
       if (this.state.hasError) {
        return(
            <div>
                <h1>Something  went wrong </h1>
                <Link to={"/"}>Go Back</Link>
            </div>
        )}
       return this.props.children
    }
}

export default ErrorBoundary;