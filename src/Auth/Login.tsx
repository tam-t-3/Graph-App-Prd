import React from "react";
import  { Button, TextField } from "@material-ui/core";
import { withRouter } from "react-router";

const Login = () => {
  return (
    <div>
      <TextField fullWidth={true} id="standard-basic" label="Email"
        name="email"
        type="email"
        placeholder="メールアドレスを入力してください"
      />
      <TextField fullWidth={true} id="standard-basic" label="Password"
      name="password"
      type="password"
      placeholder="パスワードを入力してください"
    />
    <Button size="small" variant="outlined" type="submit">Log in</Button>
  </div>
  )
}

export default withRouter(Login);