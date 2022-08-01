//import logo from './logo.svg';
import './App.css';
import {createContext, useState} from 'react'
import Component5 from './Component5';

export const UserContext = createContext();

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function App() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <h3>Change user name:</h3>
      <input value={user} onChange={
        ({target}) => { setUser(target.value) }
      }
      />
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

export default App;
