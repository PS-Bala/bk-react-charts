import React from "react";
import {
  RadianOfCircle,
  getRandomColor,
  getContrastColor,
  getTotalValue,
} from "./../util/util";

function PieChart({
  chartWidth,
  chartHeight,
  dataSource,
  xName,
  yName,
  name,
  primaryYAxis,
  updateTooltip,
  removeTooltip,
  explode,
  explodeOffset,
  explodeIndex,
  circleRadius,
}) {
  let centerPoint = { x: null, y: null };
  centerPoint.x = chartWidth / 2;
  centerPoint.y = chartHeight / 2;
  const totalValue = getTotalValue(dataSource, yName);
  const radianForSinglePoint = RadianOfCircle / totalValue;

  const getPointsFromValue = (value) => {
    const arcRadian = value * radianForSinglePoint;
    let x = Math.cos(arcRadian) * circleRadius + centerPoint.x;
    let y = Math.sin(arcRadian) * circleRadius + centerPoint.y;
    return { x, y };
  };

  let previousTotalValue = 0;
  let startPoint;
  let endPoint = getPointsFromValue(0);
  let labelPosition;
  return dataSource.map((item, index) => {
    const xValue = item[xName];
    startPoint = endPoint;
    labelPosition = getPointsFromValue(
      previousTotalValue + parseFloat(item[yName]) / 2
    );
    labelPosition = {
      x: (centerPoint.x + labelPosition.x) / 2,
      y: (centerPoint.y + labelPosition.y) / 2,
    };
    const arcRadian =
      (previousTotalValue + parseFloat(item[yName]) / 2) * radianForSinglePoint;
    let explodeOffsetValue = (circleRadius / 100) * parseFloat(explodeOffset);
    let translate = {
      enable: explode && explodeIndex == index,
      x: Math.cos(arcRadian) * explodeOffsetValue,
      y: Math.sin(arcRadian) * explodeOffsetValue,
    };

    previousTotalValue += parseFloat(item[yName]);
    endPoint = getPointsFromValue(previousTotalValue);
    let color = getRandomColor(index);
    return (
      <Arc
        key={`pie-arc${index}`}
        centerPoint={centerPoint}
        circleRadius={circleRadius}
        startPoint={startPoint}
        endPoint={endPoint}
        backgroundColor={color}
        borderColor={color}
        labelPosition={labelPosition}
        xValue={xValue}
        yValue={item[yName]}
        name={name}
        primaryYAxis={primaryYAxis}
        updateTooltip={updateTooltip}
        removeTooltip={removeTooltip}
        translate={translate}
      ></Arc>
    );
  });
}

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
export default PieChart;
