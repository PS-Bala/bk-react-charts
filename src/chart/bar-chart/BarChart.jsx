import React from "react";
import Legend from "../legend/Legend";
import Bar from "../ui-components/Bar";
import {
  getLegendContainerWidth,
  getLegendPosition,
  getRandomColor,
} from "./../util/util";

function BarChart({
  chartWidth,
  chartHeight,
  outerSpace,
  dataSource,
  xName,
  yName,
  primaryYAxis,
  updateTooltip,
  removeTooltip,
  pixelForOneYValue,
  singleRangeInPixel,
}) {
  let xPoint;
  let yPoint = chartHeight - outerSpace.bottom;
  let barWidth = 40;

  return (
    <g id={`barChart_container`}>
      {dataSource.map((dataItem, outerIndex) => {
        xPoint = outerSpace.left;
        xPoint += (singleRangeInPixel - barWidth * dataSource.length) / 2;
        xPoint += barWidth * outerIndex;
        let color = getRandomColor(outerIndex);
        const legendContainerWidth = getLegendContainerWidth(dataSource);
        const legendPosition = getLegendPosition(
          legendContainerWidth,
          dataSource,
          dataItem.name,
          chartWidth,
          chartHeight
        );

        return (
          <g key={`barGroup-${outerIndex}`}>
            {dataItem.data.map((item, index) => {
              if (index !== 0) {
                xPoint += singleRangeInPixel;
              }
              let xValue = item[xName];
              let yValue = item[yName];
              let barHeight = yValue * pixelForOneYValue;
              // legend position
              // -------------------------
              let barProperties = {
                xPoint,
                yPoint,
                barWidth,
                barHeight,
                color,
                primaryYAxis,
                yValue,
                xValue,
                name: dataItem.name,
                updateTooltip,
                removeTooltip,
              };
              return (
                <Bar key={`${outerIndex}_${index}`} {...barProperties}></Bar>
              );
            })}
            <Legend
              id={dataItem.name}
              name={dataItem.name}
              position={legendPosition}
              color={color}
            ></Legend>
          </g>
        );
      })}
    </g>
  );
}

export default BarChart;
