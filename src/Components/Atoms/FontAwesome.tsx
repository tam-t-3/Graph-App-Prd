import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconTemplate = (props: any) => {
  const iconStyle: React.CSSProperties = { 
    padding: 0,
    fontSize: 16,
    color: "#262525",
  };

  //Icon情報を流し込むためのコンポーネント
  return (
    <FontAwesomeIcon
      style={iconStyle}
      icon={props.iconName}
    />
  )
}

export default IconTemplate;