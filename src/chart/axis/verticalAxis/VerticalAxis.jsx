import React from "react";
import VerticalAxisLabel from "./VerticalAxisLabel";
import {
  calculateDefaultPoints,
  calculateYAxisPointsFromDataSource,
  getYAxisLength,
} from "./../../util/util";

function VerticalAxis({
  chartWidth,
  chartHeight,
  outerSpace,
  dataSourceAvailable,
  valueDifferenceInYAxis,
  minYValue,
  maxYValue,
  primaryXAxis,
  primaryYAxis,
}) {
  const spaceBetweenLabelAndAxis = 11;
  const yAxisLength = getYAxisLength(chartHeight, outerSpace);
  let [linePoints, labels] = [null, null];

  if (dataSourceAvailable) {
    [linePoints, labels] = calculateYAxisPointsFromDataSource(
      yAxisLength,
      outerSpace,
      valueDifferenceInYAxis,
      minYValue,
      maxYValue
    );
  } else {
    const rangeCount = 11;
    [linePoints, labels] = calculateDefaultPoints(
      yAxisLength,
      outerSpace,
      rangeCount,
      true
    );
  }

  return (
    <g id="containerVerticalAxis">
      {linePoints.map((point, index) => {
        const path = `M 49 ${point} L ${
          chartWidth - outerSpace.right
        } ${point}`;
        return (
          <path
            key={`vertical-${index}`}
            id={`container_MajorGridLine_${index}`}
            opacity="null"
            fill="transparent"
            stroke="#dbdbdb"
            strokeWidth={primaryXAxis.lineStyle.width}
            strokeDasharray=""
            d={path}
          ></path>
        );
      })}

      <VerticalAxisLabel
        verticalLinesPoints={linePoints}
        labels={labels}
        labelPosition={outerSpace.left - spaceBetweenLabelAndAxis}
        labelFormat={primaryYAxis.labelFormat}
      ></VerticalAxisLabel>
    </g>
  );
}

export default VerticalAxis;
