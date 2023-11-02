import { useReducer } from "react";

import { login } from "../utils/auth";

const LoginForm = (props) => {
  const [formData, setFormData] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    { email: "", password: "", error: false }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    login(email, password).then((ok) => {
      if (ok) {
        props.onLogin();
      } else {
        setFormData({ error: true });
      }
    });
  };

  const { email, password, error } = formData;

  return (
    <form>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <p className="help is-danger">{error && "Invalid credentials"}</p>
        <div className="control">
          <button className="button is-link" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
