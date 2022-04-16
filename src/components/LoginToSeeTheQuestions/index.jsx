import { useAuth0 } from "@auth0/auth0-react";
import "./style.scss"

const LoginToSeeTheQuestions = () => {

    const { loginWithRedirect } = useAuth0();


  return (
    <div className="login-first">
      <h2>You should to Login to see the questions</h2>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
}

export default LoginToSeeTheQuestions