import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Deepjol', 'Ada Sharma', 'Prajekta', 'BB ki Vines'];

  const AllFoods = [
    {name: 'Orange', age: '15', id: '1'},
    {name: 'Mango', age: '18', id: '2'},
    {name: 'Apple', age: '12', id: '3'},
    {name: 'Pineapple', age: '13', id: '4'},
    {name: 'Bananas', age: '16', id: '5'}
  ];

// const allstudents = [
//   {name: 'Kuddus', id: '23'},
//   {name: 'Samad', id: '21'},
//   {name: 'Jamal', id: '23'},
//   {name: 'Kamal', id: '25'},
//   {name: 'Solim', id: '18'}
// ];
const [allstudents, setAllstudents] = useState([])

useEffect(()=>{
  fetch('https://randomuser.me/api/?results=20')
  .then(response => response.json())
  .then(data => setAllstudents(data.results))
}, [])

  return (
    <div className="App">
      <div className="movieCount">
      <MovieCount></MovieCount>
      </div>

      <div className="foodDiv">
        {
          AllFoods.map(singleFood => <Foods foodName={singleFood.name} foodAge={singleFood.age} key={singleFood.id}></Foods>)
        }
      </div>

      <div className="studentsIdentity" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {
          allstudents.map(student => <Students studnetName={student.name.title + " " + student.name.first + " " + student.name.last} studentId={student.id.value || 'Have No ID'} key={student.location.street.number}></Students>)
        }
      </div>

      <header className="App-header">
        <Friends name={nayoks[0]} nayika="bobita"></Friends>
        <Friends name={nayoks[1]} nayika="sabana"></Friends>
        <Friends name={nayoks[2]} nayika="moyuri"></Friends>
        <Friends name={nayoks[3]} nayika="sabnur"></Friends>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Friends(props) {
  const friendsStyle ={
    color: 'lightgrey',
    border: '2px solid red',
    borderRadius: '10px',
    margin: '15px',
    padding: '15px 20px',
    width: '400px'
  }
  return(
    <div style={friendsStyle}>
      <h3>Ami Nayok- {props.name}</h3>
      <h6>He's Nayika is-{props.nayika}</h6>
    </div>
  )
}

// Use State
function MovieCount(){
 const [count, setCount] = useState(0)
 const counterMovie =() =>{
   setCount(count+1);
 }
  return(
    <div>
      <h3>Movie Counter: {count}</h3>
      <DisplayMovie movie ={count + 5}></DisplayMovie>
      <DisplayMovie movie ={count + 10}></DisplayMovie>
      <DisplayMovie movie ={count + 15}></DisplayMovie>
      <button onClick={counterMovie}>counter increase</button>
    </div>
  )
}
function DisplayMovie(props){
  return(
    <h4>Movie Counter: {props.movie}</h4>
  )
}

//food card
function Foods(props) {
  const foodStyle ={
    color: 'green',
    backgroundColor: 'yellow',
    border: '2px solid green',
    borderRadius: '6px',
    margin: '20px'
  }
  return (
    <div style={foodStyle}>
      <h1>I Eat: {props.foodName}</h1>
      <h3>In ({props.foodAge}) Years</h3>
    </div>
  )
}


// Student Indentity
function Students(props){
  const studentStyle ={
    color: 'goldenrod',
    backgroundColor: 'lightgrey',
    border: '2px solid red',
    borderRadius: '6px',
    width: '350px',
    padding: '25px 35px',
    margin: '30px'
  }
  return(
    <div style={studentStyle}>
      <h2>Student Name: {props.studnetName}</h2>
      <h4>Student Id: {props.studentId}</h4>
    </div>
  )
}

export default App;
