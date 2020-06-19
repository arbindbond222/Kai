import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Contact from './Input/Contact';


class App extends Component{
state = {
  persons :[
  {name: "arvind", age: 24},
  {name: "arav", age:23}
  
  ],
  otherState: "I will not be touched reaact is smart to see only the change and update on DOM",
  username: "love",
  value: false
}

switchNamehandler = (newName) =>{
//use special method react gives in component
this.setState({
  persons :[
    {name: "arav", age: 24},
    {name: newName, age:23}
    
    ]
})
}


nameChangeHandler = (event) =>{
  this.setState({
    persons :[
      {name: "arav", age: 24},
      {name: event.target.value, age:23}
      
      ]
  })
}

userNameChangeHandler=(event)=>{
  this.setState({
    username: event.target.value
  })
}

clickButtonHandler=()=>{
  const ji=this.state.value
  this.setState({
    value: !ji
  })
}



render(){

let form=null;
let p=null;
if( this.state.value ){
  form = (
   
   

    <div>
    <UserInput change={this.userNameChangeHandler}
    currentName={this.state.username}></UserInput>
    <UserOutput userName={this.state.username}></UserOutput>
    <UserOutput userName={this.state.username}></UserOutput>
  
    
    </div>
  

  );
}

p=(
  <div>
      {this.state.persons.map((person, index)=>{
        return <Person name={person.name} age={person.age}>{index}</Person>
      })}
    </div>
);

  return(
     <div className="App">
       <div>
       <h1>Hi</h1>
       <button onClick={this.switchNamehandler.bind(this, "gupta")}>Click me</button>
       {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
       click={this.switchNamehandler.bind(this, "arav")}></Person>
       <Person name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        changed={this.nameChangeHandler}></Person>
       <Person>I</Person> */}
       {p}

       
       </div>
      <div>
        <button onClick={this.clickButtonHandler}>Click to see</button>
        {form}
     </div>
     <div>

     </div>

     <Contact />

     </div>
      
  );


}


}
export default App;
