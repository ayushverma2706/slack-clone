import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import db, { auth } from './Firebase'
import { useState,useEffect } from 'react'

import Chat from './components/Chat'
import Login from './components/Login'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {

  const [ rooms, setRooms] = useState([]);
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
        setRooms(snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name }
        }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);  
    })
  }

  //preventing refresh
  //call only when app is reloaded
  //call useffect whenever app is initailized

  useEffect(() => {
    getChannels();
  }, []);


  return (
      <div>
        <Router>
        {
          !user ? 
          <Login setUser={setUser} />
          :
          <Wrapper>
            <Header signOut={signOut} user={user} />
            <Main>
             <Sidebar rooms = {rooms} />
              <Switch>
              <Route path='/room/:channelId'>
               <Chat user= {user} />
              </Route>
              <Route path='/'>
                Select or Create Channel
              </Route>
              </Switch>
             </Main>
          </Wrapper>
        }
          
       </Router>
       </div>
        
    
  );
}

export default App;

const Wrapper = styled.div `
  display: grid;
  grid-template-rows: 30px minmax(0, 1fr);
  height: 100vh;
`

const Main = styled.div `
  display: grid;
  grid-template-columns: 260px auto;
`