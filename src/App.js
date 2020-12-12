
import React from "react";
import PersonInfo from './myPerson';
import { ListItem } from './ListItem';
import './App.css';
// import ItemList from './ListItem';
import {PetInfo} from './myPet';


function App() {
  let person = {
    fio: "Филатова Наталья",
    tel: "0673737337",
    email: "email.@gmail.com",
    photo: '/image/avatar.jpg',
    city: "Кривой Рог",
    exp: "2",
    skills: ["Web-application.",
      "Javascript application.",
      "C# application.",
      "WinForms application.",
      "Microsoft Azure application.",
      "Object oriented programming using C++.",
      "Microsoft.Net application.",
      "MS SQL Server.",
      "Scripting language javascript and framework jQuery."
    ]
  }
  let pet = {
    photo: '/image/pet.jpg',
    name: "Шайбочка",
    breed: "Экзот",
    age: "5",
    color: "Черепаховый"
  }
  return (
    <div className="App">
      <PersonInfo fio={person.fio}
        tel={person.tel}
        email={person.email}
        photo={person.photo}
        city={person.city}
        exp={person.exp}>
      </PersonInfo>
      <ListItem skills={person.skills}></ListItem>
      <br></br>
     <hr></hr> 
     <br></br>    
      <PetInfo photo={pet.photo}
        name={pet.name}
        color={pet.color}
        breed={pet.breed}
        age={pet.age}>
      </PetInfo>
    </div>
  );
}

export default App;
