import React, { useReducer, SyntheticEvent } from "react";

import { login } from "../utils";

interface LoginFormProps {
  onLogin: () => void;
}

interface FormData {
  email: string;
  password: string;
  error: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [formData, setFormData] = useReducer(
    (prev: FormData, next: Partial<FormData>) => {
      return { ...prev, ...next };
    },
    { email: "", password: "", error: false }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    login(email, password).then((ok) => {
      if (ok) {
        onLogin();
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
