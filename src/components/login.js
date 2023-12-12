import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const clientID = "26529385532-afh4c5tp9ijjh4eg1utsaa8p16c9bgvl.apps.googleusercontent.com";

function Login (){

    const onSuccess = (res) => {
        const userData = {
            googleId: res.profileObj.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            // Add any other relevant user data here
          };
        
          // Send the user data to your server
          axios.post('/api/updateUserData', userData)
            .then((response) => {
              console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
            })
            .catch((error) => {
              console.error('Error updating user data:', error);
            });
    }


    const onFailure = (res) => {
        console.log("Login Failed :( res: ", res);
    }
    
    return(
        <div id = "signInButton">
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
        />
    </div>
    )
    
}

export default Login;
