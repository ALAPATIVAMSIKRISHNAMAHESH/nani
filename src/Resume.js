import React from 'react';
import data from './data.json';
import icon from './businessman.svg';


let Resume=(props)=>
{
    let info=Object.values(props.location.index.value);
    let person=data.profiles[info]

    return(
        <div className="parent">
            <div className="child">
            <img src={icon} alt="Image"/>

        <h3>{person.basics.name}</h3>
        <hr></hr>
        <a href={"mailto:"+person.basics.email} className='link'>{person.basics.email}</a>  <br></br>
        <a href={"tel:"+person.basics.mobile}className='link'>{person.basics.mobile}</a> <br></br>
        <hr></hr>

            </div>
            <div className="child2">
            <h3> Educational Qualification</h3>
            <hr></hr>
            {
                person.education.map((i,j)=>(
                    <div key={j}>
                    <h4>{i.degree}</h4>
                    <ul>
                        <li>{i.percentage}</li>
                        <li>{i.institute}</li>
                    </ul>
                    </div>
                ))}
                <h3>Skills</h3><hr></hr>
                {
                    person.skills.map((x,y)=>(
                        <div>
                            <h4>
                                {
                                    x.type
                                }
                            </h4>
                            {x.values.map((k,l)=>(
                                <div key={l} style={
                                    {display:"inline"}
                                }>
                                    <span className="skill">
                                        {k}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
    </div>
    )
}
export default Resume;