import React from "react";
import HorizontalAxisLabel from "./HorizontalAxisLabel";
import {
  calculateDefaultPoints,
  calculateXAxisPointsFromDataSource,
  getXAxisLength,
} from "./../../util/util";

function HorizontalAxis({
  chartWidth,
  chartHeight,
  outerSpace,
  xAxisLabels,
  singleRangeInPixel,
  primaryYAxis,
}) {
  const heightStartPoint = chartHeight - outerSpace.bottom;
  const axisWidth = getXAxisLength(chartWidth, outerSpace);
  const spaceBetweenLabelAndAxis = 20;
  const path = `M 49 ${heightStartPoint} L ${
    chartWidth - outerSpace.right
  } ${heightStartPoint}`;

  let [linePoints, labels] = [null, null];

  if (xAxisLabels.length > 0) {
    [linePoints, labels] = calculateXAxisPointsFromDataSource(
      xAxisLabels,
      outerSpace,
      singleRangeInPixel
    );
  } else {
    const rangeCount = 11;
    [linePoints, labels] = calculateDefaultPoints(
      axisWidth,
      outerSpace,
      rangeCount
    );
  }

  return (
    <g id="containerHorizontalAxis">
      <path
        id="containerAxisLine_0"
        d={path}
        strokeDasharray=""
        strokeWidth="1"
        stroke="#b5b5b5"
      ></path>
      {linePoints.map((h_point, index) => {
        const h_path = `M ${h_point} ${heightStartPoint} L ${h_point} ${outerSpace.top}`;
        const tick_h_path = `M ${h_point} ${heightStartPoint} L ${h_point} ${
          heightStartPoint + 5
        }`;
        return (
          <g id={`horizontalAxis-${index}`} key={`horizontalAxis-${index}`}>
            <path
              key={`majorTickLine-${index}`}
              id={`container_MajorTickLine_0_${index}`}
              opacity="null"
              fill="transparent"
              stroke="#dbdbdb"
              strokeWidth={primaryYAxis.lineStyle.width}
              strokeDasharray="null"
              d={h_path}
            ></path>
            <path
              key={`lineRef-${index}`}
              id={`tick_${index}`}
              opacity="null"
              fill="transparent"
              stroke="#b5b5b5"
              strokeWidth={1}
              strokeDasharray="null"
              d={tick_h_path}
            ></path>
          </g>
        );
      })}
      <HorizontalAxisLabel
        horizontalLinesPoints={linePoints}
        labels={labels}
        labelPosition={
          chartHeight - outerSpace.bottom + spaceBetweenLabelAndAxis
        }
      ></HorizontalAxisLabel>
    </g>
  );
}

export default HorizontalAxis;
