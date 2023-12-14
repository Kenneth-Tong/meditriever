import { useState, useEffect } from 'react';

const clientID = "26529385532-afh4c5tp9ijjh4eg1utsaa8p16c9bgvl.apps.googleusercontent.com";

const useGoogleOAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Initialize the Google API and set up authentication
  //In this section, we load the Google API script asynchronously and 
  //initialize the Google API client with your client ID. 
  //We also check if the user is already authenticated when the component mounts.
  useEffect(() => {
    // Load the Google API script asynchronously (e.g., in a script tag)
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.onload = () => {
      // Initialize the Google API client with your client ID
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: clientID,
        });

    // Check if the user is already authenticated
    const auth2 = window.gapi.auth2.getAuthInstance();
    const initialIsAuthenticated = auth2.isSignedIn.get();
    setIsAuthenticated(initialIsAuthenticated);

    // If authenticated, set the user object
    if (initialIsAuthenticated) {
         const initialUser = auth2.currentUser.get();
        setUser({
        id: initialUser.getId(),
        name: initialUser.getBasicProfile().getName(),
        // Add other user properties as needed
        });
    }
    });
};
    document.head.appendChild(script);
  }, []);

//When the login function is called, it opens the Google login popup, 
//handles authentication, and updates the authenticated state and user object if the login is successful.
  const login = async () => {
    try {
      // Open Google login popup and handle authentication
      const auth2 = window.gapi.auth2.getAuthInstance();
      await auth2.signIn();

      // Update the authenticated state and user object
      setIsAuthenticated(true);
      const currentUser = auth2.currentUser.get();
      setUser({
        id: currentUser.getId(),
        name: currentUser.getBasicProfile().getName(),
        // Add other user properties as needed
      });
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  //The logout function logs the user out, updates the authenticated state to false, 
  //and clears the user object.
  const logout = async () => {
    try {
      // Log the user out
      const auth2 = window.gapi.auth2.getAuthInstance();
      await auth2.signOut();

      // Update the authenticated state and clear the user object
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error('Google logout error:', error);
    }
  };


  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
};

export default useGoogleOAuth;
