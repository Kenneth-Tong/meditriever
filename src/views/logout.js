import { GoogleLogout } from "react-google-login";

const clientID = "26529385532-afh4c5tp9ijjh4eg1utsaa8p16c9bgvl.apps.googleusercontent.com";

function Logout(){
    const onSuccess = () => {
        console.log("Logout Success.");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientID}
                buttonText= {"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;