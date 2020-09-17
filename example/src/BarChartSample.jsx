import React from 'react'
import Chart from 'bk-react-charts'

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
