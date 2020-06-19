import React from 'react';
import './Person.css'

const person=(props)=>{
return(
<div className="Person">
<p onClick={props.click}>JSX {props.name} {Math.ceil(Math.random() *30 )}</p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}></input>
</div>

) 
}
//All React components must act like pure functions with respect to their props.


export default person;