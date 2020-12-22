import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { GraphActions } from "../../Redux/Graph/action";
import { sp, tab, pc } from "../../media";
import { messages } from "../../Constants/Strings";

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
        <ResponsiveContainer aspect={2}>
          <LineChart
 
            height={300}
            data={model}
            margin={{ top: 32, right: 40, bottom: 0, left: 56 }}>
              <Line type="monotone" dataKey="Population" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="Year" />
              <YAxis dataKey="Population"/>
              <Tooltip />
          </LineChart>
        </ResponsiveContainer>

      {
        country && (
          <LayoutChartName>
            <h2>{country}</h2>
            <button onClick={deleteHandler}>{messages.Pagetop.delete}</button>
          </LayoutChartName>
        )
      }
    </StyleChart>
  )
}

const StyleChart = styled.div`
  margin: 32px auto;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .2);
  border-radius: 8px;
  ${sp`
    width: 450px;
    box-sizing: boder-box;
  `}
  ${tab`
    width: 600px;

  `}
  ${pc`
    width: 800px;
  `}
`;

const LayoutChartName = styled.div`
  marign-top: 8px;
  text-align: center;
  padding: 16px;
`;

export default Chart;