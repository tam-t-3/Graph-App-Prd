import React from "react";
import styled from "styled-components";
import { messages } from "../../Constants/Strings";
import Chart from "../Molecules/Chart";
import DisplayRecharts from "../Molecules/DisplayRecharts";
import { GraphState } from "../../Redux/Graph/types";
import {useSelector } from "react-redux";

const Top: React.FC = () => {
  const data: GraphState = useSelector((state: any) => state.country);
  const countries = Object.keys(data.countries).map(function (key) {return data.countries[key]})

  return (
    <LayoutTop>
      <div>
        <LayoutExplanation>
          {messages.Pagetop.explanation}
        </LayoutExplanation>

        <LayoutChart>
          <DisplayRecharts />
        </LayoutChart>

        <div>
          {
            countries.map((data, index) => {
              return <Chart model={data} key={index} country={data[0].Country} />
            })
          }
        </div>
      </div>
    </LayoutTop>
  )
};

const LayoutTop = styled.div`
width: 100%;
padding-bottom: 80px;
`;

const LayoutExplanation = styled.p`
margin: 0;
text-align: center;
padding-top: 32px;
`;

const LayoutChart = styled.div`
margin: 0 auto;
display: inline;
`;

export default Top;