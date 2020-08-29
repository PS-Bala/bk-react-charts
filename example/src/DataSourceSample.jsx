import React from 'react'
import Chart from 'bk-react-charts'

function DataSourceSample() {
  let data = [
    { month: 'Jan', sales: 35 },
    { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 },
    { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 },
    { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 },
    { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 },
    { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 },
    { month: 'Dec', sales: 32 }
  ]
  let data2 = [
    { month: 'Jan', sales: 45 },
    { month: 'Feb', sales: 21 },
    { month: 'Mar', sales: 43 },
    { month: 'Apr', sales: 23 },
    { month: 'May', sales: 50 },
    { month: 'Jun', sales: 22 },
    { month: 'Jul', sales: 25 },
    { month: 'Aug', sales: 45 },
    { month: 'Sep', sales: 48 },
    { month: 'Oct', sales: 40 },
    { month: 'Nov', sales: 30 },
    { month: 'Dec', sales: 51 }
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
          name: 'Japan'
        }
      ]}
      xName='month'
      yName='sales'
      title='Sales Analysis'
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
