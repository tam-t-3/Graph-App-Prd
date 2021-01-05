import React from "react";
import styled from "styled-components";
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
  padding: 64px 0 80px 0;
`;

const LayoutChart = styled.div`
  margin: 0 auto;
  display: inline;
`;

export default Top;