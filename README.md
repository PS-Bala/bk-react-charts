# bk-react-charts

> The Chart component is used to visualize data with user interaction and provides customization options to visually configure the data. It can bind data from datasources such as JSON object array and web services. All of the chart elements are rendered using Scalable Vector Graphics (SVG).

[![NPM](https://img.shields.io/npm/v/bk-react-charts.svg)](https://www.npmjs.com/package/bk-react-charts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save bk-react-charts
```

## Line Chart

### Source

```jsx
import React from 'react'
import Chart from 'bk-react-charts'

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

### Demo for Line Chart

![Line chart sample](https://raw.githubusercontent.com/PS-Bala/bk-react-charts/master/readme-assets/LineChart.png?token=AEL6G2HCVYA2MIPOYSVKDD27LSEOM)

## Pie Chart

```jsx
import React from 'react'
import Chart from 'bk-react-charts'

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

### Demo for Pie Chart

![Pie chart sample](https://raw.githubusercontent.com/PS-Bala/bk-react-charts/master/readme-assets/PieChart.png?token=AEL6G2FKWQN47FD6WIL3KZS7LSEUO)

## License

MIT © [PS-Bala](https://github.com/PS-Bala)
