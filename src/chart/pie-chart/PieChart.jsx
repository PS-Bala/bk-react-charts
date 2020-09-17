import React from "react";
import Arc from "../ui-components/Arc";
import { RadianOfCircle, getRandomColor, getTotalValue } from "./../util/util";

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

export default PieChart;
