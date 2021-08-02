import React from "react";
import "../../App.css";
import SignUpComponent from "../sign-up.component";
import SignIn from "../Signin";
import "./SignUp.scss";

function SignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUpComponent />
    </div>
  );
}

export default SignUp;
