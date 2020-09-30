# bk-react-charts

> The Chart component is used to visualize data with user interaction and provides customization options to visually configure the data. It can bind data from datasources such as JSON object array and web services. All of the chart elements are rendered using Scalable Vector Graphics (SVG).

[![NPM](https://img.shields.io/npm/v/bk-react-charts.svg)](https://www.npmjs.com/package/bk-react-charts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bk-react-charts
```

## Line-Chart

Following example shows the sales report with default line series in the chart.

### Source

```jsx
import React from 'react'
import Chart from 'bk-react-charts'
import 'bk-react-charts/dist/index.css'

function DataSourceSample() {
  let data = [
    { month: 'Jan', sales: 35 },
    { month: 'Feb', sales: 37 },
    { month: 'Mar', sales: 39 },
    { month: 'Apr', sales: 38 },
    { month: 'May', sales: 37 },
    { month: 'Jun', sales: 41 },
    { month: 'Jul', sales: 40 },
    { month: 'Aug', sales: 43 },
    { month: 'Sep', sales: 42 },
    { month: 'Oct', sales: 44 },
    { month: 'Nov', sales: 45 },
    { month: 'Dec', sales: 46 }
  ]
  return (
    <Chart
      height='400px'
      width='700px'
      dataSource={[
        {
          data: data
        }
      ]}
      xName='month'
      yName='sales'
    />
  )
}

export default DataSourceSample
```

### Demo

![Line chart sample](https://i.ibb.co/jDrkFVw/basic-line-chart.png)

### Customized Line chart with multiple series

In following example, we have added multiple series of sales data using `dataSource` property. Also you can customize axis, title and tooltips.

1. Customize yAxis - You can customize the yAxis's interval, minimum, maximum, lineStyle and labelFormat using `primaryYAxis`.
2. Tooltip - You can enable or disable the tooltip using `tooltip` property.

### Source

```jsx
import React from 'react'
import Chart from 'bk-react-charts'
import 'bk-react-charts/dist/index.css'

function DataSourceSample() {
  let data = [
    { month: 'Jan', sales: 35 },
    { month: 'Feb', sales: 37 },
    { month: 'Mar', sales: 39 },
    { month: 'Apr', sales: 38 },
    { month: 'May', sales: 37 },
    { month: 'Jun', sales: 41 },
    { month: 'Jul', sales: 40 },
    { month: 'Aug', sales: 43 },
    { month: 'Sep', sales: 42 },
    { month: 'Oct', sales: 44 },
    { month: 'Nov', sales: 45 },
    { month: 'Dec', sales: 46 }
  ]
  let data2 = [
    { month: 'Jan', sales: 45 },
    { month: 'Feb', sales: 47 },
    { month: 'Mar', sales: 46 },
    { month: 'Apr', sales: 48 },
    { month: 'May', sales: 46 },
    { month: 'Jun', sales: 49 },
    { month: 'Jul', sales: 48 },
    { month: 'Aug', sales: 52 },
    { month: 'Sep', sales: 54 },
    { month: 'Oct', sales: 53 },
    { month: 'Nov', sales: 54 },
    { month: 'Dec', sales: 55 }
  ]
  let data3 = [
    { month: 'Jan', sales: 23 },
    { month: 'Feb', sales: 24 },
    { month: 'Mar', sales: 25 },
    { month: 'Apr', sales: 28 },
    { month: 'May', sales: 26 },
    { month: 'Jun', sales: 29 },
    { month: 'Jul', sales: 28 },
    { month: 'Aug', sales: 29 },
    { month: 'Sep', sales: 27 },
    { month: 'Oct', sales: 29 },
    { month: 'Nov', sales: 30 },
    { month: 'Dec', sales: 31 }
  ]
  return (
    <Chart
      height='400px'
      width='700px'
      dataSource={[
        {
          data: data,
          name: 'India',
          marker: { dataLabel: { visible: true } }
        },
        {
          data: data2,
          name: 'U.S'
        },
        {
          data: data3,
          name: 'Japan'
        }
      ]}
      xName='month'
      yName='sales'
      title='Inflation - Consumer Price'
      primaryYAxis={{
        interval: 5,
        minimum: 20,
        maximum: 60,
        lineStyle: { width: 0 },
        labelFormat: '{value}%'
      }}
      tooltip={{ enable: true }}
    />
  )
}

export default DataSourceSample
```

### Demo for Line-Chart

![Customized Line chart with multiple series sample](https://i.ibb.co/vVMGPzc/Line-Chart.png)

## Pie-Chart

This sample demonstrates pie chart for monthly expense report.

### Customization options

You can explode the particular part of pie-chart using following properties.

1. pieChartRadius - Helps you customize the pie-chart radius
2. pieChartExplode - Enables or disables the explosion feature of the pie-chart
3. pieChartExplodeIndex - Specifies the explosion index of the pie-chart item
4. pieChartExplodeOffset - Specifies the exploding offset of the pie-chart item

```jsx
import React from 'react'
import Chart from 'bk-react-charts'
import 'bk-react-charts/dist/index.css'

function PieChartSample() {
  let expenseDetails = [
    { item: 'savings', spending: '40%' },
    { item: 'food', spending: '20%' },
    { item: 'homeRent', spending: '15%' },
    { item: 'dress', spending: '5%' },
    { item: 'travel', spending: '10%' },
    { item: 'entertainment', spending: '10%' }
  ]
  return (
    <Chart
      height='400px'
      width='400px'
      outerBorderWidth='1px'
      dataSource={[
        {
          data: expenseDetails,
          name: 'Expense'
        }
      ]}
      xName='item'
      yName='spending'
      pieChartExplode={true}
      pieChartExplodeOffset='10%'
      pieChartExplodeIndex={1}
      pieChartRadius={150}
      title='Expense details'
      tooltip={{ enable: true }}
      type='PieChart'
    />
  )
}

export default PieChartSample
```

### Demo for Pie-Chart

![Pie chart sample](https://i.ibb.co/CncTfnq/PieChart.png)

## Bar-Chart

This sample shows the Olympic medal count with default column series in the chart.

```jsx
import React from 'react'
import Chart from 'bk-react-charts'
import 'bk-react-charts/dist/index.css'

function BarChartSample() {
  let goldMedals = [
    { countryCode: 'USA', count: 46 },
    { countryCode: 'GBR', count: 27 },
    { countryCode: 'CHN', count: 26 }
  ]
  let silverMedals = [
    { countryCode: 'USA', count: 37 },
    { countryCode: 'GBR', count: 23 },
    { countryCode: 'CHN', count: 18 }
  ]
  let bronzeMedals = [
    { countryCode: 'USA', count: 38 },
    { countryCode: 'GBR', count: 17 },
    { countryCode: 'CHN', count: 26 }
  ]

  return (
    <Chart
      height='400px'
      width='600px'
      outerBorderWidth='1px'
      dataSource={[
        {
          data: goldMedals,
          name: 'Gold'
        },
        {
          data: silverMedals,
          name: 'Silver'
        },
        {
          data: bronzeMedals,
          name: 'Bronze'
        }
      ]}
      xName='countryCode'
      yName='count'
      primaryYAxis={{ interval: 5, minimum: 0, maximum: 50 }}
      title='2016 Olympics Medal counts'
      tooltip={{ enable: true }}
      type='BarChart'
    />
  )
}

export default BarChartSample
```

### Demo for Bar-Chart

![Bar chart sample](https://i.ibb.co/nL85LTy/BarChart.png)

## Support

For support and queries, you can contact **bk.techee@gmail.com**

## License

MIT © [PS-Bala](https://github.com/PS-Bala)

```

```
