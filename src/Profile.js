import React from 'react';
import data from './data.json';
import icon from './emoji.svg';
import Resume from './Resume1';
import {BrowserRouter,Route,Link} from 'react-router-dom';

let Profile=()=>{
    const profiles=data.profiles;
    console.log(profiles);
    return(
        <div className="parent">
            <BrowserRouter>
            <Route exact path="/resume" component={Resume} />
            </BrowserRouter>

            {profiles.map((i,j)=>(
                <div className="child" key={j}>
                    <img src={icon} alt="profile Image"/>
                    <h3> {i.basics.name}</h3><hr></hr>
                    <a href={"mailto:"+i.basics.email} className="link"> {i.basics.email} </a><br></br>

                    <a href={"tel:"+i.basics.mobile} className="link"> {i.basics.mobile}</a><hr></hr>
                    <Link to={{pathname:"/resume",index:{value:{j}}}} className="btn">View Profile</Link>
                    { 
                    console.log(profiles)
                    }

                </div>
            ))}

        </div>
    )
}

export default Profile;
