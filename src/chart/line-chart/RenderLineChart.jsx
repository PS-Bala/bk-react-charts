import React from "react";
import { getYPoint } from "./../util/util";
import Legend from "./../legend/Legend";

function RenderLineChart({
  id,
  dataSource,
  yAxisLength,
  outerSpace,
  minYValue,
  pixelForOneYValue,
  singleRangeInPixel,
  xName,
  yName,
  name,
  markerSettings,
  primaryYAxis,
  color,
  legendPosition,
  updateTooltip,
  removeTooltip,
}) {
  let xPoint = outerSpace.left;
  let yPoint;
  let dataPointElements = [];
  const [prefix, suffix] = primaryYAxis.labelFormat.split("{value}");

  return (
    <React.Fragment>
      <g id={`lineChart_${id}`}>
        {dataSource.map((dataItem, index) => {
          let line;
          let previousXPoint = xPoint;
          let previousYPoint = yPoint;
          yPoint = getYPoint(
            dataItem[yName],
            minYValue,
            yAxisLength,
            outerSpace,
            pixelForOneYValue
          );
          if (index !== 0) {
            xPoint += singleRangeInPixel;
            line = `M ${previousXPoint} ${previousYPoint} L ${xPoint} ${yPoint}`;
          }
          dataPointElements.push(
            <ellipse
              key={xPoint + dataItem[yName]}
              id="points"
              opacity="1"
              fill="#ffffff"
              stroke={color}
              strokeWidth="2"
              strokeDasharray="null"
              d="undefined"
              rx="5"
              ry="5"
              cx={xPoint}
              cy={yPoint}
              data-yvalue={`${prefix}${dataItem[yName]}${suffix}`}
              data-xvalue={dataItem[xName]}
              data-name={name}
              onMouseMove={(e) => {
                let { xvalue: x, yvalue: y, name } = e.target.dataset;
                let position = { x: null, y: null };
                position.x = e.target.cx.baseVal.value;
                position.y = e.target.cy.baseVal.value;
                updateTooltip(x, y, name, position, e);
              }}
              onMouseLeave={removeTooltip}
            ></ellipse>
          );
          return (
            <g key={`line-${index}`}>
              <path
                id={`container_MajorTickLine_0_${index}`}
                opacity="null"
                fill="transparent"
                stroke={color}
                strokeWidth="1"
                strokeDasharray="null"
                d={line}
              ></path>
              {markerSettings.dataLabel.visible && (
                <text
                  id={`chart_Series_Point_Text_${index}`}
                  x={xPoint}
                  y={yPoint - 15}
                  fill="black"
                  fontSize="11px"
                  fontStyle="Normal"
                  fontFamily="Segoe UI"
                  fontWeight="Normal"
                  textAnchor="middle"
                  label-rotation="0"
                  transform="rotate(0,379.5625,10.770833333333346)"
                  opacity="undefined"
                  dominantBaseline="auto"
                >
                  {`${prefix}${dataItem[yName]}${suffix}`}
                </text>
              )}
            </g>
          );
        })}
        {dataPointElements.map((item) => item)}
      </g>
      <Legend
        id={id}
        name={name}
        position={legendPosition}
        color={color}
      ></Legend>
    </React.Fragment>
  );
}

export default RenderLineChart;
