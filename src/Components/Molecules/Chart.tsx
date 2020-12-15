import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { GraphActions } from "../../Redux/Graph/action";

type Props = {
  country?: string,
  model?: any,
}

const Chart: React.FC<Props> = ({ country, model }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    if (country) dispatch(GraphActions.DelCountry(country))
  }

  return (
    <StyleChart>
      <LineChart
        width={600}
        height={300}
        data={model}
        margin={{ top: 32, right: 20, bottom: 16, left: 90 }}>
          <Line type="monotone" dataKey="Population" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="Year" />
          <YAxis dataKey="Population"/>
          <Tooltip />
      </LineChart>

      {
        country && (
          <LayoutChartName>
            <h2>{country}</h2>
            <button onClick={deleteHandler}>DELETE</button>
          </LayoutChartName>
        )
      }
    </StyleChart>
  )
}

const StyleChart = styled.div`
  width: 700px;
  margin: 32px auto;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .2);
  border-radius: 8px;
`;

const LayoutChartName = styled.div`
  marign-top: 16px;
  text-align: center;
  padding: 32px;
`;

export default Chart;