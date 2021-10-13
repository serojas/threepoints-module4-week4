import { Link } from 'react-router-dom';
import './Profile.css' 

function Profile ({name, username, avatar, description, history})  {

    const descriptionStyle ={
        position: "fixed",
        top: "35%", 
        left: "50%", 
        transform: "translate(-50%, -50%)"
    }


    function onLogout(){
        /*logout(username, 'P4ssW0rd!#').then(response =>{
            window.localStorage.removeItem('userId');
            history.replace('/login');
        }).catch(err =>{
            console.log('Error at logout')
        });*/

        window.localStorage.removeItem('userId');
        window.location.replace('/login')

    }

    return (
        <div className="container">
        <div className="row">
            <div className="profile-header-container">   
                <div className="profile-header-img">
                    <img className="img-circle" src={avatar} alt='Profile'/>
                    
                </div>
                <div className="name-style"><h4>{name}</h4></div>
                <div className="username-style"><h5>{`@${username}`}</h5></div>

                <div className="rank-label-container" style={descriptionStyle}>
                    <span className="label label-default rank-label">{description}</span>
                    <div><Link className="label label-default rank-label" onClick={onLogout}>Logout</Link></div>

                </div>
            </div> 
        </div>
    </div>
    )
}

export default Profile

