import React, { useEffect, useState } from "react";
import { app } from "../Firebase/base";
import { db } from "../Firebase/base";
import { history } from "../App";

type Context = {
  login: Login;
  signup: Signup;
  currentUser: any | null;
};
type Login = (email: string, password: string) => Promise<void>;
type Signup = (email: string, password: string) => Promise<void>;

// contextの作成
export const AuthContext = React.createContext<Context>({
  login: async (email: string, password: string) => {},
  signup: async (email: string, password: string) => {},
  currentUser: null,
});

export type Props = {
  children: React.ReactElement;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  // ユーザーをログインさせる関数
  const login = async (email: string, password: string) => {
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      console.log(history);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  // 新しいユーザーを作成しログインさせる関数
  const signup = async (email: string, password: string) => {
    try {
      await app.auth().createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user
        if (user) {
          const uid = user.uid
          const userInitialDatas = {
            email: email,
            uid: uid,
            countries: []
          }

          db.collection('users').doc(uid).set(userInitialDatas)
            .then(() => {
              history.push('/')
            })
        }
      })
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        login: login,
        signup: signup,
        currentUser,
      }}
      >
        {children}
    </AuthContext.Provider>
  );
};
