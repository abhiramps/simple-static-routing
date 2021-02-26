import React from 'react';
import Profile from './profile';

 class ChildProfile extends React.Component{
    

    render(){
        return(

            <div>
                <Profile></Profile>
                <h1>my name is {this.props.match.params.name}</h1>
            </div>
        )
    }
 }
 export default ChildProfile