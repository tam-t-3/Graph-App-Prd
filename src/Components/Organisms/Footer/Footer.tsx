import React from "react";
import * as S from "./style";
import { messages } from "../../../Constants/Strings";
import FaIconTemplate from "../../Atoms/FontAwesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {  
  return (
    <S.Layout>
      <S.StyledCopy>
        &copy;{messages.copyRight}
      </S.StyledCopy>

      <a
        href="mailto:takashi.t.abc.20@gmail.com"
        target="_blank">
        <FaIconTemplate iconName={faEnvelope}/>
      </a>
    </S.Layout>
  )
}

export default Footer;
