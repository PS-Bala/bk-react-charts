import React from "react";
import HorizontalAxis from "./horizontalAxis/HorizontalAxis";
import VerticalAxis from "./verticalAxis/VerticalAxis";

function Axis({
  chartWidth,
  chartHeight,
  outerSpace,
  dataSourceAvailable,
  xAxisLabels,
  valueDifferenceInYAxis,
  minYValue,
  maxYValue,
  singleRangeInPixel,
  primaryXAxis,
  primaryYAxis,
}) {
  return (
    <g id="containerAxis">
      <HorizontalAxis
        chartWidth={chartWidth}
        chartHeight={chartHeight}
        outerSpace={outerSpace}
        xAxisLabels={xAxisLabels}
        singleRangeInPixel={singleRangeInPixel}
        primaryYAxis={primaryYAxis}
      ></HorizontalAxis>
      <VerticalAxis
        chartWidth={chartWidth}
        chartHeight={chartHeight}
        outerSpace={outerSpace}
        dataSourceAvailable={dataSourceAvailable}
        valueDifferenceInYAxis={valueDifferenceInYAxis}
        minYValue={minYValue}
        maxYValue={maxYValue}
        primaryXAxis={primaryXAxis}
        primaryYAxis={primaryYAxis}
      ></VerticalAxis>
    </g>
  );
}

export default Axis;
