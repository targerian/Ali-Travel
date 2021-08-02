import React from "react";
// import { auth, signInWithGoogle } from "../../firebase/firebase.util.js";
import CustomButton from "./button.component";
import FormInput from "./form-input.component";
import "./SignIn.css";

const SignIn = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    console.log(user);
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (err) {
    //   alert("Error in signing in, name and password doesn't match");
    //   console.log(err);
    // }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ [name]: value });
  };
  //   handleSignWithGoogle = async () => {
  //     try {
  //       await signInWithGoogle();
  //     } catch (ex) {
  //       console.log(ex);
  //     }
  //   };
  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span className="title">Sign in with your email and password</span>
      <form noValidate onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="name"
          value={user.email}
          required
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={user.password}
          required
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            {" "}
            Sign in{" "}
          </CustomButton>
          <CustomButton
            type="button"
            onClick={alert("signInWithGoogle")}
            isGoogleSignIn
          >
            {" "}
            Google Sign in
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
