import React from "react";
import CustomButton from "./button.component";
import FormInput from "./form-input.component";
import "./SignIn.css";

function Signin() {
  const [user, setUser] = React.useState({ email: "", password: "" });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => {
      return { ...state, [name]: value };
    });
  };
  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span className="title">Sign in with your email and password</span>
      <form noValidate onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={user.email}
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={user.password}
          required
          onChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            {" "}
            Sign in{" "}
          </CustomButton>
          <CustomButton
            type="button"
            onClick={() => {
              alert("signInWithGoogle");
            }}
            isGoogleSignIn
          >
            {" "}
            Google Sign in
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default Signin;
