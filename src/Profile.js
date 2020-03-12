import React from 'react';
import data from './data.json';
import icon from './businessman.svg';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';




let Profile=()=>
{
    const profiles=data.profiles;

    return(
        <div className="parent"> 
        
            <BrowserRouter>
            <Route exact path="/resume" component={Resume}/>
            </BrowserRouter>
        {
        profiles.map((i,j)=>(
        <div className="child">
            <img src={icon} alt="Image"/>
            <h3>  {i.basics.name}</h3><hr></hr>
          <a href={"mailto:"+i.basics.email} className='link'>{i.basics.email}</a> <br></br>
          <a href={"tel:"+i.basics.mobile}className='link'>{i.basics.mobile}</a>  <br></br> <hr></hr>
          <Link to={{pathname:"/resume",index:{value:{j}}}} className="btn"> View Profile</Link>
            </div>
        ))}
        </div>
    )
}
export default Profile;