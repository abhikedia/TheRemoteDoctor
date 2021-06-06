import React from "react";

export default function displayImage(props) {
  return (
    <div>
      <img id="imgElem" src={props.image}></img>
    </div>
  );
}
