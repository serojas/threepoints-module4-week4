import { Route, Switch, useHistory } from 'react-router';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import NavBar from './components/NavBar/NavBar';
import AlertDanger from './components/AlertDanger/AlertDanger'
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import './App.css';

function App() {

  const [error, setError] = useState('');
  const [profile, setProfile] = useState({});
  const history = useHistory();



  /*useEffect(()=>{
    setProfile(profile)
  },[profile]);*/

  function updateProfile(profileData){
    setProfile(profileData);
  }
  
  return (
    <div className="container">
      <NavBar/>
      {error === undefined || error === null || error.trim() === '' ? '':<AlertDanger setError={setError} error={error}/>}
      <Switch> 
        <Route exact path="/login" component={() => <Login setError={setError} 
                                                     profile ={profile} 
                                                     updateProfile={updateProfile}
                                                     history={history}/>}></Route> 
        <Route exact path="/" component={()=> <Home history={history}/>}></Route>         
        <Route exact path="/profile" component={() => <Profile name={profile.name} 
                                                         username={profile.username} 
                                                         avatar={profile.avatar} 
                                                         description={profile.bio} 
                                                         history={history}/>}></Route> 

      </Switch> 
    </div>
  );
}

export default App;
