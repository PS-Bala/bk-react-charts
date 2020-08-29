import React from "react";

function HorizontalAxisLabel({ horizontalLinesPoints, labels, labelPosition }) {
  const centerAlignAdjustment = 3;

  return (
    <g id="containerAxisLabels0">
      {horizontalLinesPoints.map((point, index) => (
        <text
          key={index}
          id={`container0_AxisLabel_${index}`}
          x={point - centerAlignAdjustment}
          y={labelPosition}
          fill="#686868"
          fontSize="12px"
          fontStyle="Normal"
          fontFamily="Segoe UI"
          fontWeight="Normal"
          textAnchor=""
          labelrotation="undefined"
          transform=""
          opacity="undefined"
          dominantBaseline="undefined"
        >
          {labels[index]}
        </text>
      ))}
    </g>
  );
}

export default HorizontalAxisLabel;
