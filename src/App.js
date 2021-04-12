import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import db from './Firebase'
import { useState,useEffect } from 'react'

import Chat from './components/Chat'
import Login from './components/Login'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  const [ rooms, setRooms] = useState([]);

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      snapshot.docs.map((docs) => {
        setRooms(snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name }
        }))
      })
    })
  }

  //preventing refresh
  //call only when app is reloaded
  //call useffect whenever app is initailized

  useEffect(() => {
    getChannels();
  }, []);


  return (
      <Wrapper>
        <Router>
        <Header />
        <Main>
          <Sidebar rooms = {rooms} />
        <Switch>
         <Route path='/room'>
           <Chat />
         </Route>
         <Route path='/'>
           <Login />
         </Route>
       </Switch>
        </Main>
       </Router>
      </Wrapper>
    
  );
}

export default App;

const Wrapper = styled.div `
  display: grid;
  grid-template-rows: 30px auto;
  height: 100vh;
`

const Main = styled.div `
  display: grid;
  grid-template-columns: 260px auto;
`