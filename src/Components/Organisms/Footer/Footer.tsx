import React from "react";
import * as S from "./style";
import { messages } from "../../../Constants/Strings";
import FaIconTemplate from "../../Atoms/FaIcons/FaIconTemplate";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <S.Layout>
      <S.StyledCopy>
        &copy;{messages.copyRight}
      </S.StyledCopy>

      <S.StyledIcon
        href="https://twitter.com/@takashi_t_20"
        target="_blank"
      >
        <FaIconTemplate iconName={faTwitter}/>
      </S.StyledIcon>
    </S.Layout>
  )
}

export default Footer;
