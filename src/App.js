import './App.css';
import ReduxDemo from './ReduxDemo'

import {useState,useEffect} from 'react';
import Cat from './Mouse';
import OuterClickExample from './ClickDemo/OuterClickExample';
import PatternDemo from './Pattern/Pattern';
import LearnDemo from './Learn/Learn';

const Person = () => {
  const [name,setName] = useState('xiao ming');

  useEffect(() => {
    console.log("module hung up");
    return () => {
      console.log('module uninstall');
    };
  }, []);

  useEffect(() => {
    console.log('update module');
  }, [name]);

  return (
    <div>
      <p>欢迎 {name}</p>
      <input type="text" placeholder="input a username" onChange={(event) => setName( event.target.value)}></input>
    </div>
  )
}

function Human() {
    this.name = 'constructor';
    this.age = 10;

    this.sayHi = function() {
        console.log('this is sayHi');
        console.log('name:'+this.name);
        console.log('age:'+this.age);
        console.log('function father:'+this.parent);
    }
}

Human.prototype.parent = 'father';
Human.prototype.job = function() {
    console.log('prototype:'+this.name);
    console.log('father:'+this.parent);
}

function Man() {

}

function inherite(child,parent){
    function F(){}
    F.prototype = new parent()

    child.prototype = new F()
    child.prototype.constructor = child
}

// Man.prototype = new Human();
// Man.prototype.constructor = Man;

inherite(Man,Human);

function test1() {
    const person = new Man();
    person.name = 'man';
    person.job();
    person.sayHi(); 
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class ColorPoint extends Point {
    constructor(x,y,color) {
        super(x,y);
        this.color = color;
    }
}

function test2() {
    let sub = new ColorPoint(1,2,'red');
    console.log('name:'+sub.color);
}

function App() {
    
    test2(); 
  return (
    <div className="App">
        <header className="App-header">
        <Person></Person>
        {/* <ReduxDemo></ReduxDemo> */}
        {/* <Cat></Cat> */}
        {/* <OuterClickExample></OuterClickExample> */}
        </header>
        <div className="App-body">
          <PatternDemo></PatternDemo>
          <LearnDemo></LearnDemo>
        </div>
    </div>
  );
}

export default App;
