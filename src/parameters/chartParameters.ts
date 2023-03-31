import { CerealValueParameterName } from '@/parameters/cerealParameters'

import { LayoutPosition } from 'chart.js'

import type { ChartOptions } from 'chart.js'

export const getChartOptions = (
  xCerealParameter: CerealValueParameterName,
  yCerealParameter: CerealValueParameterName
): ChartOptions => {
  const position: LayoutPosition = 'bottom'
  return {
    plugins: {
      legend: {
        position: position,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: xCerealParameter,
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: { top: 20, bottom: 0 },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: yCerealParameter,
          font: {
            size: 20,
            weight: 'bold',
            lineHeight: 1.2,
          },
          padding: { top: 20, bottom: 0 },
        },
      },
    },
  }
}
