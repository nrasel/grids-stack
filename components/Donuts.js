import React, { useState } from 'react'
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

function Donuts() {
    const [donuts,setdonuts]=useState({
        series: [44, 55, 41, 17, 15],
            options: {
              chart: {
                type: 'donut',
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
    })
  return (
    <div>
        <ReactApexChart  options={donuts.options} series={donuts.series} type="donut" />
    </div>
  )
}

export default Donuts