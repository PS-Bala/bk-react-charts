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
          name: 'India'
          // marker: { dataLabel: { visible: true } },
        },
        {
          data: data2,
          name: 'U.S'
          // marker: { dataLabel: { visible: true } },
        },
        {
          data: data3,
          name: 'Japan'
          // marker: { dataLabel: { visible: true } },
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
