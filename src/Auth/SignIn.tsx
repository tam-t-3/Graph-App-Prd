import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Button, TextField } from "@material-ui/core";
import { navigation, aboutTxt, testUser } from "../Constants/Strings";
import { withRouter } from "react-router";
import styled from "styled-components";

const Style: React.CSSProperties = { 
  color: "white",
  background: "#262525",
};

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // AuthContextからlogin関数を受け取る
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password);
  };

  //テストユーザーでログインさせる
  const handleSubmitTestUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    login(testUser.email, testUser.password);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="c-section-container">

      <h1 className="u-text-center u-text__headline">{navigation.logIn}</h1>
      
      <div className="module-spacer--medium"/>

      <form onSubmit={handleSubmit}>
        <label>
          <TextField fullWidth={true} label={aboutTxt.mail} style={{fontSize: "16px"}}
            name="email"
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="メールアドレス"
          />
        </label>

        <div className="module-spacer--medium"/>

        <label>
          <TextFieldborder>
            <TextField fullWidth={true} label={aboutTxt.password}
                variant="outlined"
                name="password"
                type="password"
                value={password}
                placeholder="パスワード"
                onChange={handlePassword}
                inputProps={{
                  style: {
                    padding: 5
                  }
               }}
              />
          </TextFieldborder>
        </label>

      <div className="module-spacer--medium"/>

      <div className="center">
        <Button size="small" variant="outlined" type="submit" fullWidth={true}>{navigation.logIn}</Button>
      </div>
      
    </form>

    <form onSubmit={handleSubmitTestUser}>
      <div className="module-spacer--extra-small"/>
      <div className="center">
        <Button size="small" variant="contained" type="submit"  fullWidth={true} style={Style}>{navigation.testSignIn}</Button>
      </div>
    </form>
  </div>
  )
}

const TextFieldborder = styled.div`
  
`

export default withRouter(SignIn);