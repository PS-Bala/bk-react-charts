import React from 'react'
import Axis from './axis/Axis'
import { getYAxisLength, getMinMaxValues, getXAxisLabels } from './util/util'
import RenderLineChart from './line-chart/RenderLineChart'
import Title from './title/Title'

function Chart({
  height = '400px',
  width = '400px',
  backgroundColor = '#ffffff',
  outerBorderWidth = '0px',
  outerBorderColor = '#ffffff',
  dataSource = [],
  xName = 'xName',
  yName = 'yName',
  title = null,
  primaryXAxis,
  primaryYAxis,
  tooltip
}) {
  const outerSpace = {
    left: 49,
    right: 20,
    top: title != null ? 40 : 20,
    bottom: 49
  }

  const widthInNumber = parseInt(width)
  const heightInNumber = parseInt(height)

  const xAxisLength = getYAxisLength(widthInNumber, outerSpace)
  const yAxisLength = getYAxisLength(heightInNumber, outerSpace)

  const defaultMarkerSettings = { dataLabel: { visible: false } }

  primaryXAxis = {
    lineStyle: { width: 1 },
    ...primaryXAxis
  }
  primaryYAxis = {
    lineStyle: { width: 1 },
    interval: 10,
    minimum: null,
    maximum: null,
    labelFormat: '{value}',
    ...primaryYAxis
  }
  tooltip = { enable: false, ...tooltip }
  let minYValue, maxYValue

  if (
    dataSource.length === 1 &&
    primaryYAxis.minimum === null &&
    primaryYAxis.maximum === null
  ) {
    ;[minYValue, maxYValue] = getMinMaxValues(
      dataSource[0],
      yName,
      primaryYAxis.interval,
      yAxisLength
    )
  } else {
    minYValue = primaryYAxis.minimum
    maxYValue = primaryYAxis.maximum
  }

  const xAxisLabels = getXAxisLabels(dataSource, xName)

  const singleRangeInPixel = xAxisLength / (xAxisLabels.length - 1)
  const pixelForOneYValue = yAxisLength / (maxYValue - minYValue)

  // ------title related settings------
  let titleLeftPosition
  if (title != null) {
    titleLeftPosition = widthInNumber / 2
  }
  // -----------------------------------

  return (
    <svg width={width} height={height}>
      <rect
        width={width}
        height={height}
        style={{
          fill: backgroundColor,
          strokeWidth: outerBorderWidth,
          stroke: outerBorderColor
        }}
      />
      <Title titleLeftPosition={titleLeftPosition} title={title}></Title>
      <Axis
        chartWidth={widthInNumber}
        chartHeight={heightInNumber}
        outerSpace={outerSpace}
        dataSourceAvailable={dataSource.length > 0}
        xAxisLabels={xAxisLabels}
        valueDifferenceInYAxis={primaryYAxis.interval}
        minYValue={minYValue}
        maxYValue={maxYValue}
        singleRangeInPixel={singleRangeInPixel}
        primaryXAxis={primaryXAxis}
        primaryYAxis={primaryYAxis}
      />
      {dataSource.length > 0 &&
        dataSource.map((item, index) => {
          item = {
            marker: defaultMarkerSettings,
            ...item
          }
          const { data, name, marker } = item

          const lineChartProps = {
            dataSource: data,
            name,
            markerSettings: marker,
            tooltip,
            yAxisLength,
            outerSpace,
            minYValue,
            pixelForOneYValue,
            singleRangeInPixel,
            xName,
            yName,
            primaryYAxis
          }
          return (
            <RenderLineChart
              key={`line-chart-${index + 1}`}
              {...lineChartProps}
            ></RenderLineChart>
          )
        })}
    </svg>
  )
}

export default Chart