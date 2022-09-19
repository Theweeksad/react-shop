import React, { useRef } from "react";
import "../styles/login.sass";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = () => {
    event.proventDefault();
    const formData = new FormData(form.current);
    const data = {
      usename: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new passwrd for yue account</p>
        <form action="/" className="form" ref={form}>
          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <label for="new-password" className="label">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            value="Confirm"
            className="primary-button login-button"
          />
          <button
            onClick={handleSubmit}
            className="primary-button login-button"
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button
					className="secondary-button signup-button"
				>
					Sign up
				</button>
      </div>
    </div>
  );
};

export { Login };
