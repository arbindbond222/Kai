//create function you can also choose to create class
//and extend component but it is recent practice
//to create function and render jsx
import React from 'react';
const userInput =(props)=>{
return <input type="text" onChange={props.change} value={props.currentName}></input>
}

export default userInput;