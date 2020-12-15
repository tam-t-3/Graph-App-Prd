import React, { useContext, useState } from "react";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";
import { Button, TextField } from "@material-ui/core";

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // AuthContextからlogin関数を受け取る
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="c-section-container">
      <h1 className="u-text-center u-text__headline">Log in</h1>
      
      <div className="module-spacer--medium"/>
      <form onSubmit={handleSubmit}>
        <label>
          <TextField fullWidth={true} id="standard-basic" label="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="メールアドレスを入力してください"
          />
        </label>
        <label>
          <TextField fullWidth={true} id="standard-basic" label="Password"
            name="password"
            type="password"
            value={password}
            placeholder="パスワードを入力してください"
            onChange={handlePassword}
          />
        </label>
      <div className="module-spacer--medium"/>

      <div className="center">
        <Button size="small" variant="outlined" type="submit">Log in</Button>
      </div>
    </form>
  </div>
  )
}

export default withRouter(SignIn);