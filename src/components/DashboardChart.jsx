import { ColorHEX, SolidFill, SolidLine, Themes, lightningChart } from '@arction/lcjs';
import React, { useEffect, useId, useState } from 'react'
const lc = lightningChart({
  // Valid until 1/31/2024
  license: "0002-n5lTV8LUoCASPW19aJudTTEPmg6cKwCYU27WzKE/BiVsYrAjRUjYm7J79qtc9tzZjvaZh6hyzwAlSMlt5bOiWWVy-MEUCIQCiB8nJUqVh6/L41KcsabvENh9ae+bdcHpQeMiYgyNbhAIgS/HPJZW+tOdYTqx5R8A3Hi+tPMpqL8b7iJzoKnIhEJE=",
  licenseInformation: {
      appTitle: "LightningChart JS Trial",
      company: "LightningChart Ltd."
  },
})
const chart = lc.ChartXY();

// Import xydata
const xydata = require('@arction/eventer/dist/')
// Extract required parts from xyData.
const { createProgressiveTraceGenerator } = xydata

const DashboardChart = () => {
    
      useEffect(() => {
      // Create a dashboard with three rows and two columns.
      const dashboard = lightningChart().Dashboard({
        numberOfRows: 3,
        numberOfColumns: 1,
        container : "dashboardChart"
      })


      // Create firstChart
      const firstChart = dashboard.createChart3D({
        // Row index (starting from bottom).
        columnIndex: 0,
        // Column index (starting from left).
        rowIndex: 0,


        // Row span (height, basically).
        // columnSpan: 1,
        // Column span (width, basically).
        // rowSpan: 2,
      }).setBoundingBox({ x: 1.0 , y: 0.2 , z: 1.0 }).setTitle('Live sales')

      const series1firstChart = firstChart.addLineSeries().setName("test1")
      const series2firstChart = firstChart.addLineSeries().setName("test2")
      const series3firstChart = firstChart.addLineSeries().setName("test3")

      series1firstChart.setStrokeStyle(
        new SolidLine({
          thickness: 10,
          fillStyle: new SolidFill({ color: ColorHEX('#F00') })
        })
      )
      series2firstChart.setStrokeStyle(
        new SolidLine({
          thickness: 10,
          fillStyle: new SolidFill({ color: ColorHEX('#000') })
        })
      )
      series3firstChart.setStrokeStyle(
        new SolidLine({
          thickness: 10,
          fillStyle: new SolidFill({ color: ColorHEX('#ccc') })
        })
      )


      series1firstChart.add([
        { x: 55, y: 60, z: 60 },
        { x: 60, y: 62, z: 50 },
        { x: 65, y: 65, z: 60 },

        { x: 55, y: 60, z: 10 },
        { x: 19, y: 94, z: 50 },
        { x: 73, y: 65, z: 60 },

        { x: 53, y: 36, z: 15 },
        { x: 23, y: 0, z: 43 },
        { x: 100, y: 78, z: 85 },
      ])
      series2firstChart.add([
        { x: 35, y: 61, z: 13 },
        { x: 45, y: 27, z: 50 },
        { x: 19, y: 26, z: 35 },
        { x: 35, y: 61, z: 13 },
        { x: 45, y: 27, z: 50 },
        { x: 19, y: 26, z: 35 },
        { x: 35, y: 61, z: 13 },
        { x: 45, y: 27, z: 50 },
        { x: 19, y: 26, z: 35 },
      ])
      series3firstChart.add([
        { x: 45, y: 27, z: 50 },
        { x: 60, y: 62, z: 50 },
        { x: 19, y: 26, z: 35 },
        { x: 35, y: 61, z: 13 },
        { x: 45, y: 27, z: 50 },
        { x: 19, y: 26, z: 35 },
        { x: 35, y: 61, z: 13 },
        { x: 45, y: 27, z: 50 },
        { x: 19, y: 26, z: 35 },
      ])




      // create secondChart
      const secondChart = dashboard.createChart3D({
        columnIndex: 0,
        rowIndex: 1
      })
      .setBoundingBox({ x: 1.0, y: 0.5, z: 0.4 })
      .setTitle('Live sales')

      // Set Axis titles
      secondChart.getDefaultAxisX().setTitle('Axis X')
      secondChart.getDefaultAxisY().setTitle('Axis Y')
      secondChart.getDefaultAxisZ().setTitle('Axis Z')

      // Define Series configuration for simplified example modification.
      const seriesConf = [
        {
            name: 'Series A',
            dataAmount: 50,
        },
        {
            name: 'Series B',
            dataAmount: 50,
        },
        {
            name: 'Series C',
            dataAmount: 50,
        },
      ]

      // Set X Axis interval immediately (before all data is streamed).

      secondChart.getDefaultAxisX().setInterval({ start: 0, end: seriesConf.reduce((prev, cur) => Math.max(prev, cur.dataAmount), 0) })

      // Set Z Axis interval immediately.
      secondChart.getDefaultAxisZ().setInterval({ start: -1, end: 1 + seriesConf.reduce((prev, cur, i) => Math.max(prev, i), 0) })

      // Create Series and generate test data.
      let totalDataAmount = 0
      seriesConf.forEach((conf, iSeries) => {
          const seriesName = conf.name || ''
          const seriesDataAmount = conf.dataAmount || 100
          const seriesZ = conf.z || iSeries

          const series = secondChart.addPointLineSeries().setName(seriesName)

          createProgressiveTraceGenerator()
              .setNumberOfPoints(seriesDataAmount)
              .generate()
              .toPromise()
              .then((data) => {
                  // Map XY data to XYZ data.
                  return data.map((xy) => ({
                      x: xy.x,
                      y: xy.y,
                      z: seriesZ,
                  }))
              })
              .then((data) => {
                  // Stream data into series very quickly.
                  setInterval(() => {
                      const batch = data.splice(0, 3)
                      if (batch.length > 0) {
                          series.add(batch)
                          totalDataAmount += batch.length
                          secondChart.setTitle(`3D Line Series (${totalDataAmount} data points)`)
                      }
                  }, 30)
              })
      })

      // const series1secondChart = secondChart.addLineSeries().setName("test1")
      // const series2secondChart = secondChart.addLineSeries().setName("test2")
      // const series3secondChart = secondChart.addLineSeries().setName("test3")
      // series1secondChart.setStrokeStyle(
      //   new SolidLine({
      //     thickness: 10,
      //     fillStyle: new SolidFill({ color: ColorHEX('#f6ff00') })
      //   })
      // )
      // series2secondChart.setStrokeStyle(
      //   new SolidLine({
      //     thickness: 10,
      //     fillStyle: new SolidFill({ color: ColorHEX('#1f06ff') })
      //   })
      // )
      // series3secondChart.setStrokeStyle(
      //   new SolidLine({
      //     thickness: 10,
      //     fillStyle: new SolidFill({ color: ColorHEX('#ffa4f0') })
      //   })
      // )

      // series1secondChart.add([
      //   { x: 55, y: 60, z: 60 },
      //   { x: 60, y: 62, z: 50 },
      //   { x: 65, y: 65, z: 60 },
      // ])
      // series2secondChart.add([
      //   { x: 35, y: 61, z: 13 },
      //   { x: 45, y: 27, z: 50 },
      //   { x: 19, y: 26, z: 35 },
      // ])
      // series3secondChart.add([
      //   { x: 45, y: 27, z: 50 },
      //   { x: 60, y: 62, z: 50 },
      //   { x: 19, y: 26, z: 35 },
      // ])


      // create thirdChart
      const thirdChart = dashboard.createChart3D({
        columnIndex: 0,
        rowIndex: 2
      }).setBoundingBox({ x: 1.0 , y: 0.2 , z: 1.0 }).setTitle('Live sales')

      const series1thirdChart = thirdChart.addLineSeries().setName("test1")
      const series2thirdChart = thirdChart.addLineSeries().setName("test2")
      const series3thirdChart = thirdChart.addLineSeries().setName("test3")
      series1thirdChart.setStrokeStyle(
        new SolidLine({
          thickness: 10,
          fillStyle: new SolidFill({ color: ColorHEX('#1eff00') })
        })
      )
      series2thirdChart.setStrokeStyle(
        new SolidLine({
          thickness: 10,
          fillStyle: new SolidFill({ color: ColorHEX('#f00') })
        })
      )
      series3thirdChart.setStrokeStyle(
        new SolidLine({
          thickness: 10,
          fillStyle: new SolidFill({ color: ColorHEX('#00a3ff') })
        })
      )
      series1thirdChart.add([
        { x: 55, y: 60, z: 60 },
        { x: 60, y: 62, z: 50 },
        { x: 65, y: 65, z: 60 },
      ])
      series2thirdChart.add([
        { x: 35, y: 61, z: 13 },
        { x: 45, y: 27, z: 50 },
        { x: 19, y: 26, z: 35 },
      ])
      series3thirdChart.add([
        { x: 45, y: 27, z: 50 },
        { x: 60, y: 62, z: 50 },
        { x: 19, y: 26, z: 35 },
      ])

      // for (let i = -5; i < 6 ; i++) {
      //   series1firstChart.add({x : 5 , y : Math.floor(Math.random()* (1 - -1 + 1) + -1) , z: -1})
      //   series2firstChart.add({x : 3 , y : Math.floor(Math.random()* (1 - -1 + 1) + -1) , z: 3})
      //   series3firstChart.add({x : 7 , y : Math.floor(Math.random()* (1 - -1 + 1) + -1) , z: 6})

      //   series1secondChart.add({x : 0 , y : Math.floor(Math.random()* (1 - -1 + 1) + -1) , z: -1})
      //   series2secondChart.add({x : 0 , y : Math.floor(Math.random()* (1 - -1 + 1) + -1) , z: -1})
      //   series3secondChart.add({x : 0 , y : Math.floor(Math.random()* (1 - -1 + 1) + -1) , z: -1})

      //   series1thirdChart.add({x : 0 , y : Math.floor(Math.random()* (1 - -1 + 1) + -1) , z: -1})
      //   series2thirdChart.add({x : 0 , y : Math.floor(Math.random()* (1 - -1 + 1) + -1) , z: -1})
      //   series3thirdChart.add({x : 0 , y : Math.floor(Math.random()* (1 - -1 + 1) + -1) , z: -1})
      // }

      
    }, []);
  
  
    return <div id='dashboardChart' style={{ width: "100%", height: "100vh" }}></div>;
}

export default DashboardChart