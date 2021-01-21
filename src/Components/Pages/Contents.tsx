import React, { useEffect } from 'react'
import Footer from "../Organisms/Footer/Footer";
import { GraphActions } from "../../Redux/Graph/action";
import Header from "../Organisms/Header";
import Top from "../Organisms/Top";
import { useDispatch } from "react-redux";


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