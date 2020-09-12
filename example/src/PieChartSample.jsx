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
