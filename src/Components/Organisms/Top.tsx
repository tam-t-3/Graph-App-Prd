import React from "react";
import styled from "styled-components";
import { messages } from "../../Constants/Strings";
import DisplayRecharts from "../Molecules/DisplayRecharts";

const Top: React.FC = () => {
  return (
    <LayoutTop>
      <div>
        <LayoutExplanation>
          {messages.Pagetop.explanation}
        </LayoutExplanation>

        <LayoutChart>
          <DisplayRecharts />
        </LayoutChart>
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
`;

const LayoutChart = styled.div`
margin: 0 auto;
display: inline;
`;

export default Top;