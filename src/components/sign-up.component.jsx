import React from "react";
import CustomButton from "./button.component";
import FormInput from "./form-input.component";
import "./sign-up.styles.scss";

const SignUpComponent = () => {
  const [user, setUser] = React.useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => {
      return { ...state, [name]: value };
    });
  };
  return (
    <div className="sign-up">
      <h1 className="title">I don't have an account</h1>
      <span className="title">Sign up with your Email and Password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={user.displayName}
          onChange={handleChange}
          label="Display name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit" value="submit Form">
          Sign Up
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUpComponent;
