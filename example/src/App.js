import React from 'react'
import BarChartSample from './BarChartSample'
import DataSourceSample from './DataSourceSample'
import PieChartSample from './PieChartSample'
import styles from './App.module.css'

const App = () => {
  return (
    <>
      <div className={styles.sampleWrapper}>
        <DataSourceSample />
        <br />
        <br />
        <br />
        <PieChartSample />
        <br />
        <br />
        <BarChartSample />
      </div>
    </>
  )
}

export default App
