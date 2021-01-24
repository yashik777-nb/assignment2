import React from "react";

export default function ValidationComponent(props) {
  return (
    <div>
      <p>
        {props.inputLength < props.validationLength
          ? "Text too Short"
          : "Text too long"}
      </p>
    </div>
  );
}
