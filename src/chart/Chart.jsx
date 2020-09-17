import React, { useState } from 'react'
import Axis from './axis/Axis'
import {
  getYAxisLength,
  getMinMaxValues,
  getXAxisLabels,
  ChartType
} from './util/util'
import Title from './title/Title'
import LineChart from './line-chart/LineChart'
import PieChart from './pie-chart/PieChart'
import Tooltip from './tooltip/Tooltip'
import BarChart from './bar-chart/BarChart'

function Chart({
  height = '400px',
  width = '400px',
  backgroundColor = '#ffffff',
  outerBorderWidth = '0px',
  outerBorderColor = 'lightgray',
  type = ChartType.Line,
  dataSource = [],
  xName = 'xName',
  yName = 'yName',
  title = null,
  primaryXAxis,
  primaryYAxis,
  tooltip,
  pieChartExplode,
  pieChartExplodeIndex,
  pieChartExplodeOffset,
  pieChartRadius
}) {
  let xAxisLabels, singleRangeInPixel, pixelForOneYValue
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

  primaryXAxis = {
    lineStyle: { width: 1 },
    ...primaryXAxis
  }
  primaryYAxis = {
    lineStyle: { width: type === ChartType.Bar ? 0 : 1 },
    interval: 10,
    minimum: null,
    maximum: null,
    labelFormat: '{value}',
    ...primaryYAxis
  }
  tooltip = { enable: false, ...tooltip }
  let minYValue, maxYValue

  // -------------Line chart related code-------------------
  if (type === ChartType.Line || type === ChartType.Bar) {
    if (
      dataSource.length === 1 &&
      primaryYAxis.minimum === null &&
      primaryYAxis.maximum === null
    ) {
      ;[minYValue, maxYValue] = getMinMaxValues(
        dataSource,
        yName,
        primaryYAxis.interval,
        yAxisLength
      )
    } else {
      minYValue = primaryYAxis.minimum
      maxYValue = primaryYAxis.maximum
    }

    xAxisLabels = getXAxisLabels(dataSource, xName)

    singleRangeInPixel =
      xAxisLength / (xAxisLabels.length - (type === ChartType.Bar ? 0 : 1))
    pixelForOneYValue = yAxisLength / (maxYValue - minYValue)
  }
  // -----------------------------------

  // ------title related settings------
  let titleLeftPosition
  if (title != null) {
    titleLeftPosition = widthInNumber / 2
  }
  // -----------------------------------

  // ------Tooltip related settings-----------
  let [tooltipSettings, setTooltipSettings] = useState({
    show: false,
    data: { x: null, y: null, name: null },
    position: { x: null, y: null }
  })

  const updateTooltip = (xValue, yValue, name, position, eventArgs) => {
    eventArgs.stopPropagation()
    let x = xValue
    let y = yValue
    setTooltipSettings({ show: true, data: { x, y, name }, position })
  }

  const removeTooltip = () => {
    setTooltipSettings({ show: false })
  }
  // -------------------------------------

  const getLineChart = () => {
    return (
      <React.Fragment>
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
        <LineChart
          dataSource={dataSource}
          chartWidth={widthInNumber}
          chartHeight={heightInNumber}
          outerSpace={outerSpace}
          minYValue={minYValue}
          pixelForOneYValue={pixelForOneYValue}
          singleRangeInPixel={singleRangeInPixel}
          xName={xName}
          yName={yName}
          primaryYAxis={primaryYAxis}
          updateTooltip={updateTooltip}
          removeTooltip={removeTooltip}
        ></LineChart>
      </React.Fragment>
    )
  }

  const getBarChart = () => {
    return (
      <React.Fragment>
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
          chartType={type}
        />
        <BarChart
          chartWidth={widthInNumber}
          chartHeight={heightInNumber}
          outerSpace={outerSpace}
          dataSource={dataSource}
          xName={xName}
          yName={yName}
          primaryYAxis={primaryYAxis}
          updateTooltip={updateTooltip}
          removeTooltip={removeTooltip}
          pixelForOneYValue={pixelForOneYValue}
          singleRangeInPixel={singleRangeInPixel}
        ></BarChart>
      </React.Fragment>
    )
  }

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
      {type === ChartType.Line && getLineChart()}
      {type === ChartType.Pie && (
        <PieChart
          chartWidth={widthInNumber}
          chartHeight={heightInNumber}
          outerSpace={outerSpace}
          dataSource={dataSource[0].data}
          xName={xName}
          yName={yName}
          name={dataSource[0].name}
          primaryYAxis={primaryYAxis}
          updateTooltip={updateTooltip}
          removeTooltip={removeTooltip}
          explode={pieChartExplode}
          explodeOffset={pieChartExplodeOffset}
          explodeIndex={pieChartExplodeIndex}
          circleRadius={pieChartRadius}
        ></PieChart>
      )}
      {type === ChartType.Bar && getBarChart()}
      {tooltip.enable && tooltipSettings.show && (
        <Tooltip {...tooltipSettings}></Tooltip>
      )}
    </svg>
  )
}

export default Chart
