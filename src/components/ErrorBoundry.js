import React, { Component } from 'react';

class ErrorBoundry extends Component{
    constructor(porps){
        super(porps)
        this.state = {
            hasError:false
        }
    }
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
    render(){
        if(this.state.hasError){
            return <h1>Ooooops. That is not good</h1>
        }
        return this.props.chidren
    }
}
export default ErrorBoundry;
