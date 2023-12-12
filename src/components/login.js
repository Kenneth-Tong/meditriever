import { GoogleLogin } from 'react-google-login'

const clientID = "26529385532-afh4c5tp9ijjh4eg1utsaa8p16c9bgvl.apps.googleusercontent.com";

function Login (){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
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
