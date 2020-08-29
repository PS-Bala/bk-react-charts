import React, { useState } from "react";
import { getYPoint } from "./../util/util";
import Tooltip from "./../tooltip/Tooltip";

function RenderLineChart({
  dataSource,
  yAxisLength,
  outerSpace,
  minYValue,
  pixelForOneYValue,
  singleRangeInPixel,
  xName,
  yName,
  name,
  tooltip,
  markerSettings,
  primaryYAxis,
}) {
  let xPoint = outerSpace.left;
  let yPoint;
  let dataPointElements = [];
  const [prefix, suffix] = primaryYAxis.labelFormat.split("{value}");
  let [tooltipSettings, setTooltipSettings] = useState({
    show: false,
    data: { x: null, y: null, name: null },
    position: { x: null, y: null },
  });

  const updateTooltip = (e) => {
    e.stopPropagation();
    let { xvalue: x, yvalue: y, name } = e.target.dataset;
    let position = { x: null, y: null };
    position.x = e.target.cx.baseVal.value;
    position.y = e.target.cy.baseVal.value;
    setTooltipSettings({ show: true, data: { x, y, name }, position });
  };

  const removeTooltip = () => {
    setTooltipSettings({ show: false });
  };

  return (
    <g id="lineChart">
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
            stroke="#404041"
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
            onMouseMove={updateTooltip}
            onMouseLeave={removeTooltip}
          ></ellipse>
        );
        return (
          <g key={`line-${index}`}>
            <path
              id={`container_MajorTickLine_0_${index}`}
              opacity="null"
              fill="transparent"
              stroke="#b5b5b5"
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
      {tooltip.enable && tooltipSettings.show && (
        <Tooltip {...tooltipSettings}></Tooltip>
      )}
      {dataPointElements.map((item) => item)}
    </g>
  );
}

export default RenderLineChart;
