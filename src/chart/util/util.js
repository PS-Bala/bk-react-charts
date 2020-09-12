export function calculateDefaultPoints(
  axisSize,
  outerSpace,
  rangeCount,
  isVertical = false
) {
  const singlePointRangeInPixel = axisSize / rangeCount;
  let linesPoints = [isVertical ? outerSpace.top + axisSize : outerSpace.left];
  let labels = [0];

  for (let start = 0, label = 0; start < rangeCount; start++) {
    let newPoint = null;
    if (isVertical) {
      newPoint = linesPoints[linesPoints.length - 1] - singlePointRangeInPixel;
    } else {
      newPoint = linesPoints[linesPoints.length - 1] + singlePointRangeInPixel;
    }
    if (newPoint != null) {
      linesPoints.push(newPoint);
      label += 0.5;
      labels.push(label);
    }
  }
  return [linesPoints, labels];
}
export function calculateXAxisPointsFromDataSource(
  xAxisLabels,
  outerSpace,
  singleRangeInPixel
) {
  let linesPoints = [];
  let labels = [];

  for (const label of xAxisLabels) {
    labels.push(label);
    linesPoints.push(
      linesPoints.length === 0
        ? outerSpace.left
        : linesPoints[linesPoints.length - 1] + singleRangeInPixel
    );
  }

  return [linesPoints, labels];
}
export function calculateYAxisPointsFromDataSource(
  axisSize,
  outerSpace,
  valueDifferenceInAxis,
  minYValue = null,
  maxYValue = null
) {
  let linesPoints = [];
  let labels = [];
  let singleRangeInPixel;

  let pixelForOneValue = axisSize / (maxYValue - minYValue);
  let currentLabel = minYValue;
  singleRangeInPixel = pixelForOneValue * valueDifferenceInAxis;
  while (currentLabel <= maxYValue) {
    currentLabel =
      labels.length > 0
        ? parseInt(labels[labels.length - 1]) + valueDifferenceInAxis
        : currentLabel;
    let newPoint =
      linesPoints.length === 0
        ? outerSpace.top + axisSize
        : linesPoints[linesPoints.length - 1] - singleRangeInPixel;
    if (currentLabel <= maxYValue) {
      linesPoints.push(newPoint);
      labels.push(currentLabel);
    }
  }

  return [linesPoints, labels];
}

export function getXAxisLength(chartWidth, { left, right }) {
  return chartWidth - (left + right);
}

export function getYAxisLength(chartHeight, { top, bottom }) {
  return chartHeight - (top + bottom);
}

export function getMinMaxValues(
  dataSource,
  yName,
  valueDifferenceInAxis,
  yAxisLength
) {
  let yValues = [];
  for (const item of dataSource) {
    yValues.push(item[yName]);
  }
  let minValue = Math.min(...yValues) - valueDifferenceInAxis;
  let maxValue = Math.max(...yValues) + valueDifferenceInAxis;

  while (yAxisLength / ((maxValue - minValue) / valueDifferenceInAxis) > 50) {
    minValue -= valueDifferenceInAxis / 2;
    if (minValue < 0) {
      minValue = 0;
    }
    maxValue += valueDifferenceInAxis / 2;
  }

  return [minValue, maxValue];
}

export function getYPoint(
  value,
  minYValue,
  axisLength,
  outerSpace,
  pixelForOneYValue
) {
  let yPoint;
  let { top } = outerSpace;
  yPoint = axisLength - (value - minYValue) * pixelForOneYValue;
  yPoint = top + yPoint;
  return yPoint;
}

export function getXAxisLabels(dataSource, xName) {
  let xAxisLabels = [];
  for (const { data } of dataSource) {
    for (const item of data) {
      xAxisLabels.push(item[xName]);
    }
  }
  xAxisLabels = Array.from(new Set(xAxisLabels));
  return xAxisLabels;
}

export function getRandomColor(index) {
  const colorList = [
    "#aa8828",
    "#F9A602",
    "#00bdae",
    "#404041",
    "#357cd2",
    "#e56590",
    "#f8b883",
    "#7c4700",
    "#FFF200",
    "#212d61",
    "#FF2400",
    "#3BB143",
  ];
  return colorList[index];
}

export function getLegendContainerWidth(dataSource) {
  let totalLegendContainerWidth = 0;
  for (const item of dataSource) {
    const { name } = item;
    const currentLegendWidth = 25 + name.length * 8;
    totalLegendContainerWidth += currentLegendWidth;
  }
  return totalLegendContainerWidth;
}
export function getLegendPosition(
  legendContainerWidth,
  dataSource,
  legendName,
  chartWidth,
  chartHeight
) {
  let legendPosition = { x: 0, y: 0 };
  const charWidth = 8;
  const iconWidth = 20;
  let stopAdd = false;
  let leftPosition = chartWidth / 2 - legendContainerWidth / 2;
  for (const item of dataSource) {
    const { name } = item;
    if (legendName === name) {
      stopAdd = true;
    }
    if (stopAdd != true) {
      const currentLegendWidth = iconWidth + name.length * charWidth;
      leftPosition += currentLegendWidth;
    }
  }
  legendPosition.x = leftPosition;
  legendPosition.y = chartHeight - 5;
  return legendPosition;
}

export function getContrastColor(hexColor) {
  // If a leading # is provided, remove it
  if (hexColor.slice(0, 1) === "#") {
    hexColor = hexColor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexColor.length === 3) {
    hexColor = hexColor
      .split("")
      .map(function (hex) {
        return hex + hex;
      })
      .join("");
  }

  // Convert to RGB value
  var r = parseInt(hexColor.substr(0, 2), 16);
  var g = parseInt(hexColor.substr(2, 2), 16);
  var b = parseInt(hexColor.substr(4, 2), 16);

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? "black" : "white";
}

export function getTotalValue(dataSource, yName) {
  return dataSource.reduce((total, item) => {
    debugger;
    return total + parseFloat(item[yName]);
  }, 0);
}

export const ChartType = {
  Line: "LineChart",
  Pie: "PieChart",
  Bar: "BarChart",
};

export const RadianOfCircle = 6.28;
