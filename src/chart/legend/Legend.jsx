import React from "react";

function Legend({ id, name, position, color }) {
  const iconWidth = 10;
  const gapBetweenIconAndText = 4;
  const iconYPosition = position.y - 4;
  const path = `M ${position.x} ${iconYPosition} L ${
    position.x + iconWidth
  } ${iconYPosition}`;
  return (
    <g id={`chart_legend_${id}`}>
      <path
        id={`chart_legend_shape_${id}`}
        opacity="1"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeDasharray=""
        d={path}
      ></path>
      <ellipse
        id={`chart_legend_shape_marker_${id}`}
        opacity="1"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeDasharray=""
        d={path}
        rx="2.5"
        ry="2.5"
        cx={position.x + iconWidth / 2}
        cy={iconYPosition}
      ></ellipse>
      <text
        id={`chart_legend_text_${id}`}
        x={position.x + iconWidth + gapBetweenIconAndText}
        y={position.y}
        fill={color}
        fontSize="13px"
        fontStyle="Normal"
        fontFamily="Segoe UI"
        fontWeight="Normal"
        textAnchor="start"
        transform=""
        opacity="1"
        dominantBaseline="undefined"
      >
        {name}
      </text>
    </g>
  );
}

export default Legend;
