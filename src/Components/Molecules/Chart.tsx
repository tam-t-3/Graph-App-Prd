import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import styled from "styled-components";

type Props = {
  country?: string,
  model?: any,
}

const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page C', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page D', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page E', uv: 400, pv: 2400, amt: 2400},
];


const Chart: React.FC<Props> = ({ country, model }) => {
  return (
    <div>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
      </LineChart>
    </div>
  )
}

const StyleChart = styled.div`
  width: 700px;
  margin: 0 auto;
`;

export default Chart;