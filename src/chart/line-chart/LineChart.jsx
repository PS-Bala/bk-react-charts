import React, { useState } from "react";
import {
  getRandomColor,
  getLegendContainerWidth,
  getLegendPosition,
  getYAxisLength,
} from "./../util/util";
import RenderLineChart from "./RenderLineChart";
import Tooltip from "./../tooltip/Tooltip";

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
  tooltip,
}) {
  const defaultMarkerSettings = { dataLabel: { visible: false } };
  const yAxisLength = getYAxisLength(chartHeight, outerSpace);

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
            tooltip,
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
      {tooltip.enable && tooltipSettings.show && (
        <Tooltip {...tooltipSettings}></Tooltip>
      )}
    </React.Fragment>
  );
}

export default LineChart;
