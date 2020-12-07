import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaIconTemplate = (props: any) => {
  const iconStyle: React.CSSProperties = { 
    padding: 0,
    fontSize: 16
  };

  return (
    <FontAwesomeIcon
      style={iconStyle}
      icon={props.iconName}
    />
  )
}

export default FaIconTemplate;