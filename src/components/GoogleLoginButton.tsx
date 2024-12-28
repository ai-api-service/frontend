import '../app/styles/GoogleLoginButton.css'

const GoogleLoginButton = () => {
    return (
      <div className="google-login-container">
        <button className="google-login-button">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
            alt="Google Logo" 
            className="google-logo" 
          />
          <span className="google-text">Sign in with Google</span>
        </button>
      </div>
    );
  };
  
  export default GoogleLoginButton;