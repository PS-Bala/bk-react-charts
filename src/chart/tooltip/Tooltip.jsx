import React from "react";

function Tooltip({ data, position }) {
  const pixelForSingleLength = 8;
  const dataLength = data.x.length + data.y.length;
  const nameLength = data.name.length;
  const tooltipWidth =
    dataLength + 5 > nameLength
      ? (dataLength + 5) * pixelForSingleLength
      : nameLength * pixelForSingleLength;
  const leftPaddingForName = tooltipWidth / 2 - nameLength * 3.5;
  const tooltipPath = `M 0.25 2.25 L ${tooltipWidth} 0.25 L ${tooltipWidth} 59 L ${
    tooltipWidth / 2 + 6
  } 59 L ${tooltipWidth / 2} 70 L ${tooltipWidth / 2 - 6} 59 L 0.25 59 z`;
  return (
    <g
      id="charts_tooltip_group"
      opacity="1"
      transform={`translate(${position.x - tooltipWidth / 2},${
        position.y - 80
      })`}
    >
      <path
        id="charts_tooltip_path"
        strokeWidth="0.5"
        fill="rgba(0, 8, 22, 0.75)"
        opacity="0.75"
        stroke="#cccccc"
        d={tooltipPath}
        filter="url(#charts_tooltip_shadow)"
      ></path>
      <text
        id="charts_tooltip_text"
        x="10"
        y="20"
        fill="null"
        fontSize="13px"
        fontStyle="Normal"
        fontFamily="Segoe UI"
        fontWeight="Normal"
        textAnchor="start"
        transform=""
        opacity="undefined"
        dominantBaseline="undefined"
      >
        <tspan
          x={leftPaddingForName}
          fill="#ffffff"
          style={{ fontWeight: "bold" }}
        >
          {data.name}
        </tspan>
        <tspan x="25" dy="27" fill="#dbdbdb">
          {data.x}
        </tspan>
        <tspan fill="#dbdbdb"> ‎: </tspan>
        <tspan fill="#ffffff" style={{ fontWeight: "bold" }}>
          {data.y}
        </tspan>
      </text>
      <path
        id="charts_tooltip_header_path"
        strokeWidth="1"
        fill="null"
        opacity="0.8"
        stroke="#ffffff"
        d={`M 10 27L ${tooltipWidth - 10} 27`}
      ></path>
      <defs id="charts_tooltipSVG_tooltip_definition">
        <filter id="charts_tooltip_shadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
          <feOffset dx="3" dy="3" result="offsetblur"></feOffset>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5"></feFuncA>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g id="charts_tooltip_trackball_group">
        <ellipse
          id="charts_tooltip_Trackball_0"
          opacity="1"
          fill="#404041"
          stroke="#cccccc"
          strokeWidth="1"
          strokeDasharray="null"
          d="undefined"
          rx="5"
          ry="5"
          cx="15"
          cy="42"
          aria-label="null"
        ></ellipse>
      </g>
    </g>
  );
}

export default Tooltip;
