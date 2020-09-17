import React from "react";
import {
  getRandomColor,
  getLegendContainerWidth,
  getLegendPosition,
  getYAxisLength,
} from "./../util/util";
import RenderLineChart from "./RenderLineChart";

function LineChart({
  dataSource,
  chartWidth,
  chartHeight,
  outerSpace,
  minYValue,
  pixelForOneYValue,
  singleRangeInPixel,
  xName,
  yName,
  primaryYAxis,
  updateTooltip,
  removeTooltip,
}) {
  const defaultMarkerSettings = { dataLabel: { visible: false } };
  const yAxisLength = getYAxisLength(chartHeight, outerSpace);

  return (
    <React.Fragment>
      {dataSource.length > 0 &&
        dataSource.map((item, index) => {
          item = {
            marker: defaultMarkerSettings,
            ...item,
          };
          const { data, name, marker } = item;
          const color = getRandomColor(index);
          const legendContainerWidth = getLegendContainerWidth(dataSource);
          const legendPosition = getLegendPosition(
            legendContainerWidth,
            dataSource,
            name,
            chartWidth,
            chartHeight
          );
          const lineChartProps = {
            id: index + 1,
            dataSource: data,
            name,
            markerSettings: marker,
            color: color,
            legendPosition,
            yAxisLength,
            outerSpace,
            minYValue,
            pixelForOneYValue,
            singleRangeInPixel,
            xName,
            yName,
            primaryYAxis,
            updateTooltip,
            removeTooltip,
          };
          return (
            <RenderLineChart
              key={`line-chart-${index + 1}`}
              {...lineChartProps}
            ></RenderLineChart>
          );
        })}
    </React.Fragment>
  );
}

export default LineChart;
