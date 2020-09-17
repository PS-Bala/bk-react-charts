import React from "react";

function VerticalAxisLabel({
  verticalLinesPoints,
  labels,
  labelPosition,
  labelFormat,
}) {
  if (labelFormat === null) {
    return null;
  }
  const centerAlignAdjustment = 3;
  const [prefix, suffix] = labelFormat.split("{value}");
  return (
    <g id="verticalAxisLabels">
      {verticalLinesPoints.map((point, index) => (
        <text
          key={index}
          id={`container1_AxisLabel_${index}`}
          x={labelPosition}
          y={point + centerAlignAdjustment}
          fill="#686868"
          fontSize="12px"
          fontStyle="Normal"
          fontFamily="Segoe UI"
          fontWeight="Normal"
          textAnchor="end"
          labelrotation="undefined"
          transform=""
          opacity="1"
          dominantBaseline="undefined"
        >
          {`${prefix}${labels[index]}${suffix}`}
        </text>
      ))}
    </g>
  );
}

export default VerticalAxisLabel;
