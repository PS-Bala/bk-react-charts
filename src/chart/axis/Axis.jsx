import React from "react";
import { ChartType } from "../util/util";
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
  chartType = ChartType.Line,
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
        chartType={chartType}
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
