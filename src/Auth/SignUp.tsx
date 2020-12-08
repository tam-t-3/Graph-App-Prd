import React, { useContext, useState } from "react";
import  { Button, TextField } from "@material-ui/core";
import { withRouter } from "react-router";
import { AuthContext } from "./AuthProvider";

const SignUp: React.FC = () => {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] =  useState("");

  //AuthContextからlogin関数を受け取る
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signup(email, password);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
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
          onChange={handlePassword}
          placeholder="パスワードを設定してください"
          />
        </label>
        <Button size="small" variant="outlined" type="submit">ユーザー登録する</Button>
    </form>
  </div>
  )
}

export default withRouter(SignUp);