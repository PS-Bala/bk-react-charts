import React from "react";
import { getContrastColor } from "../util/util";
import styles from "./Arc.module.css";

function Arc({
  backgroundColor = "yellow",
  borderColor = "lightgray",
  borderWidth = 2,
  circleRadius,
  centerPoint,
  startPoint,
  endPoint,
  labelPosition,
  xValue,
  yValue,
  name,
  primaryYAxis,
  updateTooltip,
  removeTooltip,
  translate,
}) {
  const [prefix, suffix] = primaryYAxis.labelFormat.split("{value}");

  return (
    <React.Fragment>
      <g
        className={styles.arc}
        data-yvalue={`${prefix}${yValue}${suffix}`}
        data-xvalue={xValue}
        data-name={name}
        data-xposition={labelPosition.x}
        data-yposition={labelPosition.y}
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
        transform={
          translate.enable ? `translate(${translate.x}, ${translate.y})` : ""
        }
      >
        <path
          d={`M${centerPoint.x} ${centerPoint.y} L${startPoint.x} ${startPoint.y} A${circleRadius} ${circleRadius} 0 0 1 ${endPoint.x} ${endPoint.y} Z`}
          fill={backgroundColor}
          stroke={borderColor}
          strokeWidth={borderWidth}
        />
        <text
          x={labelPosition.x}
          y={labelPosition.y}
          fill={getContrastColor(backgroundColor)}
          fontSize="11px"
          fontStyle="Normal"
          fontFamily="Segoe UI"
          fontWeight="600"
          textAnchor="middle"
          opacity="1"
          dominantBaseline="auto"
        >
          {yValue}
        </text>
      </g>
    </React.Fragment>
  );
}

export default Arc;
