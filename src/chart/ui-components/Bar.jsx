import React from "react";
import { getContrastColor } from "../util/util";
import styles from "./Bar.module.css";

function Bar({
  xPoint,
  yPoint,
  barWidth,
  barHeight,
  color,
  primaryYAxis,
  yValue,
  xValue,
  name,
  updateTooltip,
  removeTooltip,
}) {
  const [prefix, suffix] = primaryYAxis.labelFormat.split("{value}");
  const tooltipAdjustment = 10;
  const labelSize = barWidth / 2;
  let tooltipPosition = {
    x: xPoint + barWidth / 2,
    y: yPoint - barHeight + tooltipAdjustment,
  };
  let path = `M ${xPoint} ${yPoint} L ${xPoint} ${yPoint - barHeight} L ${
    xPoint + barWidth
  } ${yPoint - barHeight} L ${xPoint + barWidth} ${yPoint}   Z`;
  return (
    <g className={styles.bar}>
      <path
        opacity="1"
        fill={color}
        stroke="transparent"
        strokeWidth="0"
        strokeDasharray="0"
        d={path}
        aria-label="USA:37"
        data-yvalue={`${prefix}${yValue}${suffix}`}
        data-xvalue={xValue}
        data-name={name}
        data-xposition={tooltipPosition.x}
        data-yposition={tooltipPosition.y}
        onMouseMove={(e) => {
          let {
            xvalue: x,
            yvalue: y,
            name,
            xposition,
            yposition,
          } = e.currentTarget.dataset;
          let position = { x: xposition, y: yposition };
          updateTooltip(x, y, name, position, e);
        }}
        onMouseLeave={removeTooltip}
      ></path>
      <text
        x={xPoint + labelSize}
        y={yPoint - barHeight + labelSize}
        fill={getContrastColor(color)}
        fontSize="11px"
        fontStyle="Normal"
        fontFamily="Segoe UI"
        fontWeight="600"
        textAnchor="middle"
        dominantBaseline="auto"
      >
        {`${prefix}${yValue}${suffix}`}
      </text>
    </g>
  );
}

export default Bar;
