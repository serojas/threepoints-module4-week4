import React, { useEffect, useState } from 'react'
import { getUser, login } from '../../services/api';
import DelayedSpinner from '../DelaySpinner/DelaySpinner';
import './Login.css'


function Login({ setError, profile, updateProfile, history}){
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    let mounted = true;



    const inputStyle ={
        width:'100%',
        border: '0 !important',
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        render();             
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
      
    function render(){
        let userId = window.localStorage.getItem('userId'); 

        if(mounted){
            if(userId === "undefined" || userId === null || userId.trim() === ''){
                history.push("/login");
            } else{
                blockLoginFields()
            
                setTimeout(() => {
                    getUser(userId).then(result => {
            
                        if (result.status === 200){ 
                            updateProfile(result.data); 
                            window.localStorage.setItem('userId', profile.id);
                           //setEnableNavBarButtons(true);
                            history.push("/");
                        }
                        mounted = false;

                    }).catch(err => {
                      console.log('error>>', err);
                      setError('Error at getting user information');
                      mounted = false;

                    })
                });

            }
        }
          
    }

    function onSubmitLogin (event) {
        event.preventDefault()
        setLoading(true);
        blockLoginFields()
        let request = {
            username: document.getElementById("input_username").value,
            password: document.getElementById("input_password").value
        }
      

        login(request.username, request.password).then(response =>{
            if (response.status === 200){                
                updateProfile(response.data); 
                window.localStorage.setItem('userId', profile.id)
                history.push('/')
            }
            setLoading(false);

        }).catch(err =>{
            setError('Invalid username or password' );            
            resetLoginFields()
            setLoading(false);
    
        })  
        
    }

    function resetLoginFields (){
        setUsername('');
        setPassword('');
    }

    function blockLoginFields () {
        document.getElementById("input_username").disabled = true
        document.getElementById("input_password").disabled = true
        document.getElementById("button_login").disabled = true
      }
     

    return (

        <div className="container">

            <div className="login-container">
                <form>
                    <div className="form-floating pb-3">
                        <input type="text" className="form-control" id="input_username" name="username" style={inputStyle}></input>
                        <label htmlFor="input_username" 
                               className="form-label"
                               value={username}
                               onChange={(event)=>{setUsername(event.target.value)}}>Username:</label>
                    </div>
                    <div className="form-floating pb-3">
                        <input type="password" className="form-control" id="input_password" name="password" style={inputStyle}></input>
                        <label htmlFor="input_password" 
                               className="form-label" 
                               value={password}
                               onChange={(event)=>{setPassword(event.target.value)}}>Password:</label>
                    </div>

                    <button id="button_login" 
                            type="button" 
                            className="btn btn-dark button-login" 
                            style={inputStyle} onClick={(event)=>onSubmitLogin(event)}>
                        Login
                    </button>
                </form>
            </div>
            {loading ? <DelayedSpinner loading={loading} delay={1500}/>:''}

        </div>
        
    )
    
}

export default Login;