import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import styled from "styled-components";
import { useDispatch } from "react-redux";

type Props = {
  country?: string,
  model?: any,
}

const Chart: React.FC<Props> = ({ country, model }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <StyleChart>
        <LineChart
          width={600}
          height={300}
          data={model}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="Population" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
        </LineChart>
      </StyleChart>
    </div>
  )
}

const StyleChart = styled.div`
  width: 700px;
  margin: 0 auto;
`;

export default Chart;