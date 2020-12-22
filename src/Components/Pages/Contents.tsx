import React, { useEffect } from 'react'
import Header from "../Organisms/Header";
import Footer from "../Organisms/Footer/Footer";
import Top from "../Organisms/Top";
import { useDispatch } from "react-redux";
import { GraphActions } from "../../Redux/Graph/action";

const Contents: React.FC = () => {
  const dispatch = useDispatch();

  //初回ロード
  useEffect(() => {
    dispatch(GraphActions.Load());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Top />
      <Footer />
    </div>
  )
}

export default Contents